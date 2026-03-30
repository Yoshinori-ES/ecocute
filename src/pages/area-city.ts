import type { Context } from 'hono'
import { layout } from './layout'

// ===================================================================
// 都市別ロングテールSEOページ自動生成
// KW: {都市名}+エコキュート / {都市名}+給湯器 / {都市名}+ボイラー
// ===================================================================

interface CityData {
  slug: string          // URL用スラグ
  name: string          // 都市名
  isBase: boolean       // 本社拠点かどうか
  description: string   // 都市の特徴説明
  distance: string      // 袋井からの距離目安
  driveTime: string     // 車での所要時間目安
  population: string    // 人口概算
  features: string[]    // 地域の特徴キーワード
  neighborNote: string  // 隣接エリアとの関係
}

// 対応エリア全10市町のデータ
const cities: CityData[] = [
  {
    slug: 'fukuroi',
    name: '袋井市',
    isBase: true,
    description: '当社の本社所在地。最短当日対応が可能です。袋井市内のエコキュート・給湯器・ボイラーのことなら何でもご相談ください。',
    distance: '拠点',
    driveTime: '即対応',
    population: '約8.8万人',
    features: ['袋井市指定給水装置工事事業者', '最短当日対応', '出張費最安'],
    neighborNote: '磐田市・掛川市・森町に隣接。袋井市内ならどこでもすぐに駆けつけます。'
  },
  {
    slug: 'iwata',
    name: '磐田市',
    isBase: false,
    description: '袋井市の東隣に位置する磐田市。ヤマハスタジアム・ジュビロで知られるこの街にも多数の施工実績がございます。',
    distance: '約10km',
    driveTime: '約15分',
    population: '約17万人',
    features: ['袋井市から最短15分', '多数の施工実績', '磐田市全域カバー'],
    neighborNote: '袋井市に隣接しているため、朝のお電話で当日中の対応も可能です。'
  },
  {
    slug: 'kakegawa',
    name: '掛川市',
    isBase: false,
    description: '袋井市の西隣、掛川城で有名な掛川市。茶畑が広がるエリアから市街地まで幅広く対応しています。',
    distance: '約12km',
    driveTime: '約20分',
    population: '約11.5万人',
    features: ['袋井市から約20分', '掛川城周辺も対応', '茶畑エリアOK'],
    neighborNote: '袋井市の西隣で、掛川バイパス・東名ICからもアクセス良好です。'
  },
  {
    slug: 'morimachi',
    name: '森町',
    isBase: false,
    description: '周智郡森町は自然豊かな山間部を含むエリア。アクトの森や小國神社で知られるこの町にも丁寧に対応いたします。',
    distance: '約15km',
    driveTime: '約25分',
    population: '約1.7万人',
    features: ['山間部も対応', '新東名森掛川IC近く', '丁寧な施工'],
    neighborNote: '袋井市から北に隣接。山間部のお宅にもしっかり対応いたします。'
  },
  {
    slug: 'hamamatsu',
    name: '浜松市',
    isBase: false,
    description: '静岡県最大の都市・浜松市。中央区・浜名区・天竜区と広範囲に対応。うなぎや楽器の街としても知られるこのエリアのエコキュート工事もお任せください。',
    distance: '約25km',
    driveTime: '約35分',
    population: '約79万人',
    features: ['静岡県最大都市', '中央区・浜名区・天竜区対応', '豊富な実績'],
    neighborNote: '袋井市から東名・新東名で約35分。浜松市内の広いエリアをカバーしています。'
  },
  {
    slug: 'kikugawa',
    name: '菊川市',
    isBase: false,
    description: '深蒸し茶の産地として有名な菊川市。掛川市の南に位置し、のどかな住宅街から農村部まで対応しています。',
    distance: '約20km',
    driveTime: '約30分',
    population: '約4.8万人',
    features: ['深蒸し茶の里', '掛川経由でスムーズ', '農村部も対応'],
    neighborNote: '掛川市経由でスムーズに到着。菊川市全域に対応可能です。'
  },
  {
    slug: 'omaezaki',
    name: '御前崎市',
    isBase: false,
    description: '御前崎灯台で知られる海沿いの街。潮風による設備劣化が起きやすいエリアだからこそ、プロの点検・交換が重要です。',
    distance: '約30km',
    driveTime: '約40分',
    population: '約3.1万人',
    features: ['海沿い地域に強い', '塩害対策の知識', '灯台エリアも対応'],
    neighborNote: '海沿い特有の塩害によるエコキュート劣化にも経験豊富に対応します。'
  },
  {
    slug: 'makinohara',
    name: '牧之原市',
    isBase: false,
    description: '静岡空港のおひざ元・牧之原市。広大な茶園が広がるこのエリアでもエコキュートの交換・修理に対応しています。',
    distance: '約30km',
    driveTime: '約40分',
    population: '約4.3万人',
    features: ['静岡空港エリア', '牧之原台地もカバー', '迅速対応'],
    neighborNote: '静岡空港周辺から海沿いエリアまで、牧之原市全域に対応しています。'
  },
  {
    slug: 'shimada',
    name: '島田市',
    isBase: false,
    description: '大井川の蓬萊橋で有名な島田市。静岡県中部エリアまでしっかりカバーしています。',
    distance: '約35km',
    driveTime: '約45分',
    population: '約9.5万人',
    features: ['中部エリアもカバー', '大井川流域対応', '国道1号沿い'],
    neighborNote: '国道1号・東名を使って袋井市から約45分。中部エリアの最東端まで対応。'
  },
  {
    slug: 'yoshida',
    name: '吉田町',
    isBase: false,
    description: '榛原郡吉田町は駿河湾に面したコンパクトな町。うなぎ養殖で有名なこの町のご家庭にも丁寧に対応いたします。',
    distance: '約30km',
    driveTime: '約40分',
    population: '約2.9万人',
    features: ['榛原郡吉田町', 'コンパクトな町', '駿河湾エリア'],
    neighborNote: '牧之原市・島田市と隣接。吉田町内全域に対応しています。'
  }
]

