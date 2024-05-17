import { PlusSVG } from "@/SVGs/SVG";
import Button from "@/components/Button";
import modalBlockSelected from "@/store/modalBlockSelected";
import { useRecoilValue } from "recoil";

function ModalLeadsFromLists() {
  const blockSelected = useRecoilValue(modalBlockSelected);
  console.log(blockSelected);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-semibold ">Select your List(s)</div>
        <Button
          onClick={() => console.log("button click")}
          className="border-4 px-6 py-2 border-[#05A6FF] text-[#05A6FF] 
          font-semibold hover:border-blue-400 hover:text-blue-400 flex
          space-x-2"
        >
          <div>New List</div>
          <div>
            <PlusSVG />
          </div>
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default ModalLeadsFromLists;
