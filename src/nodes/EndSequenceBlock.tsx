import { Handle, Position } from "reactflow";

import { PauseSVG } from "@/SVGs/SVG";

function EndSequenceBlock(): React.ReactElement {
  return (
    <div className="border  p-2 rounded-md bg-white shadow-sm space-x-2 ">
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-col justify-center space-y-2">
        <div className="mx-auto border p-2 rounded ">
          <PauseSVG />
        </div>
        <div>End Sequence</div>
      </div>
    </div>
  );
}

export default EndSequenceBlock;
