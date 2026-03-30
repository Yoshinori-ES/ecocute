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

// ===== サイトマップ XML =====
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://estech-ecocute.pages.dev'
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
