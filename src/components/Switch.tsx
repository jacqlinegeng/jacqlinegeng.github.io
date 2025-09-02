import React from 'react';

interface SwitchProps {
  theme: string;
  toggleTheme: () => void;
}

const Switch: React.FC<SwitchProps> = ({ theme, toggleTheme }) => {
  return (
    <label className="relative inline-block w-[2em] h-[1em]">
      <input
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <span
        className="absolute inset-0 cursor-pointer rounded-[30px] transition duration-500 bg-gray-200 peer-checked:bg-gray-400 dark:bg-[#0a1a44] dark:peer-checked:bg-[#102b6a] before:content-[''] before:absolute before:h-[0.8em] before:w-[0.8em] before:rounded-full before:left-[8%] before:bottom-[10%] before:shadow-[inset_8px_-4px_0px_0px_#fff000] before:bg-gray-200 dark:before:bg-[#624F82] before:transition before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#624F82]"
      />
    </label>
  );
};

export default Switch;