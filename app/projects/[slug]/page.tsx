import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mt-14 space-y-12 md:mt-16">
      <title>{project.title} | Arva Kachwala</title>

      <GridWrapper>
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to Projects
          </Link>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              {project.year}
            </span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                Visit Site
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>

          <h1 className="text-4xl font-medium tracking-tighter text-text-primary dark:text-slate-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary dark:text-slate-400">
            {project.description}
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
          {project.details.map((detail, i) => (
            <p
              key={i}
              className="text-base leading-8 text-text-secondary dark:text-slate-300"
            >
              {detail}
            </p>
          ))}
        </div>
      </GridWrapper>
    </div>
  );
}
