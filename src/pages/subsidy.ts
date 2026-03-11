import type { Context } from 'hono'
import { layout } from './layout'

export const subsidyPage = (c: Context) => {
  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto"><a href="/" class="hover:text-orange-500">トップ</a> &gt; <span class="text-gray-700 font-medium">補助金について</span></div>
</nav>

<section class="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center gap-3 mb-2">
      <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
        <i class="fas fa-yen-sign text-2xl"></i>
      </div>
      <div>
        <span class="text-xs bg-white/20 px-2 py-0.5 rounded-full">2026年最新情報</span>
        <h1 class="text-2xl md:text-3xl font-black mt-1">給湯省エネ2026事業（補助金）</h1>
      </div>
    </div>
    <p class="text-green-100 text-sm">エコキュートの交換・導入で<strong class="text-yellow-300 text-lg">最大12万円</strong>の国の補助金が使えます。当店は補助金申請対応の登録事業者です。</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-4xl mx-auto space-y-10">

    <!-- 補助金額 -->
    <div>
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-green-600 rounded-full"></span>補助金額</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-green-50 rounded-2xl border-2 border-green-200 p-6 text-center">
          <div class="text-sm text-green-600 font-bold mb-1">基本要件を満たす機種</div>
          <div class="text-4xl font-black text-green-700">7<span class="text-lg">万円</span></div>
          <p class="text-xs text-gray-500 mt-2">2025年度の省エネ基準を満たすエコキュート</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-emerald-300 p-6 text-center relative">
          <span class="absolute -top-2 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">おすすめ</span>
          <div class="text-sm text-emerald-600 font-bold mb-1">性能加算要件を満たす機種</div>
          <div class="text-4xl font-black text-emerald-700">10<span class="text-lg">万円</span></div>
          <p class="text-xs text-gray-500 mt-2">省エネ基準値+0.2以上の高効率機種</p>
        </div>
      </div>
      
      <!-- 加算額 -->
      <div class="mt-4 bg-amber-50 rounded-xl border border-amber-200 p-5">
        <h3 class="font-bold text-sm mb-3"><i class="fas fa-plus-circle text-amber-500 mr-1"></i>さらに加算される場合</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div class="flex items-center gap-3 bg-white rounded-lg p-3 border border-amber-100">
            <div class="text-2xl font-black text-amber-600">+2<span class="text-sm">万円</span></div>
            <div class="text-xs text-gray-600">電気温水器からの交換</div>
          </div>
          <div class="flex items-center gap-3 bg-white rounded-lg p-3 border border-amber-100">
            <div class="text-2xl font-black text-amber-600">+4<span class="text-sm">万円</span></div>
            <div class="text-xs text-gray-600">蓄熱暖房機の撤去</div>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2 flex items-start gap-1">
          <i class="fas fa-calculator text-amber-400 mt-0.5"></i>
          例：高効率機種（10万円）＋電気温水器撤去（2万円）＝ <strong class="text-amber-700">最大12万円</strong>
        </p>
      </div>
    </div>

    <!-- 対象条件 -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-sky-600 rounded-full"></span>対象となる条件</h2>
      <div class="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-calendar text-sky-500"></i></div>
          <div>
            <div class="font-bold text-sm">工事着手日</div>
            <p class="text-xs text-gray-500">2025年11月28日以降に工事に着手したもの</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-home text-sky-500"></i></div>
          <div>
            <div class="font-bold text-sm">対象者</div>
            <p class="text-xs text-gray-500">高効率給湯器を導入するすべての世帯（戸建て・マンション問わず）</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-check-circle text-sky-500"></i></div>
          <div>
            <div class="font-bold text-sm">対象製品</div>
            <p class="text-xs text-gray-500">国が定めた省エネ基準を満たすエコキュート（対象製品リストあり）</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-store text-sky-500"></i></div>
          <div>
            <div class="font-bold text-sm">登録事業者による施工</div>
            <p class="text-xs text-gray-500">住宅省エネ支援事業者（登録済み業者）を通じて申請が必要です</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 当店で申請する流れ -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-orange-500 rounded-full"></span>当店で補助金を使う流れ</h2>
      <div class="bg-orange-50 rounded-xl border border-orange-200 p-5">
        <ol class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
            <div>
              <div class="font-bold text-sm">当店にご相談</div>
              <p class="text-xs text-gray-500">補助金対象の機種や適用条件をご案内します</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
            <div>
              <div class="font-bold text-sm">対象製品の選定・お見積り</div>
              <p class="text-xs text-gray-500">補助金が使える機種の中から、ご家庭に最適な製品をご提案</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
            <div>
              <div class="font-bold text-sm">施工・補助金申請</div>
              <p class="text-xs text-gray-500">施工完了後、当店が代行して補助金申請を行います</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
            <div>
              <div class="font-bold text-sm">補助金受領</div>
              <p class="text-xs text-gray-500">審査後、お客様の口座に補助金が振り込まれます</p>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <!-- 注意事項 -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-red-500 rounded-full"></span>ご注意ください</h2>
      <div class="bg-red-50 rounded-xl border border-red-200 p-5 space-y-2 text-sm">
        <div class="flex items-start gap-2"><i class="fas fa-exclamation-circle text-red-500 mt-0.5"></i>予算上限に達し次第、受付終了となります（早い者勝ち）</div>
        <div class="flex items-start gap-2"><i class="fas fa-exclamation-circle text-red-500 mt-0.5"></i>給湯省エネ2024事業で補助金を受けた機器は対象外</div>
        <div class="flex items-start gap-2"><i class="fas fa-exclamation-circle text-red-500 mt-0.5"></i>他の国の補助制度との重複利用は原則不可</div>
        <div class="flex items-start gap-2"><i class="fas fa-exclamation-circle text-red-500 mt-0.5"></i>登録事業者を通さない施工は対象外</div>
      </div>
      <p class="text-xs text-gray-400 mt-2">※最新情報は<a href="https://kyutou-shoene2026.meti.go.jp/" target="_blank" rel="noopener" class="text-blue-500 underline">給湯省エネ2026事業 公式サイト</a>をご確認ください。</p>
    </div>

    <!-- 取扱メーカー -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-purple-500 rounded-full"></span>補助金対応取扱メーカー</h2>
      <div class="flex flex-wrap gap-3">
        <div class="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-2"><i class="fas fa-industry text-red-500"></i><span class="font-bold">三菱電機</span></div>
        <div class="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-2"><i class="fas fa-industry text-red-600"></i><span class="font-bold">HITACHI</span></div>
        <div class="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-2"><i class="fas fa-industry text-red-700"></i><span class="font-bold">TOSHIBA</span></div>
        <div class="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-2"><i class="fas fa-industry text-blue-600"></i><span class="font-bold">DAIKIN</span></div>
        <div class="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-2"><i class="fas fa-industry text-blue-700"></i><span class="font-bold">CORONA</span></div>
      </div>
      <p class="text-xs text-gray-500 mt-2">各メーカーの補助金対象モデルからご提案いたします。</p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-2">補助金を使ってお得にエコキュート交換</h2>
    <p class="text-green-200 text-sm mb-5">「うちは対象？」「いくら安くなる？」まずはお気軽にご相談ください</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all active:scale-95">
      <i class="fas fa-phone-alt"></i>050-1720-1813
    </a>
    <p class="text-xs text-green-300 mt-3">対話型AIが受付 → 担当者がご案内します</p>
  </div>
</section>
`

  return c.html(layout({
    title: '給湯省エネ2026事業｜エコキュート補助金 最大12万円｜袋井市のエコキュート専門店',
    description: '2026年もエコキュート交換に使える国の補助金「給湯省エネ2026事業」を解説。基本7万円・高効率機種10万円＋加算あり。最大12万円。袋井市の登録事業者が申請代行。',
    canonical: 'https://estech-ecocute.pages.dev/subsidy'
  }, content))
}
