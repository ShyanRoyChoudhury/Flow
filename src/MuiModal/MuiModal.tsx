import AddBlockModal from "@/Modals2/AddBlockModal";
import isModalOpen from "@/store/isModalOpen";
import { Modal, Box } from "@mui/material";

import { useRecoilState, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import activeNodeType from "@/store/activeNodeType";
import SourceBlockModal from "@/Modals2/LeadSourceModal";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import ModalSubNav from "@/Modals/ModalSubNav";
import ModalDelay from "@/views/ModalDelay";
import ModalLeadsFromLists from "@/views/ModalLeadsFromLists";

function MuiModal() {
  const activeNode = useRecoilValue(activeNodeType);
  //   const [selectedOption, setSelectedOption] = useState("");
  const [modalOpen, setModalOpen] = useRecoilState(isModalOpen);
  const setActiveNodeType = useSetRecoilState(activeNodeType);
  const setSubModalBlockSelected = useSetRecoilState(activeNodeType);
  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };
  const [subBlockSelected, setSubBlockSelected] = useRecoilState(
    modalSubBlockSelected
  );

  const renderContent = () => {
    switch (activeNode?.type) {
      case "SourceBlock":
        return (
          <div>
            <SourceBlockModal />
          </div>
        );
      case "AddBlock":
        return (
          <div>
            <AddBlockModal />
          </div>
        );
      case "DelayBlock":
        return (
          <div>
            <ModalDelay />
          </div>
        );
      case "LeadsFromList":
        return (
          <div>
            <ModalLeadsFromLists />
          </div>
        );
      default:
        return <div>Default</div>;
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveNodeType(null);
    setSubModalBlockSelected(null);
    setSubBlockSelected(null);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={closeModal}
      className=" bg-black bg-opacity-50 flex justify-center items-center"
    >
      <Box
        className="rounded-xl shadow p-6 transition-all  
          w-5/6 xl:w-4/6 py-8 h-5/6 bg-[#F2F2F2] relative"
      >
        <button
          className="absolute top-2 right-2 p-[0.5px] px-2 
          rounded-sm  border-red-600 text-red-600 border-[3px]  hover:text-red-400 
          hover:border-red-400 transition-colors"
          onClick={closeModal}
        >
          X
        </button>
        <div className="border-b-2 w-full p-2 "></div>
        {!subBlockSelected ? (
          <div>
            <div>{renderContent()}</div>
          </div>
        ) : (
          <ModalSubNav />
        )}
      </Box>
    </Modal>
  );
}

export default MuiModal;
