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

function PlusSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
}
export default ModalLeadsFromLists;
