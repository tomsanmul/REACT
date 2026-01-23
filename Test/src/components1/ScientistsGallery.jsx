import { people } from "./data.js";
import { getImageUrl } from "./utils.js";


function ScientistVisuals(props) {
  //const age = props.age;
  const dataFormat = props.dataFormat;
  
  if (dataFormat === "Table") {
    return <RenderbyTable people={people} />;
  } else {
    return <RenderbyCard people={people}/>;
  }
}

function RenderbyTable({ people }) {
  //const ListToRender = people.filter((person) => person.age === age);  //Para filtrar por Edad, profesión o cualquier otra cosa
  return (
    <div className="table-container">
        <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Profession</th>
            <th>Accomplishment</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td><img src={getImageUrl(person)} alt={person.name} /></td>
              <td>{person.profession}</td>
              <td>{person.accomplishment}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RenderbyCard({ people }) {
  //const ListToRender = people.filter((person) => person.age === age);  //Para filtrar por Edad, profesión o cualquier otra cosa
  return (
      <div className="cards-container">
        {people.map((person) => (
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

function MyFooter() {
  return (
    <>
      <small>Copyright 2024 by React</small>
    </>
  );
}


export default function ScientistsGallery() {
  const age = 48;
  const dataFormat = "Cards"; // "Table ó Cards"

  return (
    <>
      <h1>Gallery of Famous Scientists </h1>
      {/* Ejemplo de paso de PROPS desestructuradas */}
      <ScientistVisuals age={age} dataFormat={dataFormat} />
      <MyFooter />
    </>
  );
}