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
        <SkillList />
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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" emoji="💪" color="#1a53ff" />
      <Skill name="JavaScript" emoji="🔥" color="#ffd11a" />
      <Skill name="Web Design" emoji="💪" color="#bdc99c" />
      <Skill name="Git and GitHub" emoji="👍" color="#cc0000" />
      <Skill name="React" emoji="💥" color="#66c2ff" />
      <Skill name="Graphics Design" emoji="🥰" color="#ff5e1a" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
