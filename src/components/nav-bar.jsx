import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex flex-row align-center gap-5 bg-gray-50 rounded-md padding-5">
      <div className={location.pathname === "/" ? "active" : ""}>
        <Link className="text-black" to="/">
          Home
        </Link>
      </div>
      <div className={location.pathname === "/vite" ? "active" : ""}>
        <Link className="text-black" to="/vite">
          Vite Home
        </Link>
      </div>
      <div className={location.pathname === "/profile" ? "active" : ""}>
        <Link className="text-black" to="/profile">
          Profile
        </Link>
      </div>
      <div className={location.pathname === "/users" ? "active" : ""}>
        <Link className="text-black" to="/users">
          users
        </Link>
      </div>
      <div className={location.pathname === "/users/slice" ? "active" : ""}>
        <Link className="text-black" to="/users/slice">
          UsersSlice
        </Link>
      </div>
      <div className={location.pathname === "/about" ? "active" : ""}>
        <Link className="text-black" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
