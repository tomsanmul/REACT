import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Tomas',
    lastName: 'Sans'
  });

  // Esta función maneja el cambio en el input de firstname
  function handleFirstNameChange(event) {
    setPerson({
      ...person,               // copiamos el resto de propiedades
      firstName: event.target.value // actualizamos firstName
    });
  }

  //Esta función maneja el cambio en el input de lastname
  function handleLastNameChange(event){
    setPerson({
      ...person,              // copiamos el resto de propiedades
      lastName: event.target.value    // actualizamos lastName
    });
  }


  return (
    <>
    <div>
      <label>
        First Name: 
      <input
        value={person.firstName}
        onChange={handleFirstNameChange} 
      />
      </label>
    </div>
    <div>
      <label>
        Last Name:  
      <input
        value={person.lastName}
        onChange={handleLastNameChange}
      />
      </label>
      </div>

      <p>{person.firstName + ' ' + person.lastName}</p>

    </>
  );
}