// 共通レイアウト - 全ページの共通HTML構造
// SEO + 構造化データ + スマホファースト設計

interface LayoutOptions {
  title: string
  description: string
  canonical: string
  ogType?: string
  bodyClass?: string
  structuredData?: object
}

// CTAフローティングバー（全ページ共通 スマホ下部固定）
const floatingCTA = `
<!-- フローティングCTA -->
<div id="floating-cta" class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-orange-400 shadow-2xl py-2 px-3 md:hidden">
  <div class="flex items-center justify-between gap-2 max-w-md mx-auto">
    <a href="tel:05017201813" class="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 rounded-xl text-sm shadow-lg active:scale-95 transition-transform">
      <i class="fas fa-phone-alt text-xs"></i>
      <span>電話する</span>
      
    </a>
    <a href="mailto:kaden@estech.info" class="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-lg active:scale-95 transition-transform">
      <i class="fas fa-envelope text-xs"></i>
      <span>メール</span>
    </a>
  </div>
</div>
`

// ヘッダーナビゲーション
const header = `
<header class="bg-white shadow-sm sticky top-0 z-40">
  <div class="max-w-6xl mx-auto">
    <!-- トップバー -->
    <div class="bg-gradient-to-r from-sky-700 to-sky-800 text-white text-xs py-1 px-4 flex justify-between items-center">
      <span><i class="fas fa-clock mr-1"></i>営業時間 8:30〜17:30（平日）</span>
      <span class="hidden sm:inline"><i class="fas fa-map-marker-alt mr-1"></i>静岡県袋井市山科3229-1</span>
    </div>
    <!-- メインヘッダー -->
    <div class="flex items-center justify-between px-4 py-2">
      <a href="/" class="flex items-center gap-2">
        <div class="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shadow">
          <i class="fas fa-fire text-white text-base"></i>
        </div>
        <div class="leading-tight">
          <div class="text-[10px] text-sky-700 font-bold tracking-wider">袋井市のエコキュート専門店</div>
          <div class="text-sm font-extrabold text-gray-800">地域のエコキュート専門店</div>
        </div>
      </a>
      <div class="hidden md:flex items-center gap-3">
        <a href="tel:05017201813" class="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
          <i class="fas fa-phone-alt"></i>
          <div class="leading-tight">
            <div class="text-[10px]">時間外も受付対応</div>
            <div class="text-base tracking-wide">050-1720-1813</div>
          </div>
        </a>
      </div>
      <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="md:hidden text-gray-600 text-xl p-2">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <!-- モバイルメニュー -->
    <nav id="mobile-menu" class="hidden md:hidden border-t bg-white px-4 pb-3">
      <ul class="space-y-0 divide-y divide-gray-100 text-sm">
        <li><a href="/" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-home w-5 text-center text-orange-400"></i>トップ</a></li>
        <li><a href="/leak" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-tint w-5 text-center text-blue-400"></i>漏水・故障でお困りの方</a></li>
        <li><a href="/error-codes" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-exclamation-triangle w-5 text-center text-red-400"></i>エラーコード一覧</a></li>
        <li><a href="/subsidy" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-yen-sign w-5 text-center text-green-500"></i>補助金について</a></li>
        <li><a href="/flow" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-clipboard-list w-5 text-center text-sky-400"></i>ご依頼の流れ</a></li>
        <li><a href="/area" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-map-marked-alt w-5 text-center text-green-400"></i>対応エリア</a></li>
        <li><a href="/company" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-building w-5 text-center text-gray-400"></i>会社概要・資格</a></li>
        <li><a href="/guide" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-book-open w-5 text-center text-purple-400"></i>お役立ちガイド</a></li>
        <li><a href="/warranty" class="flex items-center gap-2 py-3 text-gray-700 hover:text-orange-600"><i class="fas fa-shield-alt w-5 text-center text-green-500"></i>保証規定</a></li>
      </ul>
    </nav>
    <!-- デスクトップナビ -->
    <nav class="hidden md:block border-t bg-gray-50">
      <ul class="flex justify-center gap-0 text-sm">
        <li><a href="/" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">トップ</a></li>
        <li><a href="/leak" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">漏水・故障</a></li>
        <li><a href="/error-codes" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">エラーコード</a></li>
        <li><a href="/subsidy" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">補助金</a></li>
        <li><a href="/flow" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">ご依頼の流れ</a></li>
        <li><a href="/area" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">対応エリア</a></li>
        <li><a href="/company" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">会社概要</a></li>
        <li><a href="/guide" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">お役立ちガイド</a></li>
        <li><a href="/warranty" class="block px-4 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium">保証規定</a></li>
      </ul>
    </nav>
  </div>
</header>
`

