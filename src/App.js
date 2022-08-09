import React, { useState } from "react";
import "./App.css";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import { useTransition, animated, config } from "@react-spring/web";
function App() {
    const [toggle, setToggle] = useState(true);
    const transitions = useTransition(toggle, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: toggle,
        delay: 200,
        config: config.molasses,
        onRest: () => setToggle(!toggle),
    });

    const handleToggle = () => setToggle((prev) => !prev);

    return (
        <>
            <div className="App d-flex justify-content-center">
                <div className="row mx-0">
                    <div
                        className="col-6"
                        style={{
                            width: "400px",
                            height: "500px",
                            backgroundColor: "white",
                        }}
                    >
                        A
                    </div>
                    <div
                        className="col-6"
                        style={{
                            width: "400px",
                            height: "500px",
                            backgroundColor: "white",
                        }}
                    >
                        {toggle ? (
                            <Component1></Component1>
                        ) : (
                            <Component2></Component2>
                        )}
                    </div>
                </div>
            </div>
            <div className="row mx-0">
                <button onClick={() => handleToggle()}>Switch</button>
            </div>
        </>
    );
}

export default App;
