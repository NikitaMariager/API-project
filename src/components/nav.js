import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="top-nav">
        <div className="logo">
          <img src="../assets/Star_Wars_Yellow_Logo.svg.png" alt=""></img>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/user">User</Link>
          </li>

          <li>
            <Link to="/starwars">Starwars</Link>
          </li>
          <li>
            <Link to="/starwars-pages">Starwars Pages</Link>
          </li>

          <li>
            <Link to="/species">Species</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
