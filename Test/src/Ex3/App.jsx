
// Version 1, La más guarra y funcional del semáforo, controlada por 1 hook Booleno y 2 Estados
/*

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

*/


 

//VERSIÓN 2 MEJORADA CON ASYNC / AWAIT EN LA FUNCIÓN SETTIMEOUT
// Sigue habiendo 1 Hook como booleano controlado 2 estados.
// La mejora es forzar linea a linea el proceso con async / await para forzar una pausa despues de otra.
/*
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setIsWalk] = useState(true);

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



/*
//VERSIÓN 3: 
// El Hook controla ahora los 3 Estados con un string: STOP, WAIT y WALK.
// Además anidamos los 2 setTimeouts para que quede más limpio y quitamos el await / async y la función sleep de la versión 2.



import { useState } from "react";

export default function TrafficLight() {
  //Un HOOK que controla 3 estados mediante un string:  "STOP" , "WAIT". "WALK"
  const [action, setAction] = useState("STOP");
  const [buttonEnabled, setButtonEnabled] = useState(true); // nuevo estado



  function handleClick() {
    setButtonEnabled(false);

    // PREVENCIÓN: Condición que si (Action es diferente de "Stop"), que NO ejecute el proceso. (Código defensivo)
    if (action !== "STOP") return;

    console.log("WAIT");
    setAction("WAIT");
    
    setTimeout(() =>{
      console.log("WALK");
      setAction("WALK");
     

      setTimeout(() => {
        console.log("STOP");
        setAction("STOP"); 
        setButtonEnabled(true);
      }, 3000);
    }, 3000);

  };
  

  return (
    <>
      <button disabled={!buttonEnabled} onClick={handleClick}>
        Change to {action ? "Walk & Walk" : "Stop"}
      </button>
      <br></br><br></br>

      <h1
        style={{
          color: 
            action ==="STOP"   //Si el HOOK action está en estado STOP, color rojo
             ? "darkred" 
             : action === "WAIT"   //si el HOOK action está en estado WAIT, color naranja
             ? "orange"
             : "darkgreen"    //cualquier otro estado (WALK), color verde. 
        }}
      >
        {action}
      </h1>
        
    </>
  );
}

*/




//VERSIÓN 4: 
// Lo mismo que el ejercicio anterior + 1 formulario que introducimos los parámetros para los tiempos de las 3 pausas:  STOP / WAIT y WALK.
// Y seguimos con el Hook que controla los 3 Estados en forma de String más los 2 Set TimeOuts anidados.

/*

import { useState } from "react";

export default function TrafficLight() {

  //Un HOOK que controla 3 estados mediante un string:  "STOP" , "WAIT". "WALK"
  const [action, setAction] = useState("STOP");

  //Un altra HOOK que controla els 3 parametres integers STOP, WAIT, WALK en un objecte literal
  const [param, setParam] = useState({
    STOP: 0,
    WAIT: 0,
    WALK: 0,
  });

  const [buttonEnabled, setButtonEnabled] = useState(false); 

  const resetParams = () => {
  setParam({ STOP: 0, WAIT: 0, WALK: 0 });
};


 function handleClick(e) {
    //Por defecto, cuando un formulario se envía (submit), el navegador recarga la página y pierde los valores (action, param).
    //Al poner "e.preventDefault()" evitamos que perdamos todos los valoresy estados de React (action, param, etc.).

    e.preventDefault();  //evita la recarga y pérdida de valores

    setButtonEnabled(false);

    // PREVENCIÓN: Condición que si (Action es diferente de "Stop"), que NO ejecute el proceso. (Código defensivo)
    if (action !== "STOP") return;

    console.log("WAIT");
    setAction("WAIT");
    
    setTimeout(() =>{
      console.log("WALK");
      setAction("WALK");

      setTimeout(() => {
        console.log("STOP");
        setAction("STOP"); 

        //Reseteamos parametros de nuevo a 0 y el estado del botón deshabilitado
        resetParams();
        setButtonEnabled(true);
      }, param.WALK);
    }, param.WAIT);

  };

  
const handleChange = (e) => {
    const { name, value } = e.target;
    setParam((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setButtonEnabled(true);
  };
 

  return (
    <form id="TrafficLight" onSubmit={handleClick}>
        <p>Tiempo para STOP: <input type="text" id="STOP" name="STOP" placeholder="Time to STOP" value={param.STOP} onChange={handleChange} required/></p>
        <p>Tiempo para WAIT: <input type="text" id="WAIT" name="WAIT" placeholder="Time to WAIT" value={param.WAIT} onChange={handleChange} required/></p>
        <p>Tiempo para WALK: <input type="text" id="WALK" name="WALK" placeholder="Time to WALK" value={param.WALK} onChange={handleChange} required/></p>

        <button  type="submit" id="btnSend" disabled={!buttonEnabled} >
          Change to {action ? "Walk & Walk" : "Stop"}
        </button>

        <h1 style={{
        color: action === "STOP" ? "darkred" :
               action === "WAIT" ? "orange" :
               "darkgreen"
      }}>
        {action}
        </h1>
      </form>      
  );
}


*/




//VERSIÓN 5:  TODO EN UN HOOK : Fusionamos los 3 parametros + el Estado del string

import { useState } from "react";

export default function TrafficLight() {

  const [action, setAction] = useState({
    ACTION: "STOP",
    STOP: 0,
    WAIT: 0,
    WALK: 0,
  });

  const [buttonEnabled, setButtonEnabled] = useState(true); 

  const resetParams = () => {
    setAction({ ACTION: "STOP", STOP: 0, WAIT: 0, WALK: 0 });
  };


  function handleClick(e) {
    e.preventDefault();
    setButtonEnabled(false);

    alert("ACTION: " + action.ACTION + "\nSTOP: " + action.STOP + "\nWAIT: " + action.WAIT + "\nWALK: " + action.WALK);
    if (action.ACTION !== "STOP") return;

    const waitTime = action.WAIT;
    const walkTime = action.WALK;

    console.log("WAIT");
    setAction(prev => ({ ...prev, ACTION: "WAIT" }));

    setTimeout(() => {
      console.log("WALK");
      setAction(prev => ({ ...prev, ACTION: "WALK" }));

      setTimeout(() => {
        console.log("STOP");

        resetParams(); // resetea TODO incluyendo ACTION
        setButtonEnabled(true);
      }, walkTime);
    }, waitTime);
  }

const handleChange = (e) => {
    const { name, value } = e.target;
    setAction((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setButtonEnabled(true);
  };

  return (
    <form id="TrafficLight" onSubmit={handleClick}>
      <p>Tiempo para STOP: <input type="text" name="STOP" value={action.STOP} onChange={handleChange} /></p>
      <p>Tiempo para WAIT: <input type="text" name="WAIT" value={action.WAIT} onChange={handleChange} /></p>
      <p>Tiempo para WALK: <input type="text" name="WALK" value={action.WALK} onChange={handleChange} /></p>

      <button  type="submit" id="btnSend" disabled={!buttonEnabled} >
          Change to {action ? "Walk & Walk" : "Stop"}
        </button>

      <h1 style={{
        color: action.ACTION === "STOP" ? "darkred" :
               action.ACTION === "WAIT" ? "orange" :
               "darkgreen"
      }}>
        {action.ACTION}
      </h1>
    </form>
  );
}

