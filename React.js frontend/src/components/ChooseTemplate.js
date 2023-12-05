import React, { useState } from "react";
import projecttemplate from "../images/template1.png";
import leetcodetemplate from "../images/leetcodetemplate.png";
import portfoliotemplate from "../images/port.png";
import "../styles/choose.scss";
import { useNavigate, Link } from "react-router-dom";

function ChooseTemplate() {
  const [templates, setTemplates] = useState([
    {
      img: leetcodetemplate,
      redirecturl: "/combinedtemplate",
      title: "Coding profiles portfolio",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="choosetemplatebody">
      <p className="choosetemplateheading">Choose your template</p>
      <div className="templategallery">
        {templates.map((currentTemplate, index) => (
          <div className="container">
            <img src={currentTemplate.img} className="image" />
            <div className="middle">
              <Link to={currentTemplate.redirecturl}>
                <div className="text">{currentTemplate.title}</div>
              </Link>
            </div>
          </div>
        ))}
        <div className="container">
          <img src={projecttemplate} className="image" />
          <div className="middle">
            <a href="http://localhost:3001/resume" target="blank">
              <div className="text">Project and Work based</div>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={portfoliotemplate} className="image" />
          <div className="middle">
            <a href="http://localhost:3001/portfolio" target="blank">
              <div className="text">Portfolio website based</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseTemplate;
