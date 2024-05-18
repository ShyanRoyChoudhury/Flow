import { Handle, Position } from "reactflow";
import Node from "./Node";
import { EmailSVG } from "@/SVGs/SVG";

function EmailBlock(): React.ReactElement {
  return (
    <Node icon={<EmailSVG />} label="Email" color="text-[#8929E0]">
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
      <div className="text-[#8929E0]">Template</div>
    </Node>
  );
}

export default EmailBlock;
