// The list of projects that I have worked on
import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 1,
        name: 'Code Quiz Game',
        description: 'A timed quiz on JavaScript fundamentals that stores high scores',
        image: './assets/images/Code-Quiz-Repo.png',
        live : 'https://dtjones23.github.io/Code-Quiz-Repo/',
        repo : 'https://github.com/dtjones23/Code-Quiz-Repo?tab=readme-ov-file'
    },
    {
        id: 2,
        name: 'NoSQL Social-Network-API',
        description: 'An API for a social network web application where users can share their thoughts, react to friends` thoughts, and create a friend list',
        image: './assets/images/NoSQL-Social-Network-API.png',
        live : '',
        repo : 'https://github.com/dtjones23/NoSQL-SocialNetworkAPI'
    },
    {
        id: 3,
        name: 'Primary Games',
        description: 'A digital game-link center that grants users the ability to browse across video games. Users can search for games by name, genre, or platform. Users can also create an account and save games to their profile.',
        image: './assets/images/Primary-Games.png',
        live : 'https://primary-games-app3-6a2841bf5a98.herokuapp.com/',
        repo : 'https://github.com/dtjones23/Primary-Games?tab=readme-ov-file'
    },
    {
        id: 4,
        name: 'SQL Business Tracker',
        description: 'A command-line application that allows the user to view and manage departments, roles, and employees in a company',
        image: './assets/images/SQL-Business-Tracker.png',
        live : '',
        repo : 'https://github.com/dtjones23/SQL-Business-Tracker'
    },
    {
        id: 5,
        name: 'Weather Dashboard',
        description: 'A weather dashboard that allows the user to search for a city and view the current weather and a 5-day forecast',
        image: './assets/images/Weather-Dashboard.png',
        live : 'https://dtjones23.github.io/Weather-Dashboard/',
        repo : 'https://github.com/dtjones23/Weather-Dashboard'
    },
    {
        id: 6,
        name: 'Work Day Scheduler',
        description: 'A simple calendar application that allows the user to save events for each hour of the day',
        image: './assets/images/Work-Day-Scheduler.png',
        live : 'https://dtjones23.github.io/Day-Planning-Calender/',
        repo : 'https://github.com/dtjones23/Day-Planning-Calender'
    }
]

// function ProjectInfo() {
//     // will return the list of projects
//     return (
//         <div>
//             <h2>Projects</h2>
//             <div className="row">
//                 {projects.map(project => (
//                     <Project
//                         id={project.id}
//                         name={project.name}
//                         description={project.description}
//                         image={project.image}
//                         live={project.live}
//                         repo={project.repo}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }