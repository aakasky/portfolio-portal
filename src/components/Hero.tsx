import { useState, useEffect } from 'react';

const useTypewriter = (words: string[], speed = 100, delay = 2000) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(speed);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];

            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                setTypingSpeed(speed / 1.5);
            } else {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                setTypingSpeed(speed);
            }

            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setTypingSpeed(speed);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);

    }, [currentText, isDeleting, typingSpeed, currentWordIndex, words, speed, delay]);

    return currentText;
};
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.78 0-1.22.52-1.42 1.01-.07.17-.1.42-.1.67V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.2 1.03 3.2 3.26z" />
    </svg>
);
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.619.069-.606.069-.606 1.004.07 1.532 1.03 1.532 1.03.89 1.527 2.338 1.085 2.91.83.091-.645.349-1.085.635-1.334-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.838c.85.004 1.705.114 2.505.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.375.201 2.392.1 2.645.64.698 1.03 1.59 1.03 2.682 0 3.842-2.337 4.687-4.565 4.935.359.308.678.915.678 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.18.577.688.48C19.138 20.163 22 16.417 22 12A10 10 0 0012 2z" />
    </svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M2.003 5.884L10 13.783l7.997-7.899A2 2 0 0018 4H6a2 2 0 00-3.997 1.884z" />
        <path d="M18 8.118l-8 7.9-8-7.9V18a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);
const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 11.9c-.88-.28-.89-1.37.2-1.61l15.97-6.16c.73-.3 1.29.27 1.09.95l-3.67 17.41c-.22.84-1.01 1.01-1.63.5l-4.54-3.32-2.14 2.05c-.22.22-.4.33-.66.33z" />
    </svg>
);


export default function Hero() {
    const wordsToType = ['reliable', 'scalable', 'performant', 'full-stack'];
    const typedText = useTypewriter(wordsToType, 100, 2000);

    return (
        <section className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
                <p className="text-base font-medium text-indigo-700 dark:text-indigo-400">
                    Hi, I'm Aakash — Senior Software Developer
                </p>

                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3 text-gray-900 dark:text-white">
                    Building &nbsp;
                    <span className="text-indigo-600 dark:text-indigo-400 min-h-[60px] md:min-h-[72px] inline-block w-[240px]">
                        {typedText}
                    </span>
                    applications that solve real problems.
                </h2>

                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                    I design and implement full-stack solutions using Java, Spring Boot, React, and cloud-native patterns. I turn complex business requirements into maintainable and efficient systems.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="/Aakash Yadav - Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all"
                    >
                        Download CV
                    </a>
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 font-medium hover:bg-white/90 dark:hover:bg-gray-800/90 transform hover:-translate-y-0.5 transition-all"
                    >
                        View Projects
                    </a>
                </div>

                <div className="mt-10 flex items-center gap-6 text-gray-600 dark:text-gray-400">
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aakasky/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <LinkedInIcon />
                    </a>
                    <a aria-label="GitHub" href="https://github.com/aakasky" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                        <GitHubIcon />
                    </a>
                    <a aria-label="Telegram" href="https://t.me/aakasky_05" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        <TelegramIcon />
                    </a>
                    <a aria-label="Email" href="mailto:ay1117680@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        <EmailIcon />
                    </a>
                </div>
            </div>

            <aside className="md:col-span-2 flex items-center justify-center">
                <div className="p-2 w-full max-w-sm">
                    <img src="/profile-image.png" alt="Aakash Yadav" className="w-full h-auto object-cover" />
                </div>
            </aside>
        </section>
    );
}