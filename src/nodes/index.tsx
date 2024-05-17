import { NodeTypes } from "reactflow";
import AddBlock from "./AddBlock";
import DelayBlock from "./DelayBlock";
import EmailBlock from "./EmailBlock";
import SequenceStartPoint from "./SequenceStartPoint";
// import SourceBlock from "./SourceBlock";
import { PositionLoggerNode } from "./PositionLogger";
import SourceBlock2 from "./SourceBlock2";
import SourceBlock from "./SourceBlock";
import { AddUser, TaskSVG, ThunderSVG, TickUser, UserGroup } from "@/SVGs/SVG";
const nodeTypes = {
  // LeadSource: SourceBlock2,
  // LeadSource2: SourceBlock2,
  SequenceStart: SequenceStartPoint,
  EmailBlock: EmailBlock,
  DelayBlock: DelayBlock,
  AddBlock: AddBlock,
  SourceBlock: SourceBlock,
  "position-logger": PositionLoggerNode,
} satisfies NodeTypes;

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

export const outreachBlockViews = [
  {
    title: "Cold Email",
    icon: <EmailSVG />,
    description: "Send an email to a lead.",
  },
  {
    title: "Task",
    icon: <TaskSVG />,
    description: "Schedule a manual task.",
  },
];

export function EmailSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export default nodeTypes;
