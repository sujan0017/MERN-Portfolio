import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiVisualstudiocode,
} from "react-icons/si";
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
            <DevtoolIcon icons={<SiHtml5 className="text-3xl text-white" />} />
            <DevtoolIcon
              icons={<TbFileTypeCss className="text-3xl text-white" />}
            />
            <DevtoolIcon
              icons={<IoLogoJavascript className="text-3xl text-white" />}
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <DevtoolIcon
              icons={<RiTailwindCssFill className="text-3xl text-white" />}
            />
            <DevtoolIcon icons={<FaReact className="text-3xl text-white" />} />
            <DevtoolIcon icons={<SiRedux className="text-3xl text-white" />} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 gap-5 border rounded-md w-80 ">
          <p className="text-p font-semibold text-bgWhite">BACKEND</p>
          <div className="flex justify-center items-center gap-5">
            <DevtoolIcon icons={<FaNodeJs className="text-3xl text-white" />} />
            <DevtoolIcon
              icons={<SiExpress className="text-3xl text-white" />}
            />
            <DevtoolIcon
              icons={<SiMongodb className="text-3xl text-white" />}
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <DevtoolIcon
              icons={<SiPostman className="text-3xl text-white" />}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 gap-5 border rounded-md w-80 ">
          <p className="text-p font-semibold text-bgWhite">OTHERS</p>
          <div className="flex justify-center items-center gap-5">
            <DevtoolIcon
              icons={<SiVisualstudiocode className="text-3xl text-white" />}
            />
            <DevtoolIcon icons={<SiMysql className="text-3xl text-white" />} />
            <DevtoolIcon icons={<FaFigma className="text-3xl text-white" />} />
          </div>
          <div className="flex justify-center items-center gap-5">
            <DevtoolIcon
              icons={<SiAdobephotoshop className="text-3xl text-white" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export const DevtoolIcon = ({ icons }) => {
  return (
    <div className="size-14  rounded-full bg-primaryLight800 flex justify-center items-center shadow-md dark:bg-primaryDark200">
      {icons}
    </div>
  );
};

export default DevTools;
