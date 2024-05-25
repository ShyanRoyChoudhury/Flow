import isEditModalOpen from "@/store/isEditModalOpen";
import EditTemplate from "@/views/EditTemplate";
import { Modal, Box } from "@mui/material";

import { useRecoilState } from "recoil";

function Modal2() {
  const [editModalOpen, setEditModalOpen] = useRecoilState(isEditModalOpen)
  const closeModal = () => {
    setEditModalOpen(false);
  }
  return (
    <Modal
      open={editModalOpen}
      onClose={closeModal}
      className=" bg-black bg-opacity-50 flex justify-center items-center"
    >
      <Box
        className="rounded-xl shadow p-6 transition-all  outline-none 
          w-11/12   py-8 min-h-5/6 max-h-screen bg-[#F2F2F2] relative overflow-y-auto"
      >
        {/* <button
          className="absolute top-2 right-2 p-[0.5px] px-2 
          rounded-sm  border-red-600 text-red-600 border-[3px]  hover:text-red-400 
          hover:border-red-400 transition-colors"
          onClick={closeModal}
        >
          X
        </button> */}
        <div className="border-b-2 w-full p-2 "></div>
        <EditTemplate />
      </Box>
    </Modal>
  );
}

export default Modal2;
