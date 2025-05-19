import React, { useState } from "react";

const App = () => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [seconds, setSeconds] = useState(0);

    const setCookieFunction = (name, value, seconds) => {
        let expires = "";
        if (seconds) {
            const date = new Date();
            date.setTime(date.getTime() + seconds * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/"; //---> "token=token_value; expires=Mon, 01 Jan 2026 00:00:00 UTC; path=/"
        setMessage(`Cookie set: ${name} = ${value} (expires in ${seconds} seconds)`);
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    };

    const updateCookie = () => {
        if (!seconds) {
            setMessage("Please enter the number of seconds for the cookie expiration.");
            return;
        }
        setCookieFunction("token", username, seconds);
    };

    const displayCookie = () => {
        const customCookie = getCookie("token");
        if (customCookie) {
            setMessage(`Retrieved Cookie Value: ${customCookie}`);
        } else {
            setMessage('No cookie found with the name "token".');
        }
    };

    return (
        <div>
            <h2>Setting and Accessing Cookies in ReactJS</h2>
            <div>
                <span>Enter Value: </span>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter cookie value"
                />
                <br />
                <br />
                <span>Enter Expiration Time (in seconds): </span>
                <input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    placeholder="Enter expiration time in seconds"
                />
                <br /> <br />
                <button onClick={updateCookie}>Set/Update Cookie</button>
                <button onClick={displayCookie}>Retrieve Cookie</button>
                <br />
                <span style={{ fontWeight: "bold", color: "red" }}>
                    {message}
                </span>
            </div>
        </div>
    );
};

export default App;