import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project } : ProjectCardProps) {
    return (
        <Card className="p-3 w">
            <CardHeader>
                <CardTitle>
                    <div className="flex justify-between">
                        <Link to={`/projects/${project.id}`} className="text-2xl hover:underline flex gap-1 items-center w-fit">
                            <p>{project.title}</p>
                            <ArrowUpRight />
                        </Link>
                        <a className="h-8 w-8" href={project.itchLink} target="_blank" rel="noopener noreferrer">
                            <img src="/itchio.svg" alt={"Itchio Icon"}/>
                        </a>
                    </div>
                </CardTitle>
                <CardDescription>
                    <p className="text-xl">
                        {project.cardDescription}
                    </p>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex gap-1 flex-wrap">
                    {project.tags?.map((tag, index) => (
                        <Badge key={index}>
                            <p className="text-[14px] p-1">{tag}</p>
                        </Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}