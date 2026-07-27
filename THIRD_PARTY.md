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
| [`embedded/stm32-cubeide-ai-mnist`](embedded/stm32-cubeide-ai-mnist) | ST / SEGGER / FreeRTOS | ~300 of 335 | ✅ mixed — **see below** |
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

This single project bundles four distinct third-party components. **~300 of its 335 files are
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

**Note:** all ~300 vendor files in this project are regenerable from the project's `.ioc` via
STM32CubeMX. Removing them and documenting the regeneration step would cut the repository by 13% and
sidestep the emWin question entirely.

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
2. **Decide on the STM32 vendor tree.** Dropping the regenerable ~300 files removes the emWin
   redistribution question and 13% of the repository at once.
3. **Retain upstream licenses on arrival.** Four of five vendored projects lost theirs; only
   `gatsby-starter-blog` kept its LICENSE file.
4. **Consider submodules** for the large templates, so upstream terms and history stay attached
   rather than being flattened into this repository.
