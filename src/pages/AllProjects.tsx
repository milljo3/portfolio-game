import { projects } from "../data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function AllProjects() {
  return (
    <div className="p-6 md:w-2/3 mx-auto pt-24">
      <h1 className="text-4xl mb-4">All Game Projects</h1>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
}
