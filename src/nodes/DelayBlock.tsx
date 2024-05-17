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

export default DelayBlock;
