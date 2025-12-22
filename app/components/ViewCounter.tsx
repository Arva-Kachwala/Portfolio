import clsx from "clsx";

// Frontend-only: Returns static view count (backend disabled)
export function ViewCounter({
  slug,
  increment = true,
  className = "text-xs text-slate-200",
}: {
  slug: string;
  increment?: boolean;
  className?: string;
}) {
  // Return a static placeholder view count for frontend-only mode
  const viewCount: number = 0;

  return (
    <span className={clsx(className)}>
      {viewCount} {viewCount === 1 ? "read" : "reads"}
    </span>
  );
}
