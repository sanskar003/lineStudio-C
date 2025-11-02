## 🔗 Live Demo

👉 [View the project on Vercel] (https://lineproject-tan.vercel.app/)


# 🎨 Line Studio C

Line Studio C is a strictly design-driven web experience built with React, Tailwind CSS, and GSAP. It showcases a series of animated visual sections with scroll-based transitions, emphasizing layout, typography, and motion — without any backend or interactive functionality.

## 🧰 Tech Stack

- ⚛️ **React** — Component-based architecture
- 🎨 **Tailwind CSS** — Utility-first styling for responsive layouts
- 🎞️ **GSAP** — High-performance animations
- 📜 **ScrollTrigger** — Scroll-based animation control

## ✨ Features

- Scroll-triggered animations using GSAP
- Sticky sections with layered transitions
- Video embeds and image compositions
- No routing, no state management — pure design


> All media files are served from the `public/` directory for compatibility with Vercel deployment.

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com). 

To ensure media assets load correctly:
- Move all videos and images to the `public/assets/` folder
- Reference them using absolute paths like `/assets/pageEffect-vid-01.mp4`

## 🛠️ Setup

```bash
# Clone the repo
git clone https://github.com/your-username/line-studio-c.git

# Install dependencies
npm install

# Start development server
npm run dev
