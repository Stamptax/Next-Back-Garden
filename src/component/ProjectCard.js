"use client";
import React, { useEffect } from "react";
import "animate.css";
import { gsap } from "gsap/gsap-core";

export default function ProjectCard({
  projectName = "place holder",
  description = "place holder",
  picH = "h-72",
  picW = "auto",
  imagePath = "",
  titleColour = "text-black",
  descriptionColour = "text-black",
  titleWeight = "font-bold",
  descriptionWeight = "font-normal",
  visitingLink = "",
}) {
  let clickToVisit;
  useEffect(() => {
    clickToVisit = gsap.to(".project-title", {
      duration: 1,
      text: "Click title to Visit",
      delay: 2,
      onComplete: () => {
        clickToVisit.reverse();
      },
    });
  }, []);

  return (
    <div className="project-card md:max-w-screen-2xl max-w-l min-w-60 w-11/12 min-h-72 flex flex-col-reverse md:flex-row md:justify-between md:items-start items-start relative gap-5">
      <div
        className={`animate__animated animate__fadeInLeft  text-area mr-10 md:flex md:flex-col md:justify-between`}
      >
        <a href={`${visitingLink}`}>
          <h1
            className={`project-title text-wrap break-words self-start text-4xl ${titleColour} ${titleWeight}`}
          >
            {projectName}
          </h1>
        </a>
        <p
          className={`text-wrap break-words text-l font-light self-start ${descriptionColour} ${descriptionWeight} md:pb-4 max-w-80 whitespace-pre-wrap `}
        >
          {description}
        </p>
      </div>
      <div
        className={`animate__animated animate__fadeInRight shrink-0 img-area`}
      >
        <img
          className={`${picH} object-cover rounded-lg md:shadow-xl shadow-md`}
          src={imagePath}
          alt={projectName}
        />
      </div>
    </div>
  );
}
