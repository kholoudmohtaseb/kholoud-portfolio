import React from 'react';
// import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Language, YouTube } from '@material-ui/icons';


export default {
    name: 'Kholoud  Mohtaseb',
    title: 'Front-end Developer',
    email: 'kholoud.almohtaseb@gmail.com',
    phone: '00972598460888',
    address: 'Palestine',

    contacts: {
        WhatsApp: {
            link: "http://wa.me/00972598460888",
            text: "kholoud Mohtaseb",
            icon: <WhatsAppIcon />
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/kholoud-mohtaseb-25523581/",
            text: "kholoud",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://github.com/kholoudmohtaseb",
            text: "kholoud",
            icon: <GitHubIcon />
        },
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
        Instagram: {
            link: "https://www.instagram.com/",
            text: "kholoud",
            icon: <InstagramIcon />
        }
    },
    about: "I am an entrepreneurial, data-informed and user-focused Product, self motivated & lifelong learner.\n Over the past few years, I worked in various jobs and companies with variety duties and responsibilities, which gave me varied skills and the ability to work with many different types of people so I have strong ability to communicate and work in a team effectively.\nI am not afraid of facing problems so you’ll often find me working on complex problems and looking for solutions.\nI am passionate about everything related to web development. I follow-up on the most recent changes in this field.\nI enjoy speaking about Faith, Science, Tech, Product / Project Management Best Practices.\nI love people, family, art, music, photography, developing, coffee & travel.",
    experiences: [
        {
            title: "Jordan Insurance Company",
            date: "2015 - 2017",
            description: "Insurance Coordinator"
        },
        {
            title: "Palestinian Business Women's Associations (ASALA)",
            date: "2014 - 2015",
            description: "Project Coordinator"
        },
        {
            title: "Ahlia Insurance Company",
            date: "2006 - 2012",
            description: "Insurance Coordinator"
        }
    ],
    education: [
        {
            title: "PLUS COHORT (Full Stack Developper)",
            date: "2021",
            description: "Anera+RBK Software Engineering bootcamp"
        },
        {
            title: "IT Entrepreneurship",
            date: "2013",
            description: "U.S.-Middle East Partnership Initiative (MEPI)"
        },
        {
            title: "BA Computer Science",
            date: "2004",
            description: "Hebron University"
        }
    ],
    services: [
        {
            title: "work1",
            description: "jordan company",
            icon: " "
        },
        {
            title: "work1",
            description: "jordan company",
            icon: " "
        },
        {
            title: "work1",
            description: "jordan company",
            icon: " "
        }
    ],
    skills: [
        {
            title: "Front End",
            description: [
                "ReactJS",
                "JavaScript",
                "TypeScript",
                "HTML/CSS",
                "Bootstrap",
                "Materia UI",
            ],
        },
        {
            title: "Back End",
            description: [
                "NodeJS",
                "Python",
                // "Java"
            ],
        },
        {
            title: "Data Base",
            description: [
                "MongoDB",
                // "Atlas"
            ],
        },
        {
            title: "Source Control",
            description: [
                "GitHub"
            ],
        },
    ],
    projects: [
        {
            tag: "React",
            image: "https://dochub.com/kholoud-almohtaseb/eOLPG9YKjmrkY8QRZpXz6y/servizimg-png",
            title: "SERVIZ",
            caption: "Technology:TypeScript,React-Hooks,Python, Django, Postgress, Css, MaterialUI, BootStrab",
            description: "SERVIZ is a handyman website where you can order handyman from different categories in maintenance and finishing.",
            links: [
                { link: "https://drive.google.com/file/d/13aq1dO_px8P-Vrvg-fAAqxq0L-XxmkFC/view", icon: <YouTube /> },
                { link: "https://github.com/kholoudmohtaseb/serviz", icon: <GitHubIcon /> },
                // { link: "https://www.google.com", icon: <Language /> },
            ],
        },
        {
            tag: "React",
            image: "https://camo.githubusercontent.com/1413812fc2265b9468557d315d31a13750ac1493e747c24d284ac92170cb30cf/68747470733a2f2f692e696d6775722e636f6d2f543657484b67392e706e67",
            title: "LafLefne",
            caption: "Technology:JavsScript,React,NodeJS, Express, MongoDB, Css, MaterialUI",
            description: "Laflefne is local(Palestine) tour booking and viewing website.",
            links: [
                { link: "https://drive.google.com/file/d/1tIFdBd60lQDAI95RGcTA0Kh7L9lGICba/view", icon: <YouTube /> },
                { link: "https://github.com/kholoudmohtaseb/GreenField5", icon: <GitHubIcon /> },
                // { link: "https://www.google.com", icon: <Language /> },
            ],
        },
        {
            tag: "React",
            image: "https://dochub.com/kholoud-almohtaseb/mqNjP3BVWDAj1qYw9yGzLk/fooddose-png",
            title: "FoodDose",
            caption: "Technology:JavsScript,React,NodeJS, Express, MongoDB, Css, MaterialUI",
            description: "FoodDose is an app that allows the user to find a certain meal and the restaurant that offers this meal and give users more details about the restaurant.",
            links: [
                { link: "https://drive.google.com/file/d/1qFsOEHD8TqSC4FMSVHkCTlGv57ixb9kZ/view", icon: <YouTube /> },
                { link: "https://github.com/kholoudmohtaseb/FoodDoseRepo", icon: <GitHubIcon /> },
                // { link: "https://www.google.com", icon: <Language /> },
            ],
        },
    ],
};