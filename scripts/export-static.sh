#!/bin/bash
# ヘテムル用 静的HTML書き出しスクリプト
# 使い方: npm run build → pm2 でサーバー起動済みの状態で
#   bash scripts/export-static.sh
# 出力: static-export/ と static-export-heteml.zip
#
# ・ドメインは src/config.ts の SITE_URL で管理（ここでは変換しない）
# ・内部リンクは末尾スラッシュ付き（/leak → /leak/）に変換（ヘテムル対応）
# ・.htaccess は scripts/htaccess.template を使用

set -euo pipefail
cd "$(dirname "$0")/.."

BASE="http://localhost:3000"
OUT="static-export"

curl -sf "$BASE/api/health" > /dev/null || { echo "❌ サーバーが起動していません（pm2 start ecosystem.config.cjs）"; exit 1; }

rm -rf "$OUT" && mkdir -p "$OUT"

SITE_URL=$(curl -s "$BASE/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+' | head -1 | sed 's|/$||')
PATHS=$(curl -s "$BASE/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+' | sed "s|^$SITE_URL||")

count=0
for p in $PATHS; do
  if [ -z "$p" ] || [ "$p" = "/" ]; then
    dest="$OUT/index.html"; url="$BASE/"
  else
    mkdir -p "$OUT$p"; dest="$OUT$p/index.html"; url="$BASE$p"
  fi
  curl -sf "$url" > "$dest" || { echo "❌ 取得失敗: $p"; exit 1; }
  count=$((count + 1))
done

# 内部リンクに末尾スラッシュを付与（/static・ファイル・アンカー・ルートは除外）
find "$OUT" -name index.html -print0 | xargs -0 perl -pi -e 's{href="(/(?!static/)[a-z0-9\-/]*[a-z0-9\-])"}{href="$1/"}g'

# 静的ファイル
cp -r public/static "$OUT/"
curl -s "$BASE/sitemap.xml" > "$OUT/sitemap.xml"
curl -s "$BASE/robots.txt"  > "$OUT/robots.txt"
curl -s "$BASE/llms.txt"    > "$OUT/llms.txt"
cp public/static/favicon.ico "$OUT/favicon.ico"
cp scripts/htaccess.template "$OUT/.htaccess"

# 検査
fail=0
empty=$(find "$OUT" -name index.html -size -2k | wc -l || true)
[ "$empty" -gt 0 ] && { echo "❌ 中身が空に近いHTML: $empty 件"; fail=1; }
other=$(grep -rlE "https?://(estech-ecocute\.pages\.dev|localhost)" "$OUT" --include=*.html --include=*.xml --include=*.txt | wc -l || true)
[ "$other" -gt 0 ] && { echo "❌ 本番以外のドメインが残存: $other ファイル"; fail=1; }
noslash=$(grep -rhoE 'href="/(leak|flow|area|guide|company|subsidy|warranty|error-codes)[a-z0-9/-]*[a-z0-9-]"' "$OUT" | wc -l || true)
[ "$noslash" -gt 0 ] && { echo "❌ 末尾スラッシュ無しの内部リンク: $noslash 件"; fail=1; }
[ "$fail" -ne 0 ] && exit 1

rm -f static-export-heteml.zip
(cd "$OUT" && zip -rq ../static-export-heteml.zip .)

echo "✅ 書き出し完了: ${count} ページ / ドメイン ${SITE_URL}"
echo "   zip: $(ls -lh static-export-heteml.zip | awk '{print $5}')"
