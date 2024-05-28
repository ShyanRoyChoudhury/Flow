import addNewNodeFunction from "@/store/addNewNodeFunction";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

function ModalEndSequence() {
  const addNewNode = useRecoilValue(addNewNodeFunction);
  const setSubBlockSelected = useSetRecoilState(modalSubBlockSelected);
  useEffect(() => {
    addNewNode("EndSequenceBlock");
    setSubBlockSelected(null)
  }, []);
  return <div></div>;
}

export default ModalEndSequence;
