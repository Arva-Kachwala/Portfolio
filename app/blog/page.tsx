import { GridWrapper } from "@/app/components/GridWrapper";

export default function BlogPage() {
  return (
    <div className="mt-14 space-y-16 md:mt-16">
      <title>Blog | Arva Kachwala</title>
      <GridWrapper>
        <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Blog
        </h1>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-md text-center">
          <p className="text-lg text-text-secondary">
            Coming soon! I&apos;m working on some content.
          </p>
        </div>
      </GridWrapper>
    </div>
  );
}
