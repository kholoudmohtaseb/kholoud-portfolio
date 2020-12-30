import React from 'react';
import { Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import resumeData from '../utils/resumeData';
import CustomButton from '../button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

// import khImage from '../khImg.jpg';
import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
            {link ? (
                <Typography className='timelineItem_text'>
                    <span>{title}:</span>{" "}
                    <a href={link} target="-blank">
                        {text}
                    </a>
                </Typography>
            ) : (
                    <Typography className='timelineItem-text'>
                        <span>{title}:</span>{text}
                    </Typography>
                )}
        </TimelineContent>
    </TimelineItem>
)


export const Profile = () => {
    return (
        <div className='profile container-shadow'>
            <div className='profile-name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile-image'>
                <img src={require('../../assertImg/khImg.jpg')} alt="" />
            </figure>

            <div className='profile-information'>
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title="Name" text={resumeData.name} />
                    <CustomTimelineItem title="Title" text={resumeData.title} />
                    <CustomTimelineItem title="Email" text={resumeData.email} />
                </CustomTimeline>
                <div className='button-containor' style={{ display: 'flex' }}>
                    <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Profile;