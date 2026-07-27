# demo-bank

跨語言、跨框架、跨平台的個人範例程式集。

> 🇬🇧 **English version: [README.md](README.md)**（英文為主要版本）

本文件是一份**重新分類規劃**。內容包含目前的專案現況、現行目錄結構的問題，以及建議的目標結構。
目前尚未搬動任何程式碼。

---

## 1. 現況

27 個範例專案，1,304 個受版控檔案，分布於 8 個頂層目錄。

| 目錄        | 專案數 | 受版控檔案 | 備註 |
|-------------|------:|----------:|------|
| `bash/`     | 1     | 1         | 只有一個散落的腳本，稱不上專案 |
| `compiler/` | 1     | 7         | `nanoc` — 實際上是 Node.js 專案 |
| `cpp/`      | 4     | 31        | CMake 與 MSVC 方案混用 |
| `java/`     | 5     | 173       | 全部使用 Gradle |
| `mcu/`      | 0     | 0         | **空目錄** |
| `nodejs/`   | 6     | 866       | 其中 558 個是樣板的圖片資源 |
| `quartus/`  | 0     | 0         | **空目錄**（`quartus/tra1/db` 是空殼） |
| `solidity/` | 9     | 220       | 每個專案同時也是 React／Next.js 應用 |

根目錄沒有 `README.md`、`LICENSE`、`.gitignore`，也沒有任何一份說明這 27 個專案的索引。

### 完整清單

| 目前路徑 | 內容 | 技術堆疊 |
|---|---|---|
| `bash/run.sh` | Shell 腳本片段 — `for` 迴圈、`dirname`、`pwd` | Bash |
| `compiler/nanoc` | 以 EBNF 文法驅動的玩具 C 編譯器前端 | Node.js、`ebnf` |
| `cpp/cpp-basic-cmake-vscode` | 為 VS Code 配置的最小 CMake 專案 | C++、CMake |
| `cpp/cpp-cmake-basic` | CMake 條件式建置；`array`、`hello`、`hook` 三個範例 | C++、CMake |
| `cpp/qt-quick-cmake` | Qt Quick 應用程式搭配共用函式庫，含多語系 | C++、Qt 6、QML、CMake |
| `cpp/sfml-demo` | 2D 遊戲迴圈示範 | C++、SFML、MSVC 方案檔 |
| `java/java-basic` | 語言基礎 — 註解、函數式介面、並行、`volatile`／`transient`／atomic | Java、Gradle |
| `java/springboot-basic` | Spring 核心概念 — IoC、AOP、Bean 生命週期與範圍、條件式注入、Profile、SpEL、XML 設定、JPA（65 個類別） | Spring Boot 2.5、Java 11 |
| `java/springboot-flyway` | 資料庫結構版本遷移 | Spring Boot 3.0、Flyway、H2 |
| `java/springboot-authorization-server` | OAuth2 授權伺服器 | Spring Boot 3.0、Spring Security |
| `java/springboot-vaadin` | 伺服器驅動的 UI 與圖表 | Spring Boot 2.7、Vaadin 23 |
| `nodejs/react-weather-app` | 串接 REST API 的天氣查詢前端 | React（CRA）、axios |
| `nodejs/nextjs-basic` | Next.js 官方教學 — SSG 與 SSR、預先渲染 | Next.js、SWR |
| `nodejs/nextjs-ecommerce` | **外部樣板** 商業電商版型（`lezada-next`） | Next.js、Bootstrap |
| `nodejs/gatsby-basic` | 最小 Gatsby 網站 | Gatsby、Emotion |
| `nodejs/gatsby-starter-blog` | **外部樣板** Gatsby 官方部落格 starter | Gatsby、MDX |
| `nodejs/gatsby-home-site` | **外部樣板** 行銷網站版型（`rewy-gatsby`） | Gatsby、SCSS |
| `solidity/solidity-basic` | `Inbox` 與 `Lottery` 合約 | Solidity、Truffle |
| `solidity/solidity-basic-remix` | 在 Remix 中撰寫的 ERC-165 與代幣實驗 | Solidity、Remix |
| `solidity/solidity-basic-react` | 最小合約搭配瀏覽器錢包串接 | Solidity、React、web3.js |
| `solidity/solidity-campaign` | 只有群眾募資合約，沒有前端 | Solidity、Truffle |
| `solidity/solidity-faucet` | 水龍頭合約，拆分為 `Logger`、`Owned`、`Storage` | Solidity、React、Bulma |
| `solidity/solidity-kickstart` | 具完整介面的群眾募資 dapp | Solidity、Next.js、MUI、ganache |
| `solidity/solidity-marketplace` | 線上課程交易市集 dapp | Solidity、Next.js、Tailwind、web3.js |
| `solidity/solidity-nft-marketplace` | 從零實作 ERC-721，含介面與函式庫 | Solidity、React、Bootstrap |
| `solidity/solidity-openzeppelin` | 基於 OpenZeppelin 的 ERC-1155 | Solidity、OpenZeppelin |

---

## 2. 現行結構的問題

