import { NodeTypes } from "reactflow";
import AddBlock from "./AddBlock";
import DelayBlock from "./DelayBlock";
import EmailBlock from "./EmailBlock";
import SequenceStartPoint from "./SequenceStartPoint";
// import SourceBlock from "./SourceBlock";
import { PositionLoggerNode } from "./PositionLogger";
import SourceBlock2 from "./SourceBlock2";
import SourceBlock from "./SourceBlock";
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

function AddUser() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="20" y1="8" x2="20" y2="14"></line>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
  );
}
function TickUser() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <polyline points="17 11 19 13 23 9"></polyline>
    </svg>
  );
}
function UserGroup() {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}
function ThunderSVG(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 18.162 90 c -0.349 0 -0.7 -0.091 -1.018 -0.278 c -0.812 -0.48 -1.177 -1.463 -0.878 -2.357 l 12.026 -35.892 h -13.31 c -0.644 0 -1.248 -0.31 -1.624 -0.832 c -0.375 -0.522 -0.477 -1.193 -0.273 -1.804 L 28.992 1.365 C 29.265 0.549 30.028 0 30.888 0 h 27.897 c 0.644 0 1.248 0.31 1.623 0.832 c 0.376 0.522 0.478 1.193 0.273 1.803 l -7.286 21.746 h 21.622 c 0.794 0 1.514 0.47 1.832 1.198 s 0.177 1.575 -0.362 2.159 L 19.632 89.356 C 19.243 89.778 18.706 90 18.162 90 z M 17.762 47.473 h 13.31 c 0.644 0 1.248 0.31 1.624 0.832 c 0.375 0.522 0.477 1.193 0.273 1.804 l -9.941 29.671 l 47.425 -51.398 H 50.616 c -0.644 0 -1.248 -0.31 -1.623 -0.832 c -0.376 -0.522 -0.478 -1.193 -0.273 -1.803 L 56.006 4 H 32.327 L 17.762 47.473 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(0,0,0)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
function EmailSVG() {
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

function TaskSVG() {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

export default nodeTypes;
