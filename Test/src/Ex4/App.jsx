//Exercici 4: UTITZANT HOOKS useState  i useRef
// Afegir en un array d'strings, un element. Crear també un altre botó per borrar un element (en la forma de REACT, utilitzant FILTER).
//REACT.DEV
//UPDATING ARRAY IN STATE -> Updating arrays without mutation

import { useState, useRef } from 'react';

export default function List() {
  const [name, setName] = useState('');
  const [nameToDelete, setnameToDelete] = useState('');
  const [artists, setArtists] = useState([]);

  //const nextId = 0; // ¡¡NO SERVEIX!! perque dona un WARNING "Uncaught TypeError: Cannot create property 'current' on number '0'. 
  //El motiu es peque perd el valor de la variable nextId cada vegada que recarrega la pàgina i precisament el hook useRef la guarda.
  const nextId = useRef(0);   //Em serveix perque no perdi el valor de la variable nextId cada cop que recarrega la pag.
  
  function handleAdd(){
    setArtists( // Replace the state
      [ // with a new array
          ...artists, // that contains all the old items
        { id: nextId.current++, name: name } // and one new item at the end
      ]
    );
    setName("");
    console.log(artists);
  };

    function handleDelete(){
    setArtists(
        artists.filter(artist =>
                  artist.name !== nameToDelete
    ));
    setnameToDelete("");
    console.log(artists);
  };


  return (
  <>
    <center>
      <h3>Exercici per afegir i borrar noms a una llista</h3>

      <p>Afegeix un nom:</p>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleAdd}>Add</button>

      <hr />

      <strong>Llista actual de noms:</strong>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>

      <hr />

      <p>Elimina un nom</p>
      <input
        value={nameToDelete}
        onChange={e => setnameToDelete(e.target.value)}
      />
      <br /><br />
      <button onClick={handleDelete}>Delete</button>
    </center>
  </>
);

}
