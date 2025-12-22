import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { ShadowBox } from "@/app/components/ShadowBox";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Photo } from "@/app/components/Photo";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Arva Kachwala</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Arva, a software engineer with a growing focus on product thinking and business impact.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/arva_headshot_2.jpeg"
                      alt="Arva Kachwala"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/arva_headshot_1.jpeg"
                      alt="Arva Kachwala"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/arva_headshot_3.jpeg"
                      alt="Arva Kachwala"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/arva_headshot_1.jpeg"
                      alt="Arva Kachwala"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Foundations: Learning to Think Like an Engineer
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary font-medium">
                  Computer Engineering
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I began my journey with a degree in Computer Engineering, where I learned how systems are built from the ground up—how data flows, how software scales, and how design decisions affect reliability and performance. More than just learning to code, this phase trained me to break down ambiguous problems, reason logically, and build structured solutions.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  This engineering mindset continues to shape how I approach problems today.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/arva_headshot_1.jpeg"
                    alt="Arva Kachwala"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/arva_headshot_3.jpeg"
                      alt="Arva Kachwala"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Building in the Real World
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary font-medium">
                  Software Development Experience
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I then worked as a Software Development Engineer, where I translated ideas into production-ready systems. My role involved designing APIs, working with backend architectures, and shipping features used by real users.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Through this experience, I became comfortable executing complex technical requirements, collaborating with cross-functional teams, and owning systems end-to-end.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/arva_headshot_3.jpeg"
                    alt="Arva Kachwala"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/arva_headshot_2.jpeg"
                      alt="Arva Kachwala"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Expanding Beyond Code
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary font-medium">
                  Curiosity for Product, Strategy & Business
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Over time, I grew increasingly curious about the why behind what we build—which problems are worth solving, how products create value, and how technical decisions align with business outcomes and user needs.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I found myself drawn to conversations around product direction, user adoption, trade-offs, and go-to-market thinking. This curiosity has led me to explore roles at the intersection of technology and business, such as product management, product strategy, and solution engineering, where I can combine my technical background with a broader, more strategic perspective.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/arva_headshot_2.jpeg"
                    alt="Arva Kachwala"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/arva_headshot_4.jpeg"
                      alt="Arva Kachwala"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  These Days
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Currently, I&apos;m building large-scale back-end systems at Edelweiss Global Markets, working across Java, Spring Boot, MongoDB, Kafka, and everything in between.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  When I&apos;m not deep in code, you&apos;ll usually find me tinkering with side projects or writing for my blog.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Outside the tech bubble, I&apos;m either losing at games with friends, hitting the gym, baking brownies, or—best of all—leaning into my inner foodie and exploring new places to eat.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/arva_headshot_4.jpeg"
                    alt="Arva Kachwala"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