// フッター
const footer = `
<footer class="bg-gray-800 text-gray-300 mt-12">
  <div class="max-w-6xl mx-auto px-4 py-10">
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
            <i class="fas fa-fire text-white text-sm"></i>
          </div>
          <span class="font-bold text-white">地域のエコキュート専門店</span>
        </div>
        <p class="text-sm text-gray-400">株式会社イーエス・テック</p>
        <p class="text-sm text-gray-400 mt-1">〒437-0066 静岡県袋井市山科3229番地の1</p>
        <p class="text-sm text-gray-400 mt-1">設立 2004年1月</p>
      </div>
      <div>
        <h3 class="font-bold text-white mb-3">お問い合わせ</h3>
        <ul class="space-y-2 text-sm">
          <li><i class="fas fa-phone-alt w-5 text-orange-400"></i>TEL: <a href="tel:05017201813" class="hover:text-orange-400">050-1720-1813</a><span class="text-xs text-gray-500 ml-1">（時間外も受付対応）</span></li>
          <li><i class="fas fa-fax w-5 text-blue-400"></i>FAX: 050-1808-3052</li>
          <li><i class="fas fa-envelope w-5 text-green-400"></i>Mail: <a href="mailto:kaden@estech.info" class="hover:text-orange-400">kaden@estech.info</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold text-white mb-3">サイトマップ</h3>
        <ul class="space-y-1.5 text-sm">
          <li><a href="/" class="hover:text-orange-400 transition-colors">トップページ</a></li>
          <li><a href="/leak" class="hover:text-orange-400 transition-colors">漏水・故障でお困りの方</a></li>
          <li><a href="/error-codes" class="hover:text-orange-400 transition-colors">エラーコード一覧</a></li>
          <li><a href="/subsidy" class="hover:text-orange-400 transition-colors">補助金について</a></li>
          <li><a href="/flow" class="hover:text-orange-400 transition-colors">ご依頼の流れ</a></li>
          <li><a href="/area" class="hover:text-orange-400 transition-colors">対応エリア</a></li>
          <li><a href="/company" class="hover:text-orange-400 transition-colors">会社概要・資格一覧</a></li>
          <li><a href="/guide" class="hover:text-orange-400 transition-colors">お役立ちガイド</a></li>
          <li><a href="/warranty" class="hover:text-orange-400 transition-colors">保証規定</a></li>
      </div>
    </div>

    <!-- ロングテールSEO内部リンク集 -->
    <div class="border-t border-gray-700 mt-8 pt-6">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs text-gray-400">
        <div>
          <h4 class="text-gray-300 font-bold mb-2">エリア別エコキュート</h4>
          <ul class="space-y-1">
            <li><a href="/area/fukuroi/ecocute" class="hover:text-orange-400">袋井市 エコキュート</a></li>
            <li><a href="/area/iwata/ecocute" class="hover:text-orange-400">磐田市 エコキュート</a></li>
            <li><a href="/area/kakegawa/ecocute" class="hover:text-orange-400">掛川市 エコキュート</a></li>
            <li><a href="/area/hamamatsu/ecocute" class="hover:text-orange-400">浜松市 エコキュート</a></li>
            <li><a href="/area/morimachi/ecocute" class="hover:text-orange-400">森町 エコキュート</a></li>
            <li><a href="/area/kikugawa/ecocute" class="hover:text-orange-400">菊川市 エコキュート</a></li>
            <li><a href="/area/omaezaki/ecocute" class="hover:text-orange-400">御前崎市 エコキュート</a></li>
            <li><a href="/area/makinohara/ecocute" class="hover:text-orange-400">牧之原市 エコキュート</a></li>
            <li><a href="/area/shimada/ecocute" class="hover:text-orange-400">島田市 エコキュート</a></li>
            <li><a href="/area/yoshida/ecocute" class="hover:text-orange-400">吉田町 エコキュート</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-gray-300 font-bold mb-2">エリア別給湯器・ボイラー</h4>
          <ul class="space-y-1">
            <li><a href="/area/fukuroi/kyutouki" class="hover:text-orange-400">袋井市 給湯器</a></li>
            <li><a href="/area/iwata/kyutouki" class="hover:text-orange-400">磐田市 給湯器</a></li>
            <li><a href="/area/kakegawa/kyutouki" class="hover:text-orange-400">掛川市 給湯器</a></li>
            <li><a href="/area/hamamatsu/kyutouki" class="hover:text-orange-400">浜松市 給湯器</a></li>
            <li><a href="/area/fukuroi/boiler" class="hover:text-orange-400">袋井市 ボイラー</a></li>
            <li><a href="/area/iwata/boiler" class="hover:text-orange-400">磐田市 ボイラー</a></li>
            <li><a href="/area/kakegawa/boiler" class="hover:text-orange-400">掛川市 ボイラー</a></li>
            <li><a href="/area/hamamatsu/boiler" class="hover:text-orange-400">浜松市 ボイラー</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-gray-300 font-bold mb-2">お役立ちガイド</h4>
          <ul class="space-y-1">
            <li><a href="/guide/kosho" class="hover:text-orange-400">エコキュート 故障</a></li>
            <li><a href="/guide/shuri" class="hover:text-orange-400">エコキュート 修理</a></li>
            <li><a href="/guide/koukan-hiyo" class="hover:text-orange-400">エコキュート 交換費用</a></li>
            <li><a href="/guide/jumyo" class="hover:text-orange-400">エコキュート 寿命</a></li>
            <li><a href="/guide/oyuga-denai" class="hover:text-orange-400">エコキュート お湯が出ない</a></li>
            <li><a href="/error-codes" class="hover:text-orange-400">エコキュート エラーコード</a></li>
            <li><a href="/leak" class="hover:text-orange-400">エコキュート 水漏れ</a></li>
            <li><a href="/subsidy" class="hover:text-orange-400">エコキュート 補助金 2026</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
      <p>袋井市指定給水装置工事事業者 ／ 電気工事業（静岡県知事届出第700494号）</p>
      <p class="mt-2">&copy; 2004-2026 株式会社イーエス・テック All Rights Reserved.</p>
    </div>
  </div>
  <!-- スマホフローティングCTA分のスペース -->
  <div class="h-16 md:hidden"></div>
</footer>
`

