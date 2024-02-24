import React from "react";
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
  const handleLogout = () => {
    dispatch(LogoutAction());
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="grid grid-cols-3 bg-black text-white sticky top-0 z-20">
      <div className="flex align-center p-2">
        <img src={logo} className="h-10" />
        {login.isAuth ? (
          <button
            onClick={handleLogout}
            className="text-white flex hover:underline p-2"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              onClick={handleLogin}
              className="text-white flex hover:underline  p-2 w-30"
            >
              <img src={user} className="h-7" />
              Sign in
            </button>
          </Link>
        )}
      </div>
      <div className="flex justify-center align-center mt-4">
        <Link to={"/"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Home
          </button>
        </Link>
        <Link to={"/general"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            General
          </button>
        </Link>
        <Link to={"/sports"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Sports
          </button>
        </Link>
        <Link to={"/entertainment"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Entertainment
          </button>
        </Link>
        <Link to={"/politics"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Politics
          </button>
        </Link>
        <Link to={"/business"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Business
          </button>
        </Link>
        <Link to={"/technology"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Technology
          </button>
        </Link>
        <Link to={"/science"}>
          <button
            className="mr-7 font-semibold text-sm"
          >
            Science
          </button>
        </Link>
      </div>
      <div className="ml-40 flex p-4">
        <img src={lens} className="h-6" />
        <input
          // onChange={(e) => props.setSearch(e.target.value)}
          className="flex bg-black"
          placeholder="Search BBC"
        />
      </div>
     
    </div>
  );
}
