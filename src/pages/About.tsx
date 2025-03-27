import { PageWrapper } from "../components/PageWrapper";

const About = () => {
    return (
        <PageWrapper>
            <div className="about-outer-container">
                <div className="text-center">
                    <h1 className="section-title">About Me</h1>
                    <p className="my-position">
                        Full Stack Developer | Mobile Developer
                    </p>
                </div>

                <div className="about-me-text-container">
                    <p className="about-me-text">
                        My name is Gilbert Sahyoun, I'm a **Computer Science graduate** with a passion for **Full Stack Development, and Mobile Apps**.
                        With hands-on experience in **React, Flutter, and backend development**, I thrive on building scalable and innovative solutions.
                    </p>
                    <p className="about-me-text mt-4">
                        Currently enhancing my skills in **React and React-Native** and looking to start my career in a company.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="my-skills-subtitle">My Skills</h2>
                    <div className="skills-container">
                        {["React", "Flutter", "Node.js", "Python", "AI/ML", "Tailwind", "SQL", "Firebase"].map((skill) => (
                            <span
                                key={skill}
                                className="skill"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="about-me-text">Want to collaborate or have a project in mind?</p>
                    <a
                        href="/contact"
                        className="about-contact-me-button"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </PageWrapper>
    );
};

export default About;