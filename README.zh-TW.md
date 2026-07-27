# demo-bank

跨語言、跨框架、跨平台的個人範例程式集。

> 🇬🇧 **English version: [README.md](README.md)**（英文為主要版本）

本文件是一份**重新分類規劃**。內容包含目前的專案現況、現行目錄結構的問題，以及建議的目標結構。
目前尚未搬動任何程式碼。

---

## 1. 現況

約 **94 個範例專案**、**2,540 個受版控檔案**，分散於 **27 個頂層目錄**。

| 目錄 | 專案數 | 檔案數 | 命名方式 | 主題 |
|---|---:|---:|---|---|
| `AndroidStudio/` | 1 | 40 | IDE | Android UI 教學 |
| `ArduinoSketch/` | 1 | 1 | IDE | UART 模擬 sketch |
| `bash/` | 1 | 1 | 語言 | Shell 片段（散落的單一檔案） |
| `compiler/` | 1 | 7 | 領域 | `nanoc`，EBNF 驅動的玩具 C 前端 |
| `cpp/` | 4 | 31 | 語言 | CMake、Qt Quick、SFML |
| `cpp_primer/` | 1 | 26 | 隨意 | C++ 語言練習 |
| `eclipse/` | 17 | 190 | IDE | Java、C++、Servlet、Spring、JNA、SNMP |
| `EWARM/` | 1 | 8 | IDE | IAR 下的 STM32 GPIO |
| `java/` | 5 | 173 | 語言 | Spring Boot、Java 基礎 |
| `lab-autoconf/` | 1 | 5 | 主題 | GNU autotools hello |
| `lab-bitcoin/` | 3 | 16 | 主題 | Bitcoin script、bitcoinj 付款 |
| `lab-ccpp-basic-topic/` | 1 | 4 | 主題 | C/C++ 隨手練習 |
| `lab-ccpp-qt-basic-topic/` | 1 | 5 | 主題 | Qt 讀寫鎖 |
| `lab-java/` | 1 | 14 | 主題 | Java 語言 |
| `lab-nodejs/` | 5 | 68 | 主題 | React、Redux、mock server |
| `lab-springboot/` | 11 | 185 | 主題 | Spring Boot，以 OAuth2 為大宗 |
| `lab-web-crawler/` | 1 | 11 | 主題 | Gradle + 爬蟲 |
| `lab-x-cube-ai-.../` | 1 | 335 | 主題 | STM32F746 手寫辨識 MNIST |
| `NetBeans/` | 2 | 72 | IDE | Boost 範例、NetBeans RCP |
| `nodejs/` | 6 | 866 | 執行環境 | Gatsby、Next.js、React |
| `QtCreator/` | 9 | 100 | IDE | Qt Widgets、事件、多執行緒 |
| `qt-lab/` | 1 | 3 | 隨意 | Qt 隨手練習 |
| `qt-lab-widgets/` | 1 | 5 | 隨意 | Qt Widgets 隨手練習 |
| `solidity/` | 9 | 220 | 語言 | 智慧合約與 dapp |
| `SpringToolSuite/` | 2 | 58 | IDE | Spring MVC、Spring Boot 2 |
| `VisualStudio/` | 7 | 74 | IDE | WPF、WxWidgets、C#/C 互通 |

### 與上一份規劃的差異

儲存庫大約**成長為三倍** — 專案從 27 個增為約 94 個，檔案從 1,304 個增為 2,540 個。原本空的
`mcu/` 與 `quartus/` 已經消失，改由實際的嵌入式專案取代。成長本身是好事；但它同時把一個
「排版問題」變成了「結構問題」，詳見下節。

---

## 2. 現行結構的問題

### 2.1 四種命名方式同時擠在同一個命名空間

頂層已經不是依單一軸線分類，而是四種軸線並存：

| 方式 | 目錄 |
|---|---|
| **依語言／執行環境** | `bash`、`cpp`、`java`、`nodejs`、`solidity`、`compiler` |
| **依 IDE／工具鏈** | `AndroidStudio`、`ArduinoSketch`、`eclipse`、`EWARM`、`NetBeans`、`QtCreator`、`SpringToolSuite`、`VisualStudio` |
| **依主題，加 `lab-` 前綴** | `lab-autoconf`、`lab-bitcoin`、`lab-ccpp-basic-topic`、`lab-ccpp-qt-basic-topic`、`lab-java`、`lab-nodejs`、`lab-springboot`、`lab-web-crawler`、`lab-x-cube-ai-stm32-f746g-handwriting-mnist` |
| **隨意命名** | `cpp_primer`、`qt-lab`、`qt-lab-widgets` |

