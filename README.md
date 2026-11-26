# 地域のエコキュート専門店 - サービスサイト

## プロジェクト概要
- **名称**: 地域のエコキュート専門店（株式会社イーエス・テック）
- **目的**: 静岡県袋井市周辺の一般家庭向け、エコキュート交換・修理の集客サイト
- **技術**: Hono + TypeScript + Tailwind CSS (CDN)。静的HTMLに書き出してヘテムルで公開
- **本番URL**: https://ecocute.estech.ltd
- **GitHub**: https://github.com/Yoshinori-ES/ecocute

## サイト構成（全54ページ）
| パス | 内容 |
|------|------|
| `/` | トップ（選ばれる理由・施工事例・お支払い方法・対応エリア・FAQ） |
| `/leak` | 漏水・故障の応急処置 |
| `/error-codes` | メーカー7社のエラーコード一覧 |
| `/subsidy` | 補助金（給湯省エネ2026事業） |
| `/flow` | ご依頼の流れ（9ステップ） |
| `/area` | 対応エリア（10市町） |
| `/area/{市町}` / `/area/{市町}/{ecocute,kyutouki,boiler}` | 地域別ページ（40ページ） |
| `/company` | 会社概要・資格 |
| `/guide` / `/guide/{slug}` | お役立ちガイド（故障・修理・交換費用・寿命・お湯が出ない） |
| `/warranty` | 保証規定（機器保証1年・工事保証5年） |
| `/sitemap.xml` `/robots.txt` `/llms.txt` | 検索エンジン・AI向けファイル |

## 集客対策（SEO・MEO・AIO・SNS）
### SEO（検索エンジン）
- 全ページ canonical を本番ドメインに統一（`src/config.ts` の `SITE_URL` で一元管理）
- パンくずの構造化データ（BreadcrumbList）を全ページ自動生成
- robots.txt・sitemap.xml・ファビコン・theme-color

### MEO（Googleマップ）
- 店舗情報の構造化データ（LocalBusiness）：住所・座標（国土地理院の住所検索による）・営業時間・対応エリア・支払い方法・提供サービス・創業年
- 住所表記をサイト全体で「〒437-0066 静岡県袋井市山科3229番地の1」に統一
- **サイト外で必要な作業**：Googleビジネスプロフィールの登録と、住所・電話番号・営業時間をサイトと完全に一致させること

### AIO（AI検索：ChatGPT・Gemini・Perplexity等）
- FAQの構造化データ（FAQPage）：画面に表示しているFAQと同じ内容
- `llms.txt`：会社情報・保証・対応エリア・支払い方法をAI向けに要約
- robots.txt で主要なAIクローラーを許可

### SNS
- OGP画像（1200×630、`public/static/images/ogp.jpg`）、X用カード（summary_large_image）
- 全ページ下部に LINE・X・Facebook のシェアボタン
- SNSやGoogleビジネスプロフィールのURLが決まったら `src/config.ts` の `sameAs` に追加する

## データ・設定
- データベースなし（全ページが静的コンテンツ）
- 会社情報・ドメイン：`src/config.ts`
- 画像：`public/static/images/`

## 開発・公開手順
```bash
npm run build
pm2 start ecosystem.config.cjs      # http://localhost:3000
npm run export:static                # static-export/ と static-export-heteml.zip を生成
```
- `static-export/` の中身をヘテムルにFTPでアップロード（`.htaccess` を含む）
- 書き出しスクリプトは、ドメイン違い・末尾スラッシュ抜け・空ページを検出すると止まる

## 今後の課題
- Googleビジネスプロフィールの登録・口コミ集め（MEOで最も効果が大きい）
- 施工事例を実際の写真で増やす（現在の写真はイメージ）
- 口コミ・お客様の声の掲載
- Tailwind CDN をビルド版に置き換えて表示速度を改善

## 更新日
2026-11-26
