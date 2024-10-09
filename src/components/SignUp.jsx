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
    <section className="w-full py-24 flex flex-col items-center justify-center   ">
      {isOpen ? (
        <div className=" w-full md:w-[700px]  container">
          <Title
            title="Welcome back"
            para="Sign up to leave a testimonial and review my projects."
          />
          <form action="" className="w-full flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-2  shadow-md ">
                <label htmlFor="">Email:</label>
                <input type="text" className="bg-slate-100 w-full p-2" />
              </div>
              <div className="w-full flex flex-col gap-2 shadow-md   ">
                <label htmlFor="">Password:</label>
                <input type="text" className="bg-slate-100 w-full p-2" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-LightPrimary px-6 py-2 rounded-md text-white">
                Login
              </button>
            </div>

            <button
              onClick={handleClick}
              className="bg-bgPrimary py-2 rounded-md"
            >
              Don't have an account?{" "}
              <span className="text-red-500">SignUp</span>
            </button>
          </form>
        </div>
      ) : (
        <div className=" w-full md:w-[700px] container">
          <Title
            title="Create an Account"
            para="I'm excited to connect with you! Join now and be part of my journey."
          />
          <form action="" className="w-full flex flex-col gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-2  ">
                <label htmlFor="">Full Name:</label>
                <input type="text" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2  ">
                <label htmlFor="">Address:</label>
                <input type="text" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2  ">
                <label htmlFor="">Email:</label>
                <input type="email" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2   ">
                <label htmlFor="">Password:</label>
                <input type="password" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
              <div className="w-full flex flex-col gap-2   ">
                <label htmlFor="">Confirm Password:</label>
                <input type="password" className="bg-slate-100 w-full p-2 shadow-md" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-LightPrimary px-6 py-2 rounded-md text-white">
                Register
              </button>
            </div>

            <button
              className="bg-bgPrimary py-2 rounded-md "
              onClick={handleClick}
            >
              Already have an account?{" "}
              <span className="text-red-500">Login</span>
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default SignUp;
