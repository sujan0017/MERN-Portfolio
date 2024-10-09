import ProjectContainer from "./ProjectContainer";
import Title from "./Title";

function Projects() {
  return (
    <section className="w-full  py-24 flex justify-center items-center  ">
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
  );
}

export default Projects;
