import { PlusSVG } from "@/SVGs/SVG";

function SourceBlock(): React.ReactElement {
  return (
    <div className="border-2 bg-white shadow-md  p-4 rounded-md">
      <div>
        <div className="flex flex-col items-center">
          <div>
            <PlusSVG />
          </div>
          <div>Add Lead Source</div>
          <div className="text-xs">Click to add leads from List or CRM</div>
        </div>
      </div>
    </div>
  );
}

export default SourceBlock;
