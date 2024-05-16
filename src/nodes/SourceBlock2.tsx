// import Modal from "@/Modals/modal";
import AddBlockModal from "@/Modals2/AddBlockModal";
import LeadSourceModal from "@/Modals2/LeadSourceModal555";
import LeadSourceModal2 from "@/Modals2/LeadSourceModal2";
import Modal2 from "@/Modals2/modal2";
import modalBlockSelected from "@/store/modalBlockSelected";
import modalFlag from "@/store/modalFlag";
// import ModalBaseView from "@/views/ModalBaseViewPage";
// import ModalPage from "@/views/ModalBaseViewPage";
// import { useEffect } from "react";
// import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

function SourceBlock2(): React.ReactElement {
  const setOpen = useSetRecoilState(modalFlag);
  const [blockSelected, setModalBlockSelected] =
    useRecoilState(modalBlockSelected);
  const handleClick = () => {
    setOpen(true);
    setModalBlockSelected((prevBlockSelected) => ({
      ...prevBlockSelected,
      selected: true,
      blockType: "source-block",
    }));
    console.log(blockSelected);
  };

  return (
    <div
      className="border-2 border-[#05A6FF] shadow-sm  p-2 rounded-sm"
      onClick={handleClick}
    >
      Sourceblk2
      <Modal2>
        {blockSelected.blockType === "source-block" && <LeadSourceModal2 />}
      </Modal2>
    </div>
  );
}

export default SourceBlock2;
