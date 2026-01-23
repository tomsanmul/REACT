import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  const [buttonEnabled, setButtonEnabled] = useState(true); // nuevo estado

  function handleClick() {
    setButtonEnabled(false);

    // Paso 1: Stop después de 3s
    setTimeout(() => {
      setWalk(false);
    }, 3000);

    // Paso 2: Walk después de 6s
    setTimeout(() => {
      setWalk(true);

      // Re-activamos el botón al volver a Walk
      setButtonEnabled(true);
    }, 6000);
  }

  return (
    <>
      <button disabled={!buttonEnabled} onClick={handleClick}>
        Change to {walk ? "Walk" : "Stop"}
      </button>

      <h1
        style={{
          color: walk ? "darkred" : "darkgreen", // invertido para que verde = Walk
        }}
      >
        {walk ? "Stop" : "Walk"}
      </h1>
    </>
  );
}



/* 

//VERSIÓN 2 MEJORADA CON ASYNC / AWAIT EN LA FUNCIÓN SETTIMEOUT

import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  const [buttonEnabled, setButtonEnabled] = useState(true); // nuevo estado

  async function handleClick() {
    setButtonEnabled(false);

    // Paso 1: Stop después de 3s
    await sleep(3000);
    setIsWalk(false);

    // Paso 2: Walk después de otros 3s
    await sleep(3000);
    setIsWalk(true);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <>
      <button disabled={!buttonEnabled} onClick={handleClick}>
        Change to {walk ? "Walk" : "Stop"}
      </button>

      <h1
        style={{
          color: walk ? "darkred" : "darkgreen", // invertido para que verde = Walk
        }}
      >
        {walk ? "Stop" : "Walk"}
      </h1>
    </>
  );
}
*/