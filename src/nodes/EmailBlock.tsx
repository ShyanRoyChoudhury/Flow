import { Handle, Position } from "reactflow";
import Node from "./Node";
import { EmailSVG } from "@/SVGs/SVG";

function EmailBlock(): React.ReactElement {
  return (
    <Node icon={<EmailSVG />} label="Email" color="text-[#8929E0]">
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <div>Template</div>
    </Node>
  );
}

export default EmailBlock;
