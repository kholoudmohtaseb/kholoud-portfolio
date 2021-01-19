import React from 'react';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import "./About.css";

import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CustomButton from '../../component/button/Button';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomTimeline, { CustomTimelineSeparator } from '../../component/Timeline/Timeline';
import TimelineDot from '@material-ui/lab/TimelineDot';

const About = () => {
    return (
        <>
            {/* About me */}
            <Grid container className="section pb-45 pt-45">
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className="section-title-text">About Me</h6>
                </Grid>
                <Grid item xs={12}><br></br>
                    <Typography variant='body2' className="aboutme-text">{resumeData.about}
                    </Typography>
                </Grid>
            </Grid>





            {/* Contact */}
            {/* <Grid container spacing={6} className="section pt-45 pb-45"> */}
            {/* Contact form  */}
            {/* <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className="section-title mb-30">
                            <span></span>
                            <h6 className="section-title-text">Contact Form</h6>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='Email' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text="Submit" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}

            {/* Contact Information */}
            {/* <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section-title mb-30">
                            <span></span>
                            <h6 className="section-title-text">Contact Information</h6>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo-item'>
                                        <span>Adress: </span>{resumeData.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo-item'>
                                        <span>Phone: </span>{resumeData.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo-item'>
                                        <span>Email: </span>{resumeData.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className='contactInfo-socialsContainer'>
                                {Object.keys(resumeData.socials).map((key) => (
                                    <Grid item className='contactInfo-social'>
                                        <a href={resumeData.socials[key].link}>
                                            {resumeData.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}

        </>

    )
}

export default About;
