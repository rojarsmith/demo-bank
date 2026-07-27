# demo-bank

A personal bank of runnable sample projects across multiple languages, frameworks, and target platforms.

> 🇹🇼 **中文版本：[README.zh-TW.md](README.zh-TW.md)**

This document is a **reorganization plan**. It describes the current state of the repository, the
problems with how it is laid out today, and a proposed target structure. No code has been moved yet.

---

## 1. Current state

27 sample projects, 1,304 tracked files, grouped into 8 top-level directories.

| Directory   | Projects | Tracked files | Notes |
|-------------|---------:|--------------:|-------|
| `bash/`     | 1        | 1             | A single loose script, not a project |
| `compiler/` | 1        | 7             | `nanoc` — actually a Node.js project |
| `cpp/`      | 4        | 31            | Mixed CMake and MSVC solutions |
| `java/`     | 5        | 173           | All Gradle |
| `mcu/`      | 0        | 0             | **Empty** |
| `nodejs/`   | 6        | 866           | 558 of these are template image assets |
| `quartus/`  | 0        | 0             | **Empty** (`quartus/tra1/db` is an empty stub) |
| `solidity/` | 9        | 220           | Every project is also a React/Next.js app |

There is no root `README.md`, `LICENSE`, or `.gitignore`, and no index of what the 27 projects are.

### Full inventory

| Current path | What it is | Stack |
|---|---|---|
| `bash/run.sh` | Shell scripting snippets — `for` loops, `dirname`, `pwd` | Bash |
| `compiler/nanoc` | Toy C compiler front end driven by an EBNF grammar | Node.js, `ebnf` |
| `cpp/cpp-basic-cmake-vscode` | Minimal CMake project wired for VS Code | C++, CMake |
| `cpp/cpp-cmake-basic` | CMake conditional builds; `array`, `hello`, `hook` samples | C++, CMake |
| `cpp/qt-quick-cmake` | Qt Quick app plus a shared library, with i18n | C++, Qt 6, QML, CMake |
| `cpp/sfml-demo` | 2D game loop demo | C++, SFML, MSVC solution |
| `java/java-basic` | Language fundamentals — annotations, functional interfaces, concurrency, `volatile`/`transient`/atomics | Java, Gradle |
| `java/springboot-basic` | Spring core concepts — IoC, AOP, bean lifecycle and scope, conditional injection, profiles, SpEL, XML config, JPA (65 classes) | Spring Boot 2.5, Java 11 |
| `java/springboot-flyway` | Database schema migration | Spring Boot 3.0, Flyway, H2 |
| `java/springboot-authorization-server` | OAuth2 authorization server | Spring Boot 3.0, Spring Security |
| `java/springboot-vaadin` | Server-driven UI with charts | Spring Boot 2.7, Vaadin 23 |
| `nodejs/react-weather-app` | Weather client against a REST API | React (CRA), axios |
| `nodejs/nextjs-basic` | The official Next.js tutorial — SSG vs SSR, pre-rendering | Next.js, SWR |
| `nodejs/nextjs-ecommerce` | **Vendored** commercial storefront template (`lezada-next`) | Next.js, Bootstrap |
| `nodejs/gatsby-basic` | Minimal Gatsby site | Gatsby, Emotion |
| `nodejs/gatsby-starter-blog` | **Vendored** official Gatsby blog starter | Gatsby, MDX |
| `nodejs/gatsby-home-site` | **Vendored** marketing site template (`rewy-gatsby`) | Gatsby, SCSS |
| `solidity/solidity-basic` | `Inbox` and `Lottery` contracts | Solidity, Truffle |
| `solidity/solidity-basic-remix` | ERC-165 and token experiments authored in Remix | Solidity, Remix |
| `solidity/solidity-basic-react` | Minimal contract plus browser wallet wiring | Solidity, React, web3.js |
| `solidity/solidity-campaign` | Crowdfunding contract only, no front end | Solidity, Truffle |
| `solidity/solidity-faucet` | Faucet with `Logger`, `Owned`, `Storage` split across contracts | Solidity, React, Bulma |
| `solidity/solidity-kickstart` | Crowdfunding dapp with a full UI | Solidity, Next.js, MUI, ganache |
| `solidity/solidity-marketplace` | Course marketplace dapp | Solidity, Next.js, Tailwind, web3.js |
| `solidity/solidity-nft-marketplace` | ERC-721 implemented from scratch, with interfaces and libraries | Solidity, React, Bootstrap |
| `solidity/solidity-openzeppelin` | ERC-1155 built on OpenZeppelin | Solidity, OpenZeppelin |

---

## 2. Problems with the current layout

1. **The classification axis is inconsistent.** Seven directories are named after a *language or
   runtime*; `compiler/` is named after a *domain*. `nanoc` is a Node.js project, so by the dominant
   rule it belongs in `nodejs/` — but that would bury what makes it interesting.

2. **`nodejs/` is a runtime, not a category.** It says nothing about what the projects do. Worse, it
   is not even exclusive: all nine `solidity/` projects ship a React or Next.js front end, so they
   are just as much "Node.js" projects.

3. **Language is already encoded in the project name.** `springboot-basic`, `solidity-faucet`,
   `cpp-cmake-basic` all name their stack. The parent directory repeats information the folder name
   already carries, and spends the single most valuable organizing axis to do it.

4. **Granularity is uneven.** A one-file scratch script (`bash/run.sh`) sits at the same level as a
   433-file application template.

5. **Two directories are empty.** `mcu/` has no contents at all; `quartus/` contains only an empty
   `tra1/db` stub.

6. **Vendored third-party templates are indistinguishable from original work.** `gatsby-home-site`
   (`rewy-gatsby`), `nextjs-ecommerce` (`lezada-next`), and `gatsby-starter-blog` are downloaded
   templates. Their 558 image assets are **43% of every tracked file in the repository**, and only
   `gatsby-starter-blog` carries its upstream `LICENSE`. Someone reading this repo cannot tell which
   code you wrote.

7. **Nothing tells you what is here.** No root README, no index, no per-project description. Finding
   the right sample means opening directories one by one.

### Smaller issues worth fixing in passing

- `cpp/cpp-basic-cmake-vscode/src/main.exe` is a compiled binary committed to git.
- Java group IDs disagree: `springboot-basic` uses `example.bank`, everything else uses `demo.bank`.
- Eclipse metadata (`.project`, `.settings/*.prefs`) is committed in `java/java-basic`.
- 27 separate `.gitignore` files with no shared root file.
- `cpp/sfml-demo` uses an MSVC solution while the other three C++ projects use CMake.
- 2.6 GB of untracked `.next/` and `.cache/` build output sits on disk — correctly ignored by git,
  but worth clearing.

---

## 3. Proposed structure

**Organize the tree by domain. Let the project name carry the language.**

Because every project name already states its stack, a domain-first tree gives you both axes at
once, while a language-first tree gives you one axis twice. Domain buckets also resolve the projects
that span two languages — a Solidity contract with a Next.js front end is unambiguously
`blockchain/`, and does not have to be filed under either language.

```
demo-bank/
├── README.md                  # this file — index of every project
├── README.zh-TW.md            # Chinese translation
├── LICENSE                    # your license, for your own code
├── THIRD_PARTY.md             # vendored templates and their upstream licenses
├── CONTRIBUTING.md            # naming and layout conventions
├── .gitignore                 # shared ignores, hoisted from the 27 local ones
│
├── docs/
│   ├── catalog.md             # generated: full table, filterable by tag
│   └── conventions.md         # project layout rules, README front-matter schema
│
├── languages/                 # language and runtime fundamentals — no application
│   ├── java-basic/
│   ├── bash-basic/            # from bash/run.sh
│   ├── cpp-cmake-basic/
│   └── cpp-basic-cmake-vscode/
│
├── backend/                   # server-side services and APIs
│   ├── springboot-basic/
│   ├── springboot-flyway/
│   ├── springboot-authorization-server/
│   └── springboot-vaadin/
│
├── web/                       # browser front ends, SSG and SSR sites
│   ├── react-weather-app/
│   ├── nextjs-basic/
│   ├── nextjs-ecommerce/
│   ├── gatsby-basic/
│   ├── gatsby-starter-blog/
│   └── gatsby-home-site/
│
├── blockchain/                # contracts, and the dapps that front them
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
├── desktop/                   # native GUI and graphics applications
│   ├── qt-quick-cmake/
│   └── sfml-demo/
│
├── tooling/                   # developer tools, compilers, code generators
│   └── nanoc/
│
└── embedded/                  # reserved: MCU firmware, FPGA/HDL
```

### What happens to the empty directories

`mcu/` and `quartus/` hold no files. Two options:

- **Delete them.** Git does not track empty directories, so they only exist in your working copy
  and will not survive a fresh clone anyway. Recreate when you have something to put there.
- **Keep the intent** as a single `embedded/` bucket with a `.gitkeep` and a line in this README
  saying what is planned for it.

Either is fine — just do not leave two empty top-level directories implying content that is not there.

### Naming convention

Keep the pattern the repository already mostly follows:

```
<tech>-<topic>[-<variant>]        all lowercase, kebab-case
```

`springboot-flyway`, `solidity-nft-marketplace`, `cpp-cmake-basic`. Two clarifying renames:

| From | To | Why |
|---|---|---|
| `bash/run.sh` | `languages/bash-basic/` | Promote the loose script to a project directory |
| `compiler/nanoc` | `tooling/nanoc/` | `compiler` was a category of one |

### The second axis: per-project metadata

A directory tree can only express one axis. Get the others back with a front-matter block at the top
of each project's `README.md`:

```yaml
---
title: Spring Boot — Flyway migrations
domain: backend
languages: [java]
stack: [spring-boot-3, flyway, h2, gradle]
level: demo          # basic | demo | app | vendor
status: working      # working | broken | archived
origin: original     # original | <upstream URL>
---
```

`level` is the distinction the current tree cannot express at all, and it is the one you most often
want when searching:

- **`basic`** — language or framework fundamentals, no application (`java-basic`, `bash-basic`)
- **`demo`** — one concept demonstrated end to end (`springboot-flyway`, `solidity-faucet`)
- **`app`** — a complete runnable application (`nextjs-ecommerce`, `solidity-marketplace`)
- **`vendor`** — a downloaded third-party template, not your code

Once every project has this block, `docs/catalog.md` can be generated from it, and you can answer
"show me every Java demo" or "which projects are vendored" without a tree that duplicates itself.

### Handling the vendored templates

`gatsby-home-site`, `nextjs-ecommerce`, and `gatsby-starter-blog` need `level: vendor` and an
`origin:` URL, their upstream `LICENSE` retained, and an entry in `THIRD_PARTY.md`.

They are also worth a harder look: they contribute 43% of the tracked files and almost none of the
learning value is in their image assets. Consider whether they should be git submodules, or dropped
entirely and re-fetched from upstream when needed.

---

## 4. Suggested migration order

Each phase is independently useful, so you can stop after any of them.

**Phase 0 — Documentation only, nothing moves.**
Add root `README.md`, `README.zh-TW.md`, `LICENSE`, `.gitignore`, and `THIRD_PARTY.md`. This alone
fixes the discoverability problem, which is the most painful one.

**Phase 1 — Hygiene, still no moves.**
Remove `cpp/cpp-basic-cmake-vscode/src/main.exe` and the Eclipse metadata in `java/java-basic`.
Resolve the empty `mcu/` and `quartus/` directories. Align the `springboot-basic` group ID to
`demo.bank`. Hoist shared ignore rules into a root `.gitignore`.

**Phase 2 — The move.**
Use `git mv` so history follows each file, and make **one commit per project** rather than a single
sweeping commit — a 27-project rename in one commit is very hard to review or revert.

```bash
git mv java/springboot-flyway backend/springboot-flyway
```

**Phase 3 — Per-project READMEs.**
Add the front-matter block and a "how to run" section to each project. Highest value for the
projects with no README today, which is 16 of the 27 — and note that 6 of the 11 that do have one
are unmodified upstream template READMEs, not yours.

**Phase 4 — Automation.**
A small script that reads every front-matter block and regenerates `docs/catalog.md`, plus optional
CI that builds each project so you find out when a sample rots.

---

## 5. The alternative, and why not

**Keep the language-first tree and just clean it up.** This is a legitimate choice: placement is
never ambiguous, and it is a smaller change.

It was not recommended because it does not fix the two structural problems. `solidity/` projects
would still be half React with no home for that fact, and the parent directory would still repeat
what the project name already says. If you prefer it anyway, take Phases 0, 1, 3, and 4 — every
recommendation here except the tree itself still applies, and they carry most of the benefit.
