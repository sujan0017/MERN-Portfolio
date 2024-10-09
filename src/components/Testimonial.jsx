import { FaStar, FaStarHalf } from "react-icons/fa";
import Title from "./Title";
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonial() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-24 gap-10 bg-primaryLight100">
      <Title title='Our Happy Customer' para="Words of praise from my happy customers" />
      <div className="container flex flex-wrap justify-center items-center gap-14 xl:gap-12  ">
        <TestimonialComponent />
        <TestimonialComponent />
        <TestimonialComponent />
      </div>
    </section>
  );
}

function TestimonialComponent() {
  return (
    <>
      <div className="w-80 bg-bgWhite rounded-me flex flex-col justify-center items-center gap-4 p-3 rounded-md">
        <div className="size-16 rounded-full flex justify-center items-center ">
        <RiDoubleQuotesL className="text-7xl text-accentLight" />
        </div>
        <p className="text-p text-center ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          numquam voluptas quidem quod at exercitationem voluptatum non 
        </p>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="size-16 rounded-full bg-black"></div>
          <div className="7">
            <div className="flex justify-center items-center gap-2">
              <FaStar className="text-xl text-accentLight"/>
              <FaStar className="text-xl text-accentLight"/>
              <FaStar className="text-xl text-accentLight"/>
              <FaStar className="text-xl text-accentLight"/> 
              <FaStarHalf className="text-xl text-accentLight"/>
            </div>
            <p className="text-p font-semibold text-center">Ramu Kaka</p>
            <p className="text-p font-light text-center">CEO & founder</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
