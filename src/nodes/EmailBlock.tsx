import { Handle, Position } from "reactflow";
import Node from "./Node";

function EmailBlock(): React.ReactElement {
  return (
    <Node icon={<EmailSVG />} label="Email" color="text-[#8929E0]">
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <div>Template</div>
    </Node>
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
      <path
        fill="#8929E0"
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      ></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}
export default EmailBlock;
