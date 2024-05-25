import { PencilSVG, PlusSVG } from "@/SVGs/SVG";
import Button from "@/components/Button";
import addNewNodeFunction from "@/store/addNewNodeFunction";
import isEditModalOpen from "@/store/isEditModalOpen";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
function ModalColdEmail() {
  const [templateSelected, setTemplateSelected] = useState<string | null>("");
  const handleSelect = (e: SelectChangeEvent<string | null>) => {
    setTemplateSelected(e.target.value);
  };
  const addNewNode = useRecoilValue(addNewNodeFunction);
  const setSubBlockSelected = useSetRecoilState(modalSubBlockSelected);
  const setEditModalSelected = useSetRecoilState(isEditModalOpen);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-bold">Email Template</div>
        <div className="flex space-x-2">
          {templateSelected && (
            <Button
              onClick={() => console.log("button click")}
              className="border-4 px-4 py-2 border-[#05A6FF] text-[#05A6FF] 
          font-semibold hover:border-blue-400 hover:text-blue-400"
            >
              <PencilSVG />
            </Button>
          )}
          <Button
            onClick={() => setEditModalSelected(true)}
            className="border-4 px-6 py-2 border-[#05A6FF] text-[#05A6FF] 
          font-semibold hover:border-blue-400 hover:text-blue-400 flex
          space-x-2"
          >
            <div>New Template</div>
            <div>
              <PlusSVG />
            </div>
          </Button>
        </div>
      </div>
      <div className="space-y-2 px-2">
        <Select
          value={templateSelected}
          className="w-full bg-white"
          onChange={handleSelect}
        >
          <MenuItem value="option1">Sample Template</MenuItem>
          <MenuItem value="option2">Sample Template Followup</MenuItem>
        </Select>
        {templateSelected && (
          <div className="w-full flex justify-end">
            <Button
              className="border-[#9CBAF8] px-4 py-2 border-2 bg-[#0066FF] text-white font-semibold"
              onClick={() => {
                addNewNode("EmailBlock");
                setSubBlockSelected(null);
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

export default ModalColdEmail;
