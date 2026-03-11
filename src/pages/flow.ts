import type { Context } from 'hono'
import { layout } from './layout'

export const flowPage = (c: Context) => {
  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto"><a href="/" class="hover:text-orange-500">トップ</a> &gt; <span class="text-gray-700 font-medium">ご依頼の流れ</span></div>
</nav>

<section class="bg-gradient-to-r from-sky-700 to-sky-800 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2"><i class="fas fa-clipboard-list mr-2"></i>ご依頼の流れ</h1>
    <p class="text-sky-100 text-sm">お問い合わせからお支払いまで、9つのステップでご案内します。お見積り0円、強引な営業は一切いたしません。</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-3xl mx-auto">
    <div class="relative">
      <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200"></div>
      
      <div class="space-y-6">
        <!-- STEP 1 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">1</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-phone-alt text-orange-400 mr-2"></i>お問い合わせ</h3>
            <p class="text-sm text-gray-600 leading-relaxed">お電話・メール・FAXのいずれかでお気軽にお問い合わせください。<strong>対話型AIが24時間受付</strong>いたします。</p>
            <div class="flex flex-wrap gap-2 mt-3">
              <a href="tel:05017201813" class="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-200 transition-colors">
                <i class="fas fa-phone-alt"></i>050-1720-1813
              </a>
              <a href="mailto:kaden@estech.info" class="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-200 transition-colors">
                <i class="fas fa-envelope"></i>kaden@estech.info
              </a>
              <span class="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold">
                <i class="fas fa-fax"></i>050-1808-3052
              </span>
            </div>
          </div>
        </div>

        <!-- STEP 2 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">2</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-headset text-sky-500 mr-2"></i>ヒアリング</h3>
            <p class="text-sm text-gray-600 leading-relaxed">エコキュートの状況・ご要望を詳しくお聞きします。この段階で<strong>概算見積もりのご提示も可能</strong>です。お気軽にご相談ください。</p>
          </div>
        </div>

        <!-- STEP 3 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">3</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-search-location text-green-500 mr-2"></i>現地調査</h3>
            <p class="text-sm text-gray-600 leading-relaxed">担当者がお伺いし、設置場所の状況を確認いたします。出張費は<strong>2,000円〜</strong>です。</p>
          </div>
        </div>

        <!-- STEP 4 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">4</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-file-invoice-dollar text-amber-500 mr-2"></i>お見積り</h3>
            <p class="text-sm text-gray-600 leading-relaxed">現地調査をもとに正式なお見積りを作成。<strong>お見積り0円</strong>。内容にご納得いただけるまで丁寧にご説明します。給湯省エネ2026事業の補助金適用可否もご案内します。</p>
            <span class="inline-flex items-center gap-1 mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"><i class="fas fa-handshake"></i>強引な営業は一切いたしません</span>
          </div>
        </div>

        <!-- STEP 5 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">5</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-file-signature text-purple-500 mr-2"></i>ご契約</h3>
            <p class="text-sm text-gray-600 leading-relaxed">お見積り内容にご了承いただきましたらご契約となります。</p>
          </div>
        </div>

        <!-- STEP 6 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">6</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-calendar-check text-sky-500 mr-2"></i>スケジュール調整</h3>
            <p class="text-sm text-gray-600 leading-relaxed">お客様のご都合に合わせて、施工日を調整いたします。</p>
          </div>
        </div>

        <!-- STEP 7 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">7</div>
          <div class="bg-sky-50 rounded-2xl shadow-sm border-2 border-sky-200 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-tools text-sky-600 mr-2"></i>施工</h3>
            <p class="text-sm text-gray-600 leading-relaxed">施工箇所と方法をお客様に確認した上で着工。<strong>有資格者が責任を持って施工</strong>いたします。主要7メーカーの製品を取り扱い、最適な機器をご提案します。</p>
          </div>
        </div>

        <!-- STEP 8 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">8</div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-check-double text-green-500 mr-2"></i>施工後確認</h3>
            <p class="text-sm text-gray-600 leading-relaxed">施工完了後、お客様と一緒に仕上がりを確認。使い方のご説明も丁寧に行います。</p>
          </div>
        </div>

        <!-- STEP 9 -->
        <div class="flex gap-4 items-start relative">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg z-10 border-4 border-white">9</div>
          <div class="bg-green-50 rounded-2xl shadow-sm border-2 border-green-200 p-5 flex-1">
            <h3 class="font-bold text-lg mb-1"><i class="fas fa-credit-card text-green-600 mr-2"></i>お支払い</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">以下のお支払い方法に対応しております。</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-white border border-green-200 px-3 py-1.5 rounded-lg text-xs font-bold"><i class="fas fa-money-bill-wave text-green-500 mr-1"></i>現金一括</span>
              <span class="bg-white border border-green-200 px-3 py-1.5 rounded-lg text-xs font-bold"><i class="fas fa-credit-card text-blue-500 mr-1"></i>各種クレジットカード</span>
              <span class="bg-white border border-green-200 px-3 py-1.5 rounded-lg text-xs font-bold"><i class="fas fa-university text-gray-500 mr-1"></i>銀行振込</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-sky-700 to-sky-900 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">まずはお気軽にお問い合わせください</h2>
    <p class="text-sky-200 text-sm mb-5">お見積り0円・強引な営業なし・対話型AIがスムーズに受付</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all active:scale-95">
      <i class="fas fa-phone-alt"></i>050-1720-1813
    </a>
  </div>
</section>
`

  return c.html(layout({
    title: 'ご依頼の流れ｜お問い合わせから施工完了まで｜袋井市のエコキュート専門店',
    description: 'エコキュートの交換・修理のご依頼方法を9ステップで解説。お見積り0円・強引な営業なし。対話型AIが24時間電話受付。袋井市の専門店が丁寧に対応します。',
    canonical: 'https://estech-ecocute.pages.dev/flow'
  }, content))
}
