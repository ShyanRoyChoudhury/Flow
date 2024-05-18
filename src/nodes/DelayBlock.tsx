import { Handle, Position } from "reactflow";
import Node from "./Node";
import { DelaySVG } from "@/SVGs/SVG";

function DelayBlock(): React.ReactElement {
  return (
    <Node icon={<DelaySVG />} label="Delay">
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
      <div>Wait</div>
    </Node>
  );
}

export default DelayBlock;
