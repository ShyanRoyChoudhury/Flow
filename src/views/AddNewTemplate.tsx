import addEmailTemplate from "@/api/addEmailTemplate";
import Editor from "@/components/Editor";
import isEditModalOpen from "@/store/isEditModalOpen";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
interface emailTemplateType {
  templateName: string;
  emailSubject: string;
  emailBody: string;
}
function AddNewTemplate() {
  const [emailTemplate, setEmailTemplate] = useState<emailTemplateType>({
    templateName: "",
    emailSubject: "",
    emailBody: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmailTemplate((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value].toString(),
    }));
  };

  const handleEditorChange = (value: string) => {
    setEmailTemplate((prev) => ({
      ...prev,
      emailBody: value,
    }));
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await addEmailTemplate(emailTemplate);
  };

  const setEditModalOpen = useSetRecoilState(isEditModalOpen);
  const closeModal = () => {
    setEditModalOpen(false);
  };
  return (
    <div className="px-6">
      <div>
        <form className="space-y-2">
          <div className="space-y-1 font-semibold text-lg">
            <div>Template Name</div>
            <input
              type="text"
              name="templateName"
              className="w-2/5 p-2 shadow-sm focus:outline-none border rounded-md font-normal"
              placeholder="Sample Template"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-1 font-semibold text-lg">
            <div>Subject Line</div>
            <input
              type="text"
              name="emailSubject"
              className="w-3/5 p-2 shadow-sm border rounded-md focus:outline-none font-normal"
              placeholder="Sample Template"
              onChange={handleChange}
            />
          </div>
          <div>
            <Editor handleEditorChange={handleEditorChange} />
          </div>
          <div className="flex justify-between">
            <div>
              <button className="border-[2.5px] border-blue-400 text-blue-400 font-bold px-4 py-2 rounded-md">
                Send Test Email
              </button>
            </div>
            <div className="space-x-1 flex">
              <button
                className="border-[2.5px] px-4 py-2 rounded-md border-red-500 text-red-400 font-bold"
                onClick={closeModal}
              >
                Discard
              </button>
              <button
                className="bg-blue-500 px-4 py-2 border-[#9CBAF8] border-[2.5px] rounded-md text-white 
                            font-bold flex space-x-1"
                onClick={handleSubmit}
              >
                Add Email Template
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewTemplate;
