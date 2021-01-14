import React from 'react';
import { Typography } from '@material-ui/core';
import resumeData from '../utils/resumeData';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Typography className="footer-name">{resumeData.name}</Typography>
            </div>

            <div className="footer-right">
                <Typography className="footer-copyright">
                    Dsigned and Developed by{" "}
                    <a href="/" target="_blank">
                        Kholoud Mohtaseb
                    </a>
                    <br />
                    Clone idea from{" "}
                    <a href="https://themeforest.net/user/tavonline" target="_blank">
                        Travonline
                        </a>
                        .
                </Typography>
            </div>
        </div>
    )
}

export default Footer
