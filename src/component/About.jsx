import { Link } from "react-router-dom";
export const About = () => {
    return (
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center gap-12">
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        History of FLAMES
                    </h2>
                    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <span className="font-semibold text-pink-600">FLAMES</span> is a popular
                            childhood game used to predict relationships between two people.
                            The name stands for
                            <span className="font-semibold text-purple-600">
                                {" "}Friends, Love, Affection, Marriage, Enemy, Sister.
                            </span>
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Traditionally played on paper, players remove common letters from names
                            and count the remaining ones to reveal a fun relationship result.
                            Today, it has evolved into digital versions like this interactive web app.
                        </p>

                        <div className="mt-6 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md">
                            <Link to="/"><button className="text-white"> A Classic Game → Now Digital 💫</button></Link>
                        </div>

                    </div>
                </div>

                <div className="px-6 py-10 max-w-3xl w-full text-center">

                    {/* Title */}
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Meet The Creator
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                        This FLAMES website is designed and developed by a passionate developer
                        who loves building fun interactive web apps.
                    </p>

                    {/* Card */}
                    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">

                        {/* Image */}
                        <img
                            className="w-full md:w-1/2 h-72 object-cover"
                            src="https://ik.imagekit.io/zqdmtrlsv/New%20Folder/photo.jpg"
                            alt="creator"
                        />

                        {/* Content */}
                        <div className="p-6 text-left">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
                                KARTHICK S
                            </h3>

                            <span className="text-pink-600 font-medium">
                                Creator • Developer • Designer
                            </span>

                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Built this FLAMES calculator website using React and Tailwind CSS
                                to make a fun and interactive experience for users. Passionate
                                about coding, UI design, and creative projects.
                            </p>

                            <div className="flex justify-start gap-6 mt-5">
                                <a
                                    href="mailto:karthick731.s@gmail.com"
                                    className="text-gray-600 hover:text-red-500 hover:scale-125 transition transform duration-300"
                                    title="Send Email"
                                > <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/karthick731s-web"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black dark:hover:text-white hover:scale-125 transition transform duration-300"
                                    title="GitHub Profile"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.84 9.49c.5.09.66-.22.66-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/karthick731"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 hover:scale-125 transition transform duration-300"
                                    title="LinkedIn Profile"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
