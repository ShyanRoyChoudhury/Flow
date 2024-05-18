import { PlusSVG } from "@/SVGs/SVG";
import { Handle, Position } from "reactflow";

function AddBlock(): React.ReactElement {
  return (
    <div className="border-2 border-[#05A6FF] shadow-sm  p-2 rounded-sm">
      <Handle type="target" position={Position.Top} />
      <PlusSVG />
    </div>
  );
}

export default AddBlock;
