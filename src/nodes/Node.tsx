import { cn } from "@/lib/utils";
interface NodeProps {
  children?: React.ReactNode;
  icon: React.ReactNode;
  label: string;
  color: string;
}

function Node({ children, icon, label, color }: NodeProps): React.ReactElement {
  return (
    <div className="border flex p-2 rounded-md bg-white shadow-sm space-x-2">
      <div className={cn(`p-2 border rounded-md`, color)}>{icon}</div>
      <div>
        <div className="font-semibold">{label}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Node;
