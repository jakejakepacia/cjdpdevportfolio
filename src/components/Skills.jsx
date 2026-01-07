import "./Skills.css";
import { useState } from "react";
import swiftIcon from "../assets/swift-icon.png";
import reactIcon from "../assets/react-icon.png";
import csharpIcon from "../assets/c-sharp.png";
import maui from "../assets/maui.png"
import xamarin from "../assets/xamarin.png"
import jwt from "../assets/jwt.png"
import database from "../assets/database.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import postman from "../assets/postman.png"

function Skills() {
  const [activeTab, setActiveTab] = useState("Front End");
  const [animationKey, setAnimationKey] = useState(0); // key to trigger re-animation

  const skillsData = {
    "Front End": [
      { id: 2, name: "Swift UIKit", icon: swiftIcon },
      { id: 3, name: "SwiftUI", icon: swiftIcon },
      { id: 4, name: "Xamarin", icon: xamarin },
      { id: 5, name: ".NET MAUI", icon: maui },
      { id: 1, name: "React", icon: reactIcon }
    ],
    "Back End": [
      { id: 1, name: "C#", icon: csharpIcon },
      { id: 2, name: "Swift", icon: swiftIcon },
      { id: 3, name: "ASP.NET Web API", icon: csharpIcon },
      { id: 4, name: ".NET Framework", icon: csharpIcon },
      { id: 5, name: "JWT", icon: jwt },
      { id: 6, name: "SQL Server", icon: database },
      { id: 7, name: "PostgreSQL", icon: database },
    ],
    "Other": [
      { id: 1, name: "Git", icon: git },
      { id: 2, name: "GitHub", icon: github },
      { id: 3, name: "Postman", icon: postman },
      { id: 5, name: "Auto Layout / Storyboards", icon: swiftIcon },
    ],
  };

  const tabs = Object.keys(skillsData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setAnimationKey(prev => prev + 1); // trigger re-animation
  };

  return (
    <div className="container">
      <p><strong>Skills</strong></p>

      {/* Tabs */}
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab-btn active" : "tab-btn"}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        <div className="my-skills">
          {skillsData[activeTab].map((skill, index) => (
            <div
              className="skill-item slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              key={`${skill.id}-${animationKey}`} // new key triggers re-render
            >
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
