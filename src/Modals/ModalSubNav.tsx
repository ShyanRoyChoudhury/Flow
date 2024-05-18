import ModalLeadsFromLists from "@/views/ModalLeadsFromLists";
// import Modal from "./modal";
import { useRecoilValue } from "recoil";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import ModalColdEmail from "@/views/ModalColdEmail";

function ModalSubNav() {
  const subBlockSelected = useRecoilValue(modalSubBlockSelected);
  const renderContent = () => {
    switch (subBlockSelected?.title) {
      case "Leads from List(s)":
        return (
          <div>
            <ModalLeadsFromLists />
          </div>
        );
      case "Segment by Events":
        return <div></div>;
      case "Cold Email":
        return (
          <div>
            <ModalColdEmail />
          </div>
        );
      default:
        return <div>Default</div>;
    }
  };
  console.log("subBlock:", subBlockSelected);
  return (
    <div className="space-y-2">
      <div className="p-8">
        <div>
          <div className="font-bold text-2xl">{subBlockSelected?.title}</div>
          <div>{subBlockSelected?.description}</div>
        </div>
      </div>
      <div className="border-b px-2"></div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default ModalSubNav;
