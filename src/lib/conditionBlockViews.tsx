import { FunnelSVG, HourglassSVG } from "@/SVGs/SVG";

export const conditionBlockViews = [
  {
    title: "Wait",
    icon: <HourglassSVG />,
    description: "Add a delay between blocks.",
  },
  {
    title: "If/Else (Rules)",
    icon: <FunnelSVG />,
    description: "Route leads through the sequence based on events.",
  },
];
