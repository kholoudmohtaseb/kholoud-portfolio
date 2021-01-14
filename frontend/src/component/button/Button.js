import React from 'react';
import { Button } from '@material-ui/core';
import './Button.css';

const CustomButton = ({ text, icon }) => {
    return (
        <Button className='custom-btn' endIcon={icon ? <div className='btn-icon-containor'>{icon}</div> : null}>
            <span className='btn-text'>{text}</span>
        </Button>
    );
};

export default CustomButton;
