我們與珵的大冒險 PWA v5.6.1 · Compact Pinned Route Map · Public Browse / Family Modify

主要功能：
- 未登入也可瀏覽首頁、完整 Day 1–5 行程、Checklist 與伴手禮
- 新增旅遊資訊中心：緊急醫療、航班、飯店救援卡、匯率與私人資料入口
- 緊急頁含 119／110／福岡 #7119／JNTO、日文求助卡、醫療院所搜尋與失聯／災害流程
- 航班中心整理 BR106／BR105，並連到長榮、福岡機場與 Visit Japan Web 官方頁面
- 飯店救援卡含 Quintessa 日／英文地址、電話、導航、複製與給司機看的大字卡
- 首頁原「出發文件與航班／旅途中快速支援」區塊改為可直接操作的 JPY ↔ TWD 匯率換算；航班、緊急醫療與重要文件入口移至首頁快速入口
- 匯率換算仍保留獨立 ?page=exchange 工具頁，並支援每日匯率、離線最後匯率、手動匯率與 1.5%／3% 緩衝
- 行程頁上方新增釘選內嵌地圖；下滑時間軸時地圖持續顯示，點整張行程卡片即可更新起點、目的地、道路折線、距離與預估車程，不再需要另外點路線按鈕
- 內嵌路線預設以上一個不同地點為起點；上一站、目前位置、查看與導航已精簡成同一排操作。只有點選目前位置時才會請求定位權限，座標會交給 OSRM 做本次計算但不會寫入網站資料
- 內嵌地圖使用 Leaflet、OpenStreetMap 與 OSRM；Google Maps 路線圖與導航保留為即時路況與服務失敗時的備援
- 行程卡新增親子設施提示：育嬰／尿布、電梯／推車、休息與叫車撤退
- 只有已授權家人帳號可新增、勾選、修改、排序或刪除共同資料
- 「家人醫療與預約」同步 MEDIF、醫療、保險與預約狀態，只限家人帳號讀寫
- 「重要資料」、私人 Drive 捷徑、privateStatus 與行程備份維持家人登入保護
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

Firestore Rules 已分層：目前旅程 fukuoka-2026-family 的 itinerary、checklist、gifts 公開唯讀；家人可寫入；privateStatus、itineraryBackups 與其他子集合維持家人專用。

GitHub Pages 更新時請至少上傳：index.html、sw.js；並把 firestore-secure.rules 內容發布到 Firebase Console → Firestore Database → Rules。
第一次開新版可使用 ?v=561。


「修改模式」預設關閉，不顯示新增／修改／排序／刪除／AI／備份工具。已授權家人登入後，在行程頁右上角按「✏️ 修改模式」才會顯示全部編輯工具；按「✓ 完成修改」回到一般模式。重新載入 PWA 會預設回到一般模式。
