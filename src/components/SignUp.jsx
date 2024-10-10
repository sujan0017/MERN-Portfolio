import { useState } from "react";
import Title from "./Title";

function SignUp() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark">
    <section className="w-full p-10 flex flex-col items-center justify-center bg-primaryLight100 dark:bg-primaryDark200  rounded-md shadow-md">
      {isOpen ? (
        <div className="w-full">
          <Title
            title="Welcome back"
            para="Sign up to leave a testimonial and review my projects."
          />
          <form action="" className="w-full flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-2  shadow-md dark:text-white ">
                <label htmlFor="">Email:</label>
                <input type="text" className="bg-slate-100 w-full p-2 " />
              </div>
              <div className="w-full flex flex-col gap-2 shadow-md dark:text-white   ">
                <label htmlFor="">Password:</label>
                <input type="text" className="bg-slate-100 w-full p-2 " />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-primaryLight500 hover:bg-primaryLight800 px-6 py-2 rounded-md  text-white">
                Login
              </button>
            </div>

            <button
              onClick={handleClick}
              className=" py-2 rounded-md group dark:text-white"
            >
              Don't have an account?{" "}
              <span className="text-primaryLight500 group-hover:underline">SignUp</span>
            </button>
          </form>
        </div>
      ) : (
        <div className=" w-full  ">
          <Title
            title="Create an Account"
            para="I'm excited to connect with you! Join now and be part of my journey."
          />
          <form action="" className="w-full flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-2  ">
                <label  className="dark:text-white" htmlFor="">Full Name:</label>
                <input type="text" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2  ">
                <label  className="dark:text-white" htmlFor="">Address:</label>
                <input type="text" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2  ">
                <label  className="dark:text-white" htmlFor="">Email:</label>
                <input type="email" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2   ">
                <label className="dark:text-white"  htmlFor="">Password:</label>
                <input type="password" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2   ">
                <label  className="dark:text-white" htmlFor="">Confirm Password:</label>
                <input type="password" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-primaryLight500 hover:bg-primaryLight800 px-6 py-2 rounded-md  text-white">
                Register
              </button>
            </div>

            <button
              className="py-2 rounded-md group dark:text-white "
              onClick={handleClick}
            >
              Already have an account?{" "}
              <span className="text-primaryLight500 group-hover:underline">Login</span>
            </button>
          </form>
        </div>
      )}
    </section>
    </div>
  );
}

export default SignUp;
