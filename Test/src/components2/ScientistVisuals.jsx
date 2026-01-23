import { people } from "../data.js";

export default function ScientistVisuals(props) {
  const condition = props.dataFormat;
  const age = props.age;

  const scietitsListFilteredByAge = people.filter(
    (person) => person.age === age
  );

  if (condition === "table")
    return (
      <TableScientistVisuals
        scietitsListFilteredByAge={scietitsListFilteredByAge}
      />
    );
  else
    return (
      <CardsScientistVisuals
        scietitsListFilteredByAge={scietitsListFilteredByAge}
      />
    );
}

function TableScientistVisuals(props) {
  const scientistRows = props.scietitsListFilteredByAge.map((person) => (
    <tr>
      <td> {person.name} </td>
      <td> {person.profession} </td>
      <td> {person.age} </td>
    </tr>
  ));
  return (
    <>
      <h1> Scientists Table</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Profession</th>
          <th>Age</th>
        </tr>
        {scientistRows}
      </table>
      <p> </p>
    </>
  );
}

function CardsScientistVisuals(props) {
  const scientistCards = props.scietitsListFilteredByAge.map((person) => (
    <div style={{ background: "grey", margin: "6px", padding: "8px" }}>
      {" "}
      {person.name} {person.age} {person.profession}
    </div>
  ));

  return (
    <>
      <h1> Scientists Cards</h1>
      {scientistCards}
      <p> </p>
    </>
  );
}
