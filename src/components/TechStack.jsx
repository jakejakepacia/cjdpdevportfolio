import React from "react";

const TechStack = ({ title = "Tech Stack", stack }) => {
  return (
    <section className="tech-stack">
      <h2>{title}</h2>

      <div className="tech-stack-grid">
        {stack.map((group, index) => (
          <div key={index} className="tech-stack-card">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
