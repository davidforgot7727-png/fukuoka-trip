我們與珵的大冒險 PWA v5.2.5 · Public Browse / Family Modify · Important Data Secure

主要功能：
- 未登入也可瀏覽首頁、完整 Day 1–5 行程、Checklist 與伴手禮
- 只有已授權家人帳號可新增、勾選、修改、排序或刪除共同資料
- 「重要資料」、私人 Drive 捷徑與行程備份維持家人登入保護
- 三個家人 Google 白名單帳號登入
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
1. 行程頁登入已授權的家人 Google 帳號。
2. 按「🤖 AI 整理」。
3. 選「複製這一天 Prompt」或「複製完整 5 天」。
4. 到 ChatGPT 貼上，要求整理。Prompt 已要求 AI 最後回傳固定 JSON。
5. 把 AI 回覆整段複製。
6. 回 PWA 按「📥 AI 匯回」，貼入內容。
7. 按「預覽匯入」。
8. 確認日別與項目數後按「套用 AI 整理結果」。
9. 若不滿意，可用該日的「最近備份」還原。

第一次由白名單家人登入後，網站會自動把內建 Day 1–5 原始行程寫入 Firestore itinerary collection。
之後任何已授權家人在手機或電腦修改，其他裝置會即時同步最新公開內容。

Firestore Rules 已分層：目前旅程 fukuoka-2026-family 的 itinerary、checklist、gifts 公開唯讀；家人可寫入；其他旅程、itineraryBackups 與其他子集合維持家人專用。

GitHub Pages 更新時請至少上傳：index.html、sw.js；並把 firestore-secure.rules 內容發布到 Firebase Console → Firestore Database → Rules。
第一次開新版可使用 ?v=525。


「修改模式」預設關閉，不顯示新增／修改／排序／刪除／AI／備份工具。已授權家人登入後，在行程頁右上角按「✏️ 修改模式」才會顯示全部編輯工具；按「✓ 完成修改」回到一般模式。重新載入 PWA 會預設回到一般模式。
