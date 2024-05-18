import { Handle, Position } from "reactflow";
import Node from "./Node";
import { DelaySVG } from "@/SVGs/SVG";

function DelayBlock(): React.ReactElement {
  return (
    <Node icon={<DelaySVG />} label="Delay">
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <div>Wait</div>
    </Node>
  );
}

export default DelayBlock;
