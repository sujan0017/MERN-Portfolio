import {} from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
function Modal({ setIsOpen, isOpen, body }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full bg-white fixed top-0 right-0 left-0 bottom-0 bg-opacity-95 flex justify-center items-center z-10">
      <button
        onClick={handleSubmit}
        className="bg-slate-500 size-8 rounded-full p-2 absolute top-5 right-5 flex justify-center items-center hover:cursor-pointer"
      >
        <RxCross1 className=" text-2xl" />
      </button>
      <div>{body}</div>
    </section>
  );
}

export default Modal;
