import { useState } from "react";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
