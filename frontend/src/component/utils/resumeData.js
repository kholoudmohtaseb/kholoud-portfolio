import React from 'react';
// import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
    name: 'Kholoud Mohtaseb',
    title: 'Full stack developer',
    email: 'kholoud.almohtaseb@gmail.com',
    mobile: '00972598460888',

    socials: {
        Facebook: {
            link: "https://www.facebook.com/",
            text: "kholoud Mohtaseb",
            icon: <FacebookIcon />
        },
        Twitter: {
            link: "https://www.twitter.com/",
            text: "kholoud",
            icon: <TwitterIcon />
        },
        LinkedIn: {
            link: "https://www.linkedin.com/",
            text: "kholoud",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://www.github.com/",
            text: "kholoud",
            icon: <GitHubIcon />
        }
    }
}