import { PageWrapper } from "../components/PageWrapper";

const About = () => {
    return (
        <PageWrapper>
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-5">About Me</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Full Stack Developer | Mobile Developer
                    </p>
                </div>

                <div className="mt-8 text-gray-700 text-center">
                    <p className="text-lg leading-relaxed">
                        My name is Gilbert Sahyoun, I'm a **Computer Science graduate** with a passion for **Full Stack Development, and Mobile Apps**.
                        With hands-on experience in **React, Flutter, and backend development**, I thrive on building scalable and innovative solutions.
                    </p>
                    <p className="mt-4 text-lg">
                        Currently enhancing my skills in **React and React-Native** and looking to start my career in a company.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">My Skills</h2>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {["React", "Flutter", "Node.js", "Python", "AI/ML", "Tailwind", "SQL", "Firebase"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium shadow-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-700 text-lg">Want to collaborate or have a project in mind?</p>
                    <a
                        href="/contact"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </PageWrapper>
    );
};

export default About;
