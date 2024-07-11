import { Link } from "react-router-dom";

const Nav = () => {
  const isLogin = true;
  return (
    <nav className="sticky top-0 flex justify-between p-5 font-bold bg-green-500 ">
      <div className="cursor-pointer">
        <Link to={"/"} className="hover:text-white">
          Auction Site
        </Link>
      </div>
      {isLogin && (
        <ul className="flex flex-wrap  gap-8 cursor-pointer ">
          <Link to="/home" className="hover:text-white">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link to={"/about"} className="hover:text-white">
            About
          </Link>
          <Link to={"/contact"} className="hover:text-white">
            Contact
          </Link>
        </ul>
      )}
      {isLogin ? (
        <Link to={"/logout"} className="hover:text-white" onClick={() => {}}>
          Logout
        </Link>
      ) : (
        <div className=" flex gap-2 cursor-pointer">
          <Link to={"/login"} className="hover:text-white">
            Login
          </Link>
          <Link to={"/signup"} className="hover:text-white">
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
