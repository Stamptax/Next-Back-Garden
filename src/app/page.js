"use client";
import NavBar from "../component/NavBar";
import "animate.css";
import TypingEffects from "../component/TypingEffects";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-lime-50 min-h-screen">
      <NavBar />
      <div
        className={`home-content-container flex-grow flex justify-center items-center`}
      >
        <h1 className="slogans text-4xl font-bold text-center text-gray-700">
          <p className="animate__fadeInLeft animate__animated">Hello! </p>{" "}
          <p className="text-blue-500 animate__fadeInRight animate__animated ">
            I am StampTax
          </p>
          <TypingEffects
            staticContent={"Dedicated as a"}
            DynamicContent={" Front-End developer"}
          />
        </h1>
      </div>
      <div
        className={`animate__animated animate__fadeIn tech-skills flex pt-20 items-center border-t-2 container md:gap-40 gap-10 justify-center flex-wrap`}
      >
        <img
          className="w-12 h-12 pr-2 border-r-2"
          src="/resources/tech-stack.png"
          alt="my tech stack"
        />
        <div className="tech-icons flex items-center gap-5 flex-wrap justify-center">
          <img
            className="w-10 h-10"
            src="/resources/html-5.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/css-3.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/javascript.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/react.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/tailwindcss-icon.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/greensock-icon.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/python.svg"
            alt="html-icon"
          />
          <img
            className="w-10 h-10"
            src="/resources/django-icon.svg"
            alt="html-icon"
          />
        </div>
      </div>
      <footer
        className={`flex gap-10 items-center md:pt-48 pt-14 pb-16 bottom-8`}
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
