import ModalLeadsFromLists from "@/views/ModalLeadsFromLists";
// import Modal from "./modal";
import { useRecoilValue } from "recoil";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";

function ModalSubNav() {
  const subBlockSelected = useRecoilValue(modalSubBlockSelected);
  console.log(subBlockSelected);
  return (
    <div>
      <div className="p-8">
        <div>
          <div className="font-bold text-2xl">{subBlockSelected?.title}</div>
          <div>{subBlockSelected?.description}</div>
        </div>
      </div>
      <div className="border-b px-2"></div>
      <div>
        <ModalLeadsFromLists />
      </div>
    </div>
  );
}

export default ModalSubNav;
