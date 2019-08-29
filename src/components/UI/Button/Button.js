import React from 'react';

const Button = (props) => {
    return (
        <button
            className={`btn 
            ${props.size ? 'btn-' + props.size : ''}
            ${props.variant}
            ${props.outline ? '--outline' : ''} `}>
            {props.children}
        </button>
    )
}

export default Button;