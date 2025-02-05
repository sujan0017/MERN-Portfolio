// eslint-disable-next-line react/prop-types
function Title({ title, para }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-h5 font-semibold  text-center dark:text-white ">{title}</h1>
      <p className="text-p text-center dark:text-slate-100">{para}</p>
    </div>
  );
}

export default Title;