1. **分類軸線不一致。** 七個目錄以*語言或執行環境*命名，`compiler/` 卻以*領域*命名。`nanoc` 是
   Node.js 專案，照多數規則應該放進 `nodejs/`，但那會埋沒它真正值得一看的地方。

2. **`nodejs/` 是執行環境，不是分類。** 它完全沒有說明專案在做什麼。更麻煩的是它並不互斥：九個
   `solidity/` 專案全都帶有 React 或 Next.js 前端，論「Node.js」程度不亞於 `nodejs/` 底下的專案。

3. **語言其實已經寫在專案名稱裡了。** `springboot-basic`、`solidity-faucet`、`cpp-cmake-basic`
   本身就標明了技術堆疊。上層目錄重複了資料夾名稱已經帶有的資訊，等於把最寶貴的一條分類軸線
   花在說第二次同樣的話。

4. **顆粒度不一致。** 一個單檔的隨手腳本（`bash/run.sh`）和一個 433 檔的應用樣板放在同一層級。

5. **兩個目錄是空的。** `mcu/` 完全沒有內容；`quartus/` 只有一個空的 `tra1/db` 空殼。

6. **外部樣板與自己寫的程式無法區分。** `gatsby-home-site`（`rewy-gatsby`）、`nextjs-ecommerce`
   （`lezada-next`）、`gatsby-starter-blog` 都是下載來的樣板。它們的 558 個圖片資源佔了
   **整個儲存庫受版控檔案的 43%**，而且只有 `gatsby-starter-blog` 保留了上游的 `LICENSE`。
   任何人讀這個 repo 都分不出哪些是你寫的程式。

7. **沒有任何東西告訴你這裡有什麼。** 沒有根目錄 README、沒有索引、各專案也沒有說明。要找到
   合適的範例只能一個一個目錄點開。

### 順手值得一併處理的小問題

- `cpp/cpp-basic-cmake-vscode/src/main.exe` 是編譯產物，卻被提交進 git。
- Java group ID 不一致：`springboot-basic` 用 `example.bank`，其餘都用 `demo.bank`。
- `java/java-basic` 提交了 Eclipse 中繼資料（`.project`、`.settings/*.prefs`）。
- 27 個各自獨立的 `.gitignore`，沒有共用的根目錄檔案。
- `cpp/sfml-demo` 使用 MSVC 方案檔，另外三個 C++ 專案則使用 CMake。
- 磁碟上有 2.6 GB 未受版控的 `.next/` 與 `.cache/` 建置產物 — git 已正確忽略，但值得清掉。

---

## 3. 建議的結構

**以領域（domain）分類，語言則由專案名稱承載。**

因為每個專案名稱都已經標明技術堆疊，領域優先的目錄樹能同時提供兩條軸線；而語言優先的目錄樹
等於把同一條軸線講了兩次。領域分類也解決了跨語言專案的歸屬問題 — 一個帶 Next.js 前端的
Solidity 合約專案，明確就是 `blockchain/`，不必在兩種語言之間二選一。

```
demo-bank/
├── README.md                  # 英文版 — 所有專案的索引
├── README.zh-TW.md            # 本文件
├── LICENSE                    # 你自己程式碼的授權
├── THIRD_PARTY.md             # 外部樣板與其上游授權
├── CONTRIBUTING.md            # 命名與結構慣例
├── .gitignore                 # 從 27 個區域檔案提升上來的共用忽略規則
│
├── docs/
│   ├── catalog.md             # 自動產生：可依標籤篩選的完整列表
│   └── conventions.md         # 專案結構規則、README front-matter 綱要
│
├── languages/                 # 語言與執行環境基礎 — 不含應用程式
│   ├── java-basic/
│   ├── bash-basic/            # 來自 bash/run.sh
│   ├── cpp-cmake-basic/
│   └── cpp-basic-cmake-vscode/
│
├── backend/                   # 伺服器端服務與 API
│   ├── springboot-basic/
│   ├── springboot-flyway/
│   ├── springboot-authorization-server/
│   └── springboot-vaadin/
│
├── web/                       # 瀏覽器前端、SSG 與 SSR 網站
│   ├── react-weather-app/
│   ├── nextjs-basic/
│   ├── nextjs-ecommerce/
│   ├── gatsby-basic/
│   ├── gatsby-starter-blog/
│   └── gatsby-home-site/
│
├── blockchain/                # 智慧合約，以及承載它們的 dapp
│   ├── solidity-basic/
│   ├── solidity-basic-remix/
│   ├── solidity-basic-react/
│   ├── solidity-campaign/
│   ├── solidity-faucet/
│   ├── solidity-kickstart/
│   ├── solidity-marketplace/
│   ├── solidity-nft-marketplace/
│   └── solidity-openzeppelin/
│
├── desktop/                   # 原生 GUI 與圖形應用程式
│   ├── qt-quick-cmake/
│   └── sfml-demo/
│
├── tooling/                   # 開發工具、編譯器、程式碼產生器
│   └── nanoc/
│
└── embedded/                  # 保留：MCU 韌體、FPGA／HDL
```

