import addNewNodeFunction from "@/store/addNewNodeFunction";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

function ModalEndSequence() {
  const addNewNode = useRecoilValue(addNewNodeFunction);
  useEffect(() => {
    addNewNode("EndSequenceBlock");
  }, [addNewNode]);
  return <div></div>;
}

export default ModalEndSequence;
