import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Image from 'mui-image'
import loginimg from './loginimg.png'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from './context/globalcontext';
import './styles/login.scss'

function WebScrapingComponent() {

    const [gfgurl, setGfgurl] = useState("")
    const [leetcodeusername, setLeetcodeusername] = useState("")
    const [codechefurl, setCodechefurl] = useState("")
    const [githuburl, setGithuburl] = useState("")
    const navigate = useNavigate();

    const [gfgack, setgfgack] = useState(false)
    const [githuback, setgithuback] = useState(false)
    const [codechefack, setcodechefack] = useState(false)
    const [leetcodeack, setleetcodeack] = useState(false)
    const [sent, setsent] = useState(false)

    const {
        gfgdata, setgfgdata,
        leetdata, setleetdata,
        codechefdata, setcodechefdata,
        githubdata, setgithubdata
    } = useContext(GlobalContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        setsent(true);
        sendleetcodeurl();
        sendCodechefurl();
        sendGithuburl();
        sendGfgurl();
    }

    const sendleetcodeurl = async () => {
        try {
            const response = await axios.get('https://leetcode-stats-api.herokuapp.com/' + leetcodeusername);
            // console.log("leetcode here", response.data)
            setleetdata(response.data)
            setleetcodeack(true);
        } catch (error) {
            console.log(error)
        }
    }

    const sendCodechefurl = async () => {
        try {
            const response = await axios.post("http://localhost:4000/codechef", {
                codechefurl
            });
            // console.log("codechef here", response.data)
            setcodechefdata(response.data)
            setcodechefack(true);
        }
        catch (error) {
            console.log(error)
        }
    }

    const sendGithuburl = async () => {
        try {
            const response = await axios.get('https://api.github.com/users/' + githuburl);
            // console.log("Github here", response.data)
            setgithubdata(response.data)
            setgithuback(true)
        } catch (error) {
            console.log(error)
        }
    }

    const sendGfgurl = async () => {
        try {
            const response = await axios.post("http://localhost:4000/gfg", {
                gfgurl
            });
            // console.log("gfg here", response.data)
            setgfgdata(response.data)
            setgfgack(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // gfgack && githuback && codechefack && leetcodeack
        if (githuback) {
            navigate('/home');
        }
    }, [gfgack, githuback, codechefack, leetcodeack]);

    return (
        <div className="App">

            <Box className="box">
                <img className="img" src={loginimg} />

                <Box className="formbox">
                    <h1 style={{ textAlign: "center", color: "#ffffff", fontSize: "25px", marginTop: "30px", marginBottom: "15px" }}>Codefolio</h1>
                    <form onSubmit={handlesubmit} className="form">
                        <input type="text" className="text-input"
                            placeholder="Leetcode Username" value={leetcodeusername}
                            onChange={(e) => setLeetcodeusername(e.target.value)}
                        />
                        <input type="text" className="text-input"
                            placeholder="Codechef Username" value={codechefurl}
                            onChange={(e) => setCodechefurl(e.target.value)}
                        />
                        <input type="text" className="text-input"
                            placeholder="Github Username" value={githuburl}
                            onChange={(e) => setGithuburl(e.target.value)}
                        />
                        <input type="text" className="text-input"
                            placeholder="GfG Username" value={gfgurl}
                            onChange={(e) => setGfgurl(e.target.value)}
                        />
                        {!sent ? (
                            <button type="submit" className="btn">Create Portfolio</button>
                        ) : (
                            <CircularProgress style={{ marginLeft: "120px", color: 'white' }} />
                        )}
                    </form>
                </Box>
            </Box>
        </div>
    );
}

export default WebScrapingComponent;
