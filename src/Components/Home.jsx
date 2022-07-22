import React from "react";
import { Select } from "./Select";

export const Home = () => {
  const colors = ["red", "yellow", "green", "blue"];
  const components = [
    { title: "React", id: "react" },
    { title: "Angular", id: "angular" },
    { title: "Vue", id: "vue" },
    { title: "Ember", id: "ember" }
  ];
  return (
    <div className="container">
      <div className="sub-container">
        <h1>Home</h1>
        <Select options1={colors} />
        <Select options1={components.map((item) => item.title)} />
      </div>
      
    </div>
  );
};
