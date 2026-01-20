import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function ListPeople() {
  const profession = "chemist";
  return (
    <>
      <h1>List of famous chemist</h1>
      <List profession={profession} />
    </>
  );
}

function List(props) {
  const profession = props.profession;
  const listToRender = people.filter(
    (person) => person.profession === profession
  );

  const listItems = listToRender.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
