# demo-bank

A personal bank of runnable sample projects across multiple languages, frameworks, and target platforms.

> 🇹🇼 **中文版本：[README.zh-TW.md](README.zh-TW.md)**

This document is a **reorganization plan**. It describes the current state of the repository, the
problems with how it is laid out today, and a proposed target structure. No code has been moved yet.

---

## 1. Current state

Roughly **94 sample projects**, **2,540 tracked files**, spread across **27 top-level directories**.

| Directory | Projects | Files | Naming scheme | Subject |
|---|---:|---:|---|---|
| `AndroidStudio/` | 1 | 40 | IDE | Android UI training |
| `ArduinoSketch/` | 1 | 1 | IDE | UART emulation sketch |
| `bash/` | 1 | 1 | language | Shell snippets (a loose file) |
| `compiler/` | 1 | 7 | domain | `nanoc`, an EBNF-driven toy C front end |
| `cpp/` | 4 | 31 | language | CMake, Qt Quick, SFML |
| `cpp_primer/` | 1 | 26 | ad-hoc | C++ language exercises |
| `eclipse/` | 17 | 190 | IDE | Java, C++, servlet, Spring, JNA, SNMP |
| `EWARM/` | 1 | 8 | IDE | STM32 GPIO under IAR |
| `java/` | 5 | 173 | language | Spring Boot, Java basics |
| `lab-autoconf/` | 1 | 5 | topic | GNU autotools hello |
| `lab-bitcoin/` | 3 | 16 | topic | Bitcoin script, bitcoinj payments |
| `lab-ccpp-basic-topic/` | 1 | 4 | topic | C/C++ scratch |
| `lab-ccpp-qt-basic-topic/` | 1 | 5 | topic | Qt read/write locks |
| `lab-java/` | 1 | 14 | topic | Java language |
| `lab-nodejs/` | 5 | 68 | topic | React, Redux, mock server |
| `lab-springboot/` | 11 | 185 | topic | Spring Boot, heavy on OAuth2 |
| `lab-web-crawler/` | 1 | 11 | topic | Gradle + crawler |
| `lab-x-cube-ai-.../` | 1 | 335 | topic | STM32F746 handwriting MNIST |
| `NetBeans/` | 2 | 72 | IDE | Boost samples, NetBeans RCP |
| `nodejs/` | 6 | 866 | runtime | Gatsby, Next.js, React |
| `QtCreator/` | 9 | 100 | IDE | Qt Widgets, events, threading |
| `qt-lab/` | 1 | 3 | ad-hoc | Qt scratch |
| `qt-lab-widgets/` | 1 | 5 | ad-hoc | Qt Widgets scratch |
| `solidity/` | 9 | 220 | language | Contracts and dapps |
| `SpringToolSuite/` | 2 | 58 | IDE | Spring MVC, Spring Boot 2 |
| `VisualStudio/` | 7 | 74 | IDE | WPF, WxWidgets, C#/C interop |

### What changed since the previous plan

The repository roughly **tripled** — 27 projects to ~94, 1,304 files to 2,540. The empty `mcu/` and
`quartus/` directories are gone, replaced by real embedded work. That growth is good. What it also
did is turn a layout problem into a structural one, described below.

---

## 2. Problems with the current layout

### 2.1 Four competing naming schemes now share one namespace

The top level is no longer organized on one axis. It is organized on four:

| Scheme | Directories |
|---|---|
| **By language / runtime** | `bash`, `cpp`, `java`, `nodejs`, `solidity`, `compiler` |
| **By IDE / toolchain** | `AndroidStudio`, `ArduinoSketch`, `eclipse`, `EWARM`, `NetBeans`, `QtCreator`, `SpringToolSuite`, `VisualStudio` |
| **By topic, `lab-` prefixed** | `lab-autoconf`, `lab-bitcoin`, `lab-ccpp-basic-topic`, `lab-ccpp-qt-basic-topic`, `lab-java`, `lab-nodejs`, `lab-springboot`, `lab-web-crawler`, `lab-x-cube-ai-stm32-f746g-handwriting-mnist` |
| **Ad-hoc** | `cpp_primer`, `qt-lab`, `qt-lab-widgets` |

Casing splits four ways too — `PascalCase` (`AndroidStudio`), `UPPERCASE` (`EWARM`), `lowercase`
(`nodejs`), `snake_case` (`cpp_primer`), `kebab-case` (`lab-java`). And nesting depth is
inconsistent: `eclipse/` holds 17 projects, while `qt-lab/` **is** a project. `lab-bitcoin/` is both
at once — two subprojects plus four loose `.js` files at its root.

The practical cost: there is no rule that tells you where a new sample goes, so each new batch
invents another scheme, and the problem compounds.

