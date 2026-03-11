import { Hono } from 'hono'
import { topPage } from './pages/top'
import { leakPage } from './pages/leak'
import { errorCodesPage } from './pages/error-codes'
import { companyPage } from './pages/company'
import { flowPage } from './pages/flow'
import { areaPage } from './pages/area'
import { subsidyPage } from './pages/subsidy'

const app = new Hono()

// ===== ページルート =====
app.get('/', topPage)
app.get('/leak', leakPage)
app.get('/error-codes', errorCodesPage)
app.get('/company', companyPage)
app.get('/flow', flowPage)
app.get('/area', areaPage)
app.get('/subsidy', subsidyPage)

// ===== API =====
app.get('/api/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

export default app
