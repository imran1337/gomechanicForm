import "./App.css";
import FromCard from "./Components/FromCard/FromCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";

export const IsShowDiv = createContext();
export const IsShowDivTwo = createContext();
export const IsShowDivThree = createContext();

function App() {
  const [showDiv, setShowDiv] = useState(true);
  const [showDivTwo, setShowDivTwo] = useState(true);
  const [showDivThree, setShowDivThree] = useState(true);
  return (
    <IsShowDiv.Provider value={[showDiv, setShowDiv]}>
      <IsShowDivTwo.Provider value={[showDivTwo, setShowDivTwo]}>
        <IsShowDivThree.Provider value={[showDivThree, setShowDivThree]}>
          <div
            style={{
              minHeight: "100vh",
              minWidth: "100vw",
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <FromCard />;
          </div>
        </IsShowDivThree.Provider>
      </IsShowDivTwo.Provider>
    </IsShowDiv.Provider>
  );
}

export default App;
