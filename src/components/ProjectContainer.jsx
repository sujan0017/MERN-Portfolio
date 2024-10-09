
import imgFile from "../images/img2.jpg";
import { HiChevronDoubleRight } from "react-icons/hi";
function ProjectContainer() {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 rounded-md">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
          src={imgFile}
        />
        <div className="px-8 py-10 relative z-10 w-full  opacity-0 hover:opacity-100 rounded-md bg-primaryLight800">
          <h2 className="text-title title-font font-medium mb-4 text-center text-bgWhite">THE SUBTITLE</h2>
          <p className="text-sm text-center text-bgWhite">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className=" w-full flex justify-center items-center mt-7 gap-14">
            <button className="text-p px-4 py-2 border-2 text-white rounded-md hover:bg-bgWhite hover:text-primaryLight800 flex justify-center items-center gap-2 font-medium">Visit Website <span><HiChevronDoubleRight className="text-xl" /></span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
