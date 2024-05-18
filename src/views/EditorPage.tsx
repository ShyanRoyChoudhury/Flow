import MuiModal from "@/MuiModal/MuiModal";
import Button from "../components/Button";
import VisualEditor from "../components/VisualEditor";
import { CrossSVG, PencilSVG, TickSVG } from "@/SVGs/SVG";
import { useState } from "react";

// import isModalOpen from "@/store/isModalOpen";

function EditorPage(): JSX.Element {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const closeModal = () => {
  //   setModalOpen(false);
  //   setActiveNodeType("");
  // };
  const [sequenceName, setSequenceName] = useState<string>("Test Sequence");
  const [isTextBoxActive, setIsTextBoxActive] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSequenceName(e.target.value);
  };
  return (
    <div>
      <div className="w-full h-full p-10 space-y-4">
        <div className="flex justify-between px-2">
          <div className="w-1/2">
            <div>
              {isTextBoxActive ? (
                <form className="flex space-x-2 items-center">
                  <textarea
                    className="resize-none text-2xl text-[#475569] p-1 w-3/5 border rounded-md focus:outline-none"
                    rows={1}
                    onChange={handleChange}
                    value={sequenceName}
                  />
                  <div onClick={() => setIsTextBoxActive(false)}>
                    <TickSVG />
                  </div>
                  <div onClick={() => setIsTextBoxActive(false)}>
                    <CrossSVG />
                  </div>
                </form>
              ) : (
                <div className="flex items-center space-x-2 font-semibold">
                  <div className="text-3xl">{sequenceName}</div>
                  <div onClick={() => setIsTextBoxActive(true)}>
                    <PencilSVG />
                  </div>
                </div>
              )}
              <div>Click on a block to configure and add it in sequence.</div>
            </div>
          </div>
          <div>
            <Button
              onClick={() => console.log("click")}
              className="bg-blue-500 border-[#9CBAF8] border-2 text-white flex space-x-1"
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

export default EditorPage;
