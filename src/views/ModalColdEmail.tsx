import { PencilSVG, PlusSVG } from "@/SVGs/SVG";
import getEmailTemplates from "@/api/getEmailTemplates";
import Button from "@/components/Button";
import addNewNodeFunction from "@/store/addNewNodeFunction";
import editModalType from "@/store/editModalTypes";
import emailData from "@/store/emailData";
import isEditModalOpen from "@/store/isEditModalOpen";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

type emailTemplateType = {
  title: string,
  body: string,
  subject: string,
  id: string
}

function ModalColdEmail() {
  const [templates, setTemplates] = useState<emailTemplateType[]>([]);
  const [templateSelected, setTemplateSelected] = useState<emailTemplateType | null>(null);
  const addNewNode = useRecoilValue(addNewNodeFunction);
  const setSubBlockSelected = useSetRecoilState(modalSubBlockSelected);
  const setEditModalSelected = useSetRecoilState(isEditModalOpen);
  const setEditModalTypeSelected = useSetRecoilState(editModalType);
  const setEmailData = useSetRecoilState(emailData);

  useEffect(() => {
    const fetchTemplates = async () => {
      const temp = await getEmailTemplates();
      setTemplates(temp);
    }
    fetchTemplates();
  }, []);
  
  const handleSelect = (e: SelectChangeEvent<string>) => {
    const selectedTemplate = templates.find(tmp => tmp.id === e.target.value);
    if (selectedTemplate) {
      setTemplateSelected(selectedTemplate);
      setEmailData({
        messageBody: selectedTemplate.body,
        subject: selectedTemplate.subject
      });
    } else {
      setTemplateSelected(null);
    }
  };
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="font-bold">Email Template</div>
        <div className="flex space-x-2">
          {templateSelected && (
            <Button
              onClick={() => {
                setEditModalSelected(true)
              setEditModalTypeSelected("editMode")
              }}
              className="border-4 px-4 py-2 border-[#05A6FF] text-[#05A6FF] 
          font-semibold hover:border-blue-400 hover:text-blue-400"
            >
              <PencilSVG />
            </Button>
          )}
          <Button
            onClick={() => {
              setEditModalSelected(true)
              setEditModalTypeSelected("addMode")
              }}
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
          value={templateSelected?.id || ""}
          className="w-full bg-white"
          onChange={handleSelect}
        >
          {templates.map((tmp) => (
            <MenuItem key={tmp.id} value={tmp.id}>{tmp.title}</MenuItem>
          ))}
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
