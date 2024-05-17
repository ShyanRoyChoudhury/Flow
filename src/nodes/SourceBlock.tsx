// import Modal from "@/Modals/modal";

// import TestBlockModal from "@/Modals2/LeadSourceModal";
// import Modal2 from "@/Modals2/modal2";
import modalBlockSelected from "@/store/modalBlockSelected";
import modalFlag from "@/store/modalFlag";
// import ModalBaseView from "@/views/ModalBaseViewPage";
// import ModalPage from "@/views/ModalBaseViewPage";
// import { useEffect } from "react";
// import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

function SourceBlock(): React.ReactElement {
  const setOpen = useSetRecoilState(modalFlag);
  const [blockSelected, setModalBlockSelected] =
    useRecoilState(modalBlockSelected);
  const handleClick = () => {
    console.log("source Triggered");
    setOpen(true);
    setModalBlockSelected((prevBlockSelected) => ({
      ...prevBlockSelected,
      selected: true,
      blockType: "test-block",
    }));
    console.log(blockSelected);
  };

  return (
    <div
      className="border-2 bg-white shadow-md  p-4 rounded-md"
      onClick={handleClick}
    >
      <div>
        <div className="flex flex-col items-center">
          <div>
            <PlusSVG />
          </div>
          <div>Add Lead Source</div>
          <div className="text-xs">Click to add leads from List or CRM</div>
        </div>
      </div>

      {/* <Modal2>
        {blockSelected.blockType === "test-block" && <TestBlockModal />}
      </Modal2> */}
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
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
export default SourceBlock;
