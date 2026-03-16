#!/bin/bash
# ドメイン変換スクリプト
# 使い方: ./change-domain.sh 新しいドメイン名
# 例: ./change-domain.sh www.estech-ecocute.com

if [ -z "$1" ]; then
  echo "使い方: $0 新しいドメイン名"
  echo "例: $0 www.estech-ecocute.com"
  exit 1
fi

NEW_DOMAIN="$1"
OLD_DOMAIN="estech-ecocute.pages.dev"
DIR="static-export"

echo "🔄 ドメインを変換中: $OLD_DOMAIN → $NEW_DOMAIN"

# HTML ファイルの置換
count=0
for f in $(find "$DIR" -name "*.html" -o -name "*.xml"); do
  if grep -q "$OLD_DOMAIN" "$f"; then
    sed -i "s|$OLD_DOMAIN|$NEW_DOMAIN|g" "$f"
    count=$((count + 1))
  fi
done

echo "✅ $count ファイルを変換しました"
echo ""
echo "📋 確認:"
remaining=$(grep -rl "$OLD_DOMAIN" "$DIR" 2>/dev/null | wc -l)
echo "   残りの旧ドメイン参照: $remaining"
new_count=$(grep -rl "$NEW_DOMAIN" "$DIR" | wc -l)
echo "   新ドメイン参照ファイル数: $new_count"
