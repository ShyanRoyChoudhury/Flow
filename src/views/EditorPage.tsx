import Button from "../components/Button";
import VisualEditor from "../components/VisualEditor";

function EditorPage(): JSX.Element {
  return (
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
  );
}

export default EditorPage;
