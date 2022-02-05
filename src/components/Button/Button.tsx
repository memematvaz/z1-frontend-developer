import React from 'react';
import './Button.scss';

const Button: React.FC < {label: string, onClick: Function}> = (props) => {
    const { label } = props;


    return(    
        <button className="button" >
            {label}
        </button>
    )
}

export default Button;