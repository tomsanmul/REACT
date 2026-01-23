import { people } from "../data.js";
import { getImageUrl } from "../utils.js";

export default function ScientistVisuals(props) {
  const dataformat = props.dataFormat;
  const age = props.age;
  const professionToFilter = props.profession;

  //Compruebo con un IF si recibo algún professionToFiler para filtrar, de lo contrario, copio el array entero de nuevo.
const listToRender = professionToFilter
  ? people.filter((person) => ((person.profession === professionToFilter) && (person.age == age)))
  : [...people];

  console.log(listToRender);
  
  if (dataformat === "table")
    return (
      <TableScientistVisuals
        listToRender={listToRender}
      />
    );
  else
    return (
      <CardsScientistVisuals
        listToRender={listToRender}
      />
    );
}

function TableScientistVisuals(props) {
  const scientistRows = props.listToRender.map((person) => (
    <tr>
      <td> {person.name} </td>
      <td><img src={getImageUrl(person)} alt={person.name} /></td>
      <td> {person.profession} </td>
      <td> {person.age} </td>
    </tr>
  ));
  return (
    <div className="table-container">
      <h1> Scientists Table</h1>
      <table className="styled-table">
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Profession</th>
          <th>Age</th>
        </tr>
        {scientistRows}
      </table>
      <p> </p>
    </div>
  );
}

function CardsScientistVisuals(props) {
  
  const scientistCards = props.listToRender;


  return (
     <div className="cards-container">
        {scientistCards.map((person) => (
          <div className="card" key={person.name}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-name">{person.name}</h3>
              <p>
                <strong>Profession:</strong> {person.profession}
              </p>
              <p>
                <strong>Accomplishment:</strong> {person.accomplishment}
              </p>
              <p className="card-age">
                <strong>Age:</strong> {person.age}
              </p>
            </div>
          </div>
        ))}
      </div>
  );
}
