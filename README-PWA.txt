福岡親子旅 v4.0 PWA｜GitHub Pages 上傳方式

1. 將 ZIP 解壓後的所有檔案「維持資料夾結構」上傳到原 GitHub Pages repository 根目錄。
2. index.html、manifest.json、sw.js 要在同一層；icons 資料夾不要拆開。
3. Commit 後等 GitHub Pages 部署完成。
4. Android Chrome 開啟網站，右上角 ⋮ → 安裝應用程式；或到網站「更多 → 安裝與離線」按安裝。
5. 第一次安裝與第一次 Firebase 登入需要網路。之後已開過的行程頁可由 Service Worker 快取；Firestore 已啟用瀏覽器離線持久化，支援可用時同步。
6. 若看到舊版，先用 ?v=40 開啟一次；PWA Service Worker 版本為 4.0.0。

重要：即時天氣、Google Maps、Uber/GO 及尚未載入過的外部照片仍需要網路。
