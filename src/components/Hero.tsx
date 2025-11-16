import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";

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
                        className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all"
                    >
                        Download CV
                    </a>
                    <a
                        href="#projects"
                        className="inline-block px-6 py-3 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 font-medium hover:bg-white/90 dark:hover:bg-gray-800/90 transform hover:-translate-y-0.5 transition-all"
                    >
                        View Projects
                    </a>
                </div>

                <div className="mt-10 flex items-center gap-6 text-gray-600 dark:text-gray-400">
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aakasky/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <FaLinkedinIn size={28} />
                    </a>
                    <a aria-label="GitHub" href="https://github.com/aakasky" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaGithub size={28} />
                    </a>
                    <a aria-label="Telegram" href="https://t.me/aakasky_05" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        <FaTelegram size={28} />
                    </a>
                    <a aria-label="Email" href="mailto:ay1117680@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        <FaEnvelope size={28} />
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