import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList
          style={{
            backgroundColor: "#1a75ff",
            border: "none",
          }}
          skill={[{ name: "HTML + CSS", emoji: "👍" }]}
        />
        <SkillList
          style={{
            backgroundColor: "#ffff00",
            border: "none",
          }}
          skill={[{ name: "JavaScript", emoji: "🔥" }]}
        />
        <SkillList
          style={{
            backgroundColor: "#669999",
            border: "none",
          }}
          skill={[{ name: "Web Design", emoji: "💪🏻" }]}
        />
        <SkillList
          style={{
            backgroundColor: "#ff0000",
            border: "none",
          }}
          skill={[{ name: "Git and GitHub", emoji: "💪🏻" }]}
        />
        <SkillList
          style={{
            backgroundColor: "skyBlue",
            border: "none",
          }}
          skill={[{ name: "React", emoji: "💪🏻" }]}
        />
        <SkillList
          style={{
            backgroundColor: "#ff6600",
            border: "none",
          }}
          skill={[{ name: "Graphic Design", emoji: "💪🏻" }]}
        />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="asset/face-card-1.jpeg" alt="Face Card" className="avatar" />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Omowunmi Kamiludeen</h1>
      <p>
        Front-end dev bringing the magic to the web. I breathe life into designs
        and obsess over smooth user experiences. When not coding or learning new
        skills, I like to play block games, cook (and eat) or read some code
        articles.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <button style={props.style} className="skill">
        {props.skill[0].name} {props.skill[0].emoji}
      </button>
    </div>
  );
  // Add more skills as needed
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
