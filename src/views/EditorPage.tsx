import MuiModal from "@/MuiModal/MuiModal";
import Button from "../components/Button";
import VisualEditor from "../components/VisualEditor";

// import isModalOpen from "@/store/isModalOpen";

function EditorPage(): JSX.Element {
  // const [isModalOpen, setModalOpen] = useState(false);

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
              <form className="flex">
                <textarea className="resize-none text-3xl w-full" rows={1} />
                <PencilSVG />
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
      <MuiModal />
    </div>
  );
}
function PencilSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
    </svg>
  );
}
export default EditorPage;
