import Button from "@/components/Button";
import addNewNodeFunction from "@/store/addNewNodeFunction";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
function ModalDelay() {
  const [waitTime, setWaitTime] = useState("");
  const [waitTypeSelected, setWaitTypeSelected] = useState<string | null>("");
  const addNewNode = useRecoilValue(addNewNodeFunction);
  const setSubBlockSelected = useSetRecoilState(modalSubBlockSelected);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaitTime(e.target.value);
  };
  const handleSelect = (e: SelectChangeEvent<string | null>) => {
    setWaitTypeSelected(e.target.value);
  };
  const handleInsertClick = () => {
    if (!waitTime || !waitTypeSelected) {
      console.log("Please fill in all fields before inserting.");
    } else {
      addNewNode("DelayBlock");
      setSubBlockSelected(null);
    }
  };
  return (
    <div className="space-y-2">
      <div className="space-y-2 px-2 py-6">
        <form className="space-y-1">
          <div>
            <div>Wait For</div>
            <input
              type="number"
              className="w-full p-2  shadow-sm hover:border-black border rounded-sm"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Wait Type</label>
            <Select
              value={waitTypeSelected}
              className="w-full bg-whit bg-white"
              onChange={handleSelect}
            >
              <MenuItem value="option1">minutes</MenuItem>
              <MenuItem value="option1">hours</MenuItem>
              <MenuItem value="option2">days</MenuItem>
            </Select>
          </div>
        </form>

        <div className="w-full flex justify-end">
          <Button
            className="border-[#9CBAF8] px-4 py-2 border-2 bg-[#0066FF] text-white font-semibold"
            onClick={handleInsertClick}
          >
            Insert
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelay;
