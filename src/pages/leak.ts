import type { Context } from 'hono'
import { layout } from './layout'

export const leakPage = (c: Context) => {
  const content = `
<!-- パンくずリスト -->
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto">
    <a href="/" class="hover:text-orange-500">トップ</a> &gt; 
    <span class="text-gray-700 font-medium">漏水・故障でお困りの方</span>
  </div>
</nav>

<!-- 緊急ヘッダー -->
<section class="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-4">
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
        <i class="fas fa-exclamation-triangle text-2xl"></i>
      </div>
      <div>
        <span class="text-xs bg-white/20 px-2 py-0.5 rounded-full">緊急対応ガイド</span>
        <h1 class="text-2xl md:text-3xl font-black mt-1">漏水・故障でお困りの方へ</h1>
      </div>
    </div>
    <p class="text-red-100 text-sm md:text-base max-w-2xl">
      まずは落ち着いてください。以下の手順で応急処置を行い、被害の拡大を防ぎましょう。
      <strong class="text-white">お電話いただければ、時間外も受付いたします。後ほど担当よりご連絡いたします。</strong>
    </p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl mt-4 shadow-lg hover:bg-red-50 transition-colors active:scale-95">
      <i class="fas fa-phone-alt"></i>
      <span>今すぐ電話する：050-1720-1813</span>
    </a>
  </div>
</section>

<!-- 応急処置ステップ -->
<section class="py-10 px-4 bg-white">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-xl md:text-2xl font-black mb-6 text-center">
      <i class="fas fa-first-aid text-red-500 mr-2"></i>
      今すぐできる<span class="text-red-500">応急処置</span>
    </h2>
    
    <div class="space-y-6">
      <!-- STEP 1 -->
      <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-5 md:p-6 relative">
        <div class="absolute -top-3 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 1｜最優先</div>
        <div class="flex gap-4 items-start mt-2">
          <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fas fa-tint-slash text-red-500 text-2xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">止水栓を閉めて水を止める</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">
              漏水が発生している場合、<strong>まず水を止めることが最優先</strong>です。これ以上の被害拡大を防ぎます。
            </p>
            <div class="bg-white rounded-xl p-4 space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div>
                  <strong>エコキュート専用の止水栓</strong>を閉める（タンク周辺のバルブ）
                </div>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div>
                  見つからない場合は、<strong>家全体の元栓</strong>を閉める（水道メーター付近）
                </div>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-info-circle text-blue-500 mt-0.5"></i>
                <div>
                  止水栓の場所がわからない場合は、お電話でご案内します
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STEP 2 -->
      <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 md:p-6 relative">
        <div class="absolute -top-3 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 2｜安全確保</div>
        <div class="flex gap-4 items-start mt-2">
          <div class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fas fa-bolt text-amber-500 text-2xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">ブレーカーを落とす（漏電防止）</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">
              水漏れと電気が組み合わさると<strong>漏電・感電の危険</strong>があります。安全のため電源を遮断してください。
            </p>
            <div class="bg-white rounded-xl p-4 space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div><strong>エコキュート専用ブレーカー</strong>をOFFにする</div>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div>専用ブレーカーが不明なら、<strong>漏電ブレーカー</strong>が落ちていないか確認</div>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-exclamation-triangle text-red-500 mt-0.5"></i>
                <div class="text-red-600 font-medium">水が溜まっている場所に素足で近づかないでください</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STEP 3 -->
      <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 md:p-6 relative">
        <div class="absolute -top-3 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 3｜状況記録</div>
        <div class="flex gap-4 items-start mt-2">
          <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fas fa-camera text-blue-500 text-2xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">状況を記録する（写真・エラーコード）</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">
              修理をスムーズに進めるため、<strong>可能な範囲で状況を記録</strong>してください。
            </p>
            <div class="bg-white rounded-xl p-4 space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div>漏水箇所の<strong>写真や動画</strong>を撮影</div>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div>リモコンに<strong>エラーコード</strong>が出ていればメモ（例：H1、E16）</div>
              </div>
              <div class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                <div>本体の<strong>メーカー名・型式</strong>を確認（銘板シールに記載）</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STEP 4 -->
      <div class="bg-green-50 border-2 border-green-200 rounded-2xl p-5 md:p-6 relative">
        <div class="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 4｜ご連絡</div>
        <div class="flex gap-4 items-start mt-2">
          <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fas fa-phone-volume text-green-500 text-2xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-2">当店にご連絡ください</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">
              応急処置が終わったら、お気軽にご連絡ください。<strong>時間外も受付対応</strong>いたします。
              状況をお聞きし、担当者から折り返しご連絡いたします。
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="tel:05017201813" class="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors active:scale-95 shadow">
                <i class="fas fa-phone-alt"></i>
                <div class="leading-tight">
                  <div class="text-[10px]">受付</div>
                  <div class="text-sm">050-1720-1813</div>
                </div>
              </a>
              <a href="mailto:kaden@estech.info" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors active:scale-95 shadow">
                <i class="fas fa-envelope"></i>
                <span class="text-sm">メール</span>
              </a>
              <div class="flex items-center justify-center gap-2 bg-gray-500 text-white font-bold py-3 rounded-xl shadow">
                <i class="fas fa-fax"></i>
                <div class="leading-tight text-sm">
                  <div class="text-[10px]">FAX</div>
                  <div>050-1808-3052</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 漏水の種類別対処法 -->
<section class="py-10 px-4 bg-gray-50 section-fade">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-xl md:text-2xl font-black mb-6 text-center">
      漏水の<span class="text-red-500">種類別</span>対処法
    </h2>
    
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-tint text-blue-500"></i>
          </div>
          <h3 class="font-bold">タンク下部からの水漏れ</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600">
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-gray-400 mt-1"></i>タンク内部の配管劣化や接続部のゆるみが原因の可能性</li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-gray-400 mt-1"></i>冬場の結露による水滴と見分けることが重要</li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-red-400 mt-1 font-bold"></i><span class="text-red-600 font-medium">→ 専門業者による修理・交換が必要です</span></li>
        </ul>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-water text-purple-500"></i>
          </div>
          <h3 class="font-bold">配管接続部からの水漏れ</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600">
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-gray-400 mt-1"></i>パッキンの劣化や配管の接続不良が原因</li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-gray-400 mt-1"></i>経年劣化（10年以上）で発生しやすい</li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-red-400 mt-1 font-bold"></i><span class="text-red-600 font-medium">→ 部品交換で修理可能な場合があります</span></li>
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-wind text-yellow-500"></i>
          </div>
          <h3 class="font-bold">ヒートポンプユニットからの水漏れ</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600">
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-gray-400 mt-1"></i>冷媒配管の劣化や内部部品の故障の可能性</li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-green-500 mt-1"></i><span class="text-green-600">運転中の結露水は正常動作の場合があります</span></li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-red-400 mt-1 font-bold"></i><span class="text-red-600 font-medium">→ 判断が難しい場合はお電話ください</span></li>
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-faucet text-red-500"></i>
          </div>
          <h3 class="font-bold">逃し弁（安全弁）からの排水</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600">
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-green-500 mt-1"></i><span class="text-green-600">沸き上げ時の膨張水は正常な排水です</span></li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-gray-400 mt-1"></i>常時流れ続ける場合は逃し弁の故障の可能性</li>
          <li class="flex items-start gap-2"><i class="fas fa-angle-right text-red-400 mt-1 font-bold"></i><span class="text-red-600 font-medium">→ 止まらない場合は点検が必要です</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 修理か交換か判断基準 -->
<section class="py-10 px-4 bg-white section-fade">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-xl md:text-2xl font-black mb-6 text-center">
      <i class="fas fa-balance-scale text-sky-500 mr-2"></i>
      修理と交換、<span class="text-sky-600">どちらがお得？</span>
    </h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
        <h3 class="font-black text-lg mb-3 text-green-700">
          <i class="fas fa-wrench mr-2"></i>修理がおすすめのケース
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i>使用開始から<strong>10年未満</strong></li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i>エラーが<strong>初めて</strong>発生した</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i>部品の<strong>交換だけ</strong>で直る症状</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i>メーカーの<strong>補修部品</strong>がまだある</li>
        </ul>
      </div>
      
      <div class="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
        <h3 class="font-black text-lg mb-3 text-orange-700">
          <i class="fas fa-sync-alt mr-2"></i>交換がおすすめのケース
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5"></i>使用開始から<strong>10年以上</strong>経過</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5"></i>エラーが<strong>頻繁に</strong>発生する</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5"></i>修理費用が<strong>高額</strong>になる場合</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5"></i>補助金で<strong>お得に交換</strong>できる時期</li>
        </ul>
        <div class="mt-3 bg-orange-100 rounded-xl p-3 text-sm">
          <i class="fas fa-lightbulb text-orange-500 mr-1"></i>
          <strong>給湯省エネ2026事業</strong>で最大12万円の補助金が使えます！
          <a href="/subsidy" class="text-orange-600 underline ml-1">詳しく見る</a>
        </div>
      </div>
    </div>
    
    <p class="text-center text-sm text-gray-500 mt-6">
      ※判断に迷われた場合は、無理に決めなくて大丈夫です。現地調査でプロが最適な方法をご提案します。
    </p>
  </div>
</section>

<!-- 最終CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">
      <i class="fas fa-headset mr-2"></i>
      まずはお気軽にお電話ください
    </h2>
    <p class="text-red-100 text-sm mb-5">時間外も丁寧にお聞きします。強引な営業は一切ありません。</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:bg-red-50 transition-colors active:scale-95">
      <i class="fas fa-phone-alt animate-pulse-slow"></i>
      <div class="leading-tight">
        <div class="text-[10px] text-red-400">時間外もスムーズにご案内</div>
        <div>050-1720-1813</div>
      </div>
    </a>
  </div>
</section>
`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "エコキュートの漏水時の応急処置手順",
    "description": "エコキュートから水漏れした場合の応急処置手順を4ステップで解説",
    "step": [
      { "@type": "HowToStep", "name": "止水栓を閉める", "text": "エコキュート専用の止水栓を閉めて水を止める。見つからない場合は家全体の元栓を閉める。" },
      { "@type": "HowToStep", "name": "ブレーカーを落とす", "text": "漏電防止のためエコキュート専用ブレーカーをOFFにする。" },
      { "@type": "HowToStep", "name": "状況を記録する", "text": "漏水箇所の写真を撮り、エラーコードをメモする。" },
      { "@type": "HowToStep", "name": "専門業者に連絡する", "text": "地域のエコキュート専門店（050-1720-1813）に電話する。" }
    ]
  }

  return c.html(layout({
    title: '【緊急】エコキュートの漏水・故障対処法｜袋井市のエコキュート専門店',
    description: 'エコキュートの水漏れ・故障でお困りですか？まずは止水栓を閉め、ブレーカーを落としましょう。袋井市の専門店が応急処置から修理まで丁寧にサポート。時間外も電話受付で対応。',
    canonical: 'https://estech-ecocute.pages.dev/leak',
    structuredData
  }, content))
}
