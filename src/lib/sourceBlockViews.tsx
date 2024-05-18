import { AddUser, ThunderSVG, TickUser, UserGroup } from "@/SVGs/SVG";

export const sourceBlockViews = [
  {
    title: "Leads from List(s)",
    icon: <AddUser />,
    description: "Connect multiple lists as source for this sequence.",
  },
  {
    title: "Segment by Events",
    icon: <TickUser />,
    description:
      "Create a segment of leads who have engaged with emails previously.",
  },
  {
    title: "Segment of List",
    icon: <UserGroup />,
    description: "Create a segment of leads which match SalesBlink Variables.",
  },
  {
    title: "Lead from CRM Integration",
    icon: <ThunderSVG />,
    description: "Pulls leads from your CRM integrations.",
  },
];
