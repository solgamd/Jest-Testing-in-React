import React from 'react';
import './button.css';

function Button({label}){
    return <div data-testid="button" className="btn-style btn">Hi {label}</div>
}

export default Button;