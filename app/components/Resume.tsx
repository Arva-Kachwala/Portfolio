import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Edelweiss Global Markets",
      period: "Jul 2025 – Present",
      positions: [
        {
          title: "Software Developer",
          description: [
            "Collaborated closely with business analysts and MIS users to understand trading and post-trade requirements, map end-to-end operational workflows, and translate business needs into scalable backend solutions supporting middle- and back-office systems.",
            "Built reference data (RefData) platforms to manage instrument master data across domestic and international exchanges, defining efficient data models and contract ingestion workflows for equities, derivatives, commodities, and currency instruments.",
            "Automated international instrument onboarding by integrating with the Interactive Brokers (IB) API, enabling scalable creation and storage of global instruments and supporting expansion into international trading.",
            "Automated IRS reconciliation and P&L workflows, replacing manual processes with backend services for realized and unrealized P&L reporting, and conducted walkthroughs with MIS teams to ensure adoption and smooth handover.",
          ],
        },
      ],
    },
    {
      company: "Gupshup Technology",
      period: "Feb 2024 – Jun 2025",
      positions: [
        {
          title: "Software Engineer-1",
          description: [
            "Architected and delivered a live chat support system for enterprise clients, collaborating with 5–6 cross-functional teams (product, engineering, QA) to align requirements, integrations, and delivery timelines, ensuring seamless end-to-end functionality.",
            "Led technical onboarding and customization workflows for Instagram and Google Business Messaging, integrating Google SDKs and Facebook Graph APIs to reduce client onboarding time by 70% and improve channel adoption.",
            "Worked closely with product managers and cross-functional stakeholders to define and refine feature requirements, actively contributing improvement ideas and participating in product discussions to align engineering execution with business goals.",
            "Conducted internal walkthroughs and solution demos for product, support, and onboarding teams, clarifying system behavior, edge cases, and integration flows to improve operational readiness and reduce post-release issues.",
          ],
        },
      ],
    },
    {
      company: "IIT Bombay (Healthcare Startup Collaboration)",
      period: "Jan 2024 – Apr 2024",
      positions: [
        {
          title: "Technical Research Intern",
          description: [
            "Collaborated with a professor and startup founders to translate healthcare requirements into technical architecture options, evaluating Neo4j and ArangoDB for modeling complex patient–disease–treatment relationships.",
            "Designed data models, entity-relationship graphs, and integration flows, built PoC prototypes to visualize healthcare data graphs, validate search and recommendation accuracy, and document findings to guide engineering and product decisions.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/arva_headshot_1.jpeg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
