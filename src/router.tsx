import { createRoutesFromElements, Route } from "react-router-dom";

import Continent from "./components/Continent.js";
//import Home from "./components/Home.js";
import Root from "./routes/root.js";
import Home from "./components/Home.js";
import Country from "./components/Country.js";

export const routes = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="continent/:name" element={<Continent />} />
    <Route path="country/:code" element={<Country />} />
  </Route>
);
