import isModalOpen from "@/store/isModalOpen";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

function ModalStartSequence() {
  const setModalOpen = useSetRecoilState(isModalOpen);
  useEffect(() => {
    setModalOpen(false);
  }, [setModalOpen]);
  return <div></div>;
}

export default ModalStartSequence;
