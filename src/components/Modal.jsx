import {} from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
function Modal({ setIsOpen, isOpen, body }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark">
      <section className="w-full bg-white dark:bg-primaryDark100 dark:bg-opacity-95 fixed top-0 right-0 left-0 bottom-0 bg-opacity-95 flex justify-center items-center z-10">
        <div className="container flex justify-center item-center ">
          <button
            onClick={handleSubmit}
            className="border shadow-md size-8 rounded-full p-2 absolute top-5 right-5 flex justify-center items-center hover:cursor-pointer hover:bg-primaryLight100 group"
          >
            <RxCross1 className=" text-2xl font-semibold dark:text-white dark:group-hover:text-black" />
          </button>
          <div>{body}</div>
        </div>
      </section>
    </div>
  );
}

export default Modal;
