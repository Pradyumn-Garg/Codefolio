import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import CombinedTemplate from "./components/portfolios/CombinedTemplate";
import ProjectTemplate from "./components/portfolios/ProjectTemplate";
import LeetcodeTemplate from "./components/portfolios/LeetcodeTemplate";
import ChooseTemplate from "./components/ChooseTemplate";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/globalcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/combinedtemplate" element={<CombinedTemplate />} />
          <Route path="/choosetemplate" element={<ChooseTemplate />} />
          <Route path="/projecttemplate" element={<ProjectTemplate />} />
          <Route path="/leetcodetemplate" element={<LeetcodeTemplate />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
