import { Handle, Position } from "reactflow";
import Node from "./Node";

function DelayBlock(): React.ReactElement {
  return (
    <Node icon={<DelaySVG />} label="Delay">
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <div>Wait</div>
    </Node>
  );
}

function DelaySVG() {
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
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
export default DelayBlock;
