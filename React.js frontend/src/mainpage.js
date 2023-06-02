import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WebScrapingComponent() {

    const [url, setUrl] = useState("")
    const [sent, setSent] = useState(false)

    const sendUrl = async (e) => {
        e.preventDefault()
        setSent(true)

        try {
            const response = await axios.post("http://localhost:4000/gfg", {
                url
            });
            console.log("here", response)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="App">

            {!sent ? (
                <>
                    <h1>Enter Name for File and URL</h1>
                    <form onSubmit={sendUrl} className="form">
                        {/* <input type="text" className="text-input" 
          placeholder="Name you audio here" value={name}
          onChange={(e) => setName(e.target.value)}
           /> */}
                        <input type="text" className="text-input"
                            placeholder="Url goes here" value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button type="submit">Create Audio</button>
                    </form>
                </>
            ) : (
                <h1>Audio Created</h1>

            )}

        </div>

    );
}

export default WebScrapingComponent;
