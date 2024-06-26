import React from "react";

export default function Button({ bgColour = "bg-blue-300", children }) {
  return <button className={`${bgColour}`}> {children} </button>;
}
