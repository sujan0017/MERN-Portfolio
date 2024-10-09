import { AiOutlineCopyright } from "react-icons/ai";
import whiteLogo from "../images/whiteLogo.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full bg-primaryLight900 py-24 ">
      <div className="container flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center gap-5 ">
          <Link to="/">
            <img src={whiteLogo} alt="" className="w-14" />
          </Link>
          <a
            href="tel:+9779823741464 "
            className="text-white text-center text-p cursor-pointer"
          >
            +977 982-3741464
          </a>
          <a
            href="mailto:bk.sujan017@gmail.com"
            className="text-white text-center text-p cursor-pointer"
          >
            bk.sujan017@gmail.com
          </a>
        </div>
        <div className="border-b-2 border-white w-full"></div>
        <div className="w-full flex  justify-between items-center">
          <div className="flex items-center justify-center gap-2 text-white">
            <AiOutlineCopyright /> Sujan B.k 2024
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-5 ">
            <Link to="https://github.com/sujan0017" target="_black">
              <FaGithub className="text-3xl text-white" />
            </Link>
            <Link to="https://www.linkedin.com/in/sujan0017" target="_black">
              <FaLinkedin className="text-3xl text-white" />
            </Link>
            <Link to="https://www.instagram.com/sujan_017/" target="_black">
              <FaInstagram className="text-3xl text-white" />
            </Link>
            <Link to="https://www.facebook.com/bk.sujan017" target="_black">
              <FaFacebook className="text-3xl text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