大小寫也分成四種 — `PascalCase`（`AndroidStudio`）、`UPPERCASE`（`EWARM`）、`lowercase`
（`nodejs`）、`snake_case`（`cpp_primer`）、`kebab-case`（`lab-java`）。巢狀深度同樣不一致：
`eclipse/` 底下有 17 個專案，而 `qt-lab/` 本身**就是**一個專案。`lab-bitcoin/` 更是兩者兼具 —
兩個子專案，加上根目錄散落的四個 `.js` 檔。

實際代價是：沒有任何規則能告訴你新範例該放哪裡，所以每一批新增的內容都會再發明一套新方式，
問題於是不斷累積。

### 2.2 依 IDE 分類是這四種當中最不耐久的一種

有八個目錄是以「你當初用什麼工具打開它」來命名。這個分類方式不好，因為：

- **它不是程式碼的屬性。** `eclipse/cppbasic`、`NetBeans/CppBoostSampleCode`、
  `VisualStudio/CppObserverPattern`、`QtCreator/QtWidgetBasic`、`cpp/cpp-cmake-basic`、
  `cpp_primer/` 全都是 C++。IDE 名稱把它們拆散到六個目錄，卻沒有帶來任何好處。
- **它掩蓋了主題。** `eclipse/JavaSnmp` 的主題是 SNMP，而 `eclipse/` 完全沒說明這件事。
- **它會腐化。** Eclipse → Spring Tool Suite → IntelliJ 這條遷移路徑你已經走了一部分；
  現在這些目錄名稱記錄的是歷史，不是內容。
- **它會誘使 IDE 中繼資料進入版控** — 而且確實發生了：**目前有 115 個 IDE 中繼資料檔案被追蹤**，
  其中 81 個在 `eclipse/` 底下。`QtCreator/*/*.pro.user` 是最嚴重的一類，它們存放的是絕對機器路徑，
  而且其中兩個還是帶雜湊後綴的備份檔（`.pro.user.e7554a3`）。

**有一個細節值得保留：** 對嵌入式開發而言，工具鏈確實是關鍵資訊 — IAR 的 `.ewp` 專案沒有 IAR
就無法建置，而 `.ioc` 意味著必須有 STM32CubeMX。但這件事應該記在專案中繼資料與專案名稱裡
（例如 `stm32-iar-gpio`），而不是佔用一個頂層目錄。

### 2.3 同一個主題現在散落在多個目錄

這是混用多種命名方式造成的具體損害：

| 主題 | 專案數 | 散落於 |
|---|---:|---|
| **Spring / Spring Boot** | 18 | `java/`、`lab-springboot/`、`SpringToolSuite/`、`eclipse/springbasic` — **4 處** |
| **Qt** | 13 | `QtCreator/`、`cpp/qt-quick-cmake`、`qt-lab/`、`qt-lab-widgets/`、`lab-ccpp-qt-basic-topic/` — **5 處** |
| **C / C++** | 約 16 | `cpp/`、`cpp_primer/`、`eclipse/`、`NetBeans/`、`VisualStudio/`、`lab-ccpp-basic-topic/`、`lab-autoconf/` — **7 處** |
| **Java（非 Spring）** | 約 12 | `java/`、`eclipse/`、`lab-java/`、`lab-web-crawler/` — **4 處** |
| **React** | 約 10 | `nodejs/`、`lab-nodejs/`，以及每個 `solidity/` dapp 的前端 — **3 處** |
| **區塊鏈** | 12 | `solidity/`、`lab-bitcoin/`、`eclipse/coinhelper` — **3 處** |
| **嵌入式** | 3 | `EWARM/`、`lab-x-cube-ai-.../`、`ArduinoSketch/` — **3 處** |

### 2.4 已經出現實質的內容重複

