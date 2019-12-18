import React from 'react';


function Button({label}){
    return <div data-testid="button" className="btn-style btn">{label}</div>
}

export default Button;