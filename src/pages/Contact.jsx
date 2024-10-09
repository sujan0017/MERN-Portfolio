
import Title from "../components/Title";
import bgImage from "../images/bg.jpg";


function Contact() {
  return (
    <>

      <section className="w-full flex justify-center items-center mt-7 ">
        <div className="w-full flex justify-center items-center container">
          <div className="w-1/2  justify-center items-center hidden xl:block ">
            <img
              src={bgImage}
              alt=""
              className=" bg-center bg-cover rounded-md"
            />
          </div>
          <form
            className="w-full xl:w-1/2 flex flex-col justify-center items-center gap-5 xl:p-10 "
            action=""
          >
            <Title
              title="Thank you for reaching out."
              para="How can I help you today?"
            />
            <div className="w-full flex justify-center items-center gap-2 mt-10">
              <label htmlFor="" className="text-p font-normal ">
                Full Name:
              </label>
              <input
                type="text"
                className="bg-slate-100 flex-grow px-2 rounded-md py-2"
              />
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <label htmlFor="" className="text-p font-normal ">
                Email:
              </label>
              <input
                type="text"
                className="bg-slate-100 flex-grow px-2 rounded-md py-2"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label htmlFor="" className="text-p font-normal ">
                Message:
              </label>
              <textarea
                className="bg-slate-100 w-full h-96 px-2 py-2 rounded-md"
                name=""
                id=""
              ></textarea>
            </div>
            <div>
              <button className="bg-primaryLight500 border-2 text-bgWhite border-primaryLight500 flex font-medium gap-2 hover:bg-bgWhite hover:text-primaryLight500 items-center justify-center px-4 py-2 rounded-md text-p">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
