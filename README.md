# 我們與珵的大冒險｜福岡 2026

供家人共同規劃、旅途中隨手查閱的福岡五天四夜旅行 PWA。整合每日行程、釘選路線地圖、共同清單、伴手禮、折價券與私人文件捷徑，兼顧電腦規劃與手機現場使用。

**旅行日期：2026/09/09–2026/09/13** · **介面：繁體中文** · **目前 Service Worker 版本：5.8.2**

[開啟旅行網站](https://davidforgot7727-png.github.io/fukuoka-trip/) · [產品定位](PRODUCT.md) · [設計文件](DESIGN.md)

## 主要功能

| 功能 | 說明 |
| --- | --- |
| 首頁與下一站 | 出發倒數、當日行程提示、福岡天氣與常用入口；下一站會使用同步後的行程資料 |
| 五日行程 | 每日時間軸、目前行程標示、地點照片與親子設施提示；Day 4 可切換完整晴天／雨天版本 |
| 釘選路線地圖 | 點選行程卡片更新路線、距離與預估車程；可用上一站或目前位置當起點，另有 Google Maps 查看／導航 |
| 行程共同編輯 | 授權家人可新增、修改、刪除、複製、上下排序；修改前保留該日／模式的最近備份 |
| AI 行程橋接 | 分別匯出討論資料與匯回格式，支援貼上 JSON、程式碼區塊或匯入 `.json`／`.txt`，預覽後套用 |
| Checklist | 分頁管理、完成勾選、單筆及整頁跨分頁複製，顯示修改者與同步狀態 |
| 伴手禮 | 送禮模式按收禮人整理、購物模式按店家整理；記錄品項、優先順序、數量、預算與採買狀態 |
| 家人折價券夾 | 貼上、拖曳或從相簿選圖，依店家收折，支援期限、網址、備註與放大掃碼 |
| 旅遊資訊中心 | 緊急求助與日文求助卡、航班官方入口、飯店地址／電話與司機大字卡 |
| 日幣／台幣換算 | 雙向換算、每日參考匯率、手動匯率、最近成功匯率與 1.5%／3% 緩衝 |
| 家人私人資料 | 醫療、保險與預約狀態，以及 Google Drive 文件捷徑，限授權家人讀寫 |
| PWA | 安裝到主畫面、應用程式外殼快取與 Firestore 離線持久化 |

## 內建行程概覽

以下是程式內建的初始安排；家人修改後，網站會優先顯示 Firestore 同步資料。

| 日期 | 行程主題 |
| --- | --- |
| Day 1 · 09/09 | 前往福岡、LaLaport、喜水丸、入住飯店 |
| Day 2 · 09/10 | 麵包超人兒童博物館、櫛田神社彈性行程、飯店休息、燒肉 |
| Day 3 · 09/11 | Marine World 海之中道、海豚／海獅秀、飯店休息、藥院周邊晚餐 |
| Day 4 · 09/12 | 晴天安排大濠公園；雨天改天神室內活動，兩版均保留敘敘苑與岩田屋主線 |
| Day 5 · 09/13 | 退房、福岡機場、返台 |

時間欄位支援 `TW`（台灣）與 `JP`（日本），目前行程判斷會處理兩地時差。航班、預約及景點資訊屬行程紀錄，不代表即時營運查詢結果。

## 使用方式

### 瀏覽與共同修改

1. 開啟網站，可直接瀏覽行程、共同清單及伴手禮。
2. 需要修改或開啟家人專用頁面時，使用已授權的 Google 帳號登入。
3. 在行程頁按「修改模式」，才會顯示新增、排序、AI 及備份工具。
4. 完成後按「完成修改」。重新載入會回到一般模式。

家人權限由 Firestore 安全規則驗證；登入任意 Google 帳號不會自動取得修改權限。首次由家人啟動行程同步且資料庫尚無行程時，程式會建立內建行程資料。

### AI 討論與匯回

此功能不直接呼叫 AI API，也不需要 AI API Key。

1. 登入後開啟行程「修改模式」→「AI 討論」。
2. 複製單日或完整五天的「討論用資料」，貼到 ChatGPT 等 AI 工具進行討論。
3. 討論定案後，再複製「匯回格式」，請 AI 依最終方案輸出 JSON。
4. 回網站「AI 匯回」，貼上回覆或選擇 `.json`／`.txt` 檔案。
5. 按「預覽匯入」，確認受影響的日別、模式與項目數，再套用。

格式識別碼為 `fukuoka-itinerary-ai-v1`。Day 1、2、3、5 使用 `sun`；Day 4 的 `sun`／`rain` 是兩份獨立行程。每個匯入的日別／模式會替換該組行程，應提供該組完整項目，不是只提供單筆差異。

套用前會保存受影響組別的最近備份，可用「最近備份」還原；「還原原始」則回到程式內建行程。最近備份是單一還原點，不是完整版本歷史。

匯出程式排除了 Google 帳號、Firebase 設定與私人文件捷徑；自行填入行程說明的內容仍會隨行程匯出。

### 折價券夾

登入家人帳號後，可從旅遊資訊中心開啟折價券夾。選圖後會先在裝置縮圖，補上名稱、店家、期限、優惠網址與提醒，再儲存給家人共用。

- 檔案選擇器支援 PNG、JPEG、WebP；原始圖片上限 15 MB。
- 前端最多保存 24 張；縮圖後的圖片 Data URL 目標上限為 550,000 字元。
- 圖片存於 Firestore `coupons` 文件，不使用 Firebase Storage。
- 點圖片可放大供店員掃碼；期限標記只依填寫日期判斷，不會向店家驗證優惠。

## 技術與目錄

純靜態前端，沒有 `package.json`、npm 建置流程或自建後端。主要 HTML、CSS、JavaScript 與初始行程集中在 `index.html`。

| 檔案／目錄 | 用途 |
| --- | --- |
| `index.html` | 頁面、樣式、路由、初始行程、Firebase 連線與各功能邏輯 |
| `manifest.json` | PWA 名稱、圖示、顯示模式、啟動路徑及捷徑 |
| `sw.js` | 外殼預快取、執行期快取、版本更新與離線回退 |
| `firestore-secure.rules` | 家人白名單與公開／私人資料存取規則 |
| `assets/plates/` | 家庭與每日景點插畫、紙張紋理及其他設計素材 |
| `assets/fonts/` | 字型、子集 WOFF 與字型授權文件 |
| `icons/` | PWA、maskable 與 Apple Touch 圖示 |
| `PRODUCT.md`、`DESIGN.md` | 產品定位與設計方向；部分版本描述早於現行實作 |
| `README-PWA.txt` | 舊版功能與 PWA 說明 |
| `SETUP-v4.5-GOOGLE-SECURE.txt` | Firebase／Google 登入與私人資料設定說明 |
| `AI-ITINERARY-GUIDE.txt` | AI 橋接補充文件；目前操作流程以上方說明及介面為準 |
| `fukuoka-trip-github-pages-v4.0-pwa.zip` | v4.0 歷史封裝，不是目前部署來源 |

`assets/1`、`assets/fonts/1`、`assets/plates/2` 與 `icons/123` 為空白占位檔。部署應採用根目錄現行檔案，避免用舊 ZIP 覆蓋。

外部服務使用 Firebase JavaScript SDK compat **12.18.0**、Leaflet **1.9.4**、OpenStreetMap 圖磚、OSRM 駕車路線、Open-Meteo 天氣，以及 ExchangeRate-API 的 JPY 參考匯率。Google Maps、Uber／GO、航空公司及 Google Drive 以外部連結銜接。

## 本機預覽

已安裝 Git 與 Python 3 的環境可執行：

```sh
git clone https://github.com/davidforgot7727-png/fukuoka-trip.git
cd fukuoka-trip
python -m http.server 8000 --bind 127.0.0.1
```

開啟 `http://localhost:8000/`。請使用 HTTP localhost 或 HTTPS，避免直接以 `file://` 開啟而讓 Service Worker、登入等功能無法正常運作。本機登入也需要 Firebase 允許該網域。

複製此專案建立另一個網站時，先改用自己的 Firebase 專案與旅程識別碼，避免修改到原站共用資料。

## Firebase 設定與資料權限

1. 建立 Firebase Web App 與 Cloud Firestore，將 Web App 設定填入 `index.html` 的 `FIREBASE_CONFIG`。
2. 在 Authentication 啟用 Google 登入，加入實際網站網域到 Authorized domains。
3. 確認程式的 `SHARED_TRIP_ID`，目前為 `fukuoka-2026-family`。
4. 在 `firestore-secure.rules` 設定家人 Google 帳號白名單；更換公開旅程 ID 時，同步調整 `isPublicTrip()`。
5. 將規則發布到 Firebase Console → Firestore Database → Rules。

**把 `.rules` 檔提交到 GitHub 不會自動更新 Firebase 規則。** 以下是儲存庫規則的設計，實際存取仍取決於 Firebase 已發布的規則。

資料均位於 `trips/{tripId}/`：

| 子集合／文件 | 一般訪客 | 授權家人 |
| --- | --- | --- |
| `itinerary` | 目前公開旅程可讀 | 讀寫 |
| `checklist` | 目前公開旅程可讀 | 讀寫 |
| `gifts` | 目前公開旅程可讀 | 讀寫 |
| `itineraryBackups` | 不可讀寫 | 讀寫 |
| `privateStatus/family` | 不可讀寫 | 讀寫；含私人狀態與共用 Drive 捷徑 |
| `coupons` | 不可讀寫 | 讀寫；由家人專用的通用子路徑規則涵蓋 |

家人帳號需登入且 Email 已驗證。公開行程、清單與伴手禮資料可被訪客讀取；私人文件本體放在受限制分享的 Google Drive，網站只同步其捷徑與相關欄位。

## GitHub Pages 部署與更新

1. 將 `index.html`、`manifest.json`、`sw.js`、`icons/`、`assets/` 保留在儲存庫根目錄。
2. 在 GitHub **Settings → Pages** 選擇從分支部署，來源為 `main` 的根目錄 `/ (root)`。
3. 等待 Pages 部署完成，再開啟網站。
4. 若修改 Firebase 規則，另行在 Firebase Console 發布。

更新應用程式或本機資源時，檢查 `sw.js` 的 `VERSION`、`APP_SHELL` 與 HTML／manifest 的資源路徑。現行版本為 `5.8.2`，manifest 查詢版本為 `v=582`；字型另使用 `v=523`。新增或刪除預快取資源時，需同步調整清單，任何必要檔案 404 都可能導致安裝失敗。

更新後若仍看到舊介面，可重新整理或關閉後重開 PWA。清除網站資料會影響本機偏好與離線資料，操作前先確認資料已同步。

常用直達入口：`?page=trip&day=1`、`?page=checklist`、`?page=gifts`、`?page=more`、`?page=emergency`、`?page=flight`、`?page=hotel`、`?page=exchange`、`?page=secure`、`?page=family`、`?page=coupons`。

## 安裝與離線範圍

- Android Chrome：瀏覽器選單 → 安裝應用程式／加到主畫面。
- iPhone Safari：分享 → 加入主畫面。
- 電腦 Chrome／Edge：網址列安裝圖示，或網站「更多」中的安裝入口。

首次需連網載入並完成快取。Service Worker 預快取頁面、圖示、目前使用的字型與每日插畫；頁面導覽採網路優先，失敗時回到快取。其他可快取資源會在瀏覽時建立執行期快取。

| 內容 | 離線行為 |
| --- | --- |
| 內建行程、緊急求助卡、飯店卡 | 外殼已成功快取後可讀取 |
| Firestore 共同／私人資料 | 嘗試啟用多分頁持久化；取決於先前同步、瀏覽器支援與登入授權狀態 |
| 匯率 | localStorage 保留最近成功資料，亦可手動輸入 |
| 天氣、OSRM 路線、首次登入、外部網站 | 需要網路；不由 Service Worker 快取這些動態 API |
| 地圖圖磚、外部照片與 CDN 資源 | 可能已有執行期快取，但不保證完整離線可用 |
| Drive 文件本體 | 網站不預覽或快取，仍由 Drive 控制存取 |

家人授權會向伺服器確認，因此離線重新開啟不保證可進入私人頁面。文件捷徑另有依使用者 UID 分隔的 localStorage 備份；登出不等同清除所有裝置快取。

只有按「目前位置」才會請求定位；座標傳給 OSRM 計算當次路線，程式不將其寫入 localStorage 或 Firestore。

## 維護與檢查

目前沒有自動化測試套件。修改功能後，建議實際確認：

- 手機及桌面主要頁面、底部導覽、返回操作與 Day 4 晴雨切換。
- 訪客唯讀、家人登入、非家人拒絕寫入與私人頁面存取。
- 行程修改、AI 匯入預覽、最近備份及多裝置同步。
- 折價券圖片、店家收折、優惠網址與放大顯示。
- PWA 安裝、更新、離線重新開啟與外部服務失敗回退。

本 README 依儲存庫 v5.8.2 程式與文件整理，不代表已驗證線上 Firebase 設定或所有裝置功能。

## 字型與素材授權

辰宇落雁及 Yozai 字型採 SIL Open Font License 1.1，詳見 [辰宇落雁授權](assets/fonts/LICENSE-ChenYuLuoYan.txt) 與 [Yozai 授權](assets/fonts/LICENSE-Yozai.txt)。外部照片來源記錄於 `index.html` 的 `SOURCES` 與行程項目；素材使用權需依各來源授權確認。

儲存庫目前未附整體程式碼授權檔，不能將公開可讀視為已採用 MIT 或其他開源授權。
