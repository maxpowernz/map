import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <div className="wrapper">
      <div className="title">
        <img src="/globe.png" alt="Globe" />
        <h1>Navigating the worldwide routes</h1>
      </div>
      <div className="main">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}
