import MainModal from "@/Modals/Modal";
import Button from "../components/Button";
import VisualEditor from "../components/VisualEditor";
import { CrossSVG, PencilSVG, TickSVG } from "@/SVGs/SVG";
import { useEffect, useState } from "react";
import scheduleEmail from "@/api/sendMail";
import { useRecoilValue } from "recoil";
import delayData from "@/store/delayData";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import Modal2 from "@/Modals/Modal2";
import emailData from "@/store/emailData";

function EditorPage() {
  const [sequenceName, setSequenceName] = useState<string>("Test Sequence");
  const [isTextBoxActive, setIsTextBoxActive] = useState<boolean>(false);
  const delay = useRecoilValue(delayData);
  const navigate = useNavigate();
  const emailContents = useRecoilValue(emailData);

  const isAuthenticated = useAuth();
  useEffect(()=>{
    
    if(!isAuthenticated){
      navigate('/signin')
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSequenceName(e.target.value);
  };
  const handleSubmit = () => {
    const emailData = {
      messageBody: emailContents?.messageBody as string,
      subject: emailContents?.subject as string,
      to: ["shayan.roy31@gmail.com"],
      time: `in ${delay.waitTime} ${delay.waitTypeSelected}`,
    };
    scheduleEmail(emailData)
      .then(() => {
        toast({
          title: 'Email Successfully Scheduled',
          description: 'The email has been scheduled as requested.'
        });
      })
      .catch((error) => {
        console.error("Failed to schedule email:", error);
      });
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
              onClick={handleSubmit}
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
      <MainModal />
      <Modal2 />
    </div>
  );
}

export default EditorPage;
