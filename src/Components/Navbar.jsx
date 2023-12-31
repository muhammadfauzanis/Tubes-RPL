import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import Cookies from "js-cookie";

function Navbar() {
  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("id_kategori");
    Cookies.remove("nama")
    window.location.reload(false)
  };

  return (
    <nav className=" bg-[#798880] fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} alt="" className="h-20" />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
          {Cookies.get("id_kategori") === '1' && (
              <li>
                <Link 
                  className="block py-2 pl-3 text-white font-bold rounded md:bg-transparentmd:p-0  cursor-pointer hover:text-[#A6BB8D] transition duration-200 ease-in-out"
                  to="/dashboard"
                >
                 Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                className="block py-2 pl-3 text-white font-bold rounded md:bg-transparentmd:p-0  cursor-pointer hover:text-[#A6BB8D] transition duration-200 ease-in-out"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 text-white font-bold rounded md:bg-transparentmd:p-0  cursor-pointer hover:text-[#A6BB8D] transition duration-200 ease-in-out"
                to="/form"
              >
                Isi Form
              </Link>
            </li>
            {Cookies.get("username") === undefined && (
            <li>
              <Link
                className="block py-2 pl-3 text-white font-bold rounded md:bg-transparentmd:p-0  cursor-pointer hover:text-[#A6BB8D] transition duration-200 ease-in-out"
                to="/login"
              >
                Login
              </Link>
            </li>
            )}
            {Cookies.get("username") !== undefined && (
              <li onClick={handleLogout}>
                <p 
                  className="block py-2 pl-3 text-white font-bold rounded md:bg-transparentmd:p-0  cursor-pointer hover:text-[#A6BB8D] transition duration-200 ease-in-out">
                  Logout
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
