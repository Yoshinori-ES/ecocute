// サイト共通設定（ドメイン・会社情報はここだけで管理する）
// 本番ドメインを変える場合は SITE_URL だけを書き換える

export const SITE_URL = 'https://ecocute.estech.ltd'

export const BUSINESS = {
  brand: '地域のエコキュート専門店',
  company: '株式会社イーエス・テック',
  telephone: '050-1720-1813',
  fax: '050-1808-3052',
  email: 'kaden@estech.info',
  postalCode: '437-0066',
  region: '静岡県',
  locality: '袋井市',
  street: '山科3229番地の1',
  fullAddress: '〒437-0066 静岡県袋井市山科3229番地の1',
  // 国土地理院の住所検索（山科3229番地）による座標
  geo: { latitude: 34.762589, longitude: 137.907166 },
  foundingDate: '2004-01',
  // Googleビジネスプロフィール・SNSのURLが決まったらここに追加する
  // 例: 'https://g.page/r/xxxx', 'https://www.instagram.com/xxxx'
  sameAs: [] as string[]
}

export const OGP_IMAGE = `${SITE_URL}/static/images/ogp.jpg`

// パンくずリスト用のページ名
export const PAGE_NAMES: Record<string, string> = {
  leak: '漏水・故障でお困りの方',
  'error-codes': 'エラーコード一覧',
  subsidy: '補助金について',
  flow: 'ご依頼の流れ',
  area: '対応エリア',
  company: '会社概要・資格',
  guide: 'お役立ちガイド',
  warranty: '保証規定',
  // 対応エリア
  fukuroi: '袋井市', iwata: '磐田市', kakegawa: '掛川市', morimachi: '森町',
  hamamatsu: '浜松市', kikugawa: '菊川市', omaezaki: '御前崎市',
  makinohara: '牧之原市', shimada: '島田市', yoshida: '吉田町',
  // サービス区分
  ecocute: 'エコキュート', kyutouki: '給湯器', boiler: 'ボイラー',
  // お役立ちガイド
  kosho: 'エコキュートの故障', shuri: 'エコキュートの修理',
  'koukan-hiyo': 'エコキュートの交換費用', jumyo: 'エコキュートの寿命',
  'oyuga-denai': 'エコキュートのお湯が出ない'
}
