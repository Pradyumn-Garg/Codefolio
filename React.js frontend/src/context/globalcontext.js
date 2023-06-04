import React, { useState, useRef, useCallback, useEffect, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [gfgdata, setgfgdata] = useState();
    const [leetdata, setleetdata] = useState();
    const [codechefdata, setcodechefdata] = useState();
    const [githubdata, setgithubdata] = useState();

    const userdata = {
        gfgdata, setgfgdata,
        leetdata, setleetdata,
        codechefdata, setcodechefdata,
        githubdata, setgithubdata
    };
    return <GlobalContext.Provider value={userdata}>{children}</GlobalContext.Provider>
}