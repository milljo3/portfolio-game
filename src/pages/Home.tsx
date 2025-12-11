import { Link } from "react-router-dom";

import {projects} from "../data/projects.ts";
import {ChevronRight, Download} from "lucide-react";
import {Button} from "../components/ui/button.tsx";
import ProjectCard from "@/components/ProjectCard.tsx";

function App() {
    return (
        <div className="scroll-smooth">
            <section id="about" className="w-full h-screen flex items-center justify-center p-2">
                <div className="flex flex-col px-2 text-center gap-3 md:w-2/3 w-full">
                    <h1 className="text-6xl">Joseph Miller<br/>Unity Game Developer</h1>
                    <p>I build Unity games and develop websites as a full stack developer</p>
                    <div className="flex gap-2 self-center md:flex-row flex-col">
                        <Button className="hover:cursor-pointer text-lg py-6">
                            <Link to="/projects" className="flex items-center gap-1">
                                See my Projects <ChevronRight />
                            </Link>
                        </Button>
                        <Button variant="ghost" className="hover:underline hover:cursor-pointer text-lg py-6">
                            <a href="/Joseph_Miller_Resume.pdf" className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                                <Download /> Download CV
                            </a>
                        </Button>
                    </div>
                    <div className="flex gap-2 self-center">
                        <a className="h-8 w-8" href="https://github.com/milljo3" target="_blank" rel="noopener noreferrer">
                            <img src="/github-mark-white.svg" alt={"Github Icon"}/>
                        </a>
                        <a className="h-8 w-8" href="https://www.linkedin.com/in/joseph-miller-326537261/" target="_blank" rel="noopener noreferrer">
                            <img src="/InBug-White.png" alt={"LinkedIn Icon"}/>
                        </a>
                    </div>
                </div>
            </section>

            <section id="projects" className="w-full min-h-[80vh] flex items-center justify-center">
                <div className="flex flex-col gap-2 p-2 md:w-2/3 w-full">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold">Projects</h2>
                        <Button className="hover:cursor-pointer text-lg py-6">
                            <Link to="/projects" className="flex items-center gap-1">
                                All Projects <ChevronRight />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        {projects.map((project) => (
                            <ProjectCard project={project} key={project.id} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="w-full min-h-[30vh] flex flex-col items-center justify-center text-center p-4 gap-1">
                <h2 className="text-3xl font-semibold mb-4">Let's connect</h2>
                <p className="mb-2">Feel free to reach out. I'm open to opportunities and collaborations!</p>
                <a href="mailto:joeykm91@gmail.com" className="text-blue-600 underline text-lg">joeykm91@gmail.com</a>
                <div className="flex gap-2 self-center">
                    <a className="h-8 w-8" href="https://github.com/milljo3" target="_blank" rel="noopener noreferrer">
                        <img src="/github-mark-white.svg" alt={"Github Icon"}/>
                    </a>
                    <a className="h-8 w-8" href="https://www.linkedin.com/in/joseph-miller-326537261/" target="_blank" rel="noopener noreferrer">
                        <img src="/InBug-White.png" alt={"LinkedIn Icon"}/>
                    </a>
                </div>
            </section>

        </div>
    )
}

export default App