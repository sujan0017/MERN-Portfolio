import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiExpress, SiHtml5, SiMongodb, SiMysql, SiPostman, SiRedux, SiVisualstudiocode } from "react-icons/si";
import { TbFileTypeCss } from "react-icons/tb";

function DevTools() {
  return (
    <>
      <h1 className="text-title font-semi-bold  text-center text-bgWhite">
        Dev-tools & Languages
      </h1>
      <div className="w-full flex flex-wrap gap-14 justify-center items-center">

        <div className="flex flex-col items-center justify-center p-5 gap-5 border rounded-md w-80 ">
          <p className="text-p font-semibold text-bgWhite">FRONTEND</p>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiHtml5 className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <TbFileTypeCss className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <IoLogoJavascript className="text-3xl text-white" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <RiTailwindCssFill className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <FaReact className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiRedux className="text-3xl text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 gap-5 border rounded-md w-80 ">
          <p className="text-p font-semibold text-bgWhite">BACKEND</p>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <FaNodeJs className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiExpress  className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiMongodb className="text-3xl text-white" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiPostman  className="text-3xl text-white" />
            </div>
            {/* <div className="w-[50px] h-[50px]  rounded-full bg-slate-700 flex justify-center items-center">
              <FaReact className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-slate-700 flex justify-center items-center">
              <SiRedux className="text-3xl text-white" />
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 gap-5 border rounded-md w-80 ">
          <p className="text-p font-semibold text-bgWhite">OTHERS</p>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiVisualstudiocode  className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiMysql   className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <FaFigma  className="text-3xl text-white" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
             <div className="w-[50px] h-[50px]  rounded-full bg-gray-600 flex justify-center items-center">
              <SiAdobephotoshop   className="text-3xl text-white" />
            </div>
             {/* <div className="w-[50px] h-[50px]  rounded-full bg-slate-700 flex justify-center items-center">
              <FaReact className="text-3xl text-white" />
            </div>
            <div className="w-[50px] h-[50px]  rounded-full bg-slate-700 flex justify-center items-center">
              <SiRedux className="text-3xl text-white" />
            </div>   */}
          </div>
        </div>

      </div>
    </>
  );
}

export default DevTools;
