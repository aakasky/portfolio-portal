import { useRef, useEffect, useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const useIntersectionObserver = (options: IntersectionObserverInit): [(node: HTMLElement | null) => void, IntersectionObserverEntry | null] => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const [node, setNode] = useState<HTMLElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(([entry]) => setEntry(entry), options);
        if (node) {
            observer.current.observe(node);
        }
        return () => {
            observer.current?.disconnect();
        };
    }, [node, options]);

    return [setNode, entry];
};

export default function About() {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
    });
    const isVisible = entry?.isIntersecting;

    return (
        <section
            id="about"
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
        >
            <h3 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-2">About Me</h3>

            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>

            <div className="glass-card p-6 md:p-8">
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                    I am a Computer Science graduate and senior software developer with experience across fintech and enterprise projects. I have strong expertise in backend systems (Java, Spring Boot), modern frontend stacks (React, TypeScript), and cloud deployments. I enjoy mentoring juniors, improving system architecture, and shipping high-quality software.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                    <a
                        href="mailto:ay1117680@gmail.com"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/90 dark:hover:bg-gray-800/90"
                    >
                        <FaEnvelope className="mr-2" />
                        Mail
                    </a>
                    <a
                        href="tel:+919820809562"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/90 dark:hover:bg-gray-800/90"
                    >
                        <FaPhone className="mr-2" />
                        Call
                    </a>
                </div>
            </div>
        </section>
    );
}
