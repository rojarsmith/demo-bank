# Third-party code

Not everything in this repository is original work. Roughly **45% of tracked files** come from
downloaded templates or vendor SDKs. This file records what they are and under what terms, so the
boundary between original and third-party code is explicit.

Original code is under [MIT](LICENSE). Nothing below is.

> **Verification status.** Terms marked ✅ were read from a license file or source header in this
> repository. Terms marked ⚠️ could not be verified from what is committed here and need confirming
> against wherever the code was originally obtained.

---

## Summary

| Project | Origin | Files | Terms |
|---|---|---:|---|
| [`web/nextjs-ecommerce`](web/nextjs-ecommerce) | `lezada-next` template | 433 | ⚠️ **unknown** |
| [`web/gatsby-home-site`](web/gatsby-home-site) | `rewy-gatsby` template | 348 | ⚠️ 0BSD declared, assets unverified |
| [`embedded/stm32-cubeide-ai-mnist`](embedded/stm32-cubeide-ai-mnist) | ST / SEGGER / FreeRTOS | 302 of 330 | ✅ mixed — **see below** |
| [`web/gatsby-starter-blog`](web/gatsby-starter-blog) | Official Gatsby starter | 34 | ✅ 0BSD |
| [`backend/spring/spring-mvc-master`](backend/spring/spring-mvc-master) | Book companion project | 39 | ⚠️ **unknown** |

---

## web/nextjs-ecommerce — `lezada-next`

A commercial storefront template. `package.json` gives `name: lezada-next`, version 1.0.0, with **no
`license` field, no `author`, and no LICENSE file**. 283 of its 433 files are image assets.

⚠️ **Terms unknown.** Commercial marketplace templates typically carry a per-use or per-project
license that restricts redistribution. Publishing the full template in a public repository may not be
permitted. Worth checking against the original purchase or download terms.

## web/gatsby-home-site — `rewy-gatsby`

A marketing site template. `package.json` gives `name: rewy-gatsby`, version 2.0.0, and declares
`license: 0BSD`. 275 of its 348 files are image assets.

⚠️ **Partially verified.** The `0BSD` field is plausibly inherited from the Gatsby starter the theme
was scaffolded from rather than describing the theme's own design assets. The declared value is
recorded here as-is; the images in particular are worth confirming.

## embedded/stm32-cubeide-ai-mnist — four separate licenses

This single project bundles four distinct third-party components. **302 of its 330 tracked files are
vendor-supplied**; the original work is `Src/` (16 files) and `Inc/` (12).

| Component | Path | Terms |
|---|---|---|
| ST HAL / BSP drivers | `Drivers/` | ✅ **BSD-3-Clause**, © 2016 STMicroelectronics |
| SEGGER emWin V5.32 | `GUI/` | ✅ **Proprietary — restricted**, see below |
| ST X-CUBE-AI | `Middlewares/ST/AI/` | ✅ **ST SLA0044** ("Ultimate Liberty"), © 2018 ST — [www.st.com/SLA0044](https://www.st.com/SLA0044) |
| FreeRTOS | `Middlewares/Third_Party/FreeRTOS/` | ✅ MIT |

### ⚠️ SEGGER emWin is the one to look at

The `GUI/` directory is SEGGER emWin V5.32, redistributed under ST's sublicense. Its source headers
state that the software is licensed to STMicroelectronics

> for the purposes of creating libraries for ARM Cortex-M-based 32-bit microcontroller products
> commercialized by Licensee only, sublicensed and distributed under the terms and conditions of the
> End User License Agreement supplied by STMicroelectronics

and that knowledge of the source may not be used to write a competing product. The files are also
marked *MCD-ST Liberty SW License Agreement V2*.

In practice this ties use to ST microcontroller targets and is materially more restrictive than
everything else in this repository. Since these 100 files are redistributed publicly here, it is
worth deciding deliberately whether to keep them committed.

### ⚠️ This project is NOT fully regenerable — do not delete it wholesale

An earlier version of this file claimed the vendor tree could simply be regenerated from the `.ioc`.
That is **not true**, and acting on it would destroy work:

- **`Src/network_data.c` holds the trained model.** 933 KB containing a 147,032-byte weight array
  emitted by X-CUBE-AI. **No source model (`.h5`, `.tflite`, `.onnx`) is committed anywhere in this
  repository.** These weights are the only copy; regenerating them requires the original trained
  model, which is not here.
- **The toolchain version is pinned and obsolete.** The `.ioc` records
  `STMicroelectronics.X-CUBE-AI.4.0.0`. Reproducing the generated output needs that exact pack.
- **`Middlewares/ST/AI/Lib/NetworkRuntime400_CM7_GCC.a`** is a 405 KB prebuilt binary, not source.

Treat `Src/network.c` and `Src/network_data.c` as **irreplaceable original output**. If the model
that produced them still exists somewhere, committing it — or recording where it lives — is the
single most valuable fix available for this project.

### What is actually removable

Only the emWin files carry both a redistribution concern and a recovery path:

| Component | Files | Redistributable? | Recoverable if removed? |
|---|---:|---|---|
| `Drivers/` | 129 | ✅ yes — BSD-3-Clause permits it | yes, ST firmware pack |
| `Middlewares/` | 73 | ST SLA0044 terms apply | partly — the `.a` is a binary drop |
| **`GUI/`** | **100** | ⚠️ **restricted** | yes — ST ships emWin as the STemWin pack |
| `Src/`, `Inc/` | 28 | your own work | **no — see above** |

So the emWin question is scoped to **100 files, not 300**. Removing `GUI/` and documenting
"install STemWin from ST" would resolve the redistribution concern without risking anything
irreplaceable — though it does mean the demo will not build until that pack is re-added.

## web/gatsby-starter-blog — official Gatsby starter

✅ **0BSD** (BSD Zero Clause), © 2020 Gatsby Inc. The upstream `LICENSE` file is retained in the
project directory. This is the only vendored project that arrived with its license intact.

## backend/spring/spring-mvc-master — book companion

Package root `masterSpringMvc`, matching the companion project for a Spring MVC book. **No LICENSE
file and no README** are committed.

⚠️ **Terms unknown.** Book companion repositories are often permissively licensed upstream, but that
cannot be confirmed from what is here. Worth tracing to the original repository.

---

## Suggested follow-ups

1. **Resolve the three ⚠️ unknowns** — `lezada-next`, `rewy-gatsby` assets, and `spring-mvc-master`.
   Each needs tracing to where it came from.
2. **Locate the trained model behind `Src/network_data.c`.** Those weights are currently
   unreproducible. Committing the source model, or recording where it lives, is the highest-value
   fix in this repository.
3. **Decide on the 100 emWin files in `GUI/`** — the only component that is both restricted and
   safely recoverable from ST if removed. Do **not** extend that decision to the rest of the
   project.
4. **Retain upstream licenses on arrival.** Four of five vendored projects lost theirs; only
   `gatsby-starter-blog` kept its LICENSE file.
5. **Consider submodules** for the large templates, so upstream terms and history stay attached
   rather than being flattened into this repository.
