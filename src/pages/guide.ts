import type { Context } from 'hono'
import { layout } from './layout'

// ===================================================================
// トラブル系ロングテールKWページ
// KW: エコキュート+故障 / エコキュート+修理 / エコキュート+交換費用 /
//     エコキュート+寿命 / エコキュート+お湯が出ない / エコキュート+水漏れ /
//     エコキュート+凍結 / エコキュート+騒音
// ===================================================================

interface TroublePage {
  slug: string
  keyword: string
  title: string
  metaDesc: string
  heroIcon: string
  heroColor: string
  content: string
}

const troublePages: TroublePage[] = [
  {
    slug: 'kosho',
    keyword: 'エコキュート 故障',
    title: 'エコキュートの故障サイン・原因と対処法',
    metaDesc: 'エコキュートの故障サイン・原因・対処法を分かりやすく解説。お湯が出ない、エラーコード表示、水漏れなどの症状別ガイド。袋井市の専門店が修理・交換を丁寧に対応。時間外はAI受付。',
    heroIcon: 'fa-exclamation-triangle',
    heroColor: 'from-red-600 to-red-800',
    content: `
    <!-- 故障のサイン -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"><i class="fas fa-search text-red-500"></i></span>
        こんな症状は故障のサインです
      </h2>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 class="font-bold text-sm mb-1"><i class="fas fa-tint-slash text-red-400 mr-1"></i>お湯が出ない・ぬるい</h3>
          <p class="text-xs text-gray-600">ヒートポンプユニットやサーミスタの故障が疑われます。冬場は凍結の可能性も。</p>
        </div>
        <div class="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 class="font-bold text-sm mb-1"><i class="fas fa-exclamation-circle text-red-400 mr-1"></i>エラーコードが表示される</h3>
          <p class="text-xs text-gray-600">リモコンにエラーコードが表示されたら、まずは<a href="/error-codes" class="text-orange-500 underline">エラーコード一覧</a>で確認。</p>
        </div>
        <div class="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 class="font-bold text-sm mb-1"><i class="fas fa-tint text-blue-400 mr-1"></i>水漏れしている</h3>
          <p class="text-xs text-gray-600">タンクや配管からの水漏れ。放置すると<strong>床下浸水や基礎への影響</strong>も。詳しくは<a href="/leak" class="text-orange-500 underline">漏水対策ページ</a>へ。</p>
        </div>
        <div class="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 class="font-bold text-sm mb-1"><i class="fas fa-volume-up text-amber-400 mr-1"></i>異音がする</h3>
          <p class="text-xs text-gray-600">ヒートポンプユニットの異常運転やファンモーターの劣化が原因の場合があります。</p>
        </div>
        <div class="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 class="font-bold text-sm mb-1"><i class="fas fa-bath text-sky-400 mr-1"></i>追い焚きできない</h3>
          <p class="text-xs text-gray-600">追い焚き用の循環ポンプや配管の詰まり・故障が考えられます。</p>
        </div>
        <div class="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 class="font-bold text-sm mb-1"><i class="fas fa-power-off text-gray-400 mr-1"></i>電源が入らない</h3>
          <p class="text-xs text-gray-600">ブレーカー落ちの可能性も。ブレーカーON後も動かなければ基板故障の疑い。</p>
        </div>
      </div>
    </div>

    <!-- 故障の主な原因 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><i class="fas fa-question-circle text-amber-500"></i></span>
        エコキュート故障の主な原因
      </h2>
      <div class="space-y-3">
        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <span class="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
          <div><h3 class="font-bold text-sm">経年劣化（10年以上使用）</h3><p class="text-xs text-gray-600 mt-1">エコキュートの寿命は一般的に10〜15年。部品の劣化により様々な不具合が発生しやすくなります。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <span class="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
          <div><h3 class="font-bold text-sm">水質の影響</h3><p class="text-xs text-gray-600 mt-1">井戸水の使用や水質が硬い地域では、配管内部にスケール（水垢）が溜まりやすく、故障の原因に。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <span class="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
          <div><h3 class="font-bold text-sm">凍結（冬場）</h3><p class="text-xs text-gray-600 mt-1">静岡県でも袋井市周辺の山間部では冬場の凍結リスクあり。配管の凍結でお湯が出なくなることも。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <span class="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
          <div><h3 class="font-bold text-sm">落雷・電圧異常</h3><p class="text-xs text-gray-600 mt-1">落雷による電子基板の故障。電圧の急変が精密な制御部品にダメージを与えることがあります。</p></div>
        </div>
      </div>
    </div>

    <!-- 修理か交換かの判断 -->
    <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 mb-5">
      <h2 class="text-lg font-black mb-4 text-center">修理？ それとも交換？ 判断のポイント</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-white rounded-xl p-4 border-2 border-green-200">
          <h3 class="font-bold text-green-600 text-center mb-3"><i class="fas fa-wrench mr-1"></i>修理がおすすめ</h3>
          <ul class="space-y-1.5 text-sm text-gray-600">
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5 text-xs"></i>使用年数 10年未満</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5 text-xs"></i>初めての故障</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5 text-xs"></i>修理費用が5万円以下</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5 text-xs"></i>部品供給がまだある</li>
          </ul>
        </div>
        <div class="bg-white rounded-xl p-4 border-2 border-orange-200">
          <h3 class="font-bold text-orange-600 text-center mb-3"><i class="fas fa-exchange-alt mr-1"></i>交換がおすすめ</h3>
          <ul class="space-y-1.5 text-sm text-gray-600">
            <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5 text-xs"></i>使用年数 10年以上</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5 text-xs"></i>何度も修理を繰り返している</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5 text-xs"></i>修理費用が10万円以上</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-orange-500 mt-0.5 text-xs"></i>補助金が使えるタイミング</li>
          </ul>
        </div>
      </div>
      <p class="text-xs text-center text-gray-500 mt-4">迷ったらお気軽にご相談ください。修理と交換どちらが得か、正直にアドバイスいたします。</p>
    </div>`
  },
  {
    slug: 'shuri',
    keyword: 'エコキュート 修理',
    title: 'エコキュートの修理｜料金目安・流れ・対応メーカー',
    metaDesc: 'エコキュートの修理なら袋井市の専門店イーエス・テック。修理料金の目安、対応の流れ、全メーカー対応。有資格者が丁寧に診断・修理。お見積り0円。時間外はAI受付。',
    heroIcon: 'fa-wrench',
    heroColor: 'from-blue-600 to-blue-800',
    content: `
    <!-- 修理料金の目安 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><i class="fas fa-yen-sign text-blue-500"></i></span>
        エコキュート修理料金の目安
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-gray-50">
            <th class="border border-gray-200 px-4 py-3 text-left">修理内容</th>
            <th class="border border-gray-200 px-4 py-3 text-center">料金目安（税込）</th>
            <th class="border border-gray-200 px-4 py-3 text-center">所要時間</th>
          </tr></thead>
          <tbody>
            <tr><td class="border border-gray-200 px-4 py-3">リモコン交換</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">1.5〜3万円</td><td class="border border-gray-200 px-4 py-3 text-center">30分〜1時間</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3">混合弁・電磁弁交換</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">2〜5万円</td><td class="border border-gray-200 px-4 py-3 text-center">1〜2時間</td></tr>
            <tr><td class="border border-gray-200 px-4 py-3">ヒートポンプ基板交換</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">3〜8万円</td><td class="border border-gray-200 px-4 py-3 text-center">1〜3時間</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3">配管修理・水漏れ修理</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">1〜4万円</td><td class="border border-gray-200 px-4 py-3 text-center">30分〜2時間</td></tr>
            <tr><td class="border border-gray-200 px-4 py-3">追い焚き循環ポンプ交換</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">2〜5万円</td><td class="border border-gray-200 px-4 py-3 text-center">1〜2時間</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3">コンプレッサー交換</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">8〜15万円</td><td class="border border-gray-200 px-4 py-3 text-center">2〜4時間</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-gray-400 mt-3">※上記は概算です。実際の料金は現地調査後にお見積りいたします（お見積り無料）。出張費は別途2,000円〜。</p>
    </div>

    <!-- 修理の流れ -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"><i class="fas fa-clipboard-list text-green-500"></i></span>
        修理の流れ
      </h2>
      <div class="space-y-4">
        <div class="flex items-start gap-3">
          <span class="bg-sky-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">1</span>
          <div><h3 class="font-bold text-sm">お電話・メールでご連絡</h3><p class="text-xs text-gray-600">時間外はAI受付。症状やエラーコードをお伝えください。</p></div>
        </div>
        <div class="flex items-start gap-3">
          <span class="bg-sky-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">2</span>
          <div><h3 class="font-bold text-sm">訪問日時の調整</h3><p class="text-xs text-gray-600">ご都合の良い日時をお打ち合わせ。緊急の場合は最短当日対応。</p></div>
        </div>
        <div class="flex items-start gap-3">
          <span class="bg-sky-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">3</span>
          <div><h3 class="font-bold text-sm">現地調査・診断</h3><p class="text-xs text-gray-600">有資格者がエラーコード解析・各部点検で原因を特定。</p></div>
        </div>
        <div class="flex items-start gap-3">
          <span class="bg-sky-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">4</span>
          <div><h3 class="font-bold text-sm">お見積りのご提示</h3><p class="text-xs text-gray-600">修理費用と交換費用の両方をご提示。どちらが得か正直にアドバイス。</p></div>
        </div>
        <div class="flex items-start gap-3">
          <span class="bg-sky-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">5</span>
          <div><h3 class="font-bold text-sm">修理作業</h3><p class="text-xs text-gray-600">ご了承後に修理開始。部品取り寄せが必要な場合は後日改めて伺います。</p></div>
        </div>
        <div class="flex items-start gap-3">
          <span class="bg-green-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
          <div><h3 class="font-bold text-sm">動作確認・ご説明</h3><p class="text-xs text-gray-600">修理完了後、お客様の目の前で動作確認。今後のメンテナンスもアドバイス。</p></div>
        </div>
      </div>
    </div>

    <!-- 対応メーカー -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"><i class="fas fa-industry text-purple-500"></i></span>
        修理対応メーカー
      </h2>
      <p class="text-sm text-gray-600 mb-3">以下のメーカー製エコキュートの修理に対応しています。メーカー問わずご相談ください。</p>
      <div class="flex flex-wrap gap-2">
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">三菱電機</span>
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">Panasonic</span>
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">HITACHI（日立）</span>
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">TOSHIBA（東芝）</span>
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">DAIKIN（ダイキン）</span>
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">CORONA（コロナ）</span>
        <span class="bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold">ノーリツ</span>
      </div>
    </div>`
  },
  {
    slug: 'koukan-hiyo',
    keyword: 'エコキュート 交換費用',
    title: 'エコキュートの交換費用｜相場・内訳・補助金で安くする方法',
    metaDesc: 'エコキュート交換費用の相場を徹底解説。本体価格＋工事費の内訳、メーカー別比較、給湯省エネ2026事業の補助金で最大12万円安くなる方法。袋井市の専門店が正直にご案内。',
    heroIcon: 'fa-yen-sign',
    heroColor: 'from-green-600 to-green-800',
    content: `
    <!-- 費用の内訳 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"><i class="fas fa-receipt text-green-500"></i></span>
        エコキュート交換費用の内訳
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-gray-50">
            <th class="border border-gray-200 px-4 py-3 text-left">項目</th>
            <th class="border border-gray-200 px-4 py-3 text-center">費用目安</th>
            <th class="border border-gray-200 px-4 py-3 text-left">備考</th>
          </tr></thead>
          <tbody>
            <tr><td class="border border-gray-200 px-4 py-3 font-bold">エコキュート本体</td><td class="border border-gray-200 px-4 py-3 text-center font-bold text-lg">20〜50万円</td><td class="border border-gray-200 px-4 py-3 text-xs text-gray-500">メーカー・容量・グレードにより変動</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3 font-bold">標準工事費</td><td class="border border-gray-200 px-4 py-3 text-center font-bold text-lg">10〜18万円</td><td class="border border-gray-200 px-4 py-3 text-xs text-gray-500">既設撤去・新設取付・配管接続</td></tr>
            <tr><td class="border border-gray-200 px-4 py-3 font-bold">電気工事費</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">2〜5万円</td><td class="border border-gray-200 px-4 py-3 text-xs text-gray-500">ブレーカー増設等が必要な場合</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3 font-bold">既設品処分費</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">0.5〜2万円</td><td class="border border-gray-200 px-4 py-3 text-xs text-gray-500">旧機器のリサイクル処分</td></tr>
            <tr class="bg-green-50"><td class="border border-gray-200 px-4 py-3 font-bold text-green-600">補助金（給湯省エネ2026）</td><td class="border border-gray-200 px-4 py-3 text-center font-bold text-green-600 text-lg">-8〜12万円</td><td class="border border-gray-200 px-4 py-3 text-xs text-gray-500">対象機種の場合</td></tr>
          </tbody>
          <tfoot><tr class="bg-orange-50">
            <td class="border border-gray-200 px-4 py-3 font-black text-lg">合計目安</td>
            <td class="border border-gray-200 px-4 py-3 text-center font-black text-lg text-orange-600" colspan="2">25〜65万円（補助金適用前）</td>
          </tr></tfoot>
        </table>
      </div>
      <p class="text-xs text-gray-400 mt-3">※上記は概算です。設置条件やご選択の機種により異なります。<strong>お見積りは無料</strong>です。</p>
    </div>

    <!-- タンク容量別目安 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center"><i class="fas fa-users text-sky-500"></i></span>
        家族人数別・おすすめ容量と費用感
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-gray-50">
            <th class="border border-gray-200 px-4 py-3 text-center">家族人数</th>
            <th class="border border-gray-200 px-4 py-3 text-center">おすすめ容量</th>
            <th class="border border-gray-200 px-4 py-3 text-center">本体＋工事費目安</th>
          </tr></thead>
          <tbody>
            <tr><td class="border border-gray-200 px-4 py-3 text-center">1〜2人</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">300L（コンパクト）</td><td class="border border-gray-200 px-4 py-3 text-center">30〜45万円</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3 text-center">3〜4人</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">370L（標準）</td><td class="border border-gray-200 px-4 py-3 text-center">35〜55万円</td></tr>
            <tr><td class="border border-gray-200 px-4 py-3 text-center">4〜6人</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">460L（大容量）</td><td class="border border-gray-200 px-4 py-3 text-center">40〜65万円</td></tr>
            <tr class="bg-orange-50"><td class="border border-gray-200 px-4 py-3 text-center">6人以上</td><td class="border border-gray-200 px-4 py-3 text-center font-bold">550L以上</td><td class="border border-gray-200 px-4 py-3 text-center">50〜75万円</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 補助金で安くする -->
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mb-5">
      <h2 class="text-lg font-black mb-4 text-center"><i class="fas fa-piggy-bank text-green-500 mr-2"></i>補助金で交換費用を安くする方法</h2>
      <p class="text-sm text-gray-600 mb-4 text-center">
        <strong>給湯省エネ2026事業</strong>を活用すれば、エコキュート交換費用を<strong class="text-green-600 text-lg">最大12万円削減</strong>できます。
      </p>
      <div class="bg-white rounded-xl p-4 mb-3">
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>基本補助額：<strong>8万円</strong>（高効率エコキュート）</li>
          <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>性能加算：最大<strong>+4万円</strong>（A要件対応機種）</li>
          <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>撤去加算：<strong>+1万円</strong>（電気温水器撤去の場合）</li>
        </ul>
      </div>
      <p class="text-center"><a href="/subsidy" class="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"><i class="fas fa-arrow-right"></i>補助金の詳細を見る</a></p>
    </div>`
  },
  {
    slug: 'jumyo',
    keyword: 'エコキュート 寿命',
    title: 'エコキュートの寿命は何年？｜交換時期の目安と長持ちさせるコツ',
    metaDesc: 'エコキュートの寿命は10〜15年が目安。交換時期のサイン、長持ちさせるメンテナンス方法、買い替えのベストタイミングを解説。袋井市の専門店がアドバイス。',
    heroIcon: 'fa-hourglass-half',
    heroColor: 'from-purple-600 to-purple-800',
    content: `
    <!-- 寿命の目安 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"><i class="fas fa-clock text-purple-500"></i></span>
        エコキュートの寿命は10〜15年
      </h2>
      <p class="text-sm text-gray-600 leading-relaxed mb-4">
        エコキュートの平均的な寿命は<strong>10〜15年</strong>です。ただし使用環境やメンテナンス状況によって大きく変わります。
      </p>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-gray-50">
            <th class="border border-gray-200 px-4 py-3 text-left">部位</th>
            <th class="border border-gray-200 px-4 py-3 text-center">平均寿命</th>
            <th class="border border-gray-200 px-4 py-3 text-left">故障時の症状</th>
          </tr></thead>
          <tbody>
            <tr><td class="border border-gray-200 px-4 py-3 font-bold">貯湯タンク</td><td class="border border-gray-200 px-4 py-3 text-center">15〜20年</td><td class="border border-gray-200 px-4 py-3 text-xs">水漏れ・お湯が汚れる</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3 font-bold">ヒートポンプユニット</td><td class="border border-gray-200 px-4 py-3 text-center">7〜15年</td><td class="border border-gray-200 px-4 py-3 text-xs">お湯が沸かない・異音</td></tr>
            <tr><td class="border border-gray-200 px-4 py-3 font-bold">制御基板</td><td class="border border-gray-200 px-4 py-3 text-center">8〜15年</td><td class="border border-gray-200 px-4 py-3 text-xs">エラーコード表示・動作不良</td></tr>
            <tr class="bg-gray-50"><td class="border border-gray-200 px-4 py-3 font-bold">配管・バルブ</td><td class="border border-gray-200 px-4 py-3 text-center">10〜20年</td><td class="border border-gray-200 px-4 py-3 text-xs">水漏れ・流量低下</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 交換のサイン -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><i class="fas fa-bell text-amber-500"></i></span>
        こんな症状が出たら交換のサイン
      </h2>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="flex items-start gap-2 bg-amber-50 rounded-lg p-3"><i class="fas fa-exclamation-circle text-amber-500 mt-0.5"></i><div><span class="font-bold text-sm">頻繁にエラーが出る</span><p class="text-xs text-gray-500">月に何度もエラーが出るなら基板やセンサーの寿命。</p></div></div>
        <div class="flex items-start gap-2 bg-amber-50 rounded-lg p-3"><i class="fas fa-exclamation-circle text-amber-500 mt-0.5"></i><div><span class="font-bold text-sm">お湯の温度が安定しない</span><p class="text-xs text-gray-500">混合弁やサーミスタの劣化が原因のことが多い。</p></div></div>
        <div class="flex items-start gap-2 bg-amber-50 rounded-lg p-3"><i class="fas fa-exclamation-circle text-amber-500 mt-0.5"></i><div><span class="font-bold text-sm">異音が大きくなった</span><p class="text-xs text-gray-500">コンプレッサーやファンモーターの劣化サイン。</p></div></div>
        <div class="flex items-start gap-2 bg-amber-50 rounded-lg p-3"><i class="fas fa-exclamation-circle text-amber-500 mt-0.5"></i><div><span class="font-bold text-sm">お湯の量が減った</span><p class="text-xs text-gray-500">ヒートポンプの効率低下。電気代も上がっている可能性。</p></div></div>
        <div class="flex items-start gap-2 bg-amber-50 rounded-lg p-3"><i class="fas fa-exclamation-circle text-amber-500 mt-0.5"></i><div><span class="font-bold text-sm">水漏れを発見</span><p class="text-xs text-gray-500">タンクや配管の腐食。放置は家屋へのダメージに。</p></div></div>
        <div class="flex items-start gap-2 bg-amber-50 rounded-lg p-3"><i class="fas fa-exclamation-circle text-amber-500 mt-0.5"></i><div><span class="font-bold text-sm">電気代が急に上がった</span><p class="text-xs text-gray-500">ヒートポンプの効率低下で消費電力が増加している可能性。</p></div></div>
      </div>
    </div>

    <!-- 長持ちさせるコツ -->
    <div class="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200 mb-5">
      <h2 class="text-lg font-black mb-4 text-center"><i class="fas fa-heart text-pink-500 mr-2"></i>エコキュートを長持ちさせる5つのコツ</h2>
      <div class="space-y-3">
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
          <div><h3 class="font-bold text-sm">年に2〜3回タンクの水抜き</h3><p class="text-xs text-gray-600">タンク底に溜まった汚れを排出。取扱説明書の手順に従って実施。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
          <div><h3 class="font-bold text-sm">配管洗浄を定期的に</h3><p class="text-xs text-gray-600">追い焚き配管の洗浄で汚れの蓄積を防止。市販の洗浄剤でOK。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
          <div><h3 class="font-bold text-sm">ヒートポンプ周辺の掃除</h3><p class="text-xs text-gray-600">室外機の周りに落ち葉やゴミが溜まらないようにする。空気の流れを確保。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
          <div><h3 class="font-bold text-sm">漏電遮断器の動作確認</h3><p class="text-xs text-gray-600">半年に1回、テストボタンを押して正常に動作するか確認。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</span>
          <div><h3 class="font-bold text-sm">凍結防止対策（冬場）</h3><p class="text-xs text-gray-600">袋井市周辺でも森町方面など山間部は凍結リスクあり。配管に保温材を巻く。</p></div>
        </div>
      </div>
    </div>`
  },
  {
    slug: 'oyuga-denai',
    keyword: 'エコキュート お湯が出ない',
    title: 'エコキュートのお湯が出ない！原因と今すぐできる対処法',
    metaDesc: 'エコキュートのお湯が出ない原因と対処法を緊急解説。凍結・断水・エラー・湯切れなど症状別の対処手順。自分で直せるケースと業者が必要なケースを判別。袋井市の専門店が解説。',
    heroIcon: 'fa-tint-slash',
    heroColor: 'from-red-600 to-red-800',
    content: `
    <!-- まずやること -->
    <div class="bg-red-50 rounded-2xl p-6 border-2 border-red-200 mb-5">
      <h2 class="text-lg font-black mb-4 text-red-700"><i class="fas fa-first-aid mr-2"></i>まずはこの3つを確認してください</h2>
      <div class="space-y-3">
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-red-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">1</span>
          <div><h3 class="font-bold text-sm">エラーコードを確認</h3><p class="text-xs text-gray-600">リモコンにエラーコードが出ていませんか？→ <a href="/error-codes" class="text-orange-500 underline font-bold">エラーコード一覧で確認</a></p></div>
        </div>
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-red-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">2</span>
          <div><h3 class="font-bold text-sm">ブレーカーを確認</h3><p class="text-xs text-gray-600">エコキュート用のブレーカーが落ちていないか分電盤を確認。落ちていたらONに。</p></div>
        </div>
        <div class="flex items-start gap-3 bg-white rounded-xl p-4">
          <span class="bg-red-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">3</span>
          <div><h3 class="font-bold text-sm">止水栓・断水を確認</h3><p class="text-xs text-gray-600">他の蛇口からも水が出ないなら断水の可能性。止水栓が閉まっていないかも確認。</p></div>
        </div>
      </div>
    </div>

    <!-- 原因別の対処法 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 class="text-lg font-black mb-4 flex items-center gap-2">
        <span class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><i class="fas fa-search text-amber-500"></i></span>
        原因別の対処法
      </h2>
      <div class="space-y-4">
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-blue-50 px-4 py-3"><h3 class="font-bold text-sm"><i class="fas fa-snowflake text-blue-400 mr-1"></i>原因①：凍結（冬場に多い）</h3></div>
          <div class="p-4 text-sm text-gray-600">
            <p class="mb-2">袋井市周辺でも気温が0度以下になると配管が凍結する場合があります。</p>
            <ul class="space-y-1 ml-4 text-xs"><li>✅ 気温が上がるまで自然解凍を待つ（最も安全）</li><li>✅ 配管にぬるま湯をかけてゆっくり解凍</li><li>❌ 熱湯をかけるのはNG（配管破裂の恐れ）</li></ul>
          </div>
        </div>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-orange-50 px-4 py-3"><h3 class="font-bold text-sm"><i class="fas fa-thermometer-empty text-orange-400 mr-1"></i>原因②：湯切れ</h3></div>
          <div class="p-4 text-sm text-gray-600">
            <p class="mb-2">タンクのお湯を使い切ってしまった状態。沸き増しに数時間かかります。</p>
            <ul class="space-y-1 ml-4 text-xs"><li>✅ リモコンで「沸き増し」ボタンを押す</li><li>✅ 頻繁に起きるなら、タンク容量の見直しを検討</li><li>✅ 翌日の予定に合わせて「沸き上げ」設定を調整</li></ul>
          </div>
        </div>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-red-50 px-4 py-3"><h3 class="font-bold text-sm"><i class="fas fa-exclamation-triangle text-red-400 mr-1"></i>原因③：エラーコード表示</h3></div>
          <div class="p-4 text-sm text-gray-600">
            <p class="mb-2">エラーコードが表示されている場合、故障の可能性があります。</p>
            <ul class="space-y-1 ml-4 text-xs"><li>✅ まず<a href="/error-codes" class="text-orange-500 underline">エラーコード一覧</a>で症状を確認</li><li>✅ リモコンの電源を切り、1分後に再度入れる（リセット操作）</li><li>✅ 解消しない場合はお電話ください</li></ul>
          </div>
        </div>
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-purple-50 px-4 py-3"><h3 class="font-bold text-sm"><i class="fas fa-bolt text-purple-400 mr-1"></i>原因④：本体の故障</h3></div>
          <div class="p-4 text-sm text-gray-600">
            <p class="mb-2">上記をすべて確認してもお湯が出ない場合は本体の故障が考えられます。</p>
            <ul class="space-y-1 ml-4 text-xs"><li>✅ <strong>プロの点検が必要</strong>です</li><li>✅ 時間外はAI受付 → <a href="tel:05017201813" class="text-orange-500 underline font-bold">050-1720-1813</a></li><li>✅ 修理or交換、最適な提案をいたします</li></ul>
          </div>
        </div>
      </div>
    </div>`
  }
]

// ===================================================================
// Honoルートハンドラ
// ===================================================================
export function createTroublePageHandler(slug: string) {
  return (c: Context) => {
    const page = troublePages.find(p => p.slug === slug)
    if (!page) return c.notFound()

    // 関連ページリンク
    const relatedLinks = troublePages
      .filter(p => p.slug !== slug)
      .map(p => `<a href="/guide/${p.slug}" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors">${p.keyword}</a>`)
      .join('\n          ')

    const fullContent = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto">
    <a href="/" class="hover:text-orange-500">トップ</a> &gt; 
    <a href="/guide" class="hover:text-orange-500">お役立ちガイド</a> &gt; 
    <span class="text-gray-700 font-medium">${page.keyword}</span>
  </div>
</nav>

<section class="bg-gradient-to-r ${page.heroColor} text-white py-8 md:py-10 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2"><i class="fas ${page.heroIcon} mr-2"></i>${page.title}</h1>
    <p class="text-white/80 text-sm">袋井市のエコキュート専門店（イーエス・テック）が分かりやすく解説します。</p>
  </div>
</section>

<section class="py-8 md:py-12 px-4">
  <div class="max-w-4xl mx-auto">
    ${page.content}

    <!-- 関連ガイド -->
    <div class="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-5">
      <h2 class="font-black text-sm mb-3"><i class="fas fa-book text-gray-400 mr-1"></i>関連お役立ちガイド</h2>
      <div class="flex flex-wrap gap-2">
          ${relatedLinks}
          <a href="/leak" class="bg-white hover:bg-red-50 text-gray-700 hover:text-red-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors">漏水・故障でお困りの方</a>
          <a href="/error-codes" class="bg-white hover:bg-yellow-50 text-gray-700 hover:text-yellow-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors">エラーコード一覧</a>
          <a href="/subsidy" class="bg-white hover:bg-green-50 text-gray-700 hover:text-green-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors">補助金について</a>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-sky-800 to-sky-900 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">エコキュートのお困りごと、お気軽にご相談ください</h2>
    <p class="text-sky-200 text-sm mb-5">お見積り0円。時間外はAIがお電話を受け付けます。</p>
    <div class="flex flex-col sm:flex-row justify-center gap-3">
      <a href="tel:05017201813" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all active:scale-95">
        <i class="fas fa-phone-alt"></i>050-1720-1813
      </a>
      <a href="mailto:kaden@estech.info" class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all active:scale-95">
        <i class="fas fa-envelope"></i>メールで相談
      </a>
    </div>
  </div>
</section>
`
    return c.html(layout({
      title: `${page.title}｜袋井市のエコキュート専門店（イーエス・テック）`,
      description: page.metaDesc,
      canonical: `https://estech-ecocute.pages.dev/guide/${page.slug}`
    }, fullContent))
  }
}

