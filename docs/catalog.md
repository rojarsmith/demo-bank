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

| Domain | Projects | Notes |
|---|---:|---|
| [fundamentals](#fundamentals) | 14 | Language syntax, algorithms, design patterns |
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

## fundamentals

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `bash/run.sh` | `fundamentals/bash-basic/` | `for` loops, `seq`, `dirname`, word splitting on strings | Bash | basic |
| `lab-java/lab-java-language` | `fundamentals/java-language/` | Interface and behaviour basics — `IBehavior`, `Man` | Java, Gradle | basic |
| `java/java-basic` | `fundamentals/java-basic/` | Annotations, functional interfaces, `ThreadPoolExecutor`, `volatile`/`transient`/atomics | Java, Gradle | basic |
| `eclipse/JavaAlgorithm` | `fundamentals/java-algorithm/` | Fibonacci, decimal ZIP, valid-time and ticket-cost puzzles, a timing harness | Java | basic |
| `eclipse/JavaReflection` | `fundamentals/java-reflection/` | Reflection over `Persion`/`Roger`/`Tom` types | Java | basic |
| `eclipse/JavaDesignPatternSingleton` | `fundamentals/java-pattern-singleton/` | Thread-safe singleton with a task/parameter example | Java | basic |
| `cpp_primer` | `fundamentals/cpp-primer/` | C++ language exercises — inheritance, enums, base classes (21 sources) | C++, Eclipse CDT | basic |
| `eclipse/cppbasic` | `fundamentals/cpp-basic/` | C++ scratch, Two Sum | C++ | basic |
| `lab-ccpp-basic-topic` | `fundamentals/cpp-basic/` ⟵ merge | Single-file C/C++ scratch | C++ | basic |
| `eclipse/CppAlgorithm` | `fundamentals/cpp-algorithm/` | Add Two Numbers, Reverse Integer, Two Sum | C++ | basic |
| `VisualStudio/CppObserverPattern` | `fundamentals/cpp-pattern-observer/` | Observer pattern | C++, MSVC | basic |
| `NetBeans/CppBoostSampleCode` | `fundamentals/cpp-boost/` | Boost — URL download, random number generation | C++, Boost | demo |
| `VisualStudio/PokerSize` | `fundamentals/csharp-poker-hands/` | Poker hand ranking — `Card`, straight-flush conditions | C#, MSVC | demo |
| `eclipse/javascriptbasic` | `fundamentals/javascript-basic/` | JS basics served from a Maven web app | JS, Maven, JSP | basic |

## build-systems

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `cpp/cpp-cmake-basic` | `build-systems/cmake-basic/` | Conditional builds, auto source include; `array`/`hello`/`hook` targets | C++, CMake | demo |
| `cpp/cpp-basic-cmake-vscode` | `build-systems/cmake-vscode/` | Minimal CMake wired for VS Code | C++, CMake | basic |
| `eclipse/cppbasiccmake` | `build-systems/cmake-eclipse/` | CMake under Eclipse CDT | C++, CMake | basic |
| `lab-autoconf` | `build-systems/autoconf-hello/` | `configure.ac` + `Makefile.am` hello world | C, autotools | basic |
| `QtCreator/GccDetect32or64BitSystem` | `build-systems/gcc-detect-arch/` | Detect 32- vs 64-bit target at build time | C++, CMake | basic |

## backend

### Spring (18 projects)

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `java/springboot-basic` | `backend/spring/spring-basic/` ⚠️ | IoC, AOP, bean lifecycle and scope, conditional injection, profiles, SpEL, XML config, JPA (65 classes) | Boot 2.5.3, Java 11 | demo |
| `lab-springboot/lab-springboot-basic` | `backend/spring/spring-basic/` ⚠️ | IoC, AOP, interceptors, `BeanPostProcessor` (45 files) | Boot 2.3.12 | demo |
| `eclipse/springbasic` | `backend/spring/spring-di-basic/` | Constructor DI, singleton vs prototype proxying | Spring, Maven | basic |
| `lab-springboot/lab-springboot-dummy` | `backend/spring/springboot-dummy/` | Minimal web skeleton | Boot 2.6.0 | basic |
| `lab-springboot/lab-springboot-jparepository` | `backend/spring/springboot-jpa/` | `JpaRepository` basics | Boot 2.3.1, Spring Data JPA | demo |
| `java/springboot-flyway` | `backend/spring/springboot-flyway/` | Versioned schema migration | Boot 3.0.1, Flyway, H2 | demo |
| `java/springboot-vaadin` | `backend/spring/springboot-vaadin/` | Server-driven UI with charts | Boot 2.7.1, Vaadin 23 | demo |
| `SpringToolSuite/springboot2demo` | `backend/spring/springboot2-demo/` | Security config, `Event`/`Group`/`User` model, WAR initializer | Boot 2, Gradle | demo |
| `SpringToolSuite/MasterSpringMvc` | `backend/spring/spring-mvc-master/` | Book companion project (`masterSpringMvc` packages) | Spring MVC, Gradle | **vendor** |

⚠️ These two are **duplicates covering the same syllabus** — one must win. See decision 1 in the plan.

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

### Qt (12 projects)

`QtCreator/GccDetect32or64BitSystem` also lives under `QtCreator/`, but it is a compiler probe rather
than a Qt sample and is listed under [build-systems](#build-systems) instead.

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `QtCreator/QtWidgetBasic` | `desktop/qt/widget-basic/` | MDI editor, custom scenes (33 files — largest Qt sample) | Qt Widgets, qmake | demo |
| `QtCreator/QtWidgetEvent` | `desktop/qt/widget-event/` | Mouse events via a custom label widget | Qt Widgets, qmake | basic |
| `QtCreator/QAction` | `desktop/qt/action/` | `QAction` with `.qrc` resources | Qt Widgets, qmake | basic |
| `QtCreator/QtMultiThreadWidgetUi` | `desktop/qt/multithread-ui/` | UI threading — `QThread` and a Boost thread variant | Qt, Boost, qmake | demo |
| `QtCreator/QtReflection` | `desktop/qt/reflection/` | Diagram scene with runtime element abstraction | Qt Widgets, qmake | demo |
| `QtCreator/QGraphicsViewFramework` | `desktop/qt/graphics-view/` | Graphics View framework starter | Qt, qmake | basic |
| `QtCreator/QtMingwWidgetUnicode` | `desktop/qt/mingw-unicode/` | Unicode path/filename handling under MinGW (CJK test fixture) | Qt, MinGW, qmake | demo |
| `QtCreator/qt-snake-game` | `desktop/qt/snake-game/` | Snake — food, game controller, collision | Qt Widgets, qmake | app |
| `cpp/qt-quick-cmake` | `desktop/qt/quick-cmake/` | QML app plus shared library, with i18n `.ts` | Qt Quick 6, CMake | demo |
| `lab-ccpp-qt-basic-topic` | `desktop/qt/rwlock/` | Read/write locks | Qt, CMake | basic |
| `qt-lab` | `desktop/qt/scratch/` | Scratch project | Qt, qmake | basic |
| `qt-lab-widgets` | `desktop/qt/scratch/` ⟵ merge | Scratch main window | Qt Widgets, qmake | basic |

### Other desktop

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `VisualStudio/WpfNoResizeWithShadowEffect` | `desktop/wpf-shadow-no-resize/` | Fixed-size WPF window with a drop shadow | C#, WPF, XAML | demo |
| `VisualStudio/WxwidgetsTest` | `desktop/wxwidgets-basic/` | wxWidgets main frame and GUI setup | C++, wxWidgets, MSVC | basic |
| `NetBeans/NetbeansRcp` | `desktop/netbeans-rcp/` | NetBeans Platform app — top components, word/uppercase filters | Java, NetBeans RCP | demo |
| `cpp/sfml-demo` | `desktop/sfml-game/` | 2D game loop | C++, SFML, MSVC | demo |

## mobile

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `AndroidStudio/Android5GuiTraining` | `mobile/android-gui-training/` | Activities, `ListView` fragment, custom array adapter | Java, Android 5, Gradle | demo |

## embedded

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `lab-x-cube-ai-stm32-f746g-handwriting-mnist` | `embedded/stm32-cubeide-ai-mnist/` | On-device handwritten-digit recognition. **335 files, ~300 ST-supplied** (`Drivers/`, `Middlewares/`, `GUI/`) — 13% of the repo | C, STM32F746G, X-CUBE-AI, CubeIDE | app |
| `EWARM/stm32_tra1` | `embedded/stm32-iar-gpio/` | GPIO driver plus startup assembly | C, STM32F7, IAR EWARM | basic |
| `ArduinoSketch/UARTEmu` | `embedded/arduino-uart-emu/` | UART emulation sketch | Arduino | basic |

## interop

Samples that cross a language or managed/native boundary — the category the current tree has no
place for at all.

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `eclipse/JavaJna` | `interop/java-jna/` | Java calling a native library through JNA | Java, JNA, Maven | demo |
| `eclipse/JavaJnaPureCLibrary` | `interop/java-jna-pure-c/` ⟵ merge | The C library (`func.c`) that JNA binds to | C | demo |
| `eclipse/JavaJnaPureC` | `interop/java-jna-pure-c/` ⟵ merge | C-side entry point | C | demo |
| `eclipse/JavaRunExecutableFile` | `interop/java-run-executable/` | Java launching an external executable | Java | basic |
| `eclipse/JavaRunExecutableFileCppExe` | `interop/java-run-executable/` ⟵ merge | The C++ executable it launches | C++ | basic |
| `VisualStudio/SwingCsharpWithPureC` | `interop/csharp-swig-pure-c/` | C# ↔ C via **SWIG** — `Func.i`, generated `Func_wrap.cxx` and `FuncPINVOKE.cs`. The current name says "Swing", which is a typo for SWIG and actively misleading | C#, C++, SWIG, MSVC | demo |
| `VisualStudio/CppFireEventFromUnmanaged` | `interop/cpp-event-unmanaged/` | Raising managed events from unmanaged C++ | C++/CLI, MSVC | demo |

## tooling

| Current | Proposed | What it is | Stack | Level |
|---|---|---|---|---|
| `compiler/nanoc` | `tooling/nanoc/` | Toy C compiler front end driven by an EBNF grammar; `return_7.c` fixture | Node.js, `ebnf` | demo |
| `lab-nodejs/mock-server` | `tooling/mock-server/` | Route-based mock API server | Node.js | basic |
| `VisualStudio/GoogleFinanceDownloaderTest` | `tooling/google-finance-downloader/` | WinForms harness — URI builder and data processor | C#, WinForms, MSVC | demo |

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
