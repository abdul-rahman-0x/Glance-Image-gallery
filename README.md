<div align="center">

  <h1>GLANCE.</h1>
  
  <p>
    <strong>A High-Performance Minimalist Image Gallery</strong>
  </p>

  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    </a>
  </p>
  
  <p>
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-architecture">Architecture</a>
  </p>

</div>

<br />

> **Glance** is a modern, responsive Single Page Application (SPA) designed for photographers and visual artists. It features a high-performance slider, masonry grid layout, and a custom-built dark mode engine, all engineered with pure Vanilla JavaScript and CSS3 variables.

---

##  Features

###  **Modern UI/UX**
- **Glassmorphism Architecture:** Frosted glass effects on navigation and overlays using `backdrop-filter`.
- **Theming Engine:** Native Dark/Light mode toggle using CSS variables and LocalStorage persistence logic.
- **Fluid Responsiveness:** Utilizes `100dvh` (Dynamic Viewport Height) for perfect mobile scaling.
- **Micro-Interactions:** Smooth hover effects, button ripples, and text reveals.

###  **Advanced Gallery System**
- **Masonry Grid Layout:** A "Pinterest-style" responsive grid that adapts to screen width.
- **Smart Pagination:** "Load More" functionality to fetch and reveal assets incrementally for performance.
- **Lightbox Modal:** Full-screen image viewer with high-resolution asset swapping and event delegation.
- **Lazy Loading:** Native `loading="lazy"` implementation for optimized LCP (Largest Contentful Paint).

###  **Core Functionality**
- **Infinite Hero Slider:** Auto-playing carousel with manual touch/swipe controls and dynamic dot navigation.
- **Pure CSS Navigation:** Mobile menu built entirely with CSS transforms (no icon font dependencies) for faster load times.
- **Preloader:** Lightweight CSS animation to mask DOM painting.

---

## Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic markup structure and SEO optimization. |
| **CSS3** | Flexbox, Grid, CSS Variables, Keyframe Animations. |
| **Vanilla JS** | ES6+ Logic, DOM Manipulation, Event Listeners. |
| **FontAwesome** | Minimal icon usage for UI elements. |
| **Google Fonts** | *Lexend* typeface for typography hierarchy. |

---

##  Project Structure

```bash
glance-portfolio/
│
├── index.html          # Semantic HTML5 entry point
├── style.css           # Global styles, variables, and responsive media queries
├── script.js           # Core logic (Slider, Gallery, Modal, Theme)
└── README.md           # Project documentation

```

## Architecture Highlights

```bash
1. Event Delegation

Instead of attaching event listeners to every single image for the Lightbox, the project uses Event Delegation on the parent grid container. This ensures that new images loaded via the "Load More" button are instantly interactive without re-binding scripts.
2. CSS-Only State Management

The mobile navigation menu transforms from a "Hamburger" to a "Cross" (X) using only CSS classes and transform: rotate(). This removes the need to fetch external icon assets for critical UI components, improving reliability on slow connections.

3. Performance Optimization
- Images: Utilization of loading="lazy" attributes.
- Animations: Hardware-accelerated transitions using transform and opacity to avoid layout reflows
```

## License

Distributed under the MIT License. See LICENSE for more information.
<div align="center">
<br />
<sub>Built with precision by <a href="#">Abdul Rahman</a></sub>
</div>
