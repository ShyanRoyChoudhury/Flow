import { modalSubBlockSelected } from "@/store/modalSubBlockSelected";
import { useSetRecoilState } from "recoil";

interface BlockSelectorProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function BlockSelector({ icon, title, description }: BlockSelectorProps) {
  const setSubModalBlockSelected = useSetRecoilState(modalSubBlockSelected);
  return (
    <div
      className="flex border p-4 rounded-sm space-x-2 bg-white hover:cursor-pointer hover:bg-[#f2f2f2] h-24 "
      onClick={() => setSubModalBlockSelected({ title, description })}
    >
      <div className="border rounded-sm  my-auto p-2 text-lg ">{icon}</div>
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm line-clamp-2">{description}</div>
      </div>
    </div>
  );
}

export default BlockSelector;
