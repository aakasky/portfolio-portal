import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Achievements from './components/Achievements';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="animated-gradient min-h-screen">
      <Header dark={dark} setDark={setDark} />

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <Hero />

        <div className="space-y-16 md:space-y-24 mt-16 md:mt-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-white/20 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 dark:text-gray-300">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Aakash Yadav — Built for senior engineering roles
          </div>
          <div className="mt-2 md:mt-0">Made with ❤️ — Available for hire</div>
        </div>
      </footer>
    </div>
  );
}
