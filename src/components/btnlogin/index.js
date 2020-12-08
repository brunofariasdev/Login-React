import React from 'react';
import "./style.css";

function BtnLogin(props) {
    const type = props.type;
    return(
        <button 
            className={`${type === "foco" ? "btnColor1" : "btnColor2"} btnLogin`}
        >
            {props.txt}
        </button>
    );
}

export default BtnLogin;