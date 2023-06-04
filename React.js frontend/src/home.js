import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Image from 'mui-image'
import loginimg from './loginimg.png'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from './context/globalcontext';
import './styles/home.scss'

// window.location.href = '/';

function HomeComponent() {
    const {
        gfgdata, setgfgdata,
        leetdata, setleetdata,
        codechefdata, setcodechefdata,
        githubdata, setgithubdata
    } = useContext(GlobalContext);

    return (
        <div className='mainpage'>
            {/* {console.log("gfg", gfgdata)}
            {console.log("leet", leetdata)}
            {console.log("codec", codechefdata)}
            {console.log("git", githubdata)} */}
            <Box className='bluebg'>
            <img className="userimage" src={githubdata.avatar_url} />
            <h1 className='username'> {githubdata.name}</h1>
            <hr style={{width:"75%"}}></hr>
            <h4 className='bio'>Bio</h4>
            <p className='biopara'>{githubdata.bio}</p>
            <hr style={{width:"75%"}}></hr>
            <h4 className='contact'>Contact</h4>
            <a> Location: {githubdata.location}</a><br/>
            <a> Github: {githubdata.html_url}</a><br/>
            <a> Twitter: {githubdata.twitter_username}</a><br/>
            <a> Public Repositories: {githubdata.public_repos}</a>
            <hr style={{width:"75%"}}></hr>
            <h4 className='company'>Company</h4>
            <a> {githubdata.company}</a>
            </Box>
        </div>
    );
}

export default HomeComponent;
