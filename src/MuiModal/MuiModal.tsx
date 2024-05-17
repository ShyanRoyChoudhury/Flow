import activeNodeType from "@/store/activeNodeType";
import isModalOpen from "@/store/isModalOpen";
import { Modal, Box, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

function MuiModal({ nodeType }: { nodeType: string | undefined }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [modalOpen, setModalOpen] = useRecoilState(isModalOpen);
  const setActiveNodeType = useSetRecoilState(activeNodeType);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "option1":
        return <div>Option 1 Content2 for {nodeType}</div>;
      case "option2":
        return <div>Option 2 Content for {nodeType}</div>;
      default:
        return <div>Select an option</div>;
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveNodeType("");
  };

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <Box
        sx={{
          width: 400,
          padding: 2,
          backgroundColor: "white",
          margin: "auto",
          marginTop: "10%",
        }}
      >
        <h2>{nodeType} Modal</h2>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <div>{renderContent()}</div>
        <Button onClick={closeModal}>Close</Button>
      </Box>
    </Modal>
  );
}

export default MuiModal;
