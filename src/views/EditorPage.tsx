import MuiModal from "@/MuiModal/MuiModal";
import Button from "../components/Button";
import VisualEditor from "../components/VisualEditor";
import { useRecoilValue } from "recoil";
import activeNodeType from "@/store/activeNodeType";
// import isModalOpen from "@/store/isModalOpen";

function EditorPage(): JSX.Element {
  // const [isModalOpen, setModalOpen] = useState(false);
  const activeNode = useRecoilValue(activeNodeType);

  // const closeModal = () => {
  //   setModalOpen(false);
  //   setActiveNodeType("");
  // };

  return (
    <div>
      <div className="w-full h-full p-10 space-y-4">
        <div className="flex justify-between px-2">
          <div className="w-1/2">
            <div>
              <form>
                <textarea className="resize-none text-3xl w-full" />
              </form>
              <div>Click on a block to configure and add it in sequence.</div>
            </div>
          </div>
          <div>
            <Button
              onClick={() => console.log("click")}
              className="bg-blue-500 text-white flex space-x-1"
            >
              <div>Save & Schedule</div>
              <div>|</div>
              <div>icon</div>
            </Button>
          </div>
        </div>

        <VisualEditor />
      </div>
      <MuiModal nodeType={activeNode} />
    </div>
  );
}

export default EditorPage;
