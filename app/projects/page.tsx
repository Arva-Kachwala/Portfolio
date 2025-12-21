import { GridWrapper } from "@/app/components/GridWrapper";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "QueueFree - Cafeteria System",
    description:
      "Engaged directly with a canteen services provider to understand operational bottlenecks in menu distribution, peak-hour ordering, and queue congestion. Built a functional prototype enabling digital menus, seamless order placement, and pickup coordination—collaborating closely with the client to refine workflows and prepare handover documentation for deployment across their partner workplaces.",
  },
  {
    title: "Real-Time Bus Tracking Application",
    description:
      "Designed a real-time visibility model enabling live GPS location broadcasts for active bus routes, directly addressing commuter uncertainty around arrival times in hilly and low-connectivity regions. Demonstrated strong problem-structuring and stakeholder alignment by mapping government pain points to measurable operational insights, earning positive feedback from Himachal Pradesh government evaluators for the practicality and scalability of the approach.",
  },
];

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </GridWrapper>

      <GridWrapper className="space-y-12 px-10">
        {projects.map((project) => (
          <div key={project.title} className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
              {project.title}
            </h2>
            <p className="text-base leading-7 text-text-secondary">
              {project.description}
            </p>
          </div>
        ))}
      </GridWrapper>
    </div>
  );
}
