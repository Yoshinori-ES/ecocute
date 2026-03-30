import type { Context } from 'hono'
import { layout } from './layout'

export const warrantyPage = (c: Context) => {
  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto"><a href="/" class="hover:text-orange-500">トップ</a> &gt; <span class="text-gray-700 font-medium">保証規定</span></div>
</nav>

<section class="bg-gradient-to-r from-sky-700 to-sky-800 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2"><i class="fas fa-shield-alt mr-2"></i>保証規定</h1>
    <p class="text-sky-100 text-sm">弊社が施工いたしました工事に関する品質保証についてご案内いたします。</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-3xl mx-auto">

    <!-- 保証の概要 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center text-lg flex-shrink-0 shadow-lg">
          <i class="fas fa-certificate"></i>
        </div>
        <h2 class="text-xl font-black text-gray-800">施工保証について</h2>
      </div>
      <div class="bg-green-50 border-2 border-green-200 rounded-xl p-5">
        <p class="text-gray-700 leading-relaxed text-sm">
          弊社が施工いたしました工事に関しまして、保証規定に基づき、<strong class="text-green-700">工事完了日から1年間</strong>の品質を保証いたします。万が一施工不良による不具合が発生した場合は、<strong class="text-green-700">無償にて修理・対応</strong>させていただきます。
        </p>
      </div>
    </div>

    <!-- 保証内容の詳細 -->
    <div class="space-y-6">

      <!-- 保証期間 -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
          <i class="fas fa-calendar-check text-sky-500"></i>保証期間
        </h3>
        <div class="bg-sky-50 rounded-xl p-4">
          <p class="text-sm text-gray-700 leading-relaxed">工事完了日（引渡日）から<strong>1年間</strong></p>
        </div>
      </div>

      <!-- 保証対象 -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
          <i class="fas fa-check-circle text-green-500"></i>保証対象
        </h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
            <span>弊社が施工した配管工事・電気工事・基礎工事における施工不良</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
            <span>配管接続部からの水漏れ（施工起因に限る）</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
            <span>電気配線工事の不具合（施工起因に限る）</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
            <span>基礎・架台の施工不良による傾き・沈下等</span>
          </li>
        </ul>
      </div>

      <!-- 保証対象外 -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
          <i class="fas fa-times-circle text-red-400"></i>保証対象外となる場合
        </h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li class="flex items-start gap-2">
            <i class="fas fa-times text-red-400 mt-1 flex-shrink-0"></i>
            <span>エコキュート本体（メーカー保証が適用されます）</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-times text-red-400 mt-1 flex-shrink-0"></i>
            <span>お客様ご自身による改造・修理に起因する不具合</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-times text-red-400 mt-1 flex-shrink-0"></i>
            <span>地震・台風・落雷・洪水等の天災による損傷</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-times text-red-400 mt-1 flex-shrink-0"></i>
            <span>経年劣化（凍結による配管破損を含む）</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-times text-red-400 mt-1 flex-shrink-0"></i>
            <span>弊社以外の第三者による施工・修理に起因する不具合</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-times text-red-400 mt-1 flex-shrink-0"></i>
            <span>通常使用の範囲を超えた利用による損傷</span>
          </li>
        </ul>
      </div>

      <!-- 保証の適用方法 -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
          <i class="fas fa-phone-alt text-orange-400"></i>保証の適用方法
        </h3>
        <div class="space-y-3 text-sm text-gray-700">
          <p class="leading-relaxed">保証期間内に不具合が発生した場合は、以下の方法でお問い合わせください。</p>
          <div class="grid sm:grid-cols-3 gap-3">
            <a href="tel:05017201813" class="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl p-3 hover:bg-orange-100 transition-colors">
              <i class="fas fa-phone-alt text-orange-500"></i>
              <div>
                <div class="text-xs text-gray-500">お電話</div>
                <div class="font-bold text-orange-700">050-1720-1813</div>
              </div>
            </a>
            <a href="mailto:kaden@estech.info" class="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl p-3 hover:bg-blue-100 transition-colors">
              <i class="fas fa-envelope text-blue-500"></i>
              <div>
                <div class="text-xs text-gray-500">メール</div>
                <div class="font-bold text-blue-700">kaden@estech.info</div>
              </div>
            </a>
            <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <i class="fas fa-fax text-gray-500"></i>
              <div>
                <div class="text-xs text-gray-500">FAX</div>
                <div class="font-bold text-gray-700">050-1808-3052</div>
              </div>
            </div>
          </div>
          <p class="leading-relaxed text-gray-600"><i class="fas fa-info-circle text-sky-500 mr-1"></i>お問い合わせの際は、工事完了時にお渡しする<strong>工事完了報告書</strong>の内容をお手元にご用意ください。</p>
        </div>
      </div>

      <!-- メーカー保証について -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
          <i class="fas fa-industry text-purple-500"></i>メーカー保証について
        </h3>
        <p class="text-sm text-gray-700 leading-relaxed mb-3">エコキュート本体に関しては、各メーカーの保証規定が適用されます。主要メーカーの一般的な保証期間は以下のとおりです。</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left py-2 px-3 font-bold text-gray-700 border-b">保証内容</th>
                <th class="text-center py-2 px-3 font-bold text-gray-700 border-b">一般的な期間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-3 border-b text-gray-600">本体（無償保証）</td>
                <td class="py-2 px-3 border-b text-center font-bold">1〜2年</td>
              </tr>
              <tr>
                <td class="py-2 px-3 border-b text-gray-600">冷媒系統</td>
                <td class="py-2 px-3 border-b text-center font-bold">3年</td>
              </tr>
              <tr>
                <td class="py-2 px-3 border-b text-gray-600">タンク（缶体）</td>
                <td class="py-2 px-3 border-b text-center font-bold">5年</td>
              </tr>
              <tr>
                <td class="py-2 px-3 text-gray-600">有料延長保証</td>
                <td class="py-2 px-3 text-center font-bold">5〜10年</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-500 mt-3"><i class="fas fa-asterisk mr-1"></i>保証期間はメーカー・機種により異なります。詳細は各メーカーの保証書をご確認ください。</p>
      </div>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-sky-700 to-sky-900 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">保証に関するご質問もお気軽にどうぞ</h2>
    <p class="text-sky-200 text-sm mb-5">時間外はAI受付。施工後のご相談もお任せください。</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all active:scale-95">
      <i class="fas fa-phone-alt"></i>050-1720-1813
    </a>
  </div>
</section>
`

  return c.html(layout({
    title: '保証規定｜施工保証1年間｜袋井市のエコキュート専門店',
    description: 'エコキュート工事の保証規定。工事完了日から1年間の施工品質を保証。施工不良による不具合は無償修理対応。袋井市の専門店イーエス・テックが責任を持って施工します。',
    canonical: 'https://ecocute.estech.ltd/warranty'
  }, content))
}
