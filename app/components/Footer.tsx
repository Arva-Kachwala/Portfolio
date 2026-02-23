import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";

export function Footer(): JSX.Element {
  return (
    <>
      <div className="relative max-w-7xl border-border-primary/50 dark:border-slate-700/50">
        <GridWrapper>
          <div className="max-w-6xl px-4 lg:mx-auto lg:px-4 xl:px-0">
            <div className="flex w-full items-center justify-between py-6 text-sm">
              <div className="flex items-center gap-6">
                <Link className="inline-block" href="/">
                  <img
                    className="h-10 w-10 dark:invert"
                    src="/bcoyerlogo_dark.svg"
                    alt="Arva's Logo"
                  />
                </Link>
                <p className="text-gray-500 dark:text-slate-400">
                  © 2026 Arva Kachwala
                </p>
              </div>
              <SocialPill />
            </div>
          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full dark:opacity-20 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
