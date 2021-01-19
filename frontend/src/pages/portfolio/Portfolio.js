import React, { useState } from 'react';
import { Grid, Tabs, Tab, Grow, Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import './Portfolio.css';
import resumeData from '../../utils/resumeData';


const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container spacing={1} className='section pb-45 pt-45'>
            {/* Title  */}
            <Grid item className='section-title mb-20'>
                <span></span>
                <h6 className="section-title-text">Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue}
                    indicatorColor='white'
                    className='customTabs'
                    onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label="All" value="All"
                        className={tabValue === "All" ? "customTabs-item active" : "customTabs-item"} />

                    {[...new Set(resumeData.projects.map((item) => item.tag))].map(
                        (tag) => (
                            <Tab
                                label={tag}
                                value={tag}
                                className={tabValue === tag ? "customTabs-item active" : "customTabs-item"} />
                        )
                    )}
                </Tabs>
            </Grid>

            {/* Projects  */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {resumeData.projects.map((project) => (
                        <>
                            {tabValue === project.tag || tabValue === 'All' ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card className='custumCard'
                                            onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className='custumCard-image'
                                                    image={project.image}
                                                    title={project.title} />
                                                <CardContent>
                                                    <Typography className='custumCard-title' variant='body2'>{project.title}</Typography>
                                                    <Typography className='custumCard-caption' variant='body2'>{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Grid>

            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}
                className="projectDialog"
                fullWidth>
                <DialogTitle onClose={() => setProjectDialog(false)}>
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt="" className="projectDialog-image" />
                <DialogContent>
                    <Typography className="projectDialog-description">{projectDialog.description}</Typography>
                </DialogContent>
                <DialogActions className="projectDialog-actions">
                    {projectDialog?.links?.map((link) => (
                        <a href={link.link} target="_blank" className="projectDialog-icon">
                            {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Portfolio
