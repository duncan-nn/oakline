<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENT.md

## 🧠 Project Overview

This is a **conversion-focused frontend project** built with modern tools.
All generated code must prioritize:

* Clean architecture
* Reusability
* Performance
* Conversion (CRO)

---

## ⚙️ Tech Stack

* Next.js (App Router)
* React + TypeScript
* SCSS Modules
* next/font (local & Google fonts)
* next/image

---

## 📁 Folder Structure

/app                → routing, layouts, pages
/components
/ui              → primitives (Button, Input, Badge)
/layout          → layout (Container, Grid, Section)
/common          → shared (Navbar, Footer, Card)
/features        → business-specific components
/sections        → page sections (Hero, CTA, Features)
/styles
/abstracts       → tokens (colors, spacing, typography, breakpoints, mixins)
/base            → reset, global styles
/public            → images, fonts

---

## 🎨 Styling Rules (SCSS)

* Use **SCSS Modules only** for components
* No global styles inside components
* Use **BEM naming convention**

Example:
.card {}
.card__title {}
.card--featured {}

---

## 🎯 Design System Rules

### Colors

$absolute-white: #ffffff;
$absolute-black: #000000;

$purple-shades-60: #703BF7;
$purple-shades-65: #8254F8;
$purple-shades-70: #946CF9;
$purple-shades-75: #A685FA;
$purple-shades-90: #DBCEFD;
$purple-shades-95: #EDE7FE;
$purple-shades-97: #F4F0FE;
$purple-shades-99: #FBFAFF;

$white-shades-90: #E4E4E7;
$white-shades-95: #F1F1F3;
$white-shades-97: #F7F7F8;
$white-shades-99: #FCFCFD;

$grey-shades-08: #141414;
$grey-shades-10: #1A1A1A;
$grey-shades-15: #262626;
$grey-shades-20: #333333;
$grey-shades-30: #4D4D4D;
$grey-shades-40: #666666;
$grey-shades-50: #808080;
$grey-shades-60: #999999;

* Never hardcode colors

### Spacing

$space-1: 4px;
$space-2: 8px;
$space-3: 12px;
$space-4: 16px;
$space-5: 24px;
$space-6: 32px;
$space-7: 48px;
$space-8: 64px;

### Typography

* Use font variables (`--font-*`)
* Maintain hierarchy (h1, h2, p)
$text-xs: 12px;
$text-sm: 14px;
$text-base: 16px;
$text-lg: 18px;
$text-xl: 20px;
$text-2xl: 24px;
$text-3xl: 30px;
$text-4xl: 36px;
$text-5xl: 48px;
$text-6xl: 60px;


// Font Weights
$font-weight-black: 800;
$font-weight-extra-bold: 700;
$font-weight-bold: 600;
$font-weight-semi-bold: 500;
$font-weight-medium: 400;
$font-weight-regular: 300;
$font-weight-light: 200;
$font-weight-thin: 100;


//Line Heights
$line-height-relaxed: 1.7;
$line-height-base: 1.5;
$line-height-heading: 1.2;

---

## 📱 Responsiveness

* Mobile-first approach
* Use mixins from `_mixins.scss`

Example:
@include respond(md) {
// styles
}

---

## 🧩 Component Architecture

### UI (Primitives)

* Button
* Input
* Badge

### Composite

* Card
* Modal
* Navbar

### Sections

* Hero
* Features
* CTA
* Footer

---

## 🔘 Button Rules

* Must support:

  * variant (primary, secondary, ghost)
  * href (for navigation)
  * onClick (for actions)

Rules:

* Internal → next/link
* External → `<a>`
* Action → `<button>`

---

## 🖼️ Images

* Always use `next/image`
* Use optimized formats (WebP)
* Include alt text

---

## 🔗 Routing

* Use `next/link` for internal navigation
* Never use `<a>` for internal links

---

## ⚡ Performance

* Keep components small and reusable
* Avoid unnecessary re-renders
* Lazy load heavy components

---

## 🧠 Code Quality

* Use strict TypeScript types
* Avoid `any`
* Keep components under ~150 lines
* Extract reusable logic when needed

---

## 📦 Naming Conventions

* Components → PascalCase
* Files → PascalCase.tsx
* Styles → Component.module.scss
* SCSS variables → $kebab-case

---

## 🎯 CRO Rules

* Clear visual hierarchy
* Strong CTA above the fold
* Minimal distractions
* Guide user toward action

Focus on:

* Hero
* Buttons
* Forms
* Pricing sections

---

## ❌ Avoid

* Hardcoded values
* Inline styles
* Repeating UI
* Large monolithic components

---

## ✅ AI Output Requirements

* Follow folder structure
* Use reusable components
* Use SCSS modules + tokens
* Ensure responsiveness
* Write clean, production-ready code

---

## 🚀 Principle

Design system first.
Component-driven architecture.
Conversion-focused UI.

All code must be **scalable, clean, and reusable**.

---