import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import DownloadReport from "../reports/download-report";

export const NavBar = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className=" bg-dark border-b-2 border-black dark:border-white dark:bg-white 
                    text-white dark:text-black p-5 transition-all w-full py-5 flex justify-end px-10">
      

      <div className="flex justify-center items-center gap-10">
        <button
        onClick={toggleTheme}
        className="p-2  bg-[#eeee] rounded-full"
      >
        {dark ? <Sun /> : <Moon color="black"/>}
      </button>
       <DownloadReport/>
      </div>
    </div>
  );
};