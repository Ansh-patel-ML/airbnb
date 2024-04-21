import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-row justify-between items-center border-2 rounded-lg p-4 hover:border-black transition cursor-pointer ${
        selected ? "border-black bg-rose-200" : "border-neutral-200"
      }`}
      onClick={() => onClick(label)}
    >
      <div className="font-semibold">{label}</div>
      <Icon size={26} />
    </div>
  );
};

export default CategoryInput;
