import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center text-2xl font-bold w-full h-full flex items-center justify-center mt-24">Project not found.</p>;

  return (
    <div className="w-full pt-16">
      {/* Banner Image */}
      {project.banner && (
        <div className="w-full h-64 md:h-80 overflow-hidden relative">
          <img 
            src={project.banner} 
            alt={`${project.title} banner`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Main Content Container */}
      <div className="p-6 md:w-2/3 mx-auto pt-8 space-y-12">
        
        {/* Header with Title */}
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          {project.itchLink && (
            <a 
              href={project.itchLink} 
              target="_blank" 
              className="opacity-80 hover:opacity-100 transition"
            >
              <img src="/itchio.svg" alt="itch.io" className="w-10" />
            </a>
          )}
        </div>

        {/* ============================================ */}
        {/* INTRODUCTION & SUMMARY */}
        {/* ============================================ */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg">My Role</h3>
                <p className="text-muted-foreground">{project.myRole}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Target Audience</h3>
                <p className="text-muted-foreground">{project.targetAudience}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg">Project Goals</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  {project.projectGoals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Outcomes</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Game/Video */}
        {project.embed && (
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={project.embed}
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
        )}

        {/* Project Details Card */}
        <div className="p-6 border rounded-lg shadow-sm bg-card">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              {project.timeline && <li><strong>Timeline:</strong> {project.timeline}</li>}
              {project.teamSize && <li><strong>Team Size:</strong> {project.teamSize}</li>}
            </ul>
            {project.tech && (
              <div>
                <strong className="block mb-2">Technologies Used:</strong>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        {/* ============================================ */}
        {/* PRIMARY CONTENT */}
        {/* ============================================ */}

        {/* Personal Contribution */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">My Specific Contributions</h2>
          {project.teamContext && (
            <p className="text-muted-foreground italic bg-muted p-4 rounded-lg">
              <strong>Team Context:</strong> {project.teamContext}
            </p>
          )}
          <ul className="space-y-3">
            {project.personalContributions.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots/Visuals */}
        {project.images && project.images.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Game Visuals</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`Screenshot ${idx + 1}`}
                  className="rounded-xl shadow-lg w-full" 
                />
              ))}
            </div>
          </section>
        )}

        {/* Technical Problem Solving */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Challenges & Solutions</h2>
          <p className="text-muted-foreground">
            Key technical problems I encountered and how I solved them.
          </p>
          
          {project.challenges.map((challenge, i) => (
            <div key={i} className="border rounded-lg p-6 bg-card shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-destructive mb-2">
                  Challenge {i + 1}: {challenge.problem}
                </h3>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.solution}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Impact:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.impact}
                </p>
              </div>

              {challenge.images && challenge.images.length > 0 && (
                <div className="grid md:grid-cols-2 gap-3 mt-4">
                  {challenge.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Challenge ${i + 1} visual ${idx + 1}`}
                      className="rounded-lg shadow" 
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Development Process */}
        {project.developmentProcess && project.developmentProcess.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Development Process</h2>
            <div className="space-y-6">
              {project.developmentProcess.map((step, i) => (
                <div key={i} className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.image && (
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="rounded-lg shadow mt-3 max-w-md" 
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Code Quality & Efficiency */}
        {project.codeExamples && project.codeExamples.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Code Examples & Breakdown</h2>
            <p className="text-muted-foreground">
              Detailed breakdown of my code with explanations of functionality, 
              structure, and efficiency.
            </p>
            
            {project.codeExamples.map((example, i) => (
              <div key={i} className="border rounded-lg p-6 bg-card shadow-sm space-y-4">
                <h3 className="text-xl font-semibold">{example.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {example.description}
                </p>
                
                <div className="bg-muted p-1 rounded-lg">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="rounded-lg w-full shadow" 
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {example.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        )}

        <Separator className="my-8" />

        {/* ============================================ */}
        {/* CONCLUSION */}
        {/* ============================================ */}
        <section className="space-y-6 bg-muted p-6 rounded-lg">
          <h2 className="text-3xl font-semibold">Reflection & Growth</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Takeaways</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.keyTakeaways.map((takeaway, i) => (
                  <li key={i}>{takeaway}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What I Learned</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.lessonsLearned.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Skills Developed</h3>
              <div className="flex gap-2 flex-wrap">
                {project.skillsGained.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.futureGoals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {project.itchLink && (
          <div className="mt-12 text-center p-8 border rounded-lg bg-card">
            <h3 className="text-2xl font-semibold mb-4">Try It Yourself</h3>
            <a
              href={project.itchLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-lg px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              <img src="/itchio.svg" alt="itch.io" className="w-6" />
              Play on itch.io
            </a>
          </div>
        )}
      </div>
    </div>
  );
}