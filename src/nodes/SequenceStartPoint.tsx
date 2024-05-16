import { Handle, Position } from "reactflow";

function SequenceStartPoint() {
  return (
    <div className="border py-2 px-6 bg-white shadow-sm">
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#D7D7D7" }}
      />
      <div className="text-xs">Sequence Start Point</div>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#D7D7D7" }}
      />
    </div>
  );
}

export default SequenceStartPoint;
