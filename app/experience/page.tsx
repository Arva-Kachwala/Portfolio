import { Resume } from "app/components/Resume";
import { GridWrapper } from "@/app/components/GridWrapper";

export default function ExperiencePage() {
  return (
    <div className="relative mt-14">
      <title>Experience | Arva Kachwala</title>
      <div className="relative space-y-10 md:space-y-16">
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                My work history and achievements timeline.
              </h1>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
        </div>
      </div>
    </div>
  );
}


