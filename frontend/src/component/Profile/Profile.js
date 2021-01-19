import React from 'react';
import { Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import resumeData from '../../utils/resumeData';
import CustomButton from '../button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';

import khImg from './kh.jpg';
import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline-content'>
            {link ? (
                <Typography className='timelineItem_text'>
                    <span>{title}</span>{" "}
                    <a href={link} target="-blank" >
                        {text}
                    </a>
                </Typography>
            ) : (
                    <Typography className='timelineItem-text'>
                        <span>{title}</span>{text}
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
                {/* <Typography className='title'>{resumeData.title}</Typography> */}
            </div>

            <figure className='profile-image'>
                <img src={khImg} alt="" />
            </figure>

            <div className='profile-information'>
                <CustomTimeline icon={<PersonOutlineOutlinedIcon style={{ color: "black" }} />}>
                    {/* <CustomTimelineItem title="Name" text={resumeData.name} /> */}
                    <CustomTimelineItem title={<WorkSharpIcon />} text={resumeData.title} />
                    <CustomTimelineItem title={<EmailSharpIcon />} text={resumeData.email} />
                    <CustomTimelineItem title={<PhoneIcon />} text={resumeData.phone} />
                    {/* <CustomTimelineItem title="Address" text={resumeData.address} /> */}
                </CustomTimeline>
                <div className='button-containor' style={{ display: 'flex' }}>
                    <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Profile;