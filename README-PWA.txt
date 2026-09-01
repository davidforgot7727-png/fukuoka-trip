福岡親子旅 PWA v4.6 Editable Itinerary · Family Secure

主要功能：
- Derek / Jo Google 白名單登入
- Day 1–5 行程可直接新增、修改、刪除、複製、上移／下移
- Day 4 晴天與雨天行程分開編輯
- 每次修改前自動保存「最近備份」
- 可一鍵還原最近備份或網站原始行程
- 首頁「下一站」會自動讀取修改後的 Firestore 行程
- Checklist / 伴手禮 / Google Drive 重要資料功能保留
- Firestore 離線持久化保留

第一次由白名單家人登入後，網站會自動把內建 Day 1–5 原始行程寫入 Firestore 的 itinerary collection。
之後 Derek 與 Jo 在手機或電腦修改，其他已登入裝置會即時同步。

Firestore Rules 不需要另外增加 itinerary 規則，現有 trips/{tripId}/{document=**} 家人白名單規則已包含 itinerary 與 itineraryBackups。

GitHub Pages 更新時請至少上傳：index.html、sw.js。建議整包覆蓋。
第一次開新版可使用 ?v=46。
