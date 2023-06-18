import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className=" bg-[#798880] fixed top-0 left-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} alt="" className="h-20" />
        <div class="hidden w-full md:block md:w-auto">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
