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
import "../../styles/home.scss";
import { PieChart, Pie, Legend } from "recharts";

function CombinedTemplate() {
  const {
    gfgdata,
    setgfgdata,
    leetdata,
    setleetdata,
    codechefdata,
    setcodechefdata,
    githubdata,
    setgithubdata,
    leetuser,
    setleetuser,
  } = useContext(GlobalContext);

  const gfgques = [
    { name: "School", students: parseInt(gfgdata.schoolct), fill: "#0088FE" },
    { name: "Basic", students: parseInt(gfgdata.basicct), fill: "#00C49F" },
    { name: "Easy", students: parseInt(gfgdata.easyct), fill: "#FFBB28" },
    { name: "medium", students: parseInt(gfgdata.mediumct), fill: "#FF8042" },
    { name: "Hard", students: parseInt(gfgdata.hardct), fill: "red" },
  ];
  const codechefques = [
    {
      name: "Fully Solved Problems",
      students: parseInt(codechefdata.fprob),
      fill: "#2D5F2E",
    },
    {
      name: "Partially Solved Problems",
      students: parseInt(codechefdata.pprob),
      fill: "#101920",
    },
  ];
  const leeteasy = [
    {
      name: "Easy solved",
      students: parseInt(leetdata.easySolved),
      fill: "#F99B1F",
    },
    {
      name: "Easy remaining",
      students: parseInt(leetdata.totalEasy) - parseInt(leetdata.easySolved),
      fill: "#101920",
    },
  ];
  const leetmedium = [
    {
      name: "Medium solved",
      students: parseInt(leetdata.mediumSolved),
      fill: "#61B146",
    },
    {
      name: "Medium remaining",
      students:
        parseInt(leetdata.totalMedium) - parseInt(leetdata.mediumSolved),
      fill: "#2D5F2E",
    },
  ];
  const leethard = [
    {
      name: "Hard solved",
      students: parseInt(leetdata.hardSolved),
      fill: "#949FA1",
    },
    {
      name: "Hard remaining",
      students: parseInt(leetdata.totalHard) - parseInt(leetdata.hardSolved),
      fill: "#FF6E41",
    },
  ];
  const leettotal = [
    {
      name: "Total solved",
      students: parseInt(leetdata.totalSolved),
      fill: "#782048",
    },
    {
      name: "Total remaining",
      students:
        parseInt(leetdata.totalQuestions) - parseInt(leetdata.totalSolved),
      fill: "#1D2860",
    },
  ];
  const leetques = [
    {
      name: "Easy solved",
      students: parseInt(leetdata.easySolved),
      fill: "#F99B1F",
    },
    {
      name: "Medium solved",
      students: parseInt(leetdata.mediumSolved),
      fill: "#949FA1",
    },
    {
      name: "Hard solved",
      students: parseInt(leetdata.hardSolved),
      fill: "#312D2E",
    },
  ];

  return (
    <div className="mainpage">
      <Box className="githubdet">
        <img className="userimage" src={githubdata.avatar_url} />
        <h1 className="username"> {githubdata.name}</h1>
        <hr style={{ width: "75%" }}></hr>
        <h4 className="bio">Bio</h4>
        <p className="biopara">{githubdata.bio}</p>
        <hr style={{ width: "75%" }}></hr>
        <h4 className="contact">Contact</h4>
        <a> Location: {githubdata.location}</a>
        <br />
        <a> Github: {githubdata.html_url}</a>
        <br />
        <a> Twitter: {githubdata.twitter_username}</a>
        <br />
        <a> Public Repositories: {githubdata.public_repos}</a>
        <hr style={{ width: "75%" }}></hr>
        <h4 className="company">Company</h4>
        <a> {githubdata.company}</a>
      </Box>
      <Box className="codingdatabox">
        <Button
          className="dwnbtn"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Download PDF
        </Button>
        <Button
          className="logoutbtn"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          Logout
        </Button>
        <Box className="gfg">
          <h1
            style={{
              marginLeft: "30px",
              marginTop: "28px",
              fontFamily: "Georgia",
            }}
          >
            GeeksforGeeks
          </h1>
          <div style={{ display: "inline-grid" }}>
            <a>
              {" "}
              <b>
                <a
                  style={{
                    fontFamily: "monospace",
                    fontSize: "17px",
                    marginLeft: "33px",
                  }}
                >
                  Username:
                </a>
              </b>{" "}
              {gfgdata.username}
            </a>
            <ul className="custom-list">
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Institute:{" "}
                    </a>
                  </b>{" "}
                  {gfgdata.institute}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Institute Rank:{" "}
                    </a>
                  </b>{" "}
                  {gfgdata.rank}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Overall Coding Score:{" "}
                    </a>
                  </b>{" "}
                  {gfgdata.score}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Total Problems Solved:{" "}
                    </a>
                  </b>{" "}
                  {gfgdata.totalct}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Streak:{" "}
                    </a>
                  </b>{" "}
                  {gfgdata.streak}
                </a>
              </li>
            </ul>
          </div>

          <PieChart width={500} height={400}>
            <Legend layout="vertical" verticalAlign="middle" align="right" />
            <Pie
              data={gfgques}
              dataKey="students"
              label="students"
              outerRadius={105}
              innerRadius={50}
            />
          </PieChart>
        </Box>

        <Box className="leetcode">
          <h1
            style={{
              marginLeft: "30px",
              marginTop: "28px",
              fontFamily: "Georgia",
            }}
          >
            LeetCode
          </h1>
          <div style={{ display: "inline-grid" }}>
            <a>
              {" "}
              <b>
                <a
                  style={{
                    fontFamily: "monospace",
                    fontSize: "17px",
                    marginLeft: "33px",
                  }}
                >
                  Username:
                </a>
              </b>{" "}
              {leetuser}
            </a>
            <ul className="custom-list">
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Ranking:{" "}
                    </a>
                  </b>{" "}
                  {leetdata.ranking}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Reputation:{" "}
                    </a>
                  </b>{" "}
                  {leetdata.reputation}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Acceptance Rate:{" "}
                    </a>
                  </b>{" "}
                  {leetdata.acceptanceRate}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Contribution Points:{" "}
                    </a>
                  </b>{" "}
                  {leetdata.contributionPoints}
                </a>
              </li>
            </ul>
          </div>
          <div className="leetcharts">
            <PieChart width={300} height={150}>
              <Legend layout="vertical" verticalAlign="middle" align="right" />
              <Pie
                data={leeteasy}
                dataKey="students"
                label="students"
                outerRadius={50}
                innerRadius={20}
              />
            </PieChart>
            <PieChart width={300} height={150}>
              <Legend layout="vertical" verticalAlign="middle" align="right" />
              <Pie
                data={leetmedium}
                dataKey="students"
                label="students"
                outerRadius={50}
                innerRadius={20}
              />
            </PieChart>
            <PieChart width={300} height={150}>
              <Legend layout="vertical" verticalAlign="middle" align="right" />
              <Pie
                data={leethard}
                dataKey="students"
                label="students"
                outerRadius={50}
                innerRadius={20}
              />
            </PieChart>
            <PieChart width={300} height={150}>
              <Legend layout="vertical" verticalAlign="middle" align="right" />
              <Pie
                data={leettotal}
                dataKey="students"
                label="students"
                outerRadius={50}
                innerRadius={20}
              />
            </PieChart>
          </div>
          <div className="leetchart2">
            <PieChart width={400} height={350}>
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="right"
              />
              <Pie
                data={leetques}
                dataKey="students"
                label="students"
                outerRadius={105}
                innerRadius={20}
              />
            </PieChart>
          </div>
        </Box>

        <Box className="codechef">
          <h1
            style={{
              marginLeft: "30px",
              marginTop: "28px",
              fontFamily: "Georgia",
            }}
          >
            CodeChef
          </h1>
          <div style={{ display: "inline-grid" }}>
            <a>
              {" "}
              <b>
                <a
                  style={{
                    fontFamily: "monospace",
                    fontSize: "17px",
                    marginLeft: "33px",
                  }}
                >
                  Username:
                </a>
              </b>{" "}
              {codechefdata.username}
            </a>
            <ul className="custom-list">
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Div:{" "}
                    </a>
                  </b>{" "}
                  {codechefdata.divi}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Current Rating:{" "}
                    </a>
                  </b>{" "}
                  {codechefdata.rating}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Highest Rating:{" "}
                    </a>
                  </b>{" "}
                  {codechefdata.highestrating}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Global Rank:{" "}
                    </a>
                  </b>{" "}
                  {codechefdata.grank}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Country Rank:{" "}
                    </a>
                  </b>{" "}
                  {codechefdata.crank}
                </a>
              </li>
              <li>
                <a style={{ fontFamily: "Gill Sans" }}>
                  {" "}
                  <b>
                    <a style={{ fontFamily: "Hoefler TexT", fontSize: "17px" }}>
                      Contests Participated:{" "}
                    </a>
                  </b>{" "}
                  {codechefdata.contestc}
                </a>
              </li>
            </ul>
          </div>

          <PieChart width={650} height={400}>
            <Legend layout="vertical" verticalAlign="middle" align="right" />
            <Pie
              data={codechefques}
              dataKey="students"
              label="students"
              outerRadius={105}
              innerRadius={50}
            />
          </PieChart>
        </Box>
      </Box>
    </div>
  );
}

export default CombinedTemplate;
