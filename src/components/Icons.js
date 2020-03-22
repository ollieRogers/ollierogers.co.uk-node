import React from "react";

export const Icons = () => {
  return (
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/ollie_rogers"
          target="_blank"
          rel="noopener noreferrer"
          className="icon fa-twitter"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ollieRogers"
          target="_blank"
          rel="noopener noreferrer"
          className="icon fa-github"
        >
          <span className="label">Github</span>
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/ollieRogers/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon fa-codepen"
        >
          <span className="label">Codepen</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ollierogers/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon fa-linkedin"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="mailto:ollie.rog@gmail.com" className="icon fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  );
};

export default Icons;
