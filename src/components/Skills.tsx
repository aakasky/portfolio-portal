import {
    SiReact,
    SiSpringboot,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiDocker,
    SiGit,
    SiTailwindcss,
    SiAngular,
    SiMongodb
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const TechnologyCard = ({
    icon,
    name,
    delay
}: {
    icon: React.ReactNode;
    name: string;
    delay: number;
}) => {
    return (
        <div
            className="glass-card p-4 flex flex-col items-center justify-center rounded-lg
                 shadow-lg transition-all duration-300 ease-out
                 transform hover:scale-105 hover:-translate-y-1 hover:shadow-indigo-500/30"
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
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'SQL', icon: <AiOutlineConsoleSql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
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
