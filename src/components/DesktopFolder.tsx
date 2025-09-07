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
      <div className="w-16 h-16 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center mb-2 transition-colors" style={{ backgroundColor: '#C0C9EE' }}>
        <Folder size={32} style={{ color: '#898AC4' }} />
      </div>
      <span className="text-black dark:text-white text-sm font-medium text-center drop-shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default DesktopFolder;