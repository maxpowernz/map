import { Link, NavLink } from "react-router-dom";
import continentData from "../mock-data/continents.json";

export default function Nav() {
  return (
    <nav>
      <h2>Continents</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {continentData.map((continent) => (
          <li key={continent.name}>
            <NavLink to={`/continent/${continent.name}`}>
              {continent.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
