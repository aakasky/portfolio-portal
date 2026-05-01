import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function About() {
    return (
        <section id="about">
            <h3 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-2">About Me</h3>

            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>

            <div className="glass-card p-6 md:p-8">
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                    I am a Computer Science graduate and senior software developer with experience across fintech and enterprise projects. I have strong expertise in backend systems (Java, Spring Boot), modern frontend stacks (React, TypeScript), and cloud deployments. I enjoy mentoring juniors, improving system architecture, and shipping high-quality software.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                    <a
                        href="mailto:ay1117680@gmail.com"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-400 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/90 dark:hover:bg-gray-800/90"
                    >
                        <FaEnvelope className="mr-2" />
                        Mail
                    </a>
                    <a
                        href="tel:+919820809562"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-400 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/90 dark:hover:bg-gray-800/90"
                    >
                        <FaPhone className="mr-2" />
                        Call
                    </a>
                </div>
            </div>
        </section>
    );
}
