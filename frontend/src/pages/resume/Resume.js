import React from 'react';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import "./Resume.css";

import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CustomButton from '../../component/button/Button';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomTimeline, { CustomTimelineSeparator } from '../../component/Timeline/Timeline';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Resume = () => {
    return (
        <>
            {/* Education & Experiences */}
            <Grid container className="section pb-45 pt-45">
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className="section-title-text">Resume</h6>
                </Grid>
                <Grid item xs={12}><br></br>
                    <Grid container className='resume-timeline'>

                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Work Experience' icon={<WorkOutlineIcon style={{ color: "black" }} />}>
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline-content'>
                                            <Typography className="timeline-title">
                                                {experience.title}
                                            </Typography>
                                            <Typography variant='caption' className="timeline-date">
                                                {experience.date}
                                            </Typography>
                                            <Typography variant='body2' className="timeline-description">
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education  */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Education' icon={<SchoolOutlinedIcon style={{ color: "black" }} />}>
                                {resumeData.education.map((education) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline-content'>
                                            <Typography className="timeline-title">
                                                {education.title}
                                            </Typography>
                                            <Typography variant='caption' className="timeline-date">
                                                {education.date}
                                            </Typography>
                                            <Typography variant='body2' className="timeline-description">
                                                {education.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            {/* <Grid container className="section Pb-45">
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className="section-title-text">My Skills</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-around">
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <icon className="service-icon">{service.icon}</icon>
                                    <Typography className="service-title" variant="h6">
                                        {service.title}
                                    </Typography>
                                    <Typography className="service-description" variant="body2">
                                        {service.description}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid> */}

            {/* Skills */}
            <Grid container className="section graybg pb-45 p-50">
                <Grid item className="section-title mb-30">
                    <span></span>
                    <h6 className="section-title-text">My Skills</h6>
                </Grid><br></br>
                <Grid item xs={12}><br></br>
                    <Grid container spacing={3} justify="space-between">
                        {resumeData.skills.map((skill) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={0} className="skill">
                                    <Typography className="skill-title" variant="h6">
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map((element) => (
                                        <Typography className="skill-description" variant="body2">
                                            <TimelineDot variant={'outlined'} className="timeline-dot" />
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume;
