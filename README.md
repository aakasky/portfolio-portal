# Modern Developer Portfolio

A sleek, high-performance developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. This project features a modern "Glassmorphism" design, smooth scroll animations, and a fully responsive layout.

## 🚀 Features

* **Modern UI/UX:** Glassmorphism card design with backdrop blur effects.
* **Smooth Animations:** Custom `IntersectionObserver` hook for fade-in on scroll and staggered animations.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
* **Interactive Projects:** Horizontal scrolling project showcase with hover effects.
* **Visual Timeline:** Vertical timeline for professional experience.
* **Dark Mode Support:** Built-in support for dark/light themes via Tailwind.
* **Dynamic Content:** Easy-to-update data structures for projects, skills, and experience.

## 🛠️ Tech Stack

* **Framework:** [React 18](https://reactjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Build Tool:** [Vite](https://vitejs.dev/)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/portfolio.git](https://github.com/your-username/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    pnpm i
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    # or
    pnpm start
    ```

4.  **Build for production:**
    ```bash
    pnpm build
    ```

## 🎨 Customization Guide

This portfolio is designed to be easily customizable. Here is where you can edit the content:

### 1. Personal Info & About
* **File:** `src/components/About.tsx`
* **Edit:** Update the bio text, email, phone number, and profile image path.

### 2. Experience / Timeline
* **File:** `src/components/Experience.tsx`
* **Edit:** Modify the `TimelineItem` components to reflect your work history.

### 3. Projects
* **File:** `src/components/Projects.tsx`
* **Edit:** Update the `projects` constant array.
    ```typescript
    const projects = [
      {
        title: 'Your Project',
        description: '...',
        tags: ['React', 'Node'],
        github: '...',
        live: '...'
      },
      // ...
    ];
    ```

### 4. Skills / Tech Stack
* **File:** `src/components/About.tsx` (or `Skills.tsx` if separated)
* **Edit:** Update the `technologies` array to change icons and names.

### 5. Achievements
* **File:** `src/components/Achievements.tsx`
* **Edit:** Update the `achievements` array.

## 💅 Styling & Icons

* **Global Styles:** Edit `src/index.css` to change scrollbar styles or global fonts.
* **Icons:** This project uses `react-icons`. To add new icons:
    1.  Search for an icon on [react-icons.github.io](https://react-icons.github.io/react-icons/).
    2.  Import it in your component: `import { FaBeer } from 'react-icons/fa';`

---

Designed & Built with ❤️ by SKY
