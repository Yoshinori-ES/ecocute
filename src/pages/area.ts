import type { Context } from 'hono'
import { layout } from './layout'

export const areaPage = (c: Context) => {
  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto"><a href="/" class="hover:text-orange-500">トップ</a> &gt; <span class="text-gray-700 font-medium">対応エリア</span></div>
</nav>

<section class="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2"><i class="fas fa-map-marked-alt mr-2"></i>対応エリア</h1>
    <p class="text-green-100 text-sm">袋井市を拠点に、静岡県西部〜中部エリアを広くカバーしています。</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- エリア一覧 -->
      <div>
        <h2 class="text-xl font-black mb-4">対応市町一覧</h2>
        <div class="space-y-3">
          <!-- 拠点 -->
          <div class="bg-orange-50 rounded-xl border-2 border-orange-200 p-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center"><i class="fas fa-map-pin"></i></div>
              <div>
                <h3 class="font-bold text-lg">袋井市<span class="text-xs text-orange-500 ml-2">（本社拠点）</span></h3>
                <p class="text-xs text-gray-500">エコキュートの交換・修理・新規導入に対応</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">磐田市</h3><p class="text-xs text-gray-500">袋井市の東隣。迅速に対応可能です。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">掛川市</h3><p class="text-xs text-gray-500">袋井市の西隣。多数の施工実績があります。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">森町</h3><p class="text-xs text-gray-500">山間部も含め対応いたします。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">浜松市</h3><p class="text-xs text-gray-500">天竜区・北区を含む広域に対応。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">菊川市</h3><p class="text-xs text-gray-500">掛川市経由でスムーズに対応。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">御前崎市</h3><p class="text-xs text-gray-500">海沿いの地域もお任せください。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">牧之原市</h3><p class="text-xs text-gray-500">静岡空港周辺エリアも対応。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">島田市</h3><p class="text-xs text-gray-500">中部エリアまでカバー。</p></div>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 card-hover">
            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"><i class="fas fa-map-marker-alt text-gray-400"></i></div>
            <div><h3 class="font-bold">吉田町</h3><p class="text-xs text-gray-500">榛原郡吉田町も対応範囲。</p></div>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-3">※上記以外のエリアも対応可能な場合がございます。お気軽にお問い合わせください。</p>
      </div>

      <!-- Googleマップ -->
      <div>
        <h2 class="text-xl font-black mb-4">対応エリアマップ</h2>
        <div class="rounded-xl overflow-hidden shadow-sm border border-gray-200 sticky top-32">
          <iframe 
            src="https://maps.google.com/maps?q=%E9%9D%99%E5%B2%A1%E7%9C%8C%E8%A2%8B%E4%BA%95%E5%B8%82%E5%B1%B1%E7%A7%913229%E7%95%AA%E5%9C%B0%E3%81%AE1&t=m&z=11&output=embed&hl=ja" 
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            title="対応エリアマップ - 袋井市山科を中心に半径約50km">
          </iframe>
          <div class="bg-white p-4">
            <p class="text-sm font-bold"><i class="fas fa-building text-sky-500 mr-1"></i>本社：静岡県袋井市山科3229番地の1</p>
            <p class="text-xs text-gray-500 mt-1">袋井市を中心に半径約50kmをカバー</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 出張費案内 -->
<section class="py-8 px-4 bg-amber-50 section-fade">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-lg font-black mb-3"><i class="fas fa-truck text-amber-500 mr-2"></i>出張費について</h2>
    <p class="text-sm text-gray-600">出張費は<strong class="text-lg text-amber-600">2,000円〜</strong>となります。エリアにより異なりますので、お電話の際にご確認ください。<br>お見積りは<strong>0円</strong>です。</p>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">対応エリア内なら迅速に駆けつけます</h2>
    <p class="text-green-200 text-sm mb-5">袋井市拠点だから近い・早い・安心</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all active:scale-95">
      <i class="fas fa-phone-alt"></i>050-1720-1813
    </a>
  </div>
</section>
`

  return c.html(layout({
    title: '対応エリア｜袋井市・磐田市・掛川市・浜松市ほか10市町｜エコキュート専門店',
    description: '袋井市を拠点にエコキュートの交換・修理に対応。袋井市・磐田市・掛川市・森町・浜松市・菊川市・御前崎市・牧之原市・島田市・吉田町の10市町をカバー。出張費2,000円〜。',
    canonical: 'https://estech-ecocute.pages.dev/area'
  }, content))
}
