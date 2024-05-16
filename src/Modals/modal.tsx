import modalBlockSelected from "@/store/modalBlockSelected";
import modalFlag from "@/store/modalFlag";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";
// import SourceModal from "./SourceModal";
import ModalSubNav from "./ModalSubNav";
interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const [open, setOpen] = useRecoilState(modalFlag);
  const [blockSelected, setBlockSelected] = useRecoilState(modalBlockSelected);
  const portalElement = document.getElementById("portal");
  if (!portalElement) {
    throw new Error("Element with id 'portal' not found.");
  }
  return ReactDOM.createPortal(
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/40" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
           rounded-xl shadow p-6 transition-all
          ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          } w-5/6 xl:w-4/6 py-8 h-5/6 bg-[#F2F2F2]
        `}
      >
        <button
          className="absolute top-2 right-2 p-[0.5px] px-2 
        rounded-sm  border-red-600 text-red-600 border-[3px]  hover:text-red-400 
        hover:border-red-400 transition-colors"
          onClick={() => {
            setOpen(false);
            setBlockSelected((prevBlockSelected) => ({
              ...prevBlockSelected,
              blockType: "null",
              selected: false,
            }));
          }}
        >
          X
        </button>
        <div className="border-b-2 w-full p-2 "></div>
        {children}
        {/* {!blockSelected ? <SourceModal /> : <ModalSubNav />} */}
      </div>
    </div>,
    portalElement
  );
}

export default Modal;
