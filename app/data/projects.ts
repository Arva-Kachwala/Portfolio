export interface Project {
  slug: string;
  title: string;
  description: string;
  year: number;
  link?: string;
  details: string[];
}

export const projects: Project[] = [
  {
    slug: "queuefree",
    title: "QueueFree",
    description: "Smart cafeteria ordering & queue management system",
    year: 2024,
    link: "https://www.queuefree.co.in/",
    details: [
      "Engaged directly with a canteen services provider to understand operational bottlenecks in menu distribution, peak-hour ordering, and queue congestion, translating these insights into structured feature requirements and user-flow definitions.",
      "Built a functional prototype enabling digital menus, seamless order placement, and pickup coordination; collaborated closely with the client to refine workflows and prepare handover documentation for deployment across their partner workplaces.",
    ],
  },
  {
    slug: "real-time-bus-tracking",
    title: "Real-Time Bus Tracking",
    description: "Live GPS tracking for public bus routes",
    year: 2023,
    details: [
      "Designed a real-time visibility model by enabling live GPS location broadcasts for active bus routes, directly addressing commuter uncertainty around arrival times and improving service reliability in hilly and low-connectivity regions.",
      "Demonstrated strong problem-structuring and stakeholder alignment by mapping government pain points (delays, route deviations, lack of transparency) to measurable operational insights, earning positive feedback from Himachal Pradesh government evaluators for the practicality and scalability of the approach.",
    ],
  },
];