export function layout(options: LayoutOptions, content: string): string {
  const { title, description, canonical, ogType = 'website', structuredData } = options
  
  const structuredDataScript = structuredData
    ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
    : ''

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>" type="image/svg+xml">
  
  <!-- OGP -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="地域のエコキュート専門店｜株式会社イーエス・テック">
  <meta property="og:locale" content="ja_JP">
  
  <!-- CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
  
  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: { 50:'#fff7ed', 100:'#ffedd5', 200:'#fed7aa', 300:'#fdba74', 400:'#fb923c', 500:'#f97316', 600:'#ea580c', 700:'#c2410c' },
            trust: { 50:'#f0f9ff', 100:'#e0f2fe', 500:'#0ea5e9', 600:'#0284c7', 700:'#0369a1', 800:'#075985' }
          },
          fontFamily: {
            sans: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', 'Meiryo', 'sans-serif']
          }
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">

  <!-- 構造化データ -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name":"地域のエコキュート専門店（株式会社イーエス・テック）",
    "image":"",
    "telephone":"050-1720-1813",
    "email":"kaden@estech.info",
    "faxNumber":"050-1808-3052",
    "address":{
      "@type":"PostalAddress",
      "streetAddress":"山科3229番地の1",
      "addressLocality":"袋井市",
      "addressRegion":"静岡県",
      "postalCode":"437-0066",
      "addressCountry":"JP"
    },
    "geo":{
      "@type":"GeoCoordinates",
      "latitude":34.7465,
      "longitude":137.9256
    },
    "url":"https://estech-ecocute.pages.dev",
    "openingHours":"Mo-Fr 08:30-17:30",
    "areaServed":[
      {"@type":"City","name":"袋井市"},
      {"@type":"City","name":"磐田市"},
      {"@type":"City","name":"掛川市"},
      {"@type":"City","name":"浜松市"},
      {"@type":"City","name":"森町"},
      {"@type":"City","name":"菊川市"},
      {"@type":"City","name":"御前崎市"},
      {"@type":"City","name":"牧之原市"},
      {"@type":"City","name":"島田市"},
      {"@type":"City","name":"吉田町"}
    ],
    "priceRange":"¥",
    "description":"静岡県袋井市のエコキュート専門店。交換・修理・新規導入はお任せください。お電話でスムーズに受付。有資格者多数在籍。給湯省エネ2026事業（補助金）対応。"
  }
  </script>
  ${structuredDataScript}

  <style>
    * { -webkit-tap-highlight-color: transparent; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
    @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:0.7} }
    .gradient-text { background: linear-gradient(135deg, #f97316, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .card-hover { transition: all 0.3s ease; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(0,0,0,0.1); }
    .section-fade { opacity: 0; transform: translateY(30px); transition: all 0.6s ease-out; }
    .section-fade.visible { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 ${options.bodyClass || ''}">
  ${header}
  <main>
    ${content}
  </main>
  ${footer}
  ${floatingCTA}

  <script>
    // セクションフェードインアニメーション
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
  </script>
</body>
</html>`
}
