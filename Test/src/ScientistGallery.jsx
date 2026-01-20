import { people } from "./data.js";
import { getImageUrl } from "./utils.js";


function ScientistVisuals(props) {
  const age = props.age;
  const dataFormat = props.dataFormat;
  const listToRender = people.filter((person) => person.age === age);

  if (dataFormat === "Table") {
    return <RenderbyTable age={age} />;
  } else {
    return <RenderbyCard age={age} />;
  }
}

function RenderbyTable({ age }) {
  const listToRender = people.filter((person) => person.age === age);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Profession</th>
        <th>Accomplishment</th>
        <th>Age</th>
      </tr>
      {listToRender.map((person) => (
        <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.profession}</td>
          <td>{person.accomplishment}</td>
          <td>{person.age}</td>
        </tr>
      ))}
    </table>
  );
}

function RenderbyCard({ age }) {
  const listToRender = people.filter((person) => person.age === age);

  return (
    <ul>
      {listToRender.map((person) => (
        <li key={person.name}>
          <img src={getImageUrl(person)} alt={person.name} />
          <section>
            <p>
              <b>{person.name}:</b> {person.age} known for{" "}
              {person.accomplishment}
            </p>
            <p>Age: {person.age}</p>
          </section>
        </li>
      ))}
    </ul>
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
  const age = 36;
  const dataFormat = "Table"; // "ó Card"

  return (
    <>
      <h1>Gallery of Famous Scientists </h1>
      <h2> age: {age} </h2>
      <ScientistVisuals age={age} dataFormat={dataFormat} />
      <MyFooter />
    </>
  );
}
