interface DividerProps {
  text?: string;
}

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <div className="w-5 h-px bg-gray-300 dark:bg-gray-700"></div>
      <span className="font-light text-gray-500 dark:text-gray-400">
        {text?.toUpperCase()}
      </span>
      <div className="w-5 h-px bg-gray-300 dark:bg-gray-700"></div>
    </div>
  );
};

export default Divider;
