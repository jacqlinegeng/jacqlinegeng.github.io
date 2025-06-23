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
      <div className="w-16 h-16 bg-purple-200/80 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center mb-2 group-hover:bg-purple-300/80 transition-colors">
        <Folder size={32} className="text-purple-600" />
      </div>
      <span className="text-black dark:text-white text-sm font-medium text-center drop-shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default DesktopFolder;