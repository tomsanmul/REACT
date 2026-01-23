import { useState } from "react";
import ListRender from "./ListRender.jsx";
import ScientistVisuals from "./ScientistVisuals.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";

export default function Menu() {
  const dataFormat = "card";
  const age = "";
  const profession = "";
  const [pageToRender, setPageToRender] = useState("Home");

  return (
    <>
      <div>
        <button onClick={() => setPageToRender("Home")}>Home</button>
        <button onClick={() => setPageToRender("ListRender")}>List</button>
        <button onClick={() => setPageToRender("ScientistVisuals")}>
          Scientist visuals
        </button>
      </div>

      <Header profession={profession} />

      {pageToRender === "Home" && <Home />}

      {pageToRender === "ListRender" && <ListRender profession={profession} />}

      {pageToRender === "ScientistVisuals" && (
        <ScientistVisuals dataFormat={dataFormat} age={age} profession={profession} />
      )}
    </>
  );
}
