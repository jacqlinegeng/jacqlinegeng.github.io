import { Folder } from "lucide-react";

interface DesktopFolderProps {
  name: string;
  icon: string;
  onClick: () => void;
}

const DesktopFolder = ({ name, onClick }: DesktopFolderProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group hover:scale-105 transition-transform duration-200"
    >
      <div className="w-16 h-16 backdrop-blur-sm bg-[#C0C9EE]/80 dark:bg-[#C0C9EE] rounded-lg border border-purple-200/40 dark:border-white/20 flex items-center justify-center mb-2 transition-colors shadow-md">
        <Folder size={32} className="text-[#898AC4] dark:text-[#898AC4]" />
      </div>
      <span className="text-gray-900 dark:text-white text-sm font-medium text-center drop-shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default DesktopFolder;