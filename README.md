# demo-bank

A personal bank of runnable sample projects across multiple languages, frameworks, and target
platforms. **93 projects, organized by domain.**

> 🇹🇼 **中文版本：[README.zh-TW.md](README.zh-TW.md)**
>
> 📇 **Looking for a specific sample? See [docs/catalog.md](docs/catalog.md)** — every project
> indexed by domain, with stack, level, and a one-line description.

---

## Structure

Projects are organized by **domain — what the sample is about**. Language, framework, and toolchain
live in the project *name*, not the path.

```
demo-bank/
├── fundamentals/     14  Language syntax, algorithms, design patterns
├── build-systems/     5  CMake, autotools, toolchain detection
├── backend/          21  Spring (17, incl. a 9-project OAuth2 group), servlets, SNMP, crawler
├── web/              10  React, Next.js, Gatsby
├── blockchain/       13  Solidity contracts and dapps (9), Bitcoin (4)
├── desktop/          16  Qt (12), WPF, wxWidgets, NetBeans RCP, SFML
├── mobile/            1  Android
├── embedded/          3  STM32 (CubeIDE and IAR), Arduino
├── interop/           7  JNA, SWIG, P/Invoke, C++/CLI — crossing a language boundary
├── tooling/           3  Compiler front end, mock server, downloader
└── docs/                 catalog.md
```

Each domain is flat inside, **with one exception**: a subject with more than about eight projects
gets one extra level. That currently applies to three — `backend/spring/` (17),
`blockchain/solidity/` (9), and `desktop/qt/` (12). This is a rule rather than a case-by-case call,
so it stays stable as the repo grows.

### Why domain-first

Every project name already states its stack — `springboot-flyway`, `faucet`, `cmake-basic`. A
domain-first tree therefore gives you both axes at once, while a language-first or IDE-first tree
spends the top-level axis restating what the folder name already says.

Domain also resolves the cross-cutting cases cleanly. A Solidity contract with a Next.js front end
is `blockchain/`. A JNA sample that is half Java and half C is `interop/` — a category the old tree
had no place for at all, which is why those samples were scattered.

### Naming convention

```
<tech>-<topic>[-<variant>]        all lowercase, kebab-case
```

Three rules:

- **One casing.** `kebab-case` everywhere.
- **No `lab-` prefix.** Every project here is a lab; a prefix carried by a third of the repo
  distinguishes nothing.
- **Never repeat the parent in the child.** `blockchain/solidity/faucet`, not
  `solidity/solidity-faucet`.

### Toolchain

The toolchain is recorded in the project *name* where it is a real constraint — `stm32-iar-gpio`
needs IAR, `stm32-cubeide-ai-mnist` needs STM32CubeMX. It never appears as a directory, because for
the other ~85 projects it is just a record of which editor happened to be open.

---

## How it got here

The repository previously ran on **four competing naming schemes at once** — by language (`cpp/`,
`java/`, `nodejs/`), by IDE (`eclipse/`, `QtCreator/`, `VisualStudio/`, `AndroidStudio/`, `EWARM/`),
by topic with a `lab-` prefix, and ad-hoc (`cpp_primer`, `qt-lab`). Casing split four ways, nesting
depth was inconsistent, and there was no rule for where a new sample should go — so each new batch
invented another scheme.

The measurable cost was **topic scatter**: Spring lived in 4 directories, Qt in 5, C/C++ in 7. There
was also genuine duplication — two independent Spring projects covering the same syllabus.

What changed:

| | |
|---|---|
| Top-level directories | 26 → **11** |
| Naming schemes | 4 → **1** |
| Tracked files | 2,541 → **2,417** |
| IDE metadata tracked | 115 → **45** (only portable `.project`/`.classpath` kept) |

All moves used `git mv` and were recorded by git as pure renames — 0 adds, 0 deletes across every
commit — so `git log --follow` still reaches each file's original history.

Two structural findings worth knowing:

- **The OAuth2 group spans two stack generations**, which the old layout hid. Eight projects build
  on `spring-security-oauth2`, which is end-of-life; one uses Spring Authorization Server 1.0, its
  replacement. The tree now says so: `backend/spring/oauth2/authorization-server/` (read this first)
  sits apart from `backend/spring/oauth2/legacy/01…07/`.
- **`SwingCsharpWithPureC` was a typo for SWIG**, not Java Swing — it has `Func.i`, a generated
  `Func_wrap.cxx`, and `FuncPINVOKE.cs`. Now `interop/csharp-swig-pure-c/`.

---

## Remaining work

| | |
|---|---|
| `LICENSE` | Not yet added |
| `THIRD_PARTY.md` | 5 vendored projects — ~45% of tracked files. Only `gatsby-starter-blog` carries its upstream license |
| Per-project READMEs | Most projects have none. Adding front matter would let `docs/catalog.md` be generated instead of hand-maintained |
| Eclipse `.project` names | Renamed projects still report their old name internally (`interop/java-jna/consumer` shows as `JavaJna`). Import works; workspace labels are stale |
| Root `.gitattributes` | Deliberately deferred — `* text=auto` would renormalize line endings repo-wide and deserves its own commit |
| STM32 vendor files | ~300 of 335 files are ST-supplied HAL/middleware, regenerable from the `.ioc`. Keep committed or ignore? |
| `cpp-basic` / `cpp-basic-topic` | Were to be merged; both are Eclipse CDT projects with their own `.project`, so it needs hand-reconciliation |
| Java package roots | Decided on `demo.bank`; the re-rooting itself is not done |

### Per-project metadata schema

When adding a project README, use this front matter so the catalog can eventually be generated:

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

`level` and `status` are the axes a directory tree cannot express:

- **`basic`** — language or framework fundamentals, no application
- **`demo`** — one concept demonstrated end to end
- **`app`** — a complete runnable application
- **`vendor`** — third-party template or book companion code, not original work
