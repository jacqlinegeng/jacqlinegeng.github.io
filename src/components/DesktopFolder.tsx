
interface DesktopFolderProps {
  name: string;
  icon: string;
  onClick: () => void;
}

const DesktopFolder = ({ name, icon, onClick }: DesktopFolderProps) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group hover:scale-105 transition-transform duration-200"
    >
      <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-2xl mb-2 group-hover:bg-blue-500/30 transition-colors">
        {icon}
      </div>
      <span className="text-white text-sm font-medium text-center drop-shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default DesktopFolder;
