"use client";
import Sakana from "sakana";
import React, { useEffect } from "react";

export default function SakanaWidget() {
  useEffect(() => {
    Sakana.init({
      el: ".sakana-box",
      scale: 0.3,
      canSwitchCharacter: true,
    });
    Sakana.setMute(true);
  }, []);

  return (
    <>
      <style>
        {`
          .sakana-box {
            position: fixed;
            right: 0;
            bottom: 0;
            transform-origin: 100% 100%; /* 从右下开始变换 */
          }
        `}
      </style>
      <div className="sakana-box"></div>
    </>
  );
}
