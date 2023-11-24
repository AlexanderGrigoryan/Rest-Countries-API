import { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import Search from "./components/Search";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div>
      <GlobalStyles darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`px-4 mt-6 md:mt-12 w-full min-h-screen `}>
        <Search darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
