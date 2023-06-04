import React, { useState, useRef, useCallback, useEffect, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [gfgdata, setgfgdata] = useState();
    const [leetdata, setleetdata] = useState();
    const [codechefdata, setcodechefdata] = useState();
    const [githubdata, setgithubdata] = useState();
    const [leetuser, setleetuser] = useState();

    const userdata = {
        gfgdata, setgfgdata,
        leetdata, setleetdata,
        codechefdata, setcodechefdata,
        githubdata, setgithubdata,
        leetuser, setleetuser
    };
    return <GlobalContext.Provider value={userdata}>{children}</GlobalContext.Provider>
}