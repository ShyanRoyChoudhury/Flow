import { Handle, Position } from "reactflow";
import Node from "./Node";
import { AddUser } from "@/SVGs/SVG";

function LeadsFromListBlock(): React.ReactElement {
  return (
    <Node icon={<AddUser />} label="Leads from" color="text-[#8929E0]">
      <Handle type="target" position={Position.Bottom} />
      <div className="text-[#ED317F]">Sample List</div>
    </Node>
  );
}

export default LeadsFromListBlock;
