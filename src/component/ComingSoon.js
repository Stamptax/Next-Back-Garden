import React from "react";

export default function ComingSoon({ imgPath }) {
  return (
    <div>
      <p>Coming soon...</p>
      <img src={imgPath} alt="we are working on this" />
    </div>
  );
}
