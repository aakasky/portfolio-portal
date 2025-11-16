const PresentTimelineItem = ({ title, company, date, tags, children }: {
    title: string,
    company: string,
    date: string,
    tags: string,
    children: React.ReactNode
}) => (
    <div className="relative pl-12">
        <div className="absolute left-0 top-1">
            <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white dark:border-black" />
        </div>

        <article className="glass-card p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title} — {company}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{date}</p>
                </div>
                <span className="text-sm text-indigo-700 dark:text-indigo-400 font-medium mt-2 md:mt-0">
                    {tags}
                </span>
            </div>
            <ul className="mt-4 list-disc list-inside text-gray-900 dark:text-gray-200 space-y-1">
                {children}
            </ul>
        </article>
    </div>
);

const PastTimelineItem = ({ title, company, date, tags, children }: {
    title: string,
    company: string,
    date: string,
    tags: string,
    children: React.ReactNode
}) => (
    <div className="relative pl-12">
        <div className="absolute left-2 top-2">
            <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 border border-white dark:border-black" />
        </div>

        <article className="glass-card p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title} — {company}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{date}</p>
                </div>
                <span className="text-sm text-indigo-700 dark:text-indigo-400 font-medium mt-2 md:mt-0">
                    {tags}
                </span>
            </div>
            <ul className="mt-4 list-disc list-inside text-gray-900 dark:text-gray-200 space-y-1">
                {children}
            </ul>
        </article>
    </div>
);

export default function Experience() {
    return (
        <section id="experience">
            <h3 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-2">My Journey</h3>

            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>

            <div className="relative">
                <div className="absolute left-3 top-2 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-700" />

                <div className="space-y-8">

                    <PresentTimelineItem
                        title="Senior Software Developer"
                        company="Quess Corp"
                        date="June 2025 — Present"
                        tags="React · Spring Boot · Architecture"
                    >
                        <li>Leading full-stack development of the Global Research Portal — features, performance and architecture.</li>
                        <li>Driving technical design, code quality, and mentoring team members.</li>
                    </PresentTimelineItem>

                    <PastTimelineItem
                        title="Java Full Stack Developer"
                        company="Kotak Life"
                        date="May 2023 — June 2025"
                        tags="React · Node.js · Spring Boot"
                    >
                        <li>Contributed to Optimus Portal and WhereAmI — D2C and internal tracking tooling.</li>
                        <li>Built APIs, integrated third-party services and optimized system performance.</li>
                    </PastTimelineItem>

                    <div className="relative pl-12">
                        <div className="absolute left-2 top-2">
                            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 border border-white dark:border-black" />
                        </div>
                        <p className="pt-1 text-sm text-gray-600 dark:text-gray-400">
                            Journey started
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
