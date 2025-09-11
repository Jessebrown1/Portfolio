    import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
    import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

    import skillsImg1 from './assets/html-logo.svg';
    import skillsImg2 from './assets/css-logo.svg';
    import skillsImg3 from './assets/javascript-logo.svg';
    import skillsImg4 from './assets/react-logo.svg';
    import skillsImg5 from './assets/tailwind-css-logo.svg';

    import skillsImg6 from './assets/figma-logo.svg';
    import skillsImg7 from './assets/sketch-logo.svg';
    import skillsImg8 from './assets/adobe-xd-logo.svg';
    import skillsImg9 from './assets/adobe-photoshop-logo.svg';
    import skillsImg10 from './assets/invision-logo.svg';
    import skillImg11 from './assets/skillsImg11.svg'

    import projectImg1 from './assets/project-1.jpg';
    import projectImg2 from './assets/project-2.jpg';
    import projectImg3 from './assets/project-3.jpg';
    import projectImg4 from './assets/project-4.jpg';
    import projectImg5 from './assets/project-5.jpg';


    import Theme1 from './assets/red.png';
    import Theme2 from './assets/blueviolet.png';
    import Theme3 from './assets/blue.png';
    import Theme4 from './assets/magenta.png';
    import Theme5 from './assets/yellowgreen.png';
    import Theme6 from './assets/orange.png';
    import Theme7 from './assets/yellow.png';






            export const links = [
                {
                name: 'Home',
                icon: <FaHome className='nav-icon' />,
                path: '/',
                },
            
                {
                name: 'About',
                icon: <FaUser className='nav-icon' />,
                path: '/about',
                },
            
                {
                name: 'Portfolio',
                icon: <FaFolderOpen className='nav-icon' />,
                path: '/portfolio',
                },
            
                {
                name: 'Contact',
                icon: <FaEnvelopeOpen className='nav-icon' />,
                path: '/contact',
                },
            ];




            export const personalInfo = [
                {
                title: 'First Name : ',
                description: 'Isaac',
                },
            
                {
                title: 'Last Name : ',
                description: 'Bentum',
                },
            
                {
                title: 'Age : ',
                description: '28 Years',
                },
            
                {
                title: 'Nationality : ',
                description: 'Ghanaian',
                },
            
                {
                title: 'Freelance : ',
                description: 'Available',
                },
            
                {
                title: 'Address : ',
                description: 'Accra, Ghana',
                },
            
                {
                title: 'Phone : ',
                description: '+233552384351',
                },
            
                {
                title: 'Email : ',
                description: 'Jnbentum@gmail.com',
                },
            
                {
                title: 'Skype : ',
                description: '...',
                },
            
                {
                title: 'Languages : ',
                description: 'English',
                },
            ];




                export const stats = [
                    {
                    no: '2+',
                    title: 'Years of <br /> Experience',
                    },
                
                    {
                    no: '10+',
                    title: 'Completed <br /> Projects',
                    },
                
                    {
                    no: '6+',
                    title: 'Happy <br /> Customers',
                    },
                
                    {
                    no: '5+',
                    title: ' Technologies <br /> Mastered',
                    },
                ];



                export const skill = [
                    {
                    id: 1,
                    img: skillsImg1,
                    title: 'HTML',
                    level: 'Advanced',
                    category: 'developer',
                    },
                
                    {
                    id: 2,
                    img: skillsImg2,
                    title: 'CSS',
                    level: 'Advanced',
                    category: 'developer',
                    },
                
                    {
                    id: 3,
                    img: skillsImg3,
                    title: 'JavaScript',
                    level: 'Intermediate',
                    category: 'developer',
                    },
                
                    {
                    id: 4,
                    img: skillsImg4,
                    title: 'React',
                    level: 'Intermediate',
                    category: 'developer',
                    },
                
                    {
                    id: 5,
                    img: skillsImg5,
                    title: 'Tailwind',
                    level: 'Intermediate',
                    category: 'developer',
                    },
                
                    {
                    id: 6,
                    img: skillsImg6,
                    title: 'Figma',
                    level: 'Intermediate',
                    category: 'designer',
                    },
                
                
                    {
                    id: 9,
                    img: skillsImg9,
                    title: 'Photoshop',
                    level: 'Intermediate',
                    category: 'designer',
                    },

                    {
                        id: 10,
                        img: skillImg11,
                        title: 'Canva',
                        level: 'Intermediate',
                        category: 'designer',
                        },
                ];


                    export const resume = [
                        {
                            id: 1,
                            category: 'experience',
                            icon: <RiBriefcase4Fill />,
                            year: '2022 - Present',
                            title: 'Frontend Developer <span> Freelance </span>',
                            desc: 'Built modern, responsive websites and web apps for clients and personal projects using React, HTML, CSS, and JavaScript.',
                            },
                    
                            {
                                id: 2,
                                category: 'experience',
                                icon: <RiBriefcase4Fill />,
                                year: '2019 - 2025',
                                title: 'Sales Representative <span> Local Business </span>',
                                desc: 'Worked in sales for 4 years, gaining strong communication, teamwork, and client engagement skills.',
                                },
                    
                                {
                                    id: 3,
                                    category: 'experience',
                                    icon: <RiBriefcase4Fill />,
                                    year: '2023 - 2024',
                                    title: 'Junior Web Designer <span> Self-Learning </span>',
                                    desc: 'Learned web design principles, responsive layouts, and UI/UX fundamentals while building small projects.',
                                },
                    
                        {
                        id: 4,
                        category: 'education',
                        icon: <RiGraduationCapFill />,
                        year: '2019-2023',
                        title: 'Information Technology Diploma <span> Koforidua Technical University </span>',
                        desc: 'Gained a strong foundation in computer systems, IT support, and digital technologies, with exposure to networking, databases, and basic software applications.',
                        },
                    
                        {
                        id: 5,
                        category: 'education',
                        icon: <RiGraduationCapFill />,
                        year: '2024-Present',
                        title: 'Bachelor Degree <span> Ghana Comunication Technology University</span>',
                        desc: 'Developed a strong foundation in programming through Java and C++, gaining problem-solving skills and understanding of software development principles.',
                        },
                    ];


                        export const portfolio = [
                            {
                            id: 1,
                            img: projectImg1,
                            title: 'Estate Website',
                            description:
                                'A responsive real estate website built with React and Tailwind. Features property listings with images, details, and price listings, providing a seamless browsing experience across devices.',
                            skills: [skillsImg4, skillsImg5],
                            link: 'https://estate-neon-seven.vercel.app',
                            },
                        
                            {
                            id: 2,
                            img: projectImg2,
                            title: 'Car Parts Website',
                            description:
                                'An e-commerce platform for buying and selling car spare parts, built with React and Tailwind CSS. Includes product listings with car brand, model, and condition details, along with a clean, responsive UI optimized for fast navigation and usability.',
                            skills: [skillsImg4, skillsImg5],
                            link: 'https://ghautoshopx.vercel.app',
                            },
                        
                        
                            {
                            id: 3,
                            img: projectImg4,
                            title: 'Barbershop Website',
                            description:
                                'A modern barbershop website built with HTML, JavaScript, and Tailwind CSS. Features a booking system for appointments, a gallery of hairstyles, and an intuitive layout that ensures easy navigation for clients.',
                            skills: [skillsImg1, skillsImg3, skillsImg5],
                            link: 'https://barber-shop-henna.vercel.app/clone.html',
                            },
                        
                            {
                            id: 4,
                            img: projectImg5,
                            title: 'NGO Website',
                            description:
                                'A clean and informative NGO website designed with HTML, JavaScript, CSS. Built to showcase the organization’s mission, welfare projects, and impact, with responsive layouts and easy navigation for donors and volunteers.',
                            skills: [skillsImg1, skillsImg2, skillsImg3],
                            link: 'https://ngo-jade.vercel.app',
                            },
                        ];


                            export const themes = [
                                {
                                img: Theme1,
                                hue: '4',
                                },
                            
                                {
                                img: Theme2,
                                hue: '271',
                                },
                            
                                {
                                img: Theme3,
                                hue: '225',
                                },
                            
                                {
                                img: Theme4,
                                hue: '339',
                                },
                            
                                {
                                img: Theme5,
                                hue: '80',
                                },
                            
                                {
                                img: Theme6,
                                hue: '19',
                                },
                            
                                {
                                img: Theme7,
                                hue: '42',
                                },
                            ];
                            