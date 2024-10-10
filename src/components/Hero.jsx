import cartoon from '../images/cartoon.png'
function Hero() {
  return (
    <div className='dark'>
    <section className=" w-full flex flex-col justify-center gap-10 items-center md:py-24 py-10 bg-white dark:bg-primaryDark100">
      <div className=" container flex flex-col justify-center items-center gap-5">
        <h1 className="text-h3 sm:text-h2 font-bold  text-center dark:text-white ">
          <span className="text-[#439A34] ">M</span>
          <span className="text-[#F69128]">E</span>
          <span className="text-[#29BFED]">R</span>
          <span className="text-[#9BBD4F]">N</span> Stack Developer
        </h1>
        <p className="text-p text-center dark:text-white">
          Crafting seamless user experiences, one line of code at a time.
        </p>
      </div>
      <div className="h-64 w-64 rounded-full bg-primaryLight100 dark:bg-primaryDark800 flex justify-center items-center shadow-md overflow-hidden">
        <img src={cartoon} alt="cartoon img" className='w-full bg-center bg-cover  rounded-full scale-110'/>
      </div>
    </section>
    </div>
  );
}

export default Hero;
