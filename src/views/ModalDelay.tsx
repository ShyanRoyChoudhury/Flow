import Button from "@/components/Button";
import addNewNodeFunction from "@/store/addNewNodeFunction";
import delayData from "@/store/delayData";
import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function ModalDelay() {
  const [formData, setFormData] = useRecoilState(delayData);
  const addNewNode = useRecoilValue(addNewNodeFunction);
  const setSubBlockSelected = useSetRecoilState(modalSubBlockSelected);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      waitTime: e.target.value,
    });
  };

  const handleSelect = (e: SelectChangeEvent<string | null>) => {
    setFormData({
      ...formData,
      waitTypeSelected: e.target.value,
    });
  };

  const handleInsertClick = () => {
    const { waitTime, waitTypeSelected } = formData;
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
              className="w-full p-2 shadow-sm hover:border-black border rounded-sm"
              onChange={handleInputChange}
              value={formData.waitTime}
            />
          </div>
          <div>
            <label>Wait Type</label>
            <Select
              value={formData.waitTypeSelected}
              className="w-full bg-whit bg-white"
              onChange={handleSelect}
            >
              <MenuItem value="minutes">minutes</MenuItem>
              <MenuItem value="hours">hours</MenuItem>
              <MenuItem value="days">days</MenuItem>
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
