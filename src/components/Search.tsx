import LightIcon from "../assets/images/search-icon-light.svg";
import DarkIcon from "../assets/images/search-icon-dark.svg";

interface SearchProps {
  darkMode: boolean;
}

function Search({ darkMode }: SearchProps) {
  return (
    <>
      <input
        className={`w-full h-12 rounded-[5px] max-w-[480px] shadow-inputShadow absolute pl-[74px] outline-0 ${
          darkMode ? "bg-darkHeader" : "bg-white"
        } ${
          darkMode ? "placeholder-white" : "placeholder-gray-placeholderLight"
        }`}
        type="text"
        placeholder="Search for a country…"
      />
      <img
        className="relative top-4 left-8"
        src={darkMode ? DarkIcon : LightIcon}
        alt="search icon"
      />
    </>
  );
}

export default Search;