// ガイドTOPページ
export function guideIndexHandler(c: Context) {
  const cards = troublePages.map(p => `
    <a href="/guide/${p.slug}" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 card-hover transition-colors group block">
      <div class="w-12 h-12 bg-gradient-to-br ${p.heroColor} rounded-xl flex items-center justify-center mb-3"><i class="fas ${p.heroIcon} text-white text-lg"></i></div>
      <h3 class="font-black text-base mb-1 group-hover:text-orange-500 transition-colors">${p.keyword}</h3>
      <p class="text-xs text-gray-500">${p.title}</p>
      <span class="inline-block mt-2 text-xs text-orange-500 font-bold">詳しく見る →</span>
    </a>
  `).join('\n')

  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto"><a href="/" class="hover:text-orange-500">トップ</a> &gt; <span class="text-gray-700 font-medium">お役立ちガイド</span></div>
</nav>

<section class="bg-gradient-to-r from-sky-700 to-sky-900 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2"><i class="fas fa-book-open mr-2"></i>エコキュートお役立ちガイド</h1>
    <p class="text-sky-200 text-sm">エコキュートの故障・修理・費用・寿命など、よくあるお悩みに専門家が回答します。</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-4xl mx-auto">
    <div class="grid sm:grid-cols-2 gap-5">
      ${cards}
    </div>

    <!-- エリアリンク -->
    <div class="mt-10 bg-gray-50 rounded-2xl p-5 border border-gray-200">
      <h2 class="font-black text-sm mb-3"><i class="fas fa-map-marker-alt text-orange-400 mr-1"></i>エリア別のエコキュート・給湯器ページ</h2>
      <div class="flex flex-wrap gap-2">
        <a href="/area/fukuroi/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">袋井市</a>
        <a href="/area/iwata/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">磐田市</a>
        <a href="/area/kakegawa/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">掛川市</a>
        <a href="/area/hamamatsu/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">浜松市</a>
        <a href="/area/morimachi/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">森町</a>
        <a href="/area/kikugawa/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">菊川市</a>
        <a href="/area/omaezaki/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">御前崎市</a>
        <a href="/area/makinohara/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">牧之原市</a>
        <a href="/area/shimada/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">島田市</a>
        <a href="/area/yoshida/ecocute" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">吉田町</a>
      </div>
    </div>
  </div>
</section>
`
  return c.html(layout({
    title: 'エコキュートお役立ちガイド｜故障・修理・交換費用・寿命｜袋井市の専門店',
    description: 'エコキュートの故障・修理・交換費用・寿命・お湯が出ないなどのお悩みに、袋井市の専門店イーエス・テックが専門家目線で回答。トラブル解決のヒントが見つかります。',
    canonical: 'https://estech-ecocute.pages.dev/guide'
  }, content))
}

// 全トラブルページのスラグ一覧
export const allTroubleSlugs = troublePages.map(p => p.slug)
