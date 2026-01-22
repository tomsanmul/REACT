import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function ListRender(props) {
  const professionToFilter = props.profession;
  const listToRender = people.filter(
    (person) => person.profession === professionToFilter
  );
  const listItems = listToRender.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <section>
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
        <p>Age : {person.age} </p>
      </section>
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
