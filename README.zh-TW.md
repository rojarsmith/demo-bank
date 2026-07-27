# demo-bank

跨語言、跨框架、跨平台的個人範例程式集。**93 個專案，依領域分類。**

> 🇬🇧 **English version: [README.md](README.md)**（英文為主要版本）
>
> 📇 **要找特定範例？請看 [docs/catalog.md](docs/catalog.md)** — 所有專案依領域索引，
> 含技術堆疊、層級與一行說明。

原創程式碼採用 [MIT 授權](LICENSE)。約 45% 的受版控檔案來自第三方樣板或廠商 SDK，**不在**此授權
範圍內 — 詳見 [THIRD_PARTY.md](THIRD_PARTY.md)。

---

## 結構

專案依**領域分類 — 也就是這個範例在講什麼**。語言、框架與工具鏈寫在專案*名稱*裡，不佔用路徑。

```
demo-bank/
├── fundamentals/     14  語言語法、演算法、設計模式
├── build-systems/     5  CMake、autotools、工具鏈偵測
├── backend/          21  Spring（17，含 9 個專案的 OAuth2 群組）、Servlet、SNMP、爬蟲
├── web/              10  React、Next.js、Gatsby
├── blockchain/       13  Solidity 合約與 dapp（9）、Bitcoin（4）
├── desktop/          16  Qt（12）、WPF、wxWidgets、NetBeans RCP、SFML
├── mobile/            1  Android
├── embedded/          3  STM32（CubeIDE 與 IAR）、Arduino
├── interop/           7  JNA、SWIG、P/Invoke、C++/CLI — 跨語言邊界
├── tooling/           3  編譯器前端、mock server、下載工具
└── docs/                 catalog.md
```

每個領域內部保持扁平，**但有一個例外**：當單一主題超過約八個專案時，多開一層。目前符合的有三個 —
`backend/spring/`（17）、`blockchain/solidity/`（9）、`desktop/qt/`（12）。這是一條規則而非個案
判斷，因此在儲存庫繼續成長時依然穩定適用。

### 為什麼採用領域優先

每個專案名稱本身就已經標明技術堆疊 — `springboot-flyway`、`faucet`、`cmake-basic`。因此領域優先
的結構能同時提供兩條軸線；而語言優先或 IDE 優先，等於把最上層那條軸線浪費在重述資料夾名稱
已經說過的話。

領域分類也乾淨地解決了跨界情況：帶 Next.js 前端的 Solidity 合約就是 `blockchain/`；一半 Java
一半 C 的 JNA 範例就是 `interop/` — 而 `interop` 這個分類在舊結構裡根本無處安放，這正是那些範例
四散各處的原因。

### 命名慣例

```
<技術>-<主題>[-<變體>]        全小寫、kebab-case
```

三條規則：

- **統一大小寫。** 一律 `kebab-case`。
- **不加 `lab-` 前綴。** 這裡每個專案都是 lab；一個橫跨三分之一儲存庫的前綴無法區分任何東西。
- **子目錄不要重複父目錄。** 用 `blockchain/solidity/faucet`，不是 `solidity/solidity-faucet`。

### 工具鏈

當工具鏈是真實限制時，把它寫進專案*名稱* — `stm32-iar-gpio` 需要 IAR、`stm32-cubeide-ai-mnist`
需要 STM32CubeMX。但它永遠不會成為目錄，因為對其餘約 85 個專案而言，那只是「當初剛好用哪個編輯器
打開」的紀錄而已。

---

## 這個結構是怎麼來的

這個儲存庫先前同時存在**四種互相競爭的命名方式** — 依語言（`cpp/`、`java/`、`nodejs/`）、
依 IDE（`eclipse/`、`QtCreator/`、`VisualStudio/`、`AndroidStudio/`、`EWARM/`）、
依主題加 `lab-` 前綴，以及隨意命名（`cpp_primer`、`qt-lab`）。大小寫分成四種、巢狀深度不一致，
而且沒有任何規則能告訴你新範例該放哪裡 — 於是每一批新增的內容都會再發明一套新方式。

可量化的代價是**主題四散**：Spring 分布在 4 個目錄、Qt 在 5 個、C/C++ 在 7 個。另外還有實質重複 —
兩個各自獨立、卻涵蓋同一套教材的 Spring 專案。

改變的結果：

| | |
|---|---|
| 頂層目錄 | 26 → **11** |
| 命名方式 | 4 → **1** |
| 受版控檔案 | 2,541 → **2,417** |
| 受版控的 IDE 中繼資料 | 115 → **45**（只保留可攜的 `.project`／`.classpath`） |

所有搬遷都使用 `git mv`，並被 git 記錄為純粹的改名 — 每一個 commit 都是 0 新增、0 刪除 —
因此 `git log --follow` 仍然能追溯到每個檔案原本的歷史。

兩項值得知道的結構性發現：

- **OAuth2 群組橫跨兩個世代的技術堆疊**，而舊結構把這件事藏了起來。其中八個建立在
  `spring-security-oauth2` 之上，該專案已終止支援（EOL）；另一個使用的是它的後繼者
  Spring Authorization Server 1.0。現在的結構直接說明了這點：
  `backend/spring/oauth2/authorization-server/`（請先看這個）與
  `backend/spring/oauth2/legacy/01…07/` 分開擺放。
- **`SwingCsharpWithPureC` 其實是 SWIG 的筆誤**，與 Java Swing 無關 — 它含有 `Func.i`、
  自動產生的 `Func_wrap.cxx` 與 `FuncPINVOKE.cs`。現已改為 `interop/csharp-swig-pure-c/`。

---

## 待辦事項

| | |
|---|---|
| 各專案 README | 多數專案沒有。補上 front matter 之後，`docs/catalog.md` 就能自動產生，不必手動維護 |
| 第三方授權 | 五個外部來源專案中有三個授權未經確認，且 STM32 專案內含條款受限的 SEGGER emWin — 詳見 [THIRD_PARTY.md](THIRD_PARTY.md) |
| Eclipse `.project` 名稱 | 改名後的專案內部仍是舊名稱（`interop/java-jna/consumer` 顯示為 `JavaJna`）。匯入不受影響，但工作區標籤是舊的 |
| 根目錄 `.gitattributes` | 刻意延後 — `* text=auto` 會讓整個儲存庫的換行字元重新正規化，值得獨立成一個 commit |
| STM32 廠商檔案 | 335 個檔案中約 300 個是 ST 提供的 HAL／middleware，可從 `.ioc` 重新產生。要繼續提交還是改為忽略？ |
| `cpp-basic` / `cpp-basic-topic` | 原本要合併；但兩者都是帶有各自 `.project` 的 Eclipse CDT 專案，需要手動整併 |
| Java 套件根目錄 | 已決定統一為 `demo.bank`；但重新歸位的工作尚未執行 |

### 各專案中繼資料綱要

新增專案 README 時，請使用以下 front matter，讓目錄日後可以自動產生：

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

`level` 與 `status` 是目錄樹無法表達的兩條軸線：

- **`basic`** — 語言或框架基礎，不含應用程式
- **`demo`** — 完整示範單一概念
- **`app`** — 可完整執行的應用程式
- **`vendor`** — 第三方樣板或書籍隨附程式，不是你自己寫的