`java/springboot-basic`（65 個類別，套件 `example.bank.springboot.basic`）與
`lab-springboot/lab-springboot-basic`（45 個檔案，套件 `lab`）是**同一套教材的兩個獨立版本**。
兩者都涵蓋 IoC、以 `MyAspect`／`MyAspect2` 實作的 AOP、`Interceptor`／`Invocation`、
`BeanPostProcessor`、`UserValidator`、`BussinessPerson`／`Cat` POJO、`AppConfig` 以及 XML 注入。
這不是搬動資料夾就能解決的排版問題 — 兩者必須擇一。

相關地，目前共有 **8 個 OAuth2 專案**（`java/springboot-authorization-server` 加上七個
`lab-springboot/lab-springboot-*oauth2*`）。從名稱看得出這是一條刻意安排的漸進路線 —
基礎 → JWT → Redis → PostgreSQL → 資源伺服器 → 資源＋JWT → 擴充。這很有價值，但目前的結構
完全沒有表達出它們是一個系列，也沒說明閱讀順序。

### 2.5 Java 套件根目錄有六種寫法

`example.bank`（64 個檔案）、`lab.springboot`（37）、`demo.bank`（36）、`lab.java`（26）、
裸 `lab`（11 以上）、`com.lab`（9）、`android.lab`（4）。同一個作者、同一個 repo，卻沒有慣例。

**已決定：統一為 `demo.bank`**，與儲存庫名稱一致 — 例如 `demo.bank.spring.oauth2`、
`demo.bank.embedded.stm32`。這屬於程式碼變更，因此歸在階段 2，而不是目錄搬遷。

### 2.6 環境整潔度

- **115 個被追蹤的 IDE 中繼資料檔案** — `.project`、`.cproject`、`.classpath`、`.settings/`、
  `.idea/`、`.pro.user`、`CMakeLists.txt.user`。
- **被提交的建置產物**：`eclipse/coinhelper/target/classes/*.class`、
  `eclipse/JavaTomcatEmbedded/webapps/WEB-INF/classes/Hello.class`，以及整個
  `eclipse/JavaTomcatEmbedded/tomcat_tmp/work/` **執行期暫存目錄**。
- **被提交的二進位檔**：`cpp/cpp-basic-cmake-vscode/src/main.exe`、
  `eclipse/JavaJna/src/main/resources/JavaJnaPureCLibrary.dll` — 後者格外諷刺，因為旁邊的
  `eclipse/JavaJnaPureCLibrary/` 正是用來建置它的原始碼。
- **73 個 `.gitignore` 檔案**，仍然沒有根目錄的那一個。
- `cpp_primer/Eclipse Project` — 檔名含空格且沒有副檔名。
- 仍然沒有 `LICENSE`，也沒有任何記錄說明哪些專案來自第三方。

### 2.7 外部與廠商產生的程式碼沒有標示

除了先前已標記的三個網頁樣板（`gatsby-home-site`、`nextjs-ecommerce`、`gatsby-starter-blog`），
又新增兩個情況：

- `SpringToolSuite/MasterSpringMvc` — 套件根目錄為 `masterSpringMvc`，是某本書的隨附專案。
- `lab-x-cube-ai-stm32-f746g-handwriting-mnist` — **335 個檔案，其中約 300 個是 ST 提供的 HAL
  驅動、middleware 與 GUI 函式庫**（`Drivers/` 129、`Middlewares/` 73、`GUI/` 100）。真正屬於你的
  是 `Src/`（16）與 `Inc/`（12）。光這一個專案就佔了整個儲存庫的 13%。

---

## 3. 建議的結構

**以領域（domain）分類 — 也就是這個範例在講什麼。語言與工具鏈則交由專案名稱承載。**

每個專案名稱都已經標明技術堆疊（`springboot-flyway`、`solidity-faucet`、`QtWidgetBasic`）。
因此領域優先的結構能同時提供兩條軸線，而語言優先或 IDE 優先則是把頂層這條軸線浪費在重述
資料夾名稱已經說過的話。領域分類也乾淨地解決了跨界情況：帶 Next.js 前端的 Solidity 合約就是
`blockchain/`，而一半 Java 一半 C 的 JNA 範例就是 `interop/`。

### 巢狀規則

每個領域內部保持扁平，**但有一個例外**：當單一主題超過約八個專案時，多開一層。目前符合的
恰好只有三個 — Spring（18）、Qt（13）、Solidity（9）。這是一條規則而非個案判斷，因此在
儲存庫繼續成長時依然穩定適用。

```
demo-bank/
├── README.md  README.zh-TW.md  LICENSE  THIRD_PARTY.md  CONTRIBUTING.md  .gitignore
├── docs/
│   ├── catalog.md              # 由各專案中繼資料自動產生
│   └── conventions.md          # 命名、結構、中繼資料綱要
│
├── fundamentals/               # 語言語法、演算法、設計模式
│   ├── bash-basic/             ← bash/run.sh
│   ├── java-language/          ← lab-java/lab-java-language
│   ├── java-basic/             ← java/java-basic
│   ├── java-algorithm/         ← eclipse/JavaAlgorithm
│   ├── java-reflection/        ← eclipse/JavaReflection
│   ├── java-pattern-singleton/ ← eclipse/JavaDesignPatternSingleton
│   ├── cpp-primer/             ← cpp_primer
│   ├── cpp-basic/              ← eclipse/cppbasic + lab-ccpp-basic-topic
│   ├── cpp-algorithm/          ← eclipse/CppAlgorithm
│   ├── cpp-pattern-observer/   ← VisualStudio/CppObserverPattern
│   ├── cpp-boost/              ← NetBeans/CppBoostSampleCode
│   └── javascript-basic/       ← eclipse/javascriptbasic
│
├── build-systems/              # 關於「怎麼建置」，而非「做什麼」
│   ├── cmake-basic/            ← cpp/cpp-cmake-basic
│   ├── cmake-vscode/           ← cpp/cpp-basic-cmake-vscode
│   ├── cmake-eclipse/          ← eclipse/cppbasiccmake
│   ├── autoconf-hello/         ← lab-autoconf
│   └── gcc-detect-arch/        ← QtCreator/GccDetect32or64BitSystem
│
├── backend/
│   ├── spring/                 # 18 個專案 — 超過巢狀門檻
│   │   ├── spring-basic/       ← 需整併：java/springboot-basic + lab-springboot-basic
│   │   ├── spring-di-basic/    ← eclipse/springbasic
│   │   ├── springboot-jpa/     ← lab-springboot/lab-springboot-jparepository
│   │   ├── springboot-flyway/  ← java/springboot-flyway
│   │   ├── springboot-vaadin/  ← java/springboot-vaadin
│   │   ├── springboot2-demo/   ← SpringToolSuite/springboot2demo
│   │   ├── spring-mvc-master/  ← SpringToolSuite/MasterSpringMvc（外部）
│   │   └── oauth2/             # 8 個專案的系列，依閱讀順序排列
│   │       ├── 01-authorization/
│   │       ├── 02-authorization-jwt/
│   │       ├── 03-authorization-redis/
│   │       ├── 04-authorization-postgresql/
│   │       ├── 05-resource/
│   │       ├── 06-resource-jwt/
│   │       ├── 07-expansion/
│   │       └── auto-sample/
│   ├── servlet-basic/          ← eclipse/servletbasic
│   ├── tomcat-embedded/        ← eclipse/JavaTomcatEmbedded
│   ├── java-snmp/              ← eclipse/JavaSnmp
│   └── web-crawler/            ← lab-web-crawler
│
├── web/
│   ├── react-weather-app/  react-basic/  react-ux/  react-redux/
│   ├── nextjs-basic/  nextjs-ecommerce/
│   └── gatsby-basic/  gatsby-starter-blog/  gatsby-home-site/
│
├── blockchain/
│   ├── solidity/               # 9 個專案 — 超過巢狀門檻
│   │   └── basic/ basic-react/ basic-remix/ campaign/ faucet/
│   │       kickstart/ marketplace/ nft-marketplace/ openzeppelin/
│   ├── bitcoin-script/         ← lab-bitcoin（根目錄的 .js 檔）
│   ├── bitcoin-payment/        ← lab-bitcoin/bitcoin-payment
│   ├── bitcoinj-payment/       ← lab-bitcoin/paybybitcoinj
│   └── coin-helper/            ← eclipse/coinhelper
│
├── desktop/
│   ├── qt/                     # 13 個專案 — 超過巢狀門檻
│   │   ├── widget-basic/ widget-event/ action/ multithread-ui/
│   │   ├── reflection/ graphics-view/ mingw-unicode/ snake-game/
│   │   ├── quick-cmake/        ← cpp/qt-quick-cmake
│   │   ├── rwlock/             ← lab-ccpp-qt-basic-topic
│   │   └── scratch/            ← qt-lab + qt-lab-widgets
│   ├── wpf-shadow-no-resize/   ← VisualStudio/WpfNoResizeWithShadowEffect
│   ├── wxwidgets-basic/        ← VisualStudio/WxwidgetsTest
│   ├── netbeans-rcp/           ← NetBeans/NetbeansRcp
│   ├── sfml-game/              ← cpp/sfml-demo
│   └── poker-size/             ← VisualStudio/PokerSize
│
├── mobile/
│   └── android-gui-training/   ← AndroidStudio/Android5GuiTraining
│
├── embedded/
│   ├── stm32-cubeide-ai-mnist/ ← lab-x-cube-ai-stm32-f746g-handwriting-mnist
│   ├── stm32-iar-gpio/         ← EWARM/stm32_tra1
│   └── arduino-uart-emu/       ← ArduinoSketch/UARTEmu
│
├── interop/                    # 跨語言或跨原生邊界
│   ├── java-jna/               ← eclipse/JavaJna
│   ├── java-jna-pure-c/        ← eclipse/JavaJnaPureC + JavaJnaPureCLibrary
│   ├── java-run-executable/    ← eclipse/JavaRunExecutableFile + ...CppExe
│   ├── csharp-swing-pure-c/    ← VisualStudio/SwingCsharpWithPureC
│   └── cpp-event-unmanaged/    ← VisualStudio/CppFireEventFromUnmanaged
│
└── tooling/
    ├── nanoc/                  ← compiler/nanoc
    ├── mock-server/            ← lab-nodejs/mock-server
    └── google-finance-downloader/ ← VisualStudio/GoogleFinanceDownloaderTest
```

### 命名慣例

```
<技術>-<主題>[-<變體>]        全小寫、kebab-case、不加 lab- 前綴
```

目前結構違反的三條規則：

- **統一大小寫。** 一律 `kebab-case`。`AndroidStudio` → `android-gui-training`，
  `cpp_primer` → `cpp-primer`。
- **拿掉 `lab-` 前綴。** 這裡每個專案都是 lab；一個橫跨三分之一儲存庫的前綴無法區分任何東西。
  `lab-springboot/lab-springboot-basic` 在同一條路徑裡把「lab」講了兩次、「springboot」講了兩次。
- **子目錄不要重複父目錄。** `solidity/solidity-faucet` → `blockchain/solidity/faucet`。

### 各專案中繼資料

目錄樹只能表達一條軸線，其餘的靠各專案 `README.md` 的 front matter 補回來：

```yaml
---
title: Spring Boot — 使用 JWT 的 OAuth2 授權伺服器
domain: backend/spring/oauth2
languages: [java]
stack: [spring-boot-3, spring-security, jwt, gradle]
toolchain: any            # any | eclipse | stm32cubeide | iar-ewarm | arduino-ide | msvc
level: demo               # basic | demo | app | vendor
status: working           # working | broken | archived | superseded
origin: original          # original | <上游 URL>
series: oauth2/02         # 選填，用於有順序的漸進系列
---
```

`toolchain:` 正是 IDE 資訊該待的位置 — 對嵌入式與 MSVC 專案來說它是真實的限制，其餘一律填 `any`。
`series:` 則記錄 OAuth2 的漸進順序。`level` 與 `status` 是現行目錄樹完全無法表達的兩條軸線：

- **`basic`** — 語言或框架基礎，不含應用程式
- **`demo`** — 完整示範單一概念
- **`app`** — 可完整執行的應用程式
- **`vendor`** — 第三方樣板或書籍隨附程式，不是你寫的

每個專案都補上這個區塊之後，`docs/catalog.md` 就變成自動產生，而不需要手動維護。

---

## 4. 你需要自己決定的事

以下是重新分類無法代你回答的內容性問題，而且應該在**搬動任何東西之前**先解決 —
把一個即將刪除的專案搬來搬去毫無意義。

1. **`springboot-basic` 存在兩份。** 哪一份才是正式版本 — `java/springboot-basic`（65 個類別，
   較完整）還是 `lab-springboot/lab-springboot-basic`（45 個檔案，套件層次較扁平）？
   落選的那份標記為 `status: superseded` 或直接刪除。

2. **STM32 AI 專案的約 300 個廠商檔案。** ST 的 HAL 驅動、middleware 與 GUI 函式庫佔了整個
   儲存庫的 13%，而且可以透過 STM32CubeMX 從 `.ioc` 檔重新產生。要為了確保建置可重現而繼續提交，
   還是改為忽略並在文件中寫明重新產生的步驟？

3. **IDE 中繼資料。** 全部清掉 115 個最乾淨，但某些 Eclipse 專案確實需要 `.project` 與
   `.classpath` 才能順利匯入。建議的折衷：保留 `.project`／`.classpath`，捨棄 `.settings/`、
   `.idea/` 與所有 `*.pro.user`（後者存放絕對機器路徑，永遠不具可攜性）。

4. **外部來源專案。** 目前已辨識出四個 — 三個網頁樣板加上 `MasterSpringMvc`。
   要保留並標註來源、改為 submodule，還是移除、需要時再取回？

---

## 5. 建議的搬遷順序

每個階段都能獨立產生價值，所以你可以在任何一個階段停下來。

**階段 0 — 只補文件，不搬任何東西。**
新增根目錄的 `README.md`、`README.zh-TW.md`、`LICENSE`、`.gitignore`、`THIRD_PARTY.md`。
在約 94 個專案卻沒有任何索引的情況下，這是整份規劃裡效益最高的一步。

**階段 1 — 先解決上一節的四項決定。** 處理重複專案、決定廠商檔案的去留。

**階段 2 — 環境整理，仍然不搬動目錄。**
清除議定要移除的 IDE 中繼資料、被提交的 `.class` 檔、`main.exe`，以及
`eclipse/JavaTomcatEmbedded/tomcat_tmp/` 執行期目錄。把 73 個散落 `.gitignore` 的共用規則
提升到根目錄。將所有 Java 套件重新歸到 `demo.bank` 之下。

**階段 3 — 正式搬遷。**
使用 `git mv` 讓歷史記錄跟著檔案走，並且**一次 commit 一個領域** — 先 `fundamentals/`、
再 `backend/`，依此類推。94 個專案的改名擠在單一 commit 裡，既無法審閱也無法回退。

```bash
git mv lab-springboot/lab-springboot-security-oauth2-authorization-jwt backend/spring/oauth2/02-authorization-jwt
```

**階段 4 — 各專案 README。** 補上 front matter 與「如何執行」段落。從目前沒有 README 的專案
開始，那是絕大多數。

**階段 5 — 自動化。** 寫一支腳本讀取所有 front matter 並重新產生 `docs/catalog.md`；
另可加上 CI 逐一建置各專案，讓範例失效時能及早發現。

---

## 6. 其他選項，以及不推薦的理由

**維持語言優先，把新內容塞進去。** 這是上一份規劃中被否決的替代方案，而它現在顯得更不合適：
八個以 IDE 命名的目錄無處可放，一半 Java 一半 C 的 `interop/` 範例無處可放，而且 Qt 仍然會被
拆散在 `cpp/` 與某個 Qt 目錄之間。新增的內容恰好正是它最處理不好的那一類。

**改為全面 IDE 優先。** 光是「一致」本身就已經勝過現在的四種方式並存。但它優化的是「你怎麼打開
專案」而不是「它教你什麼」，會把 C++ 拆散到六個目錄，而且每次換工具就會腐化一次 —
這條遷移路徑在本儲存庫的歷史中已經看得到（`eclipse/` → `SpringToolSuite/`）。

**完全扁平，只靠標籤，不要階層。** 根目錄放約 94 個目錄，全部靠 `docs/catalog.md` 檢索。
這個做法其實站得住腳，而且可以無限擴充，但它完全仰賴那份目錄從第一天起就自動產生且保持最新。
若儲存庫成長到約 150 個專案以上，值得重新考慮；在那之前，淺層目錄樹瀏覽起來還是比較順手。