### 空目錄怎麼處理

`mcu/` 與 `quartus/` 沒有任何檔案。兩個選擇：

- **直接刪除。** Git 不會追蹤空目錄，所以它們只存在於你的工作副本，重新 clone 一份根本不會出現。
  等真的有東西要放時再建立即可。
- **保留意圖**，合併成單一 `embedded/` 目錄，放一個 `.gitkeep`，並在 README 寫明未來的規劃。

兩種都可以 — 唯獨不要留著兩個空的頂層目錄，暗示著其實不存在的內容。

### 命名慣例

沿用這個儲存庫目前大致已經遵循的規則：

```
<技術>-<主題>[-<變體>]        全小寫，kebab-case
```

例如 `springboot-flyway`、`solidity-nft-marketplace`、`cpp-cmake-basic`。有兩處建議改名：

| 從 | 改為 | 原因 |
|---|---|---|
| `bash/run.sh` | `languages/bash-basic/` | 把散落的腳本提升為專案目錄 |
| `compiler/nanoc` | `tooling/nanoc/` | `compiler` 是一個只有單一成員的分類 |

### 第二條軸線：專案中繼資料

一棵目錄樹只能表達一條軸線。其餘軸線可以靠每個專案 `README.md` 開頭的 front-matter 區塊補回來：

```yaml
---
title: Spring Boot — Flyway 資料庫遷移
domain: backend
languages: [java]
stack: [spring-boot-3, flyway, h2, gradle]
level: demo          # basic | demo | app | vendor
status: working      # working | broken | archived
origin: original     # original | <上游 URL>
---
```

其中 `level` 是現行目錄樹完全無法表達的區別，卻也是搜尋時最常用到的一項：

- **`basic`** — 語言或框架基礎，不含應用程式（`java-basic`、`bash-basic`）
- **`demo`** — 完整示範單一概念（`springboot-flyway`、`solidity-faucet`）
- **`app`** — 可完整執行的應用程式（`nextjs-ecommerce`、`solidity-marketplace`）
- **`vendor`** — 下載來的外部樣板，不是你的程式碼

每個專案都補上這個區塊之後，就能自動產生 `docs/catalog.md`，也能回答「列出所有 Java demo」或
「哪些專案是外部樣板」這類問題，而不需要一棵自我重複的目錄樹。

### 外部樣板的處理方式

`gatsby-home-site`、`nextjs-ecommerce`、`gatsby-starter-blog` 需要標上 `level: vendor` 與
`origin:` 來源網址，保留上游的 `LICENSE`，並在 `THIRD_PARTY.md` 中列項。

它們也值得再認真評估一次：這三個專案貢獻了 43% 的受版控檔案，但學習價值幾乎都不在那些圖片資源
上。可以考慮改用 git submodule，或乾脆移除、需要時再從上游取回。

---

## 4. 建議的搬遷順序

每個階段都能獨立產生價值，所以你可以在任何一個階段停下來。

**階段 0 — 只補文件，不搬任何東西。**
新增根目錄的 `README.md`、`README.zh-TW.md`、`LICENSE`、`.gitignore` 與 `THIRD_PARTY.md`。
光是這一步就解決了「找不到東西」的問題，而那是目前最痛的一點。

**階段 1 — 環境整理，仍然不搬動目錄。**
移除 `cpp/cpp-basic-cmake-vscode/src/main.exe` 以及 `java/java-basic` 裡的 Eclipse 中繼資料。
處理掉空的 `mcu/` 與 `quartus/`。把 `springboot-basic` 的 group ID 對齊為 `demo.bank`。
將共用的忽略規則提升到根目錄 `.gitignore`。

**階段 2 — 正式搬遷。**
使用 `git mv` 讓歷史記錄跟著檔案走，並且**每個專案一個 commit**，不要用單一 commit 一次搬完 —
27 個專案的改名擠在一個 commit 裡，非常難以審閱或回退。

```bash
git mv java/springboot-flyway backend/springboot-flyway
```

**階段 3 — 各專案 README。**
為每個專案補上 front-matter 區塊與「如何執行」段落。目前 27 個專案中有 16 個完全沒有 README，
從那些開始效益最高；另外要注意，現有的 11 份 README 當中有 6 份是原封不動的上游樣板文件，
並不是你自己寫的。

**階段 4 — 自動化。**
寫一支小腳本讀取所有 front-matter 區塊並重新產生 `docs/catalog.md`；另可加上 CI 逐一建置各專案，
讓範例失效時能及早發現。

---

## 5. 另一個選項，以及不推薦的理由

**維持語言優先的目錄樹，只做整理。** 這是個合理的選擇：歸屬永遠不會模稜兩可，改動幅度也小。

之所以不推薦，是因為它沒有解決那兩個結構性問題。`solidity/` 的專案仍然有一半是 React，而這件事
在結構上無處安放；上層目錄也仍然在重複專案名稱已經說過的話。如果你還是偏好這個做法，那就採用
階段 0、1、3、4 — 除了目錄樹本身之外，本文的每一項建議都依然適用，而且它們涵蓋了大部分的效益。
