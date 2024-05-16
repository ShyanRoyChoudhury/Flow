// import Modal from "@/Modals/modal";
import AddBlockModal from "@/Modals2/AddBlockModal";
import Modal2 from "@/Modals2/modal2";
import modalBlockSelected from "@/store/modalBlockSelected";
import modalFlag from "@/store/modalFlag";
// import ModalBaseView from "@/views/ModalBaseViewPage";
// import ModalPage from "@/views/ModalBaseViewPage";
// import { useEffect } from "react";
// import { useState } from "react";
import { Handle, Position } from "reactflow";
import { useSetRecoilState, useRecoilState } from "recoil";

function AddBlock(): React.ReactElement {
  const setOpen = useSetRecoilState(modalFlag);
  const [blockSelected, setModalBlockSelected] =
    useRecoilState(modalBlockSelected);
  const handleClick = () => {
    setOpen(true);
    setModalBlockSelected((prevBlockSelected) => ({
      ...prevBlockSelected,
      selected: true,
      blockType: "add-block",
    }));
    console.log(blockSelected);
  };

  return (
    <div
      className="border-2 border-[#05A6FF] shadow-sm  p-2 rounded-sm"
      onClick={handleClick}
    >
      <Handle type="target" position={Position.Top} />
      <PlusSVG />
      <Modal2>
        {blockSelected.blockType === "add-block" && <AddBlockModal />}
      </Modal2>
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
export default AddBlock;
