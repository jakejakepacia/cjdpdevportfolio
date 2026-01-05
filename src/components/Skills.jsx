import "./Skills.css";
import { useState } from "react";
import swiftIcon from "../assets/swift-icon.png";
import reactIcon from "../assets/react-icon.png";
import csharpIcon from "../assets/c-sharp.png";

function Skills() {
  const [activeTab, setActiveTab] = useState("Front End");
  const [animationKey, setAnimationKey] = useState(0); // key to trigger re-animation

  const skillsData = {
    "Front End": [
      { id: 1, name: "React", icon: reactIcon },
      { id: 2, name: "Swift UIKit", icon: swiftIcon },
      { id: 3, name: "SwiftUI", icon: swiftIcon },
      { id: 4, name: "Xamarin", icon: swiftIcon },
      { id: 5, name: ".NET MAUI", icon: swiftIcon },
    ],
    "Back End": [
      { id: 1, name: "C#", icon: csharpIcon },
      { id: 2, name: "Swift", icon: swiftIcon },
      { id: 3, name: "ASP.NET Web API", icon: csharpIcon },
      { id: 4, name: ".NET Framework", icon: csharpIcon },
      { id: 5, name: "JWT", icon: csharpIcon },
      { id: 6, name: "SQL Server", icon: csharpIcon },
      { id: 7, name: "PostgreSQL", icon: csharpIcon },
    ],
    "Other": [
      { id: 1, name: "Git", icon: csharpIcon },
      { id: 2, name: "GitHub", icon: csharpIcon },
      { id: 3, name: "Postman", icon: csharpIcon },
      { id: 4, name: "SSMS / pgAdmin", icon: csharpIcon },
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
