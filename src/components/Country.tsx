import { useParams } from "react-router-dom";
import countryData from "../mock-data/countries.json";
import CountryLink from "./CountryLink";
import icons from "rendered-country-flags";

export default function Country() {
  const { code } = useParams();
  const data = countryData.find((data) => data.code === code) ?? null;

  const findCountry = (code: string) => {
    return countryData.find((country) => country.code === code);
  };

  const renderNeighbours = (neighboursString: string) => {
    const NeigbourItems = neighboursString.split(",").map((neighbour) => {
      const country = findCountry(neighbour);

      if (!country) {
        return null;
      }

      return (
        <li key={neighbour}>
          <CountryLink name={country?.name} code={country?.code} />
        </li>
      );
    });

    return (
      <div>
        <b>Neighbours:</b>
        <ul>{NeigbourItems}</ul>
      </div>
    );
  };

  if (!data) {
    return <div>{code} not found</div>;
  }

  return (
    <>
      <div>
        <h2>{data?.name}</h2>
        <img src={icons[data.code]} />
        <p>
          <b>Capital:</b> {data.capital}
        </p>
        <p>
          <b>Area:</b> {data.areaSqKms} km2
        </p>
        <p>
          <b>Population:</b> {data.population}
        </p>
        {
          <p>
            <b>Currency:</b> {data.currencyName} ({data.currencyCode})
          </p>
        }
        {data?.neighbours && renderNeighbours(data?.neighbours)}
      </div>
    </>
  );
}
