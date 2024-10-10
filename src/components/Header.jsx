import whiteLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import Modal from "./Modal";
import SignUp from "./SignUp";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="dark">
      <header className="py-7 w-full  flex justify-center items-center border-b-2 dark:bg-primaryDark100">
        <div className=" container flex justify-between items-center">
          <Link to="/">
            <img src={whiteLogo} alt="" className="w-14" />
          </Link>
          <div className="flex justify-center items-center gap-2">
            <Link
              to="contact"
              className=" px-4 py-2 rounded-md text-p font-medium dark:text-white"
            >
              Contact
            </Link>
            <Link
              to="resume"
              className=" px-4 py-2 rounded-md text-p font-medium dark:text-white "
            >
              Resume
            </Link>
            <button
              onClick={handleClick}
              className="bg-white border-2 text-primaryLight500 border-primaryLight500 dark:text-white dark:border-primaryLight500 dark:bg-primaryLight500  flex font-medium gap-2 hover:bg-primaryLight500 hover:border-primaryLight500 items-center justify-center px-4 py-2 rounded-md text-p hover:text-white dark:hover:text-primaryLight500 dark:hover:bg-white dark:hover:border-primaryLight500  "
            >
              SignUp <FiLogIn />
            </button>
          </div>
        </div>
      </header>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} body={<SignUp />} />
      </div>
    </div>
  );
}

export default Header;