// サービスカテゴリ別キーワード定義
interface ServiceCategory {
  slug: string
  keyword: string        // メインKW
  pageTitle: string
  h1: string
  metaDesc: string
  relatedKeywords: string[]
  heroColor: string      // ヒーロー背景色
  heroIcon: string       // ヒーロー用アイコン
  sections: (city: CityData) => string  // 都市に応じた本文
}

const serviceCategories: ServiceCategory[] = [
  {
    slug: 'ecocute',
    keyword: 'エコキュート',
    pageTitle: 'エコキュート交換・修理',
    h1: 'エコキュート交換・修理・新規導入',
    metaDesc: 'のエコキュート交換・修理・新規導入なら地域のエコキュート専門店（イーエス・テック）。有資格者多数在籍、お見積り0円。給湯省エネ2026事業で最大12万円補助金対応。時間外はAI受付。',
    relatedKeywords: ['エコキュート 交換', 'エコキュート 修理', 'エコキュート 取り付け', 'エコキュート 費用', 'エコキュート 補助金'],
    heroColor: 'from-sky-700 to-sky-900',
    heroIcon: 'fa-fire',
    sections: (city) => `
    <!-- エコキュート交換サービス -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"><i class="fas fa-exchange-alt text-orange-500"></i></span>
        ${city.name}のエコキュート交換工事
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        エコキュートの寿命は一般的に<strong>10〜15年</strong>と言われています。${city.name}でエコキュートの交換をお考えなら、
        <strong>全メーカー対応</strong>の当社にお任せください。Panasonic・三菱電機・日立・東芝・ダイキン・コロナ・ノーリツなど、お客様のご要望に合わせた最適な機種をご提案します。
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>既設エコキュートからの入替工事</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>電気温水器・ガス給湯器からの切り替え</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>基礎工事・配管工事込みの安心パック</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>給湯省エネ2026事業で<strong class="text-green-600">最大12万円の補助金</strong>対応</li>
      </ul>
    </div>

    <!-- エコキュート修理サービス -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"><i class="fas fa-wrench text-red-500"></i></span>
        ${city.name}のエコキュート修理
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        「お湯が出ない」「エラーコードが表示された」「水漏れしている」──${city.name}でのエコキュートのトラブルに迅速対応。
        ${city.isBase ? '本社拠点のため、最短当日の修理対応が可能です。' : `袋井市の本社から${city.driveTime}で駆けつけます。`}
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>エラーコード診断と修理</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>水漏れ・配管トラブル修理</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>ヒートポンプユニットの点検</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>修理不能な場合の交換提案</li>
      </ul>
    </div>

    <!-- 新規導入 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"><i class="fas fa-plus-circle text-green-500"></i></span>
        ${city.name}へのエコキュート新規導入
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        ガス給湯器や灯油ボイラーからエコキュートへの切り替えも承ります。${city.name}のオール電化住宅にはエコキュートが最適。
        <strong>光熱費の大幅削減</strong>が期待できます。
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>ガス給湯器からの切り替え工事</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>灯油ボイラーからの切り替え工事</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>新築住宅へのエコキュート設置</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>設置場所・配管ルートの現地調査無料</li>
      </ul>
    </div>`
  },
  {
    slug: 'kyutouki',
    keyword: '給湯器',
    pageTitle: '給湯器交換・修理',
    h1: '給湯器の交換・修理',
    metaDesc: 'の給湯器交換・修理なら地域のエコキュート専門店（イーエス・テック）。エコキュート・電気温水器・ガス給湯器すべて対応。有資格者多数在籍でワンストップ対応。お見積り0円。',
    relatedKeywords: ['給湯器 交換', '給湯器 修理', '給湯器 交換 費用', '給湯器 おすすめ', '給湯器 寿命'],
    heroColor: 'from-teal-700 to-teal-900',
    heroIcon: 'fa-shower',
    sections: (city) => `
    <!-- 給湯器交換 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center"><i class="fas fa-exchange-alt text-teal-500"></i></span>
        ${city.name}の給湯器交換工事
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        「お湯がぬるい」「追い焚きできない」「異音がする」──${city.name}で給湯器の不調にお困りなら、
        エコキュート専門店である当社にご相談ください。エコキュートだけでなく、<strong>電気温水器やガス給湯器</strong>の交換にも対応しています。
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>エコキュート（ヒートポンプ式）への交換</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>電気温水器の交換・エコキュート化</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>ガス給湯器からの切り替え相談</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>給湯省エネ2026事業の補助金サポート</li>
      </ul>
    </div>

    <!-- 給湯器修理 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"><i class="fas fa-tools text-red-500"></i></span>
        ${city.name}の給湯器修理
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        給湯器の突然の故障は生活に大きな影響を与えます。${city.name}からのご依頼にも
        ${city.isBase ? '最短当日で対応可能。' : `袋井市から${city.driveTime}で駆けつけます。`}
        <strong>時間外はAI受付</strong>しておりますので、夜間のトラブルでもまずはお電話ください。
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>お湯が出ない・ぬるいトラブル</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>エラーコード表示の診断</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>水漏れ・配管トラブル</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>修理と交換どちらが得か、丁寧にご説明</li>
      </ul>
    </div>

    <!-- 給湯器の種類案内 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><i class="fas fa-info-circle text-blue-500"></i></span>
        給湯器の種類と選び方
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        ${city.name}のご家庭に最適な給湯器をご提案します。エコキュート・電気温水器・ガス給湯器それぞれのメリット・デメリットを丁寧にご説明します。
      </p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs border-collapse mt-2">
          <thead><tr class="bg-gray-50">
            <th class="border border-gray-200 px-3 py-2 text-left">種類</th>
            <th class="border border-gray-200 px-3 py-2 text-center">初期費用</th>
            <th class="border border-gray-200 px-3 py-2 text-center">ランニングコスト</th>
            <th class="border border-gray-200 px-3 py-2 text-center">寿命</th>
          </tr></thead>
          <tbody>
            <tr class="bg-orange-50"><td class="border border-gray-200 px-3 py-2 font-bold">エコキュート</td><td class="border border-gray-200 px-3 py-2 text-center">△ やや高い</td><td class="border border-gray-200 px-3 py-2 text-center text-green-600 font-bold">◎ 安い</td><td class="border border-gray-200 px-3 py-2 text-center">10〜15年</td></tr>
            <tr><td class="border border-gray-200 px-3 py-2 font-bold">電気温水器</td><td class="border border-gray-200 px-3 py-2 text-center">○ 普通</td><td class="border border-gray-200 px-3 py-2 text-center">△ やや高い</td><td class="border border-gray-200 px-3 py-2 text-center">15〜20年</td></tr>
            <tr><td class="border border-gray-200 px-3 py-2 font-bold">ガス給湯器</td><td class="border border-gray-200 px-3 py-2 text-center">◎ 安い</td><td class="border border-gray-200 px-3 py-2 text-center">△ やや高い</td><td class="border border-gray-200 px-3 py-2 text-center">10〜15年</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },
  {
    slug: 'boiler',
    keyword: 'ボイラー',
    pageTitle: 'ボイラー交換・エコキュート切替え',
    h1: 'ボイラーからエコキュートへの切替え',
    metaDesc: 'のボイラー交換・エコキュートへの切替えなら地域のエコキュート専門店（イーエス・テック）。灯油ボイラー・石油給湯器からの切替えで光熱費を大幅削減。有資格者が丁寧に施工。',
    relatedKeywords: ['ボイラー 交換', 'ボイラー エコキュート 切り替え', '灯油ボイラー 交換', '石油給湯器 交換', 'ボイラー 寿命'],
    heroColor: 'from-amber-700 to-amber-900',
    heroIcon: 'fa-fire-alt',
    sections: (city) => `
    <!-- ボイラー→エコキュート切替え -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><i class="fas fa-sync-alt text-amber-600"></i></span>
        ${city.name}で灯油ボイラーからエコキュートへ切替え
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        灯油ボイラーの老朽化や灯油代の高騰でお悩みなら、<strong>エコキュートへの切替え</strong>がおすすめです。
        ${city.name}のご家庭で、年間の給湯コストを<strong>最大70%削減</strong>できる可能性があります。
        当社は電気工事・配管工事の有資格者が多数在籍しており、ワンストップで対応可能です。
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>灯油ボイラーの撤去・処分もお任せ</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>電気工事＋配管工事をワンストップ対応</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>オール電化への切替え相談可</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>給湯省エネ2026事業の補助金で初期費用を軽減</li>
      </ul>
    </div>

    <!-- 石油給湯器の交換 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"><i class="fas fa-oil-can text-red-500"></i></span>
        石油給湯器の交換もお任せください
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        石油給湯器（灯油ボイラー）は一般的に<strong>10〜15年で寿命</strong>を迎えます。
        「着火しない」「黒煙が出る」「異音がする」などの症状が出たら交換のサインです。
        ${city.name}で石油給湯器からの買い替えなら、同じ石油給湯器への交換はもちろん、
        <strong>エコキュートへのグレードアップ</strong>も承ります。
      </p>
      <ul class="space-y-1.5 text-sm text-gray-600">
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>石油給湯器 → 石油給湯器への交換</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>石油給湯器 → エコキュートへの切替え</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>灯油タンクの撤去・処分</li>
        <li class="flex items-start gap-2"><i class="fas fa-check-circle text-green-500 mt-0.5"></i>産業廃棄物収集運搬業の許可取得済み</li>
      </ul>
    </div>

    <!-- コスト比較 -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover">
      <h3 class="text-lg font-black mb-3 flex items-center gap-2">
        <span class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"><i class="fas fa-calculator text-green-500"></i></span>
        灯油ボイラー vs エコキュート コスト比較
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed mb-3">
        灯油代が高騰する昨今、エコキュートに切り替えることで<strong>大幅なランニングコスト削減</strong>が期待できます。
      </p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs border-collapse mt-2">
          <thead><tr class="bg-gray-50">
            <th class="border border-gray-200 px-3 py-2 text-left">比較項目</th>
            <th class="border border-gray-200 px-3 py-2 text-center">灯油ボイラー</th>
            <th class="border border-gray-200 px-3 py-2 text-center bg-orange-50">エコキュート</th>
          </tr></thead>
          <tbody>
            <tr><td class="border border-gray-200 px-3 py-2 font-bold">年間給湯コスト</td><td class="border border-gray-200 px-3 py-2 text-center">約8〜12万円</td><td class="border border-gray-200 px-3 py-2 text-center bg-orange-50 text-green-600 font-bold">約2〜4万円</td></tr>
            <tr><td class="border border-gray-200 px-3 py-2 font-bold">燃料補充</td><td class="border border-gray-200 px-3 py-2 text-center">定期的に必要</td><td class="border border-gray-200 px-3 py-2 text-center bg-orange-50">不要（電気）</td></tr>
            <tr><td class="border border-gray-200 px-3 py-2 font-bold">CO₂排出</td><td class="border border-gray-200 px-3 py-2 text-center">多い</td><td class="border border-gray-200 px-3 py-2 text-center bg-orange-50 text-green-600 font-bold">約1/3に削減</td></tr>
            <tr><td class="border border-gray-200 px-3 py-2 font-bold">補助金</td><td class="border border-gray-200 px-3 py-2 text-center">対象外</td><td class="border border-gray-200 px-3 py-2 text-center bg-orange-50 text-green-600 font-bold">最大12万円</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-gray-400 mt-2">※コストは目安です。ご家庭の使用量・契約プランにより異なります。</p>
    </div>`
  }
]

// ===================================================================
// ページ生成関数
// ===================================================================
function generateCityPage(city: CityData, category: ServiceCategory): string {
  const nearbyLinks = cities
    .filter(c => c.slug !== city.slug)
    .slice(0, 5)
    .map(c => `<a href="/area/${c.slug}/${category.slug}" class="bg-gray-100 hover:bg-orange-100 hover:text-orange-700 text-gray-700 px-3 py-1.5 rounded-lg text-xs transition-colors">${c.name}の${category.keyword}</a>`)
    .join('\n            ')

  const otherCategoryLinks = serviceCategories
    .filter(sc => sc.slug !== category.slug)
    .map(sc => `<a href="/area/${city.slug}/${sc.slug}" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors font-medium">${city.name}の${sc.keyword}</a>`)
    .join('\n          ')

  return `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto">
    <a href="/" class="hover:text-orange-500">トップ</a> &gt; 
    <a href="/area" class="hover:text-orange-500">対応エリア</a> &gt; 
    <span class="text-gray-700 font-medium">${city.name}の${category.keyword}</span>
  </div>
</nav>

<!-- ヒーローセクション -->
<section class="bg-gradient-to-r ${category.heroColor} text-white py-8 md:py-10 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center gap-2 mb-2">
      ${city.isBase ? '<span class="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">本社拠点</span>' : `<span class="bg-white/20 text-xs px-2 py-0.5 rounded-full">袋井市から${city.driveTime}</span>`}
      <span class="bg-white/20 text-xs px-2 py-0.5 rounded-full">${city.population}</span>
    </div>
    <h1 class="text-2xl md:text-4xl font-black mb-3">
      <i class="fas ${category.heroIcon} mr-2"></i>${city.name}の${category.h1}
    </h1>
    <p class="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
      ${city.description}
    </p>
    <div class="flex flex-wrap gap-2 mt-4">
      ${city.features.map(f => `<span class="bg-white/15 backdrop-blur text-xs px-3 py-1 rounded-full">${f}</span>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- メインコンテンツ -->
<section class="py-8 md:py-12 px-4">
  <div class="max-w-5xl mx-auto">
    <!-- アクセス情報 -->
    <div class="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-5 mb-8 border border-sky-200">
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1">
          <h2 class="font-black text-lg mb-2"><i class="fas fa-truck text-sky-500 mr-2"></i>${city.name}への出張について</h2>
          <p class="text-sm text-gray-600">${city.neighborNote}</p>
          <div class="flex flex-wrap gap-3 mt-3">
            <span class="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg"><i class="fas fa-road text-gray-400 mr-1"></i>距離: ${city.distance}</span>
            <span class="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg"><i class="fas fa-clock text-gray-400 mr-1"></i>所要: ${city.driveTime}</span>
            <span class="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg"><i class="fas fa-yen-sign text-gray-400 mr-1"></i>出張費: 2,000円〜</span>
            <span class="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg"><i class="fas fa-file-invoice text-gray-400 mr-1"></i>お見積り: 0円</span>
          </div>
        </div>
      </div>
    </div>

    <!-- サービス詳細 -->
    <h2 class="text-xl font-black mb-5">
      <span class="w-2 h-7 bg-orange-500 rounded-full inline-block mr-2"></span>
      ${city.name}でご提供するサービス
    </h2>
    <div class="grid gap-5 mb-10">
      ${category.sections(city)}
    </div>

    <!-- 当社の強み -->
    <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 mb-10">
      <h2 class="text-xl font-black mb-5 text-center">
        ${city.name}で当社が選ばれる<span class="text-orange-500">3つの理由</span>
      </h2>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-white rounded-xl p-4 text-center shadow-sm">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3"><i class="fas fa-robot text-orange-500 text-xl"></i></div>
          <h3 class="font-bold text-sm mb-1">時間外はAI電話受付</h3>
          <p class="text-xs text-gray-500">深夜・早朝のトラブルでも時間外はAIが電話受付。翌営業日に人間のスタッフが折り返しご連絡します。</p>
        </div>
        <div class="bg-white rounded-xl p-4 text-center shadow-sm">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3"><i class="fas fa-certificate text-blue-500 text-xl"></i></div>
          <h3 class="font-bold text-sm mb-1">有資格者多数在籍</h3>
          <p class="text-xs text-gray-500">給水装置主任技術者・電気工事士・管工事施工管理士など<strong>15種類以上の資格</strong>を保有したスタッフが対応。</p>
        </div>
        <div class="bg-white rounded-xl p-4 text-center shadow-sm">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3"><i class="fas fa-hand-holding-heart text-green-500 text-xl"></i></div>
          <h3 class="font-bold text-sm mb-1">見積り0円・強引営業なし</h3>
          <p class="text-xs text-gray-500">お見積り無料。強引な営業は一切いたしません。修理と交換どちらが得か、正直にアドバイスします。</p>
        </div>
      </div>
    </div>

    <!-- 関連キーワードによる内部リンク -->
    <div class="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-200">
      <h2 class="font-black text-sm mb-3"><i class="fas fa-link text-gray-400 mr-1"></i>${city.name}の関連ページ</h2>
      <div class="flex flex-wrap gap-2">
        ${otherCategoryLinks}
        <a href="/leak" class="bg-white hover:bg-red-50 text-gray-700 hover:text-red-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors font-medium">漏水・故障でお困りの方</a>
        <a href="/error-codes" class="bg-white hover:bg-yellow-50 text-gray-700 hover:text-yellow-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors font-medium">エラーコード一覧</a>
        <a href="/subsidy" class="bg-white hover:bg-green-50 text-gray-700 hover:text-green-700 border border-gray-200 px-4 py-2 rounded-lg text-sm transition-colors font-medium">補助金について</a>
      </div>
    </div>

    <!-- 近隣エリアリンク -->
    <div class="bg-white rounded-2xl p-5 border border-gray-200 mb-8">
      <h2 class="font-black text-sm mb-3"><i class="fas fa-map-marker-alt text-orange-400 mr-1"></i>近隣エリアの${category.keyword}ページ</h2>
      <div class="flex flex-wrap gap-2">
            ${nearbyLinks}
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-sky-800 to-sky-900 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">${city.name}のエコキュート・給湯器のことなら</h2>
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
}

// ===================================================================
// Honoルートハンドラ生成
// ===================================================================
export function createCityPageHandler(citySlug: string, categorySlug: string) {
  return (c: Context) => {
    const city = cities.find(ci => ci.slug === citySlug)
    const category = serviceCategories.find(sc => sc.slug === categorySlug)
    if (!city || !category) return c.notFound()

    const content = generateCityPage(city, category)
    return c.html(layout({
      title: `${city.name}の${category.pageTitle}｜地域のエコキュート専門店（イーエス・テック）`,
      description: `${city.name}${category.metaDesc}`,
      canonical: `https://estech-ecocute.pages.dev/area/${city.slug}/${category.slug}`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${city.name}の${category.pageTitle}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "地域のエコキュート専門店（株式会社イーエス・テック）",
          "telephone": "050-1720-1813",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "山科3229番地の1",
            "addressLocality": "袋井市",
            "addressRegion": "静岡県",
            "postalCode": "437-0066"
          }
        },
        "areaServed": {
          "@type": city.slug === 'morimachi' || city.slug === 'yoshida' ? "AdministrativeArea" : "City",
          "name": city.name,
          "containedInPlace": { "@type": "State", "name": "静岡県" }
        },
        "serviceType": category.pageTitle,
        "description": `${city.name}${category.metaDesc}`
      }
    }, content))
  }
}

