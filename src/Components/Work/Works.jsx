import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
function Works() {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") setProjects(projectsData);
    else {
      const newProjects = projectsData.filter((preject) => {
        return preject.category===item.name;
      });
      setProjects(newProjects);
    }
  },[item]);

  const handleClick=(e,index)=>{
    setItem({name:e.target.textContent})
    setActive(index)
  }
  return (
    <>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span key={index} className={active===index?'active-work work-item':"work-item"} onClick={(e)=>{handleClick(e,index)}}>
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work-container container grid">
        {projects.map((item, index) => {
          return <WorkItems key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export default Works;
