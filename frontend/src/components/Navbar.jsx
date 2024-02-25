import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import lens from "../images/lens.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../Redux/actionCreator";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state);
  const [showMenu, setShowMenu] = useState(false);
  const search = useSelector((state) => state.search);

  const handleLogout = () => {
    dispatch(LogoutAction());
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: e.target.value });
  };
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="bg-black text-white sticky top-0 z-20 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} className="h-10" alt="Logo" />
          <img src={lens} className="h-6 ml-4" alt="Lens" />
          <input
            className="ml-2 bg-black"
            placeholder="Search BBC"
            onChange={(e) => handleSearch(e)}
            style={{
              // border: "1px solid white",
              color: "white",
              borderRadius: "14px",
              paddingTop: "5px",
              paddingBottom: "4px",
              paddingLeft: "2.5px",
            }}
          />
        </div>

        <div
          className="hidden md:flex items-center space-x-4 flex-grow"
          style={{ justifyContent: "space-around", fontWeight: "bold" }}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/general"}>General</Link>
          <Link to={"/sports"}>Sports</Link>
          <Link to={"/entertainment"}>Entertainment</Link>
          <Link to={"/politics"}>Politics</Link>
          <Link to={"/business"}>Business</Link>
          <Link to={"/science"}>Science</Link>
          <Link to={"/dashboard"}>Dashboard</Link>

          {login.isAuth ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button
              onClick={handleLogin}
              style={{ display: "flex", alignContent: "center" }}
            >
              <img src={user} alt="User" className="h-5" />
              Sign in
            </button>
          )}
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      {showMenu && (
        <div className="md:hidden bg-black p-4 text-center w-full">
          <div className="flex flex-col space-y-2">
            <Link to={"/"}>Home</Link>
            <Link to={"/general"}>General</Link>
            <Link to={"/sports"}>Sports</Link>
            <Link to={"/entertainment"}>Entertainment</Link>
            <Link to={"/politics"}>Politics</Link>
            <Link to={"/business"}>Business</Link>
            <Link to={"/science"}>Science</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </div>

          {login.isAuth ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Sign in</button>
          )}
        </div>
      )}
    </div>
  );
}
