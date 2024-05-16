import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={cn(`${className} p-1.5 rounded-lg`, className)}
    >
      {children}
    </button>
  );
};

export default Button;
