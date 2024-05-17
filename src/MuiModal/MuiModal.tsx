import AddBlockModal from "@/Modals2/AddBlockModal";
import isModalOpen from "@/store/isModalOpen";
import { Modal, Box, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import activeNodeType from "@/store/activeNodeType";
import TestBlockModal from "@/Modals2/LeadSourceModal";

function MuiModal() {
  const activeNode = useRecoilValue(activeNodeType);
  //   const [selectedOption, setSelectedOption] = useState("");
  const [modalOpen, setModalOpen] = useRecoilState(isModalOpen);
  const setActiveNodeType = useSetRecoilState(activeNodeType);
  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };

  const renderContent = () => {
    switch (activeNode) {
      case "SourceBlock":
        return (
          <div>
            <TestBlockModal />
          </div>
        );
      case "AddBlock":
        return (
          <div>
            <AddBlockModal />
          </div>
        );
      default:
        return <div>Default</div>;
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveNodeType("");
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
        {/* <Select
          value={selectedOption}
          onChange={handleOptionChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select> */}
        <div>{renderContent()}</div>
      </Box>
    </Modal>
  );
}

export default MuiModal;
