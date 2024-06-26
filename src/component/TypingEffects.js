"use client";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);
function TypingEffects({ staticContent, DynamicContent }) {
  useEffect(() => {
    const text = DynamicContent;
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      delay: 1,
    });
    gsap.to(".content", {
      duration: 2,
      text: text,
      delay: 1,
    });
  }, []);

  return (
    <div>
      <span>{staticContent}</span>
      <span className={`content text-yellow-400`}></span>
      <span className={`cursor text-yellow-400`}>_</span>
    </div>
  );
}

export default TypingEffects;