### 2.2 Organizing by IDE is the least durable of the four

Eight directories are named after the tool you happened to open the code with. That is a poor
category because:

- **It is not a property of the code.** `eclipse/cppbasic`, `NetBeans/CppBoostSampleCode`,
  `VisualStudio/CppObserverPattern`, `QtCreator/QtWidgetBasic`, `cpp/cpp-cmake-basic`, and
  `cpp_primer/` are all C++. The IDE name splits them across six directories for no benefit.
- **It hides the subject.** `eclipse/JavaSnmp` is about SNMP. `eclipse/` tells you nothing about it.
- **It rots.** Eclipse → Spring Tool Suite → IntelliJ is a migration you have already partly made;
  the directory names are now a record of history, not of content.
- **It invites IDE metadata into git**, and it has: **115 IDE metadata files are tracked**, 81 of
  them under `eclipse/`. `QtCreator/*/*.pro.user` files are the worst offenders — they store
  absolute machine paths, and two of them are hash-suffixed backups (`.pro.user.e7554a3`).

**One nuance worth preserving:** for embedded work the toolchain genuinely *is* load-bearing — an
IAR `.ewp` project cannot be built without IAR, and `.ioc` implies STM32CubeMX. That belongs in
project metadata and in the project's own name (`stm32-iar-gpio`), not in a top-level directory.

### 2.3 The same subject is now scattered across many directories

This is the concrete damage caused by mixing schemes:

| Subject | Projects | Directories it lives in |
|---|---:|---|
| **Spring / Spring Boot** | 18 | `java/`, `lab-springboot/`, `SpringToolSuite/`, `eclipse/springbasic` — **4 places** |
| **Qt** | 13 | `QtCreator/`, `cpp/qt-quick-cmake`, `qt-lab/`, `qt-lab-widgets/`, `lab-ccpp-qt-basic-topic/` — **5 places** |
| **C / C++** | ~16 | `cpp/`, `cpp_primer/`, `eclipse/`, `NetBeans/`, `VisualStudio/`, `lab-ccpp-basic-topic/`, `lab-autoconf/` — **7 places** |
| **Java (non-Spring)** | ~12 | `java/`, `eclipse/`, `lab-java/`, `lab-web-crawler/` — **4 places** |
| **React** | ~10 | `nodejs/`, `lab-nodejs/`, and every `solidity/` dapp front end — **3 places** |
| **Blockchain** | 12 | `solidity/`, `lab-bitcoin/`, `eclipse/coinhelper` — **3 places** |
| **Embedded** | 3 | `EWARM/`, `lab-x-cube-ai-.../`, `ArduinoSketch/` — **3 places** |

### 2.4 Actual content duplication has appeared

`java/springboot-basic` (65 classes, package `example.bank.springboot.basic`) and
`lab-springboot/lab-springboot-basic` (45 files, package `lab`) are **two independent takes on the
same syllabus**. Both cover IoC, AOP with `MyAspect`/`MyAspect2`, `Interceptor`/`Invocation`,
`BeanPostProcessor`, `UserValidator`, the `BussinessPerson`/`Cat` POJOs, `AppConfig`, and XML
injection. This is not a layout problem you can fix by moving folders — one of them needs to win.

Relatedly, **8 OAuth2 projects** now exist (`java/springboot-authorization-server` plus seven
`lab-springboot/lab-springboot-*oauth2*`). Reading their names, they are a deliberate progression —
base → JWT → Redis → PostgreSQL → resource server → resource+JWT → expansion. That is valuable, but
nothing in the layout says they are a series or what order to read them in.

### 2.5 Java package roots disagree six ways

`example.bank` (64 files), `lab.springboot` (37), `demo.bank` (36), `lab.java` (26), bare `lab`
(11+), `com.lab` (9), `android.lab` (4). Same author, same repo, no convention.

**Decided: standardize on `demo.bank`**, matching the repository name — e.g.
`demo.bank.spring.oauth2`, `demo.bank.embedded.stm32`. This is a code change, so it belongs in
Phase 2 rather than the directory move.

### 2.6 Hygiene

- **115 tracked IDE metadata files** — `.project`, `.cproject`, `.classpath`, `.settings/`,
  `.idea/`, `.pro.user`, `CMakeLists.txt.user`.
- **Committed build output**: `eclipse/coinhelper/target/classes/*.class`,
  `eclipse/JavaTomcatEmbedded/webapps/WEB-INF/classes/Hello.class`, and a whole
  `eclipse/JavaTomcatEmbedded/tomcat_tmp/work/` **runtime temp directory**.