// 全ルートの組み合わせをエクスポート
export const allCityRoutes: { path: string; citySlug: string; categorySlug: string }[] = []
for (const city of cities) {
  for (const cat of serviceCategories) {
    allCityRoutes.push({
      path: `/area/${city.slug}/${cat.slug}`,
      citySlug: city.slug,
      categorySlug: cat.slug
    })
  }
}

// 都市インデックスページ（/area/:city → 3カテゴリへの導線）
export function createCityIndexHandler(citySlug: string) {
  return (c: Context) => {
    const city = cities.find(ci => ci.slug === citySlug)
    if (!city) return c.notFound()

    const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto">
    <a href="/" class="hover:text-orange-500">トップ</a> &gt; 
    <a href="/area" class="hover:text-orange-500">対応エリア</a> &gt; 
    <span class="text-gray-700 font-medium">${city.name}</span>
  </div>
</nav>

<section class="bg-gradient-to-r from-sky-700 to-sky-900 text-white py-8 md:py-10 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center gap-2 mb-2">
      ${city.isBase ? '<span class="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">本社拠点</span>' : `<span class="bg-white/20 text-xs px-2 py-0.5 rounded-full">袋井市から${city.driveTime}</span>`}
    </div>
    <h1 class="text-2xl md:text-4xl font-black mb-3">
      <i class="fas fa-map-marker-alt mr-2"></i>${city.name}のエコキュート・給湯器・ボイラー
    </h1>
    <p class="text-white/80 text-sm md:text-base max-w-2xl">${city.description}</p>
  </div>
</section>

<section class="py-10 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-xl font-black mb-6 text-center">${city.name}で<span class="text-orange-500">お探しのサービス</span>を選んでください</h2>
    <div class="grid md:grid-cols-3 gap-5">
      <a href="/area/${city.slug}/ecocute" class="bg-white rounded-2xl shadow-sm border-2 border-sky-200 hover:border-orange-400 p-6 text-center card-hover transition-colors group">
        <div class="w-16 h-16 bg-sky-100 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"><i class="fas fa-fire text-sky-500 group-hover:text-orange-500 text-2xl transition-colors"></i></div>
        <h3 class="font-black text-lg mb-2">${city.name}<br>エコキュート</h3>
        <p class="text-xs text-gray-500">交換・修理・新規導入</p>
        <span class="inline-block mt-3 text-xs text-orange-500 font-bold">詳しく見る →</span>
      </a>
      <a href="/area/${city.slug}/kyutouki" class="bg-white rounded-2xl shadow-sm border-2 border-teal-200 hover:border-orange-400 p-6 text-center card-hover transition-colors group">
        <div class="w-16 h-16 bg-teal-100 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"><i class="fas fa-shower text-teal-500 group-hover:text-orange-500 text-2xl transition-colors"></i></div>
        <h3 class="font-black text-lg mb-2">${city.name}<br>給湯器</h3>
        <p class="text-xs text-gray-500">交換・修理・種類相談</p>
        <span class="inline-block mt-3 text-xs text-orange-500 font-bold">詳しく見る →</span>
      </a>
      <a href="/area/${city.slug}/boiler" class="bg-white rounded-2xl shadow-sm border-2 border-amber-200 hover:border-orange-400 p-6 text-center card-hover transition-colors group">
        <div class="w-16 h-16 bg-amber-100 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"><i class="fas fa-fire-alt text-amber-500 group-hover:text-orange-500 text-2xl transition-colors"></i></div>
        <h3 class="font-black text-lg mb-2">${city.name}<br>ボイラー</h3>
        <p class="text-xs text-gray-500">交換・エコキュート切替え</p>
        <span class="inline-block mt-3 text-xs text-orange-500 font-bold">詳しく見る →</span>
      </a>
    </div>

    <!-- 他のエリア -->
    <div class="mt-10 bg-gray-50 rounded-2xl p-5 border border-gray-200">
      <h2 class="font-black text-sm mb-3"><i class="fas fa-map text-gray-400 mr-1"></i>他の対応エリア</h2>
      <div class="flex flex-wrap gap-2">
        ${cities.filter(c => c.slug !== city.slug).map(c => `<a href="/area/${c.slug}" class="bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-700 border border-gray-200 px-3 py-1.5 rounded-lg text-xs transition-colors">${c.name}</a>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="py-10 px-4 bg-gradient-to-br from-sky-800 to-sky-900 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">${city.name}のエコキュート・給湯器のお悩みを解決</h2>
    <p class="text-sky-200 text-sm mb-5">お見積り0円。時間外はAIが受付中。</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all active:scale-95">
      <i class="fas fa-phone-alt"></i>050-1720-1813
    </a>
  </div>
</section>
`
    return c.html(layout({
      title: `${city.name}のエコキュート・給湯器・ボイラー｜交換・修理なら地域のエコキュート専門店`,
      description: `${city.name}のエコキュート交換・修理、給湯器交換、ボイラーからの切替えなら地域のエコキュート専門店（イーエス・テック）。袋井市から${city.driveTime}で駆けつけ。有資格者多数在籍。お見積り0円。`,
      canonical: `https://estech-ecocute.pages.dev/area/${city.slug}`
    }, content))
  }
}

// エクスポート: 全都市のスラグ一覧
export const allCitySlugs = cities.map(c => c.slug)
