import myImage from "../images/me.png";
import DevTools from "./DevTools";

function About() {
  return (
    <section className="w-full py-24 flex justify-center items-center bg-primaryLight500  ">
      <div className=" flex flex-col gap-7 container">
        <div className="w-full sm:grid sm:grid-cols-2 md:grid-cols-4 gap-7  justify-center items-center">
          <div className="w-full bg-slate-300 rounded-md flex items-center justify-center md:col-span-2 lg:col-span-1 overflow-hidden  ">
            <img src={myImage} alt="" className="bg-cover scale-110 " />
          </div>
          <div className=" md:col-span-2 lg:col-span-3">
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <h1 className="text-h5 font-semibold  text-center text-bgWhite ">
                About Me
              </h1>
              <p className="text-p text-center sm:text-left text-bgWhite">
                Hi, I’m
                <span className="text-xl font-semibold"> Sujan B.K</span>, a MERN
                stack developer with a passion for building responsive and
                dynamic web applications. I love tackling challenges, learning
                new technologies, and delivering high-quality solutions that
                drive both user satisfaction and business success. Let's
                collaborate and create something amazing!
              </p>
            </div>
          </div>
        </div>

        <DevTools />
      </div>
    </section>
  );
}

export default About;
