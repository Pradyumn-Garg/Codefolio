import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Image from "mui-image";
import loginimg from "../../images/loginimg.png";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalcontext";
import "hammerjs";
import CanvasJSReact from "@canvasjs/react-charts";
import "../../styles/projecttemplate.scss";
import { PieChart, Pie, Legend } from "recharts";

function ProjectTemplate() {
  const { githubdata, setgithubdata } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-start">
      <button
        id="downloadBtn"
        className="bg-gray-700 ml-500 p-3 mt-3 text-white font-semibold"
      >
        Download as PDF
      </button>
      <div
        className="flex items-center justify-center mt-3 w-4/5 m-auto h-fit"
        id="resume"
      >
        <div className="bg-gray-800 w-2/5 p-10 h-screen">
          <div className="flex items-center justify-center mb-10 flex-col">
            <img
              src={githubdata.avatar_url}
              alt=""
              className="rounded-full w-32 border-2 border-gray-300"
            />

            <h1 className="text-white text-lg font-bold tracking-widest">
              {githubdata.name}
            </h1>
          </div>
          <hr className="my-5" />
          <h1 className="text-white uppercase tracking-widest text-lg font-bold">
            Contact
          </h1>

          <h1 className="text-white text-sm flex">
            <p className="font-bold">Location :</p>
            {githubdata.location}
          </h1>
          <h1 className="text-white text-sm flex">
            <p className="font-bold">Twitter :</p>
            {githubdata.twitter_username}
          </h1>
          <h1 className="text-white text-sm flex">
            <p className="font-bold">Github :</p>
            {githubdata.html_url}
          </h1>
          <h1 className="text-white text-sm flex">
            <p className="font-bold">Portfolio :</p>
            {githubdata.blog}
          </h1>
          <h1 className="text-white text-sm flex">
            <p className="font-bold">Public Projects :</p>
            {githubdata.public_repos}
          </h1>

          <hr className="my-5" />
          <h1 className="text-white mt-2 uppercase tracking-widest text-lg font-bold">
            BIO
          </h1>
          <h1 className="text-white text-sm flex"> {githubdata.bio}</h1>

          <hr className="my-5" />

          <h1 className="text-white mt-2 uppercase tracking-widest text-lg font-bold">
            COMPANY
          </h1>

          <h1 className="text-white text-sm flex"> {githubdata.company}</h1>
        </div>

        <div className="bg-white w-7/12 p-10 h-auto">
          <h1 className="font-bold uppercase tracking-wider my-6 text-xl">
            Projects
          </h1>

          {/* <ul className="list-disc ml-5 text-black">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="mb-4">
                <h1 className="text-gray-800 font-semibold mt-3">
                  {starred[i]?.name}
                </h1>
                <li>{starred[i]?.html_url}</li>
                <li>{starred[i]?.description}</li>
                <li>{starred[i]?.language}</li>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
