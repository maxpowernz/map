import { Link, NavLink } from "react-router-dom";

export default function CountryLink({
  name,
  code,
}: {
  name: string;
  code: string;
}) {
  return (
    <Link to={`/country/${code}`} key={code}>
      {name}
    </Link>
  );
}
