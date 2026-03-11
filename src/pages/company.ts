import type { Context } from 'hono'
import { layout } from './layout'

export const companyPage = (c: Context) => {
  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto"><a href="/" class="hover:text-orange-500">トップ</a> &gt; <span class="text-gray-700 font-medium">会社概要・資格一覧</span></div>
</nav>

<section class="bg-gradient-to-r from-sky-700 to-sky-800 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2"><i class="fas fa-building mr-2"></i>会社概要・資格一覧</h1>
    <p class="text-sky-100 text-sm">創業22年。15種類以上の専門資格と各種許認可で、安心・安全の施工をお約束します。</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-4xl mx-auto space-y-10">
    <!-- 会社概要テーブル -->
    <div>
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-sky-600 rounded-full"></span>会社概要</h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-100">
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold w-1/3">屋号</th><td class="px-4 py-3">地域のエコキュート専門店</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">会社名</th><td class="px-4 py-3">株式会社イーエス・テック</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">設立</th><td class="px-4 py-3">2004年1月</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">所在地</th><td class="px-4 py-3">〒437-0066 静岡県袋井市山科3229番地の1</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">主営業品目</th><td class="px-4 py-3">エコキュート専門（交換・修理・新規導入）</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">営業時間</th><td class="px-4 py-3">8:30〜17:30（平日）</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">TEL</th><td class="px-4 py-3"><a href="tel:05017201813" class="text-orange-600 font-bold hover:underline">050-1720-1813</a><span class="text-xs text-gray-500 ml-1">（対話型AI受付）</span></td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">FAX</th><td class="px-4 py-3">050-1808-3052</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">Mail</th><td class="px-4 py-3"><a href="mailto:kaden@estech.info" class="text-blue-600 hover:underline">kaden@estech.info</a></td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">取扱メーカー</th><td class="px-4 py-3">三菱電機、HITACHI、TOSHIBA、DAIKIN、CORONA</td></tr>
            <tr><th class="px-4 py-3 text-left bg-gray-50 font-bold">保険</th><td class="px-4 py-3">事業賠償・費用総合保険、業務災害総合保険</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 許認可 -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-green-600 rounded-full"></span>許認可一覧</h2>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-tint text-green-600"></i></div>
          <div><div class="font-bold text-sm">袋井市指定給水装置工事事業者</div><p class="text-xs text-gray-500">市の水道工事を行う資格</p></div>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-bolt text-yellow-600"></i></div>
          <div><div class="font-bold text-sm">電気工事業</div><p class="text-xs text-gray-500">静岡県知事届出 第700494号</p></div>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-snowflake text-blue-600"></i></div>
          <div><div class="font-bold text-sm">第一種フロン類充填回収業者</div><p class="text-xs text-gray-500">静岡102816</p></div>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-recycle text-gray-600"></i></div>
          <div><div class="font-bold text-sm">産業廃棄物収集運搬業</div><p class="text-xs text-gray-500">第02201186564号</p></div>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
          <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fas fa-store text-purple-600"></i></div>
          <div><div class="font-bold text-sm">古物商</div><p class="text-xs text-gray-500">第49132A000044号</p></div>
        </div>
      </div>
    </div>

    <!-- 有資格者一覧 -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-orange-500 rounded-full"></span>有資格者一覧</h2>
      <p class="text-sm text-gray-600 mb-4">エコキュートの設置には電気・水道・冷媒など複合的な専門知識が必要です。当社では以下の資格を保有するスタッフが施工を担当いたします。</p>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>給水装置主任技術者</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>2級管工事施工管理士</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>浄化槽設備士</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>第二種冷媒フロン類取扱技術者</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>一級電気工事施工管理士</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>電気工事士</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>工事担任者（DD3種）</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>工事担任者（AI3種）</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>一般建築物石綿含有建材調査者</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>石綿作業主任者</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>酸素欠乏・硫化水素危険作業主任者</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>小型移動式クレーン</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>高所作業車</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>玉掛</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>車両系建設機械</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>ガス溶接</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>アーク溶接</span>
        <span class="inline-flex items-center gap-1 bg-orange-50 text-orange-800 border border-orange-200 px-3 py-1.5 rounded-lg text-xs font-medium"><i class="fas fa-certificate text-orange-400"></i>フォークリフト</span>
      </div>
    </div>

    <!-- Googleマップ -->
    <div class="section-fade">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2"><span class="w-2 h-8 bg-red-500 rounded-full"></span>アクセス</h2>
      <div class="rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.5!2d137.925!3d34.746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b10cd2a4ed02d%3A0x5c4aee11ced7d2a4!2z6KKL5LqV5biC!5e0!3m2!1sja!2sjp!4v1" 
          width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
          title="株式会社イーエス・テック 所在地">
        </iframe>
      </div>
      <p class="text-sm text-gray-500 mt-2"><i class="fas fa-map-marker-alt text-red-400 mr-1"></i>〒437-0066 静岡県袋井市山科3229番地の1</p>
    </div>
  </div>
</section>
`

  return c.html(layout({
    title: '会社概要・資格一覧｜袋井市のエコキュート専門店（イーエス・テック）',
    description: '株式会社イーエス・テックの会社概要。袋井市指定給水装置工事事業者。15種類以上の専門資格保有。電気工事業・産業廃棄物収集運搬業など各種許認可取得済み。',
    canonical: 'https://estech-ecocute.pages.dev/company'
  }, content))
}
