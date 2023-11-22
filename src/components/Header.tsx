import LightIcon from "../assets/images/light-icon.svg";
import DarkIcon from "../assets/images/dark-icon.svg";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <div
      className={`w-full h-20 shadow-headerShadow ${
        darkMode ? "bg-darkBg" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center h-full px-4 lg:px-8 xl:px-12 2xl:px-20 ">
        <p
          className={`text-sm font-extrabold lg:text-2xl  ${
            darkMode ? "text-white" : "text-black-dark"
          } `}
        >
          Where is the world?
        </p>
        <button
          className="flex items-center space-x-2 bg-transparent"
          onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        >
          <img
            className="w-4 h-4 lg:w-5 lg:h-5"
            src={darkMode ? DarkIcon : LightIcon}
            alt=""
          />
          <p
            className={`font-nunito font-semibold font text-xs lg:text-base ${
              darkMode ? "text-white" : "text-black-dark"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Header;
