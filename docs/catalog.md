# Project catalog

Index of every sample project in this repository. **94 projects, 2,540 tracked files.**

Rows marked ⟵ merge are separate projects today that the plan folds together, so the post-migration
count is lower — 88 by this proposal.

See [../README.md](../README.md) for the reorganization plan this catalog supports, or
[../README.zh-TW.md](../README.zh-TW.md) for the Chinese version.

> **Status: hand-written, and a snapshot.** Once each project carries the front-matter block
> described in the plan, this file should be generated from that metadata rather than maintained by
> hand. Until then, treat it as accurate as of the survey, not self-updating.

**Level** — `basic` language/framework fundamentals · `demo` one concept end to end ·
`app` complete runnable application · `vendor` third-party code, not original

**Current** is where the project lives today. **Proposed** is its target path under the plan.

---

## Summary

**Migration progress:** seven of ten domains are moved — `fundamentals/`, `interop/`, `embedded/`,
`build-systems/`, `desktop/`, `tooling/` and `mobile/`. Only `backend/`, `web/` and `blockchain/`
remain at their original paths.

**Every IDE-named directory is now gone**: `AndroidStudio/`, `ArduinoSketch/`, `EWARM/`,
`NetBeans/`, `QtCreator/` and `VisualStudio/`, along with `compiler/`, `cpp/`, `lab-autoconf/`,
`lab-ccpp-basic-topic/`, `lab-ccpp-qt-basic-topic/`, `lab-java/`, `qt-lab/` and `qt-lab-widgets/`.
Top level is down from 26 directories to 17.

> **Known follow-up across all moved projects.** Renamed Eclipse and CDT projects still carry their
> old name inside `.project` — `interop/java-jna/consumer` reports as `JavaJna`,
> `fundamentals/cpp-primer` as `cpp_primer`, and so on. The STM32 project's `.ioc` and `.launch`
> files are likewise still named after the old directory. Import works either way, since Eclipse
> reads the internal name rather than the folder, but workspaces will show the old labels until this
> is reconciled. It is a content edit, not a path move, so it was left out of the migration commits.

| Domain | Projects | Notes |
|---|---:|---|
| [fundamentals](#fundamentals--migrated) | 14 | ✅ **migrated** — language syntax, algorithms, patterns |
| [build-systems](#build-systems) | 5 | CMake, autotools, toolchain detection |
| [backend](#backend) | 22 | 18 Spring, incl. a 9-project OAuth2 group |
| [web](#web) | 10 | React, Next.js, Gatsby |
| [blockchain](#blockchain) | 13 | 9 Solidity, 4 Bitcoin |
| [desktop](#desktop) | 16 | 12 Qt, plus WPF, wxWidgets, NetBeans RCP, SFML |
| [mobile](#mobile) | 1 | Android |
| [embedded](#embedded) | 3 | STM32 ×2, Arduino |
| [interop](#interop) | 7 | JNA, SWIG, P/Invoke, C++/CLI |
| [tooling](#tooling) | 3 | Compiler front end, mock server, downloader |

---

## fundamentals — ✅ migrated

Moved in commit `75b5c68`. All 141 file moves were recorded by git as pure renames, so
`git log --follow` still reaches each file's pre-move history.

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `fundamentals/bash-basic/` | `bash/` | `for` loops, `seq`, `dirname`, word splitting on strings | Bash | basic |
| `fundamentals/java-language/` | `lab-java/lab-java-language` | Interface and behaviour basics — `IBehavior`, `Man` | Java, Gradle | basic |
| `fundamentals/java-basic/` | `java/java-basic` | Annotations, functional interfaces, `ThreadPoolExecutor`, `volatile`/`transient`/atomics | Java, Gradle | basic |
| `fundamentals/java-algorithm/` | `eclipse/JavaAlgorithm` | Fibonacci, decimal ZIP, valid-time and ticket-cost puzzles, a timing harness | Java | basic |
| `fundamentals/java-reflection/` | `eclipse/JavaReflection` | Reflection over `Persion`/`Roger`/`Tom` types | Java | basic |
| `fundamentals/java-pattern-singleton/` | `eclipse/JavaDesignPatternSingleton` | Thread-safe singleton with a task/parameter example | Java | basic |
| `fundamentals/cpp-primer/` | `cpp_primer` | C++ language exercises — inheritance, enums, base classes (21 sources) | C++, Eclipse CDT | basic |
| `fundamentals/cpp-basic/` | `eclipse/cppbasic` | C++ scratch, Two Sum | C++ | basic |
| `fundamentals/cpp-basic-topic/` | `lab-ccpp-basic-topic` | Single-file C/C++ scratch | C++ | basic |
| `fundamentals/cpp-algorithm/` | `eclipse/CppAlgorithm` | Add Two Numbers, Reverse Integer, Two Sum | C++ | basic |
| `fundamentals/cpp-pattern-observer/` | `VisualStudio/CppObserverPattern` | Observer pattern | C++, MSVC | basic |
| `fundamentals/cpp-boost/` | `NetBeans/CppBoostSampleCode` | Boost — URL download, random number generation | C++, Boost | demo |
| `fundamentals/csharp-poker-hands/` | `VisualStudio/PokerSize` | Poker hand ranking — `Card`, straight-flush conditions | C#, MSVC | demo |
| `fundamentals/javascript-basic/` | `eclipse/javascriptbasic` | JS basics served from a Maven web app | JS, Maven, JSP | basic |

**Deviation from plan:** `cpp-basic` and `cpp-basic-topic` were to be merged into one project. Both
are Eclipse CDT projects carrying their own `.project` and `.cproject`, which cannot share a
directory without reconciling them by hand. Kept separate; the merge is a content decision for later.

**Also hoisted** the MSVC build-directory rules (`[Dd]ebug/`, `[Rr]elease/`, `[Xx]64/`) from
`VisualStudio/.gitignore` into the root `.gitignore`, so `cpp-pattern-observer` and
`csharp-poker-hands` keep that coverage now that they live outside `VisualStudio/`.

## build-systems — ✅ migrated

Moved in `825c221`.

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `build-systems/cmake-basic/` | `cpp/cpp-cmake-basic` | Conditional builds, auto source include; `array`/`hello`/`hook` targets | C++, CMake | demo |
| `build-systems/cmake-vscode/` | `cpp/cpp-basic-cmake-vscode` | Minimal CMake wired for VS Code | C++, CMake | basic |
| `build-systems/cmake-eclipse/` | `eclipse/cppbasiccmake` | CMake under Eclipse CDT | C++, CMake | basic |
| `build-systems/autoconf-hello/` | `lab-autoconf` | `configure.ac` + `Makefile.am` hello world | C, autotools | basic |
| `build-systems/gcc-detect-arch/` | `QtCreator/GccDetect32or64BitSystem` | Detect 32- vs 64-bit target at build time | C++, CMake | basic |

## backend

### Spring (18 projects)

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `java/springboot-basic` | `backend/spring/spring-basic/` | IoC, AOP, bean lifecycle and scope, conditional injection, profiles, SpEL, XML config, JPA (65 classes) | Boot 2.5.3, Java 11 | demo |
| ~~`lab-springboot/lab-springboot-basic`~~ | — **retired** in `bd6a889` | Duplicate syllabus, superseded by the row above | — | — |
| `eclipse/springbasic` | `backend/spring/spring-di-basic/` | Constructor DI, singleton vs prototype proxying | Spring, Maven | basic |
| `lab-springboot/lab-springboot-dummy` | `backend/spring/springboot-dummy/` | Minimal web skeleton | Boot 2.6.0 | basic |
| `lab-springboot/lab-springboot-jparepository` | `backend/spring/springboot-jpa/` | `JpaRepository` basics | Boot 2.3.1, Spring Data JPA | demo |
| `java/springboot-flyway` | `backend/spring/springboot-flyway/` | Versioned schema migration | Boot 3.0.1, Flyway, H2 | demo |
| `java/springboot-vaadin` | `backend/spring/springboot-vaadin/` | Server-driven UI with charts | Boot 2.7.1, Vaadin 23 | demo |
| `SpringToolSuite/springboot2demo` | `backend/spring/springboot2-demo/` | Security config, `Event`/`Group`/`User` model, WAR initializer | Boot 2, Gradle | demo |
| `SpringToolSuite/MasterSpringMvc` | `backend/spring/spring-mvc-master/` | Book companion project (`masterSpringMvc` packages) | Spring MVC, Gradle | **vendor** |

The duplicate that sat here has been retired. `java/springboot-basic` won on every axis: 65 classes
to 33, newer Spring Boot, and six topics the other lacked entirely (JPA, conditional injection,
properties injection, profiles, SpEL, XML injection). Its only file without a counterpart was
`ServletInitializer.java`, and WAR deployment is already demonstrated by `springboot2demo` below,
which pairs the same initializer with the `war` plugin and `providedRuntime` Tomcat.

#### OAuth2 (9 projects, two stack generations)

The eight `legacy/` projects build on `spring-security-oauth2-autoconfigure` 2.x, which is
**end-of-life**. `authorization-server` is the supported replacement. Read that one first.

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `java/springboot-authorization-server` | `backend/spring/oauth2/authorization-server/` | **Current-generation** authorization server | Spring Authorization Server 1.0, Boot 3.0.2, Java 17 | demo |
| `lab-springboot/...-security-oauth2-authorization` | `.../oauth2/legacy/01-authorization/` | Baseline authorization server | Boot 2.2.6, spring-security-oauth2 (EOL) | demo |
| `lab-springboot/...-authorization-jwt` | `.../oauth2/legacy/02-authorization-jwt/` | JWT-backed tokens | Boot 2.2.6, EOL stack | demo |
| `lab-springboot/...-authorization-redis` | `.../oauth2/legacy/03-authorization-redis/` | Token store in Redis | + Spring Data Redis, PostgreSQL | demo |
| `lab-springboot/...-authorization-postgresql` | `.../oauth2/legacy/04-authorization-postgresql/` | Token and client store in PostgreSQL | + JDBC, PostgreSQL 42.2 | demo |
| `lab-springboot/...-authorization-resource` | `.../oauth2/legacy/05-resource/` | Resource server against the above | Boot 2.2.6, EOL stack | demo |
| `lab-springboot/...-authorization-resource-jwt` | `.../oauth2/legacy/06-resource-jwt/` | Resource server validating JWT | Boot 2.2.6, EOL stack | demo |
| `lab-springboot/...-authorization-expansion` | `.../oauth2/legacy/07-expansion/` | Custom endpoints and Thymeleaf approval pages | + Thymeleaf | demo |
| `lab-springboot/lab-springboot-oauth2-auto-sample` | `.../oauth2/legacy/auto-sample/` | Autoconfiguration sample, oldest of the group | Boot 2.1.6, JAXB shims | demo |

### Other backend

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `eclipse/servletbasic` | `backend/servlet-basic/` | Servlets A–E plus a context listener | Java, Servlet, Maven | basic |
| `eclipse/JavaTomcatEmbedded` | `backend/tomcat-embedded/` | Programmatically embedded Tomcat serving JSP | Java, Tomcat, Maven | demo |
| `eclipse/JavaSnmp` | `backend/java-snmp/` | SNMP agent, MIB value table, NMS client | Java, SNMP4J, Maven | demo |
| `lab-web-crawler` | `backend/web-crawler/` | Crawler on a Spring Boot base | Java, Gradle, Boot | demo |

## web

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `nodejs/react-weather-app` | `web/react-weather-app/` | Weather client over a REST API | React (CRA), axios | app |
| `lab-nodejs/lab-nodejs-react-basic` | `web/react-basic/` | React fundamentals with Redux wiring | React, Redux, MUI | basic |
| `lab-nodejs/lab-nodejs-react-ux` | `web/react-ux/` | Routing, hamburger nav, UX patterns | React, Router, MUI | demo |
| `lab-nodejs/react-redux` | `web/react-redux/` | Redux with thunk middleware and logging | React, Redux, thunk | demo |
| `lab-nodejs/basic` | `web/node-basic/` | Node entry point plus Bower config | Node, Bower | basic |
| `nodejs/nextjs-basic` | `web/nextjs-basic/` | Official Next.js tutorial — SSG vs SSR, pre-rendering | Next.js, SWR | demo |
| `nodejs/nextjs-ecommerce` | `web/nextjs-ecommerce/` | Storefront template `lezada-next` (433 files, 283 images) | Next.js, Bootstrap | **vendor** |
| `nodejs/gatsby-basic` | `web/gatsby-basic/` | Minimal Gatsby site | Gatsby, Emotion | basic |
| `nodejs/gatsby-starter-blog` | `web/gatsby-starter-blog/` | Official Gatsby blog starter (retains upstream LICENSE) | Gatsby, MDX | **vendor** |
| `nodejs/gatsby-home-site` | `web/gatsby-home-site/` | Marketing template `rewy-gatsby` (348 files, 275 images) | Gatsby, SCSS | **vendor** |

## blockchain

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `solidity/solidity-basic` | `blockchain/solidity/basic/` | `Inbox` and `Lottery` contracts | Solidity, Truffle | basic |
| `solidity/solidity-basic-remix` | `blockchain/solidity/basic-remix/` | ERC-165 and token experiments written in Remix | Solidity, Remix | basic |
| `solidity/solidity-basic-react` | `blockchain/solidity/basic-react/` | Minimal contract with browser wallet wiring | Solidity, React, web3.js | demo |
| `solidity/solidity-campaign` | `blockchain/solidity/campaign/` | Crowdfunding contract, no front end | Solidity, Truffle | basic |
| `solidity/solidity-faucet` | `blockchain/solidity/faucet/` | Faucet split into `Logger`, `Owned`, `Storage` | Solidity, React, Bulma | demo |
| `solidity/solidity-kickstart` | `blockchain/solidity/kickstart/` | Crowdfunding dapp with full UI | Solidity, Next.js, MUI, ganache | app |
| `solidity/solidity-marketplace` | `blockchain/solidity/marketplace/` | Course marketplace dapp | Solidity, Next.js, Tailwind, web3.js | app |
| `solidity/solidity-nft-marketplace` | `blockchain/solidity/nft-marketplace/` | ERC-721 written from scratch with interfaces and libraries | Solidity, React, Bootstrap | app |
| `solidity/solidity-openzeppelin` | `blockchain/solidity/openzeppelin/` | ERC-1155 via OpenZeppelin | Solidity, OpenZeppelin | demo |
| `lab-bitcoin/*.js` (root) | `blockchain/bitcoin-script/` | P2PKH, custom sigScript and pubkeyScript | Node.js | basic |
| `lab-bitcoin/bitcoin-payment` | `blockchain/bitcoin-payment/` | Payment server with a browser front end | Node.js, RequireJS | demo |
| `lab-bitcoin/paybybitcoinj` | `blockchain/bitcoinj-payment/` | BIP-70 payment protocol | Java, bitcoinj, Maven | demo |
| `eclipse/coinhelper` | `blockchain/coin-helper/` | Coin helper utility | Java, Maven | basic |

## desktop

Moved in `3e581e4`. Qt takes one nesting level under the >8-projects rule.

### Qt (12 projects)

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `desktop/qt/widget-basic/` | `QtCreator/QtWidgetBasic` | MDI editor, custom scenes (33 files — largest Qt sample) | Qt Widgets, qmake | demo |
| `desktop/qt/widget-event/` | `QtCreator/QtWidgetEvent` | Mouse events via a custom label widget | Qt Widgets, qmake | basic |
| `desktop/qt/action/` | `QtCreator/QAction` | `QAction` with `.qrc` resources | Qt Widgets, qmake | basic |
| `desktop/qt/multithread-ui/` | `QtCreator/QtMultiThreadWidgetUi` | UI threading — `QThread` and a Boost thread variant | Qt, Boost, qmake | demo |
| `desktop/qt/reflection/` | `QtCreator/QtReflection` | Diagram scene with runtime element abstraction | Qt Widgets, qmake | demo |
| `desktop/qt/graphics-view/` | `QtCreator/QGraphicsViewFramework` | Graphics View framework starter | Qt, qmake | basic |
| `desktop/qt/mingw-unicode/` | `QtCreator/QtMingwWidgetUnicode` | Unicode path/filename handling under MinGW; keeps its CJK-named test fixture | Qt, MinGW, qmake | demo |
| `desktop/qt/snake-game/` | `QtCreator/qt-snake-game` | Snake — food, game controller, collision | Qt Widgets, qmake | app |
| `desktop/qt/quick-cmake/` | `cpp/qt-quick-cmake` | QML app plus shared library, with i18n `.ts` | Qt Quick 6, CMake | demo |
| `desktop/qt/rwlock/` | `lab-ccpp-qt-basic-topic` | Read/write locks | Qt, CMake | basic |
| `desktop/qt/scratch/` | `qt-lab` | Scratch project | Qt, qmake | basic |
| `desktop/qt/scratch-widgets/` | `qt-lab-widgets` | Scratch main window | Qt Widgets, qmake | basic |

**Deviation from plan:** `scratch` and `scratch-widgets` were to be merged into one project. Both
contain `main.cpp`, so they were kept separate — the same collision seen with `cpp-basic` in the
pilot, for a different reason.

### Other desktop

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `desktop/wpf-shadow-no-resize/` | `VisualStudio/WpfNoResizeWithShadowEffect` | Fixed-size WPF window with a drop shadow | C#, WPF, XAML | demo |
| `desktop/wxwidgets-basic/` | `VisualStudio/WxwidgetsTest` | wxWidgets main frame and GUI setup | C++, wxWidgets, MSVC | basic |
| `desktop/netbeans-rcp/` | `NetBeans/NetbeansRcp` | NetBeans Platform app — top components, word/uppercase filters | Java, NetBeans RCP | demo |
| `desktop/sfml-game/` | `cpp/sfml-demo` | 2D game loop | C++, SFML, MSVC | demo |

## mobile — ✅ migrated

Moved in `ca9968c`.

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `mobile/android-gui-training/` | `AndroidStudio/Android5GuiTraining` | Activities, `ListView` fragment, custom array adapter | Java, Android 5, Gradle | demo |

## embedded — ✅ migrated

Moved in `34c3ccf`. Toolchain stays in the project *name*, not the directory — for embedded work it
is a genuine constraint, unlike the IDE-named directories this replaces.

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `embedded/stm32-cubeide-ai-mnist/` | `lab-x-cube-ai-stm32-f746g-handwriting-mnist` | On-device handwritten-digit recognition. **335 files, ~300 ST-supplied** (`Drivers/`, `Middlewares/`, `GUI/`) — 13% of the repo | C, STM32F746G, X-CUBE-AI, CubeIDE | app |
| `embedded/stm32-iar-gpio/` | `EWARM/stm32_tra1` | GPIO driver plus startup assembly | C, STM32F7, IAR EWARM | basic |
| `embedded/arduino-uart-emu/` | `ArduinoSketch/UARTEmu` | UART emulation sketch. Keeps its inner `UARTEmu/` folder, which the Arduino IDE requires to match the `.ino` filename | Arduino | basic |

## interop — ✅ migrated

Samples that cross a language or managed/native boundary — the category the old tree had no place
for, which is why these were split between `eclipse/` and `VisualStudio/`. Moved in `efb370c`.

Companion projects are **grouped under a shared parent rather than merged**: each carries its own
`.project`/`.cproject` and cannot share a directory without hand-reconciliation, but the grouping
still shows they are one sample built together.

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `interop/java-jna/consumer/` | `eclipse/JavaJna` | Java calling a native library through JNA; loads the prebuilt DLL | Java, JNA, Maven | demo |
| `interop/java-jna/pure-c-library/` | `eclipse/JavaJnaPureCLibrary` | The C library (`func.c`) that JNA binds to — builds the DLL | C | demo |
| `interop/java-jna/pure-c/` | `eclipse/JavaJnaPureC` | C-side entry point | C | demo |
| `interop/java-run-executable/launcher/` | `eclipse/JavaRunExecutableFile` | Java launching an external executable | Java | basic |
| `interop/java-run-executable/cpp-exe/` | `eclipse/JavaRunExecutableFileCppExe` | The C++ executable it launches | C++ | basic |
| `interop/csharp-swig-pure-c/` | `VisualStudio/SwingCsharpWithPureC` | C# ↔ C via **SWIG** — `Func.i`, generated `Func_wrap.cxx` and `FuncPINVOKE.cs`. Renamed because the old name read as Java Swing | C#, C++, SWIG, MSVC | demo |
| `interop/cpp-event-unmanaged/` | `VisualStudio/CppFireEventFromUnmanaged` | Raising managed events from unmanaged C++ | C++/CLI, MSVC | demo |

The root `.gitignore` negation for `JavaJnaPureCLibrary.dll` was updated to the new path in the same
commit; left stale it would have silently ignored the DLL on a fresh checkout.

## tooling — ✅ migrated

Moved in `ca9968c`.

| Path | Moved from | What it is | Stack | Level |
|---|---|---|---|---|
| `tooling/nanoc/` | `compiler/nanoc` | Toy C compiler front end driven by an EBNF grammar; `return_7.c` fixture | Node.js, `ebnf` | demo |
| `tooling/mock-server/` | `lab-nodejs/mock-server` | Route-based mock API server | Node.js | basic |
| `tooling/google-finance-downloader/` | `VisualStudio/GoogleFinanceDownloaderTest` | WinForms harness — URI builder and data processor | C#, WinForms, MSVC | demo |

---

## Cleanup targets — ✅ done

**77 files untracked** in Phase 2, and a root `.gitignore` added to keep them out. Files remain on
disk; only the index changed, so this is reversible. Tracked total went 2,541 → 2,464.

Kept deliberately: the 45 `.project` / `.cproject` / `.classpath` files (portable, needed for direct
Eclipse and CDT import), the 18 `gradle-wrapper.jar` files, and
`eclipse/JavaJna/.../JavaJnaPureCLibrary.dll` — the JNA demo loads it at runtime and would otherwise
need a C toolchain to run. The root `.gitignore` carries an explicit negation for that last one.

Original worklist below, for reference.

| What | Where | Count |
|---|---|---:|
| IDE metadata — `.project`, `.cproject`, `.classpath`, `.settings/`, `.idea/`, `*.pro.user`, `CMakeLists.txt.user` | `eclipse/` (81), `AndroidStudio/` (8), `QtCreator/` (6), `SpringToolSuite/` (5), `cpp_primer/` (4), `java/` (4), `lab-java/` (3), `lab-ccpp-basic-topic/` (2), STM32 (2) | 115 |
| Compiled `.class` files | `eclipse/coinhelper/target/`, `eclipse/JavaTomcatEmbedded/webapps/WEB-INF/classes/` | 4 |
| Runtime temp directory | `eclipse/JavaTomcatEmbedded/tomcat_tmp/work/` | dir |
| Compiled executable | `cpp/cpp-basic-cmake-vscode/src/main.exe` | 1 |
| Prebuilt DLL — buildable from `JavaJnaPureCLibrary/` next door | `eclipse/JavaJna/src/main/resources/JavaJnaPureCLibrary.dll` | 1 |
| Visual Studio auto-recover file | `VisualStudio/WxwidgetsTest/~AutoRecover.WxwidgetsTest.vcxproj` | 1 |
| Qt `.pro.user` hash-suffixed backups | `QtCreator/QtMingwWidgetUnicode/*.pro.user.{e7554a3,fccdaaf}` | 2 |
| Odd filename — space, no extension | `cpp_primer/Eclipse Project` | 1 |

**Keep, do not purge:** `gradle/wrapper/gradle-wrapper.jar` (18 files) — wrapper JARs are meant to be
committed. And `QtCreator/QtMingwWidgetUnicode/Data - テスト 測試.txt` is a deliberate CJK test
fixture, not corruption.

## Vendored and vendor-generated code

| Project | Origin | Scale |
|---|---|---|
| `nodejs/nextjs-ecommerce` | `lezada-next` commercial template | 433 files, 283 images |
| `nodejs/gatsby-home-site` | `rewy-gatsby` template | 348 files, 275 images |
| `nodejs/gatsby-starter-blog` | Official Gatsby starter (LICENSE retained) | 34 files |
| `SpringToolSuite/MasterSpringMvc` | Book companion project | 39 files |
| `lab-x-cube-ai-stm32-...` | ST HAL drivers, middleware, GUI libs | ~300 of 335 files |

Together these are roughly **1,150 of 2,540 tracked files — about 45% of the repository.** Only
`gatsby-starter-blog` currently carries its upstream license.
