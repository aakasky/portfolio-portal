import React, { useRef, useEffect, useState } from 'react';
import { FaArrowRight, FaCode, FaJava } from 'react-icons/fa';
import {
    SiReact,
    SiSpringboot,
    SiPostgresql,
    SiDocker,
    SiAmazon,
    SiNodedotjs,
    SiTypescript,
    SiJavascript,
    SiMysql,
    SiSocketdotio,
    SiMongodb
} from 'react-icons/si';

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

const TechPill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2">
        {children}
    </span>
);

const techIconMap: { [key: string]: React.ReactNode } = {
    'React': <SiReact />,
    'Spring Boot': <SiSpringboot />,
    'PostgreSQL': <SiPostgresql />,
    'Docker': <SiDocker />,
    'AWS': <SiAmazon />,
    'Node.js': <SiNodedotjs />,
    'TypeScript': <SiTypescript />,
    'Microservices': <SiJavascript />,
    'Java': <FaJava />,
    'JWT': <FaCode />,
    'MySQL': <SiMysql />,
    'Socket.io': <SiSocketdotio />,
    'MongoDB': <SiMongodb />,
};

const projects = [
    {
        title: 'Global Research Portal',
        description: 'A full-stack web application for Quess Corp, featuring data visualization and secure access controls.',
        tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
        title: 'Optimus Portal',
        description: 'A direct-to-consumer insurance platform for Kotak Life. Optimized for performance and user experience.',
        tags: ['AWS', 'Node.js', 'TypeScript', 'React', 'Microservices'],
    },
    {
        title: 'WhereAmI App',
        description: 'A direct-to-consumer insurance tracking platform for Kotak Life.',
        tags: ['Java', 'MongoDB', 'JWT', 'Spring Boot', 'MySQL'],
    },
    {
        title: 'Aadhaar Masking Portal',
        description: 'A portal for masking Aadhaar numbers in documents to enhance data privacy and security.',
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    },
];

const ProjectCard = ({ project, delay }: { project: typeof projects[0], delay: number }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = entry?.isIntersecting;

    return (
        <div
            ref={ref}
            className="glass-card flex flex-col overflow-hidden rounded-lg shadow-lg
                       transition-all duration-300 ease-out transform hover:scale-105
                       w-80 md:w-96 flex-shrink-0"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s, box-shadow 0.2s ease, transform 0.2s ease`,
            }}
        >
            <div className="w-full h-48 flex items-center justify-center space-x-6 p-4
                            bg-white/5 dark:bg-black/10 backdrop-blur-sm border-b border-white/10">
                {project.tags.slice(0, 3).map((tag) => (
                    <div key={tag} className="text-5xl text-gray-700 dark:text-gray-400
                                        transition-transform duration-200 hover:scale-110">
                        {techIconMap[tag] || <FaCode />}
                    </div>
                ))}
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap mb-4">
                        {project.tags.map((tag) => (
                            <TechPill key={tag}>{tag}</TechPill>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="py-16 relative">

            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                My Projects
            </h2>

            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>

            <div className="flex flex-nowrap overflow-x-auto pb-12 gap-8 custom-scrollbar">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        delay={index * 0.1}
                    />
                ))}
            </div>

            <div className="absolute bottom-4 right-8 flex items-center text-gray-500 dark:text-gray-400 text-sm animate-pulse">
                <span className="mr-2 inline">Scroll for more</span>
                <FaArrowRight />
            </div>

        </section>
    );
}
