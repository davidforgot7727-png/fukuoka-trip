福岡親子旅 PWA v4.8 Browse / Modify Mode · AI Itinerary Bridge · Family Secure

主要功能：
- Derek / Jo Google 白名單登入
- Day 1–5 行程可直接新增、修改、刪除、複製、上移／下移
- Day 4 晴天與雨天行程分開編輯
- AI 行程橋接：可匯出目前一天或完整 5 天 Prompt 給 ChatGPT 整理
- AI 回覆可直接貼回網站，支援純 JSON 或含 ```json 程式碼區塊的整段回覆
- 匯回前先預覽日別與項目數，正式套用前自動保存最近備份
- 可從 .json / .txt 檔案匯入 AI 結果
- AI 匯出不包含 Google 帳號、Firebase 設定、護照／Visit Japan／Google Drive 重要資料捷徑
- 每次手動修改前自動保存「最近備份」
- 可一鍵還原最近備份或網站原始行程
- 首頁「下一站」會自動讀取修改後的 Firestore 行程
- Checklist / 伴手禮 / Google Drive 重要資料功能保留
- Firestore 離線持久化保留

AI 使用方式：
1. 行程頁登入 Derek / Jo。
2. 按「🤖 AI 整理」。
3. 選「複製這一天 Prompt」或「複製完整 5 天」。
4. 到 ChatGPT 貼上，要求整理。Prompt 已要求 AI 最後回傳固定 JSON。
5. 把 AI 回覆整段複製。
6. 回 PWA 按「📥 AI 匯回」，貼入內容。
7. 按「預覽匯入」。
8. 確認日別與項目數後按「套用 AI 整理結果」。
9. 若不滿意，可用該日的「最近備份」還原。

第一次由白名單家人登入後，網站會自動把內建 Day 1–5 原始行程寫入 Firestore itinerary collection。
之後 Derek 與 Jo 在手機或電腦修改，其他已登入裝置會即時同步。

Firestore Rules 不需要另外增加 AI 或 itinerary 規則，現有 trips/{tripId}/{document=**} 家人白名單規則已涵蓋 itinerary 與 itineraryBackups。

GitHub Pages 更新時請至少上傳：index.html、sw.js。建議整包覆蓋。
第一次開新版可使用 ?v=47。


v4.8 新增「修改模式」：預設為一般瀏覽模式，不顯示新增／修改／排序／刪除／AI／備份工具。Derek 或 Jo 登入後，在行程頁右上角按「✏️ 修改模式」才會顯示全部編輯工具；按「✓ 完成修改」回到一般模式。重新載入 PWA 會預設回到一般模式。
