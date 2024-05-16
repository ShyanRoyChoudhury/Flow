// import { useState } from "react";
// import Modal from "@/Modals/modal";
import { useSetRecoilState, useRecoilState } from "recoil";
import modalFlag from "@/store/modalFlag";
import ModalBaseView from "@/views/ModalBaseViewPage";
// import Modal from "@/Modals/modal";
import Modal2 from "@/Modals2/modal2";
import LeadSourceModal from "@/Modals2/LeadSourceModal555";
import modalBlockSelected from "@/store/modalBlockSelected";
import LeadSourceModal2 from "@/Modals2/LeadSourceModal2";
// import { sourceBlockViews } from "@/nodes";

function SourceBlock(): React.ReactElement {
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
    console.log(blockSelected.blockType);
  };
  return (
    <div
      className="bg-white shadow:sm rounded-md border  hover:cursor-pointer hover:pointer-events-none p-2"
      onClick={handleClick}
    >
      <div>
        <div className="flex flex-col items-center">
          <div>+</div>
          <div>Add Lead Source</div>
          <div className="text-xs">Click to add leads from List or CRM</div>
        </div>
      </div>
      <Modal2>
        <ModalBaseView
          title="Add a Source Block"
          description="Pick a block & configure, any new leads that match rules will be added to sequence automatically."
        >
          <LeadSourceModal2 />
        </ModalBaseView>
      </Modal2>
      {/* <Modal2>
            <LeadSourceModal />
          </Modal2> */}
      {/* <Modal2>Sourse</Modal2> */}
    </div>
  );
}

//   const handleClick = () => {
//     setOpen(true);
//     setModalBlockSelected((prevBlockSelected) => ({
//       ...prevBlockSelected,
//       selected: true,
//       blockType: "source-block",
//     }));
//     console.log(blockSelected.blockType);
//   };
//   return (
//     <div
//       className="bg-white shadow:sm rounded-md border  hover:cursor-pointer hover:pointer-events-none p-2"
//       onClick={handleClick}
//     >
//       <div>
//         <div className="flex flex-col items-center">
//           <div>+</div>
//           <div>Add Lead Source</div>
//           <div className="text-xs">Click to add leads from List or CRM</div>
//         </div>
//       </div>

//       <Modal2>
//         {blockSelected.blockType === "source-block" && <LeadSourceModal />}
//       </Modal2>
//     </div>
//   );
// }

export default SourceBlock;
