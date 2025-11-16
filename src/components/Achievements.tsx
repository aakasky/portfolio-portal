import { useRef, useEffect, useState } from 'react';
import { FaAward } from 'react-icons/fa';

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

const achievements = [
    {
        title: 'International Informatics Olympiad',
        description: 'Cleared Level 1 by securing 1st position in class & 26th in state.',
    },
    {
        title: "Mind's Eye Project Competition",
        description: 'Secured the 3rd position in this prestigious competition for our final year project.',
    },
    {
        title: 'IAPT PRMO',
        description: 'Cleared the IAPT PRMO (Mathematics Olympiad), demonstrating a strong aptitude for mathematical problem solving.',
    },
];

const AchievementCard = ({ achievement, delay }: { achievement: typeof achievements[0], delay: number }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = entry?.isIntersecting;

    return (
        <div
            ref={ref}
            className="glass-card p-6 flex flex-col items-center text-center rounded-lg shadow-lg
                 transition-all duration-300 ease-out transform hover:scale-105"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s, box-shadow 0.2s ease, transform 0.2s ease`,
            }}
        >
            <div className="text-4xl text-indigo-400 mb-4">
                <FaAward />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
            </h4>
            <p className="text-gray-800 dark:text-gray-200 text-sm">
                {achievement.description}
            </p>
        </div>
    );
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-16">

            <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-2">
                My Achievements
            </h2>

            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {achievements.map((item, index) => (
                    <AchievementCard
                        key={item.title}
                        achievement={item}
                        delay={index * 0.1}
                    />
                ))}
            </div>

        </section>
    );
}
