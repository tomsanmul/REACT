import { useState } from "react";
import ListRender from "./ListRender.jsx";
import ScientistVisuals from "./ScientistVisuals.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";

export default function Menu() {
  const dataFormat = "table";
  const age = 26;

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

      <Header profession="physicist" />

      {pageToRender === "Home" && <Home />}

      {pageToRender === "ListRender" && <ListRender profession="physicist" />}

      {pageToRender === "ScientistVisuals" && (
        <ScientistVisuals dataFormat={dataFormat} age={age} />
      )}
    </>
  );
}
