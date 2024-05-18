import { PlusSVG } from "@/SVGs/SVG";
import Button from "@/components/Button";
import activeNodeType from "@/store/activeNodeType";
import addNewNodeFunction from "@/store/addNewNodeFunction";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
function ModalLeadsFromLists() {
  const [templateSelected, setTemplateSelected] = useState<string | null>("");
  const handleSelect = (e) => {
    setTemplateSelected(e.target.value);
  };
  const addNewNode = useRecoilValue(addNewNodeFunction);
  const setActiveNodeType = useSetRecoilState(activeNodeType);
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-semibold ">Select your List(s)</div>
        <Button
          onClick={() => console.log("button click")}
          className="border-4 px-6 py-2 border-[#05A6FF] text-[#05A6FF] 
          font-semibold hover:border-blue-400 hover:text-blue-400 flex
          space-x-2"
        >
          <div>New List</div>
          <div>
            <PlusSVG />
          </div>
        </Button>
      </div>
      <div className="space-y-2 px-2">
        <Select
          value={templateSelected}
          className="w-full bg-white"
          onChange={handleSelect}
        >
          <MenuItem value="Sample List" onClick={handleSelect}>
            Sample List
          </MenuItem>
          <MenuItem value="option2" onClick={handleSelect}>
            Option 2
          </MenuItem>
        </Select>
        {templateSelected && (
          <div className="w-full flex justify-end">
            <Button
              className="border-[#9CBAF8] px-4 py-2 border-2 bg-[#0066FF] text-white font-semibold"
              onClick={() => {
                addNewNode("LeadsFromList");
                setActiveNodeType(null);
              }}
            >
              Insert
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalLeadsFromLists;
