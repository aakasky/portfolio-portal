import { useRef, useEffect, useState } from 'react';
import {
    SiReact,
    SiSpringboot,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiTailwindcss,
    SiHtml5,
    SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

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

const TechnologyCard = ({
    icon,
    name,
    delay
}: {
    icon: React.ReactNode;
    name: string;
    delay: number;
}) => {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
    });
    const isVisible = entry?.isIntersecting;

    return (
        <div
            ref={ref}
            className="glass-card p-4 flex flex-col items-center justify-center rounded-lg
                 shadow-lg transition-all duration-300 ease-out
                 transform hover:scale-105 hover:-translate-y-1 hover:shadow-indigo-500/30"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s, box-shadow 0.2s ease, transform 0.2s ease`,
            }}
        >
            <div className="text-4xl mb-2 text-indigo-400">
                {icon}
            </div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {name}
            </p>
        </div>
    );
};

const technologies = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="mt-16">
                <h3 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-2">Core Technologies</h3>

                <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {technologies.map((tech, index) => (
                        <TechnologyCard
                            key={tech.name}
                            name={tech.name}
                            icon={tech.icon}
                            delay={index * 0.05}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}