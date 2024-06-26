import NavBar from "../../component/NavBar";
import ProjectCard from "../../component/ProjectCard";
import "animate.css";
import { Separator } from "@/components/ui/separator";
export default function Portfolio() {
  return (
    <div className={`flex flex-col items-center bg-lime-50 md:gap-40 gap-32`}>
      <NavBar />
      <h1 className="portfolio-title md:text-5xl text-3xl flex-grow flex justify-center items-center text-blue-800 font-bold animate__animated animate__swing">
        My Gadgets
      </h1>
      <div
        className={`project-card-container flex flex-col items-center md:gap-40 gap-32 `}
      >
        {" "}
        <ProjectCard
          projectName={"Shimmer"}
          description={
            "The Shimmer, focusing on essential features to enhance user experience, the site aims to provide visitors with quick access to all necessary details, facilitating an effortless connection with the café."
          }
          imagePath={"/resources/project-images/shimmer-illustration.png"}
          titleColour="text-yellow-300"
          visitingLink="https://shimmer-sooty.vercel.app/"
        />
        <Separator className="md:w-full w-4/5 bg-[#d7e3bc]" />
        <ProjectCard
          projectName={"Eat and Split"}
          description={
            "A toy website allows user to split bill and calculate each one's part instantly ."
          }
          imagePath={"/resources/project-images/eat-split.png"}
          titleColour="text-gray-300"
          visitingLink="https://eat-and-split-zeta-pied.vercel.app/"
        />
        <Separator className="md:w-full w-4/5 bg-[#d7e3bc]" />
        <ProjectCard
          projectName={"usePopcorn"}
          description={
            "A toy website allows user to search movies and rate them."
          }
          imagePath={"/resources/project-images/use-popcorn.png"}
          titleColour="text-red-300"
          visitingLink="https://use-popcorn-six-roan.vercel.app/"
        />
        <Separator className="md:w-full w-4/5 bg-[#d7e3bc]" />
        <ProjectCard
          projectName={"MyLab"}
          description={
            "Aims to proide a informative and interactive platform for students and staffs to learn the realative information about each laboratory."
          }
          imagePath={"/resources/project-images/myLab-illustration.png"}
          titleColour="text-blue-300"
        />
      </div>

      <footer
        className={`flex md:gap-48 gap-10 justify-center items-center bg-orange-100 h-48 w-full`}
      >
        <div className="LinkedIn">
          <a href="https://linkedin.com/in/morry-yu-690027301">
            <img
              className="w-7"
              src="/resources/linkedin-icon.svg"
              alt="linkedin-icon"
            />
          </a>
        </div>
        <div className="Github">
          <a href="https://github.com/Stamptax">
            <img className="w-7" src="/resources/github-icon.svg" alt="" />
          </a>
        </div>
        <div className="Email">
          <a href="mailt0:morry.haosenyu@gmail.com">
            <img className="w-7" src="/resources/google-gmail.svg" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}
