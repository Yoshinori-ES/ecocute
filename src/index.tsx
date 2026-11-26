import { Hono } from 'hono'
import { topPage } from './pages/top'
import { leakPage } from './pages/leak'
import { errorCodesPage } from './pages/error-codes'
import { companyPage } from './pages/company'
import { flowPage } from './pages/flow'
import { areaPage } from './pages/area'
import { subsidyPage } from './pages/subsidy'
import { createCityPageHandler, createCityIndexHandler, allCityRoutes, allCitySlugs } from './pages/area-city'
import { createTroublePageHandler, guideIndexHandler, allTroubleSlugs } from './pages/guide'
import { warrantyPage } from './pages/warranty'
import { SITE_URL, BUSINESS } from './config'

const app = new Hono()

// ===== 既存ページルート =====
app.get('/', topPage)
app.get('/leak', leakPage)
app.get('/error-codes', errorCodesPage)
app.get('/company', companyPage)
app.get('/flow', flowPage)
app.get('/area', areaPage)
app.get('/subsidy', subsidyPage)
app.get('/warranty', warrantyPage)

// ===== 都市別エリアページ（ロングテールSEO） =====
// /area/:city → 都市インデックス（3カテゴリへの導線）
for (const slug of allCitySlugs) {
  app.get(`/area/${slug}`, createCityIndexHandler(slug))
}
// /area/:city/:category → 都市×カテゴリ詳細ページ
// KW: {都市名}+エコキュート / {都市名}+給湯器 / {都市名}+ボイラー
for (const route of allCityRoutes) {
  app.get(route.path, createCityPageHandler(route.citySlug, route.categorySlug))
}

// ===== お役立ちガイド（トラブル系ロングテールSEO） =====
// /guide → ガイドTOPページ
app.get('/guide', guideIndexHandler)
// /guide/:slug → 各トラブルページ
// KW: エコキュート+故障 / エコキュート+修理 / エコキュート+交換費用 / エコキュート+寿命 / エコキュート+お湯が出ない
for (const slug of allTroubleSlugs) {
  app.get(`/guide/${slug}`, createTroublePageHandler(slug))
}

// ===== API =====
app.get('/api/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

// ===== robots.txt（検索エンジン・AI検索のクローラーを許可） =====
app.get('/robots.txt', (c) => c.text(`User-agent: *
Allow: /
Disallow: /api/

# AI検索・AIアシスタント（AIO対策：引用・紹介されやすくする）
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`))

// ===== llms.txt（AIに会社情報を正確に伝える要約ファイル） =====
app.get('/llms.txt', (c) => c.text(`# ${BUSINESS.brand}（${BUSINESS.company}）

> 静岡県袋井市を拠点とするエコキュート専門店。エコキュートの交換・修理・新規設置、給湯器交換、ボイラーからエコキュートへの切替えを行う。電気工事・給水装置工事の有資格者が自社で施工する。

## 基本情報
- 会社名: ${BUSINESS.company}（設立 2004年1月）
- 所在地: ${BUSINESS.fullAddress}
- 電話: ${BUSINESS.telephone}（営業時間外も受付）
- FAX: ${BUSINESS.fax}
- メール: ${BUSINESS.email}
- 営業時間: 平日 8:30〜17:30
- 対応エリア: 袋井市、磐田市、掛川市、浜松市、森町、菊川市、御前崎市、牧之原市、島田市、吉田町
- 許認可: 袋井市指定給水装置工事事業者、電気工事業（静岡県知事届出第700494号）

## 特徴
- お見積り0円、強引な営業なし
- 保証: 機器保証1年（メーカー保証に準ずる）、工事保証5年（施工不良による不具合を保証）
- 取扱メーカー: Panasonic、三菱電機、日立、東芝、ダイキン、コロナ、ノーリツ
- 補助金: 給湯省エネ2026事業（最大12万円）の申請に対応
- 支払い: 現金、銀行振込、クレジットカード（タッチ決済可）、交通系電子マネー、iD・QUICPay等の電子マネー、PayPay等のQRコード決済
- 出張費: 2,000円〜

## 主なページ
- [トップ](${SITE_URL}/): サービス概要・選ばれる理由・よくある質問
- [漏水・故障の応急処置](${SITE_URL}/leak): 水漏れ時の4ステップ
- [エラーコード一覧](${SITE_URL}/error-codes): メーカー7社のエラーコードと対処法
- [補助金](${SITE_URL}/subsidy): 給湯省エネ2026事業の条件と申請の流れ
- [ご依頼の流れ](${SITE_URL}/flow): 問い合わせから支払いまで9ステップ
- [対応エリア](${SITE_URL}/area)
- [会社概要・資格](${SITE_URL}/company)
- [保証規定](${SITE_URL}/warranty)
- [お役立ちガイド](${SITE_URL}/guide): 故障・修理・交換費用・寿命・お湯が出ないときの解説
`))

// ===== サイトマップ XML =====
app.get('/sitemap.xml', (c) => {
  const baseUrl = `${SITE_URL}`
  const now = new Date().toISOString().split('T')[0]
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/leak', priority: '0.8', changefreq: 'monthly' },
    { url: '/error-codes', priority: '0.8', changefreq: 'monthly' },
    { url: '/subsidy', priority: '0.8', changefreq: 'monthly' },
    { url: '/flow', priority: '0.7', changefreq: 'monthly' },
    { url: '/area', priority: '0.7', changefreq: 'monthly' },
    { url: '/company', priority: '0.6', changefreq: 'monthly' },
    { url: '/guide', priority: '0.7', changefreq: 'weekly' },
    { url: '/warranty', priority: '0.5', changefreq: 'yearly' }
  ]

  // ガイドページ
  const guidePages = allTroubleSlugs.map(slug => ({
    url: `/guide/${slug}`, priority: '0.7', changefreq: 'monthly' as const
  }))

  // 都市インデックス
  const cityIndexPages = allCitySlugs.map(slug => ({
    url: `/area/${slug}`, priority: '0.6', changefreq: 'monthly' as const
  }))

  // 都市×カテゴリ
  const cityDetailPages = allCityRoutes.map(r => ({
    url: r.path, priority: '0.6', changefreq: 'monthly' as const
  }))

  const allPages = [...staticPages, ...guidePages, ...cityIndexPages, ...cityDetailPages]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return c.text(xml, 200, { 'Content-Type': 'application/xml' })
})

export default app
