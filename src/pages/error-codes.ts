import type { Context } from 'hono'
import { layout } from './layout'

export const errorCodesPage = (c: Context) => {
  const content = `
<nav class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
  <div class="max-w-5xl mx-auto">
    <a href="/" class="hover:text-orange-500">トップ</a> &gt;
    <span class="text-gray-700 font-medium">エラーコード一覧</span>
  </div>
</nav>

<section class="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-black mb-2">
      <i class="fas fa-exclamation-triangle mr-2"></i>エコキュート エラーコード一覧
    </h1>
    <p class="text-amber-100 text-sm max-w-2xl">
      リモコンにエラーコードが表示されたら、まずは下記から該当メーカーのコードをご確認ください。
      <strong class="text-white">自己解決できるものと、修理が必要なものを分かりやすく分類しています。</strong>
    </p>
  </div>
</section>

<!-- メーカー選択タブ -->
<section class="py-6 px-4 bg-white sticky top-[60px] md:top-[105px] z-30 shadow-sm border-b">
  <div class="max-w-5xl mx-auto">
    <p class="text-xs text-gray-500 mb-2 font-medium">メーカーを選択してください：</p>
    <div class="flex flex-wrap gap-2" id="maker-tabs">
      <button onclick="showMaker('panasonic')" class="maker-tab active px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="panasonic">Panasonic</button>
      <button onclick="showMaker('mitsubishi')" class="maker-tab px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="mitsubishi">三菱電機</button>
      <button onclick="showMaker('hitachi')" class="maker-tab px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="hitachi">日立</button>
      <button onclick="showMaker('toshiba')" class="maker-tab px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="toshiba">東芝</button>
      <button onclick="showMaker('daikin')" class="maker-tab px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="daikin">ダイキン</button>
      <button onclick="showMaker('corona')" class="maker-tab px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="corona">コロナ</button>
      <button onclick="showMaker('noritz')" class="maker-tab px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-all" data-maker="noritz">ノーリツ</button>
    </div>
  </div>
</section>

<!-- 判断基準 -->
<section class="py-6 px-4 bg-amber-50 border-b border-amber-200">
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-wrap gap-4 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-green-500"></span>
        <span><strong class="text-green-700">緑</strong> ＝ お客様で対処可能（リセット等）</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
        <span><strong class="text-amber-700">黄</strong> ＝ 改善しなければ修理依頼</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-red-500"></span>
        <span><strong class="text-red-700">赤</strong> ＝ 専門業者による修理が必要</span>
      </div>
    </div>
  </div>
</section>

<!-- エラーコードテーブル -->
<section class="py-8 px-4">
  <div class="max-w-5xl mx-auto">

    <!-- Panasonic -->
    <div id="maker-panasonic" class="maker-content">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-blue-600 rounded-full"></span>Panasonic エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">U22</td><td class="px-3 py-2">断水検知・ふろ循環異常</td><td class="px-3 py-2">浴槽の栓確認、フィルター清掃</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">U51</td><td class="px-3 py-2">浴槽排水栓忘れ検知</td><td class="px-3 py-2">浴槽の排水栓を閉める</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">U53</td><td class="px-3 py-2">浴槽満水検知</td><td class="px-3 py-2">湯量設定の確認</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">U54</td><td class="px-3 py-2">初回残湯なし</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">U55</td><td class="px-3 py-2">タンク内湯なし（湯切れ）</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">F12</td><td class="px-3 py-2">圧力スイッチ異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">F24</td><td class="px-3 py-2">冷凍サイクル異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">F27</td><td class="px-3 py-2">圧力スイッチ(HPS)異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">F36</td><td class="px-3 py-2">外気温サーミスタ異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">F38</td><td class="px-3 py-2">残湯サーミスタ異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">F40</td><td class="px-3 py-2">吐出管サーミスタ異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">F67</td><td class="px-3 py-2">積層プリント基板間通信異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H18</td><td class="px-3 py-2">暖房水漏れ異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H25</td><td class="px-3 py-2">ふろフロースイッチ異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H29</td><td class="px-3 py-2">酸素運転時の異常（酸素ファン異常）</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H56</td><td class="px-3 py-2">ふろ混合弁異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H59</td><td class="px-3 py-2">給湯混合弁異常</td><td class="px-3 py-2">専門業者による点検・修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 三菱電機 -->
    <div id="maker-mitsubishi" class="maker-content hidden">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-600 rounded-full"></span>三菱電機 エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">P00</td><td class="px-3 py-2">給湯温度異常（給湯サーミスタ）</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">P01</td><td class="px-3 py-2">風呂サーミスタ異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">P05</td><td class="px-3 py-2">風呂の湯はりに時間がかかりすぎ</td><td class="px-3 py-2">浴槽の栓確認、フィルター清掃</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">P10</td><td class="px-3 py-2">湯はり後に残湯量不足</td><td class="px-3 py-2">沸き増し設定を確認</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">P11</td><td class="px-3 py-2">追い焚き時の湯はり異常</td><td class="px-3 py-2">浴槽フィルター清掃</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">P20</td><td class="px-3 py-2">給水サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">P21</td><td class="px-3 py-2">残湯サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">P35</td><td class="px-3 py-2">給湯混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">P36</td><td class="px-3 py-2">ふろ自動時の熱源機異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">P60</td><td class="px-3 py-2">UV-LEDユニット不点灯</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">C03</td><td class="px-3 py-2">高圧異常（HP内圧力上昇）</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">C09</td><td class="px-3 py-2">圧縮機電流異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">C17</td><td class="px-3 py-2">ヒートポンプ配管の凍結検知</td><td class="px-3 py-2">気温上昇後に自動復旧→しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">C19</td><td class="px-3 py-2">沸き上げ温度異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">C20</td><td class="px-3 py-2">HP出湯サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H01</td><td class="px-3 py-2">リモコンとタンクユニット間の通信異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 日立 -->
    <div id="maker-hitachi" class="maker-content hidden">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-500 rounded-full"></span>日立（HITACHI）エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">Er01</td><td class="px-3 py-2">風呂サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">Er02</td><td class="px-3 py-2">給湯温度サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">Er12</td><td class="px-3 py-2">HPユニット通信異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">Er15</td><td class="px-3 py-2">ふろフロースイッチ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">Er24</td><td class="px-3 py-2">冷媒吐出温度異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">Er25</td><td class="px-3 py-2">凍結予防運転中の異常</td><td class="px-3 py-2">気温上昇後に復旧→しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">Er26</td><td class="px-3 py-2">圧力スイッチ作動（高圧異常）</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">Er56</td><td class="px-3 py-2">混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">HE15</td><td class="px-3 py-2">ファンモータロック</td><td class="px-3 py-2">周囲の障害物確認→修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">HE20</td><td class="px-3 py-2">水位センサー異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">U03</td><td class="px-3 py-2">湯切れ</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">U05</td><td class="px-3 py-2">浴槽の栓忘れ検知</td><td class="px-3 py-2">浴槽の栓を閉める</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 東芝 -->
    <div id="maker-toshiba" class="maker-content hidden">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-red-700 rounded-full"></span>東芝（TOSHIBA）エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">U20</td><td class="px-3 py-2">お風呂の湯はりが出来ない（循環異常）</td><td class="px-3 py-2">浴槽の栓・フィルター確認</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">U22</td><td class="px-3 py-2">湯切れ検知</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">U25</td><td class="px-3 py-2">浴槽の排水栓忘れ</td><td class="px-3 py-2">浴槽の栓を閉める</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">U27</td><td class="px-3 py-2">湯はり中に水位上昇しない</td><td class="px-3 py-2">浴槽の栓確認→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">E1</td><td class="px-3 py-2">圧縮機過電流</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">E6</td><td class="px-3 py-2">圧縮機ロック</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">E8</td><td class="px-3 py-2">圧縮機過負荷</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">E11</td><td class="px-3 py-2">外気温サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">E29</td><td class="px-3 py-2">ヒートポンプ〜タンク通信異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H1</td><td class="px-3 py-2">給湯温度異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H3</td><td class="px-3 py-2">高圧圧力スイッチ作動</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H6</td><td class="px-3 py-2">給湯混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ダイキン -->
    <div id="maker-daikin" class="maker-content hidden">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-blue-600 rounded-full"></span>ダイキン（DAIKIN）エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">C15</td><td class="px-3 py-2">浴槽の栓忘れ検知</td><td class="px-3 py-2">浴槽の栓を閉める</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">C16</td><td class="px-3 py-2">浴槽水の循環判定不能</td><td class="px-3 py-2">フィルター清掃、栓確認</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">C45</td><td class="px-3 py-2">湯切れ検知</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">C55</td><td class="px-3 py-2">浴槽水が多い（おいだき中の水位異常）</td><td class="px-3 py-2">湯量設定の確認</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">E7</td><td class="px-3 py-2">ファンモーター異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">F3</td><td class="px-3 py-2">吐出管温度異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">F38</td><td class="px-3 py-2">残湯温度異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H3</td><td class="px-3 py-2">高圧圧力スイッチ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H54</td><td class="px-3 py-2">三方弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H56</td><td class="px-3 py-2">ふろ混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">J3</td><td class="px-3 py-2">吐出管サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">L5</td><td class="px-3 py-2">圧縮機ロック（過電流）</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- コロナ -->
    <div id="maker-corona" class="maker-content hidden">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-blue-700 rounded-full"></span>コロナ（CORONA）エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">E01</td><td class="px-3 py-2">缶体サーミスタ1の故障</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">E02</td><td class="px-3 py-2">缶体サーミスタ2の故障</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">E14</td><td class="px-3 py-2">ふろサーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">E16</td><td class="px-3 py-2">給湯混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">E24</td><td class="px-3 py-2">ふろ循環異常（湯はり不良）</td><td class="px-3 py-2">浴槽栓確認→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">E31</td><td class="px-3 py-2">湯切れ検知</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H04</td><td class="px-3 py-2">高圧異常（圧力スイッチ作動）</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H15</td><td class="px-3 py-2">ファンモータ異常（積雪・凍結）</td><td class="px-3 py-2">積雪除去→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H16</td><td class="px-3 py-2">圧縮機ロック</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H20</td><td class="px-3 py-2">排水栓閉め忘れ</td><td class="px-3 py-2">浴槽の排水栓を閉める</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H22</td><td class="px-3 py-2">水系循環異常</td><td class="px-3 py-2">フィルター清掃→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ノーリツ -->
    <div id="maker-noritz" class="maker-content hidden">
      <h2 class="text-xl font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-8 bg-green-600 rounded-full"></span>ノーリツ エラーコード一覧
      </h2>
      <div class="overflow-x-auto rounded-xl border border-gray-200">
        <table class="w-full text-sm">
          <thead class="bg-gray-100"><tr><th class="px-3 py-2 text-left font-bold w-20">コード</th><th class="px-3 py-2 text-left font-bold">症状・原因</th><th class="px-3 py-2 text-left font-bold w-32">対処法</th><th class="px-3 py-2 text-center font-bold w-16">判定</th></tr></thead>
          <tbody class="divide-y divide-gray-100">
            <tr><td class="px-3 py-2 font-mono font-bold">032</td><td class="px-3 py-2">湯切れ</td><td class="px-3 py-2">沸き増し運転を実行</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">F16</td><td class="px-3 py-2">沸き上げ温度高温異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H14</td><td class="px-3 py-2">HP〜タンク通信異常</td><td class="px-3 py-2">電源リセット→改善しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H30</td><td class="px-3 py-2">給水サーミスタ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">H56</td><td class="px-3 py-2">ふろ混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">H59</td><td class="px-3 py-2">給湯混合弁異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">C09</td><td class="px-3 py-2">圧縮機過電流</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">C17</td><td class="px-3 py-2">配管凍結検知</td><td class="px-3 py-2">気温上昇後に復旧→しなければ修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span></td></tr>
            <tr><td class="px-3 py-2 font-mono font-bold">562</td><td class="px-3 py-2">風呂循環ポンプ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
            <tr class="bg-gray-50"><td class="px-3 py-2 font-mono font-bold">722</td><td class="px-3 py-2">フロースイッチ異常</td><td class="px-3 py-2">専門業者による修理</td><td class="px-3 py-2 text-center"><span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- エラーリセット方法 -->
    <div class="mt-10 bg-sky-50 rounded-2xl border-2 border-sky-200 p-6">
      <h3 class="text-lg font-black mb-3"><i class="fas fa-redo text-sky-500 mr-2"></i>エラーコードのリセット方法（共通）</h3>
      <ol class="space-y-2 text-sm">
        <li class="flex items-start gap-2"><span class="bg-sky-200 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>リモコンのエラーコードをメモしてください</li>
        <li class="flex items-start gap-2"><span class="bg-sky-200 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>エコキュート本体の<strong>漏電ブレーカー</strong>をOFFにします（1分以上待つ）</li>
        <li class="flex items-start gap-2"><span class="bg-sky-200 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>再度ブレーカーをONにし、リモコンの表示を確認</li>
        <li class="flex items-start gap-2"><span class="bg-sky-200 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>エラーが再表示される場合は<strong>修理が必要</strong>です → 当店にご連絡ください</li>
      </ol>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 px-4 bg-gradient-to-br from-sky-700 to-sky-900 text-white">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-xl md:text-2xl font-black mb-3">エラーが解消しない場合は<br>お気軽にご連絡ください</h2>
    <p class="text-sky-200 text-sm mb-5">エラーコードをお伝えいただければ、修理の可否や概算費用をご案内できます</p>
    <a href="tel:05017201813" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:from-orange-600 hover:to-red-600 transition-all active:scale-95">
      <i class="fas fa-phone-alt"></i>
      <span>050-1720-1813</span>
    </a>
  </div>
</section>

<style>
  .maker-tab { border-color: #d1d5db; color: #6b7280; background: white; }
  .maker-tab.active { border-color: #f97316; color: #f97316; background: #fff7ed; }
  .maker-tab:hover:not(.active) { border-color: #9ca3af; }
</style>

<script>
function showMaker(maker) {
  document.querySelectorAll('.maker-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.maker-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('maker-' + maker).classList.remove('hidden');
  document.querySelector('[data-maker="' + maker + '"]').classList.add('active');
}
</script>
`

  return c.html(layout({
    title: 'エコキュート エラーコード一覧【全メーカー対応】｜袋井市のエコキュート専門店',
    description: 'Panasonic・三菱電機・日立・東芝・ダイキン・コロナ・ノーリツのエコキュートエラーコード一覧。自己解決可能か修理が必要かを色分けで判定。袋井市の専門店が対処法を詳しく解説。',
    canonical: 'https://estech-ecocute.pages.dev/error-codes'
  }, content))
}
