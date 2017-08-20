import { h } from "preact";

const Experience = ({ name, link, description, tag }) =>
  <div className={tag}>
    <div className="main__experience-title">
      <a href={link}>
        {name}
      </a>
    </div>
    <div className="main__experience-description">
      {description}
    </div>
  </div>;

export default Experience;
