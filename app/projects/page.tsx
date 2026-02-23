import { GridWrapper } from "@/app/components/GridWrapper";
import { projects } from "@/app/data/projects";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="mt-14 space-y-16 md:mt-16">
      <title>Projects | Arva Kachwala</title>
      <GridWrapper>
        <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary dark:text-slate-100 md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between rounded-xl border border-border-primary bg-white p-5 transition-colors dark:border-slate-700/50 dark:bg-slate-900"
            >
              <div>
                <div className="mb-3">
                  <span className="text-sm text-text-tertiary dark:text-slate-400">
                    {project.year}
                  </span>
                </div>
                <h2 className="mb-1.5 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-md border border-border-primary px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-400 dark:hover:text-white"
                >
                  Article
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border-primary px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-400 dark:hover:text-white"
                  >
                    Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </GridWrapper>
    </div>
  );
}
