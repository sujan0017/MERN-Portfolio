import cartoon from '../images/cartoon.png'
function Hero() {
  return (
    <section className=" w-full flex flex-col justify-center gap-10 items-center py-24 bg-white">
      <div className=" container flex flex-col justify-center items-center gap-5">
        <h1 className="text-h2 font-bold  text-center ">
          <span className="text-[#439A34] ">M</span>
          <span className="text-[#F69128]">E</span>
          <span className="text-[#29BFED]">R</span>
          <span className="text-[#9BBD4F]">N</span> Stack Developer
        </h1>
        <p className="text-p text-center">
          Crafting seamless user experiences, one line of code at a time.
        </p>
      </div>
      <div className="h-64 w-64 rounded-full bg-gray-300 flex justify-center items-center shadow-md overflow-hidden">
        <img src={cartoon} alt="cartoon img" className='w-full bg-center bg-cover  rounded-full scale-110'/>
      </div>
    </section>
  );
}

export default Hero;
