import { useParams } from "react-router-dom";
import continentData from "../mock-data/continents.json";
import CountryLink from "./CountryLink";

export default function Contitent() {
  const { name } = useParams();

  const data = continentData.find((data) => data.name === name);

  if (!data) {
    return <div>{name} not found</div>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt={`${name} Map`} />
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            <CountryLink name={country.name} code={country.code} />
          </li>
        ))}
      </ul>
    </div>
  );
}
