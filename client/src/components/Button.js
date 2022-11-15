import React from "react";
import './button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES =['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type,  
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)?buttonSize : SIZES[0]

    return(
        <link to='/sign-up' className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onclick}
            type={type}
            >
                {children}
            </button>

            <Button>sign up</Button>
        </link>
    )
};
