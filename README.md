# Markup Exercises Starter

A starter project delivering ready-to-use utilities, styled components, helpers, and much more.

## 🧭 Overview

This project is a markup exercises playground.

Vite requirements and documentation are available on its [official website](https://vitejs.dev/).

Published via Netlify: [link](https://markup-exercises.netlify.app/).

Check out the [components](https://markup-exercises.netlify.app/components) section for examples and reusable UI elements.

### How It Was Built

A component approach is used, styles are separated and grouped into several separate groups.

Initially, in the first exercise I used BEM. Later, in the second exercise, helpers and utilities were added as atomic classes (I used a tool for automatic generation of such classes). In the second exercise, I used postCSS - for pre- and post-processing. However, in the third exercise, I proposed a comprehensive solution using Vite.

Twig is used as a template engine. This is a good example of how layout can be embedded into PHP / Ruby / other templates.

### What Is Done

- Animated Sidebar (except footer part)
- Popover (only one variant and without additional js to detect position of the menu)
- Theme Toggler
- Animated Collapsed Section (we can combine it and build controlled Accordions)
- Badge
- Button
- Forms (in progress)
- Grid System
- Loader (I know there is no such component in the design)
- Helpers (util classes)

---

## 🚀 How to Use

### Installation

```bash
# Clone the repository
git clone https://github.com/gsemikozov/markup-exercises.git

# Go to the folder
cd markup-exercises

# Install packages
npm i
# or
npm install

# Remove link to the original repository
# - if you use Windows system
Remove-Item .git -Recurse -Force

# - or if you use Unix system
rm -rf .git
```

---

### Develop

```bash
# Start development mode with live-server
npm run dev

# Or with options
npm run dev -- --port=3000
```

---

### Build

```bash
# Build static files for production
npm run build
# or
npm run prod

# Or with options
npm run build --base=/subdomain --outDir=dest

# Start server for build preview
npm run preview
# or with options
npm run preview --port=3001
```

---

### Lint

```bash
# ESLint
npm run lint:js
# or
npm run lint:js:fix

# StyleLint
npm run lint:css
# or
npm run lint:css:fix
```

---

## 🧩 Components

See the components section in the app for styled UI elements.

---

## TODO

We can improve our build adding a few more plugins to:

- extract and inject critical css
- convert png/jpg to webP if possible
- check and reduce dead / unused css and js

Also if we gonna use multiple pages on this project then we must ensure smooth transitions when navigating between pages (it is visible on theme changer, it must be improved).

Another point - make js more modular.

---

## 🔐 License

MIT
