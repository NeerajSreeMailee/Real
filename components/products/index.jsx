import Link from "next/link";
import Image from "next/image";

<<<<<<< HEAD
// Import project images
import ProjectImage1 from "../../assets/project1.avif";
import ProjectImage2 from "../../assets/project2.avif";
import ProjectImage3 from "../../assets/project3.avif";
import ProjectImage4 from "../../assets/project4.jpeg";
import ProjectImage5 from "../../assets/project5.jpeg";
import ProjectImage6 from "../../assets/project6.jpg";

// Sample projects data
const projects = [
  {
    id: 1,
    name: "Project 1",
    imageSrc: ProjectImage1.src,
    link: "/project", // Project page link
  },
  {
    id: 2,
    name: "Project 2",
    imageSrc: ProjectImage2.src,
    link: "/projects/2",
  },
  {
    id: 3,
    name: "Project 3",
    imageSrc: ProjectImage3.src,
    link: "/projects/3",
  },
  {
    id: 4,
    name: "Project 4",
    imageSrc: ProjectImage4.src,
    link: "/projects/4",
  },
  {
    id: 5,
    name: "Project 5",
    imageSrc: ProjectImage5.src,
    link: "/projects/5",
  },
  {
    id: 6,
    name: "Project 6",
    imageSrc: ProjectImage6.src,
    link: "/projects/6",
  },
  // More projects can be added as needed
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
      <Link href={project.link}>
        <a>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </Link>

      <div className="p-4 flex-grow">
        <Link href={project.link}>
          <a>
            <h3 className="text-lg font-semibold text-[#1a1a1a] hover:text-[#333] transition-colors duration-200">
              {project.name}
            </h3>
          </a>
        </Link>
=======
// Import project image
import ProjectImage1 from "../../assets/project1.avif"; // Replace with your image

const ProjectCard = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      {/* Project Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full h-full flex flex-col justify-between transform transition-all duration-500 ease-in-out hover:scale-105">
        
        {/* Project Image */}
        <div className="relative w-full h-3/4 overflow-hidden">
          <Image
            src={ProjectImage1}
            alt="Project Image"
            className="w-full h-full object-cover"
            layout="intrinsic"
            width={1470}
            height={830}
          />
          
          {/* Overlay with Text */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold text-center">
            <h3 className="text-4xl mb-2">Project 1</h3>
            <p className="text-lg">A brief description of the project goes here</p>
          </div>
        </div>

        {/* Project Description */}
        <div className="p-6 bg-gray-50 flex-grow flex justify-center items-center">
          <Link href="/project">
            <a className="text-center text-xl text-[#1a1a1a] font-semibold hover:text-[#333] transition-colors duration-200">
              View Project Details
            </a>
          </Link>
        </div>
>>>>>>> d981ea4 (Initial commit or your custom message)
      </div>
    </div>
  );
};

const Projects = () => {
  return (
<<<<<<< HEAD
    <div className="bg-[#c5deff] min-h-screen w-screen flex flex-col items-center justify-center">
      {/* Updated Heading */}
      <h2 className="text-5xl font-extrabold text-[#1a1a1a] mb-12 pt-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-xl px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
=======
    <div className="bg-[#f0f4f8] min-h-screen flex items-center justify-center">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-[#1a1a1a] mb-8 text-center">
        Featured Project
      </h2>

      {/* Single Project Display */}
      <ProjectCard />
>>>>>>> d981ea4 (Initial commit or your custom message)
    </div>
  );
};

export default Projects;