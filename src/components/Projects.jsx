import ProjectContainer from "./ProjectContainer";
import Title from "./Title";

function Projects() {
  return (
    <div className="dark">
    <section className="w-full md:py-24 py-10 flex justify-center items-center dark:bg-primaryDark100  ">
      <div className="container">
        <Title
          title="My Projects"
          para={` Explore my web development journey through projects built using the
            MERN stack, showcasing my growth in creating responsive and
            user-friendly applications.`}
        />

        <div className="flex flex-wrap mt-7">
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
        </div>
      </div>
    </section>
    </div>
  );
}

export default Projects;
