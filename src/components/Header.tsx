import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-white/30 dark:border-gray-800/50 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-br from-indigo-500 to-pink-400 w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">AY</div>
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Aakash Yadav</h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Senior Software Developer</p>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300">About</a>
                    <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300">Experience</a>
                    <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300">Projects</a>
                    <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300">Skills</a>
                    <a href="#achievements" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300">Achievements</a>
                    <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300">Contact</a>
                    <button
                        onClick={() => setDark(!dark)}
                        aria-label="Toggle dark mode"
                        className="ml-2 p-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-400 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-800/90"
                    >
                        {dark ? <MdOutlineLightMode /> : <MdDarkMode />}
                    </button>
                </nav>

                <div className="md:hidden">
                    <button
                        onClick={() => setDark(!dark)}
                        aria-label="Toggle dark mode"
                        className="ml-2 p-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-gray-400 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-800/90"
                    >
                        {dark ? <MdOutlineLightMode /> : <MdDarkMode />}
                    </button>
                </div>
            </div>
        </header>
    );
}