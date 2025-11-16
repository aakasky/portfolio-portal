const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993V6.75" />
    </svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.78 0-1.22.52-1.42 1.01-.07.17-.1.42-.1.67V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.2 1.03 3.2 3.26z" />
    </svg>
);
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.619.069-.606.069-.606 1.004.07 1.532 1.03 1.532 1.03.89 1.527 2.338 1.085 2.91.83.091-.645.349-1.085.635-1.334-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.838c.85.004 1.705.114 2.505.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.375.201 2.392.1 2.645.64.698 1.03 1.59 1.03 2.682 0 3.842-2.337 4.687-4.565 4.935.359.308.678.915.678 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.18.577.688.48C19.138 20.163 22 16.417 22 12A10 10 0 0012 2z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.45-5.152-3.773-6.602-6.602l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

const ContactCard = ({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card group p-5 transition-all duration-300 hover:bg-white/60 dark:hover:bg-gray-900/60 transform hover:-translate-y-1"
    >
        <div className="text-indigo-600 dark:text-indigo-400 mb-3 transition-colors group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
            {icon}
        </div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-800 dark:text-gray-300">{description}</p>
    </a>
);

export default function Contact() {
    return (
        <section id="contact" className="mb-24">
            <h3 className="text-3xl text-center font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h3>

            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                <div className="md:col-span-2 glass-card p-6 md:p-8">
                    <p className="font-medium text-lg text-gray-900 dark:text-white">Let's work together!</p>
                    <p className="text-gray-900 dark:text-gray-300 mt-2">
                        I'm currently open to new senior roles, contract work, and collaboration opportunities.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-gray-900 dark:text-gray-200">
                        <li>
                            <span className="font-medium">Location:</span> Mumbai, India
                        </li>
                        <li>
                            <span className="font-medium">Status:</span> Available for Hire
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <ContactCard
                            href="mailto:ay1117680@gmail.com"
                            icon={<EmailIcon />}
                            title="Send an Email"
                            description="ay1117680@gmail.com"
                        />

                        <ContactCard
                            href="https://www.linkedin.com/in/aakasky/"
                            icon={<LinkedInIcon />}
                            title="View LinkedIn"
                            description="See my professional history."
                        />

                        <ContactCard
                            href="https://github.com/aakasky"
                            icon={<GitHubIcon />}
                            title="See My Code"
                            description="Browse my public repositories."
                        />

                        <ContactCard
                            href="tel:+919820809562"
                            icon={<PhoneIcon />}
                            title="Call Me Directly"
                            description="For a direct conversation."
                        />

                    </div>
                </div>

            </div>
        </section>
    );
}