- **Committed binaries**: `cpp/cpp-basic-cmake-vscode/src/main.exe`,
  `eclipse/JavaJna/src/main/resources/JavaJnaPureCLibrary.dll` — the latter is ironic, since
  `eclipse/JavaJnaPureCLibrary/` right next to it is the source that builds it.
- **73 `.gitignore` files**, still no root one.
- `cpp_primer/Eclipse Project` — a file with a space in the name and no extension.
- Still no `LICENSE` and no record of which projects are third-party.

### 2.7 Vendored and vendor-generated code is unmarked

Beyond the three web templates flagged previously (`gatsby-home-site`, `nextjs-ecommerce`,
`gatsby-starter-blog`), two more cases:

- `SpringToolSuite/MasterSpringMvc` — package root `masterSpringMvc`, a book's companion project.
- `lab-x-cube-ai-stm32-f746g-handwriting-mnist` — **335 files, of which ~300 are ST-supplied HAL
  drivers, middleware, and GUI libraries** (`Drivers/` 129, `Middlewares/` 73, `GUI/` 100). Your
  actual work is `Src/` (16) and `Inc/` (12). This one project is 13% of the repository.

---

## 3. Proposed structure

**Organize by domain — what the sample is *about*. Let the project name carry the language and
toolchain.**

Every project name already states its stack (`springboot-flyway`, `solidity-faucet`, `QtWidgetBasic`).
A domain-first tree therefore gives you both axes at once, while language-first or IDE-first spends
the top-level axis restating what the folder name already says. Domain also cleanly resolves the
cross-cutting cases: a Solidity contract with a Next.js front end is `blockchain/`, and a JNA sample
that is half Java and half C is `interop/`.

### Nesting rule

Flat inside each domain, **with one exception**: a subject with more than about eight projects gets
one extra level. That currently applies to exactly three — Spring (18), Qt (13), Solidity (9). This
is a rule, not a judgment call, so it stays stable as the repo grows.

```
demo-bank/
├── README.md  README.zh-TW.md  LICENSE  THIRD_PARTY.md  CONTRIBUTING.md  .gitignore
├── docs/
│   ├── catalog.md              # generated from per-project metadata
│   └── conventions.md          # naming, layout, metadata schema
│
├── fundamentals/               # language syntax, algorithms, design patterns
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
├── build-systems/              # how code gets built, not what it does
│   ├── cmake-basic/            ← cpp/cpp-cmake-basic
│   ├── cmake-vscode/           ← cpp/cpp-basic-cmake-vscode
│   ├── cmake-eclipse/          ← eclipse/cppbasiccmake
│   ├── autoconf-hello/         ← lab-autoconf
│   └── gcc-detect-arch/        ← QtCreator/GccDetect32or64BitSystem
│
├── backend/
│   ├── spring/                 # 18 projects — exceeds the nesting threshold
│   │   ├── spring-basic/       ← RECONCILE: java/springboot-basic + lab-springboot-basic
│   │   ├── spring-di-basic/    ← eclipse/springbasic
│   │   ├── springboot-jpa/     ← lab-springboot/lab-springboot-jparepository
│   │   ├── springboot-flyway/  ← java/springboot-flyway
│   │   ├── springboot-vaadin/  ← java/springboot-vaadin
│   │   ├── springboot2-demo/   ← SpringToolSuite/springboot2demo
│   │   ├── spring-mvc-master/  ← SpringToolSuite/MasterSpringMvc  (vendored)
│   │   └── oauth2/             # the 8-project series, in reading order
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
│   ├── solidity/               # 9 projects — exceeds the nesting threshold
│   │   └── basic/ basic-react/ basic-remix/ campaign/ faucet/
│   │       kickstart/ marketplace/ nft-marketplace/ openzeppelin/
│   ├── bitcoin-script/         ← lab-bitcoin (root .js files)
│   ├── bitcoin-payment/        ← lab-bitcoin/bitcoin-payment
│   ├── bitcoinj-payment/       ← lab-bitcoin/paybybitcoinj
│   └── coin-helper/            ← eclipse/coinhelper
│
├── desktop/
│   ├── qt/                     # 13 projects — exceeds the nesting threshold
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
├── interop/                    # crossing a language or native boundary
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

### Naming convention

```
<tech>-<topic>[-<variant>]        all lowercase, kebab-case, no lab- prefix
```

Three rules the current tree breaks:

- **One casing.** `kebab-case` everywhere. `AndroidStudio` → `android-gui-training`,
  `cpp_primer` → `cpp-primer`.
- **Drop the `lab-` prefix.** Every project here is a lab; a prefix carried by a third of the repo
  distinguishes nothing. `lab-springboot/lab-springboot-basic` says "lab" twice and "springboot"
  twice in one path.
- **Never repeat the parent in the child.** `solidity/solidity-faucet` → `blockchain/solidity/faucet`.

### Per-project metadata

A tree expresses one axis. Recover the rest with front matter in each project's `README.md`:

```yaml
---
title: Spring Boot — OAuth2 authorization server with JWT
domain: backend/spring/oauth2
languages: [java]
stack: [spring-boot-3, spring-security, jwt, gradle]
toolchain: any            # any | eclipse | stm32cubeide | iar-ewarm | arduino-ide | msvc
level: demo               # basic | demo | app | vendor
status: working           # working | broken | archived | superseded
origin: original          # original | <upstream URL>
series: oauth2/02         # optional, for ordered progressions
---
```

`toolchain:` is where IDE information belongs — it is a real constraint for the embedded and MSVC
projects, and `any` for everything else. `series:` captures the OAuth2 progression. `level` and
`status` are the two axes the current tree cannot express at all:

- **`basic`** — language or framework fundamentals, no application
- **`demo`** — one concept demonstrated end to end
- **`app`** — a complete runnable application
- **`vendor`** — third-party template or book companion code, not yours

Once every project carries this block, `docs/catalog.md` is generated, not maintained.

---

## 4. Decisions you need to make

These are content questions that a reorganization cannot answer for you, and they should be settled
**before** anything moves — there is no point relocating a project you are about to delete.

1. **`springboot-basic` exists twice.** Which is authoritative — `java/springboot-basic` (65 classes,
   more thorough) or `lab-springboot/lab-springboot-basic` (45 files, flatter packages)? Mark the
   loser `status: superseded` or delete it.

2. **The STM32 AI project's ~300 vendor files.** ST HAL drivers, middleware, and GUI libraries are
   13% of the entire repository and are regenerable from the `.ioc` file via STM32CubeMX. Keep them
   committed for a guaranteed-reproducible build, or ignore them and document the regeneration step?

3. **IDE metadata.** Purging all 115 files is cleanest, but some Eclipse projects genuinely need
   `.project` and `.classpath` to import cleanly. Suggested split: keep `.project`/`.classpath`,
   drop `.settings/`, `.idea/`, and all `*.pro.user` (those hold absolute machine paths and are
   never portable).

4. **Vendored projects.** Four are now identified — three web templates plus `MasterSpringMvc`.
   Keep with attribution, convert to submodules, or drop and re-fetch when needed?

---

## 5. Suggested migration order

Each phase is independently useful, so you can stop after any of them.

**Phase 0 — Documentation only, nothing moves.**
Add root `README.md`, `README.zh-TW.md`, `LICENSE`, `.gitignore`, `THIRD_PARTY.md`. At ~94 projects
with no index, this is the highest-value step in the whole plan.

**Phase 1 — Settle the four decisions above.** Resolve the duplicate, decide on vendor files.

**Phase 2 — Hygiene, still no moves.**
Purge the agreed IDE metadata, committed `.class` files, `main.exe`, and the
`eclipse/JavaTomcatEmbedded/tomcat_tmp/` runtime directory. Hoist shared ignore rules from the 73
scattered `.gitignore` files into a root one. Re-root all Java packages under `demo.bank`.

**Phase 3 — The move.**
Use `git mv` so history follows each file, and commit **one domain at a time** — `fundamentals/`,
then `backend/`, and so on. A 94-project rename in a single commit cannot be reviewed or reverted.

```bash
git mv lab-springboot/lab-springboot-security-oauth2-authorization-jwt backend/spring/oauth2/02-authorization-jwt
```

**Phase 4 — Per-project READMEs.** Add front matter and a "how to run" section. Start with the
projects that have no README, which is the large majority.

**Phase 5 — Automation.** A script that reads all front matter and regenerates `docs/catalog.md`,
plus optional CI that builds each project so you learn when a sample rots.

---

## 6. The alternatives, and why not

**Keep language-first and file the new work into it.** This was the previous plan's rejected
alternative and it has aged badly: it has no home for the 8 IDE-named directories, no home for
`interop/` samples that are half Java and half C, and it would still split Qt across `cpp/` and a Qt
directory. The new material is exactly the material it handles worst.

**Keep IDE-first and convert everything to it.** Consistency alone would be an improvement over four
schemes. But it optimizes for how you open a project rather than what it teaches, splits C++ across
six directories, and rots every time you change tools — a migration already visible in this repo's
history (`eclipse/` → `SpringToolSuite/`).

**Flat, with tags only — no hierarchy.** ~94 directories at the root, all discovery through
`docs/catalog.md`. This is genuinely defensible and scales indefinitely, but it depends entirely on
the catalog being generated and current from day one. Worth reconsidering if the repo passes ~150
projects; below that, a shallow tree browses better.
