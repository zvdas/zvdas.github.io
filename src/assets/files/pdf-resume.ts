import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Alignment, Decoration, Margins, UnorderedListType } from 'pdfmake/interfaces';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export function PdfResume() {
    let docDefinition = {
        header: [
            /*
            {
                style: 'titleMain',
                text: 'Judeson Brian Caleb Rodriguez',
            },
            */
        ],
        content: [
            {
                style: 'titleMain',
                text: 'Judeson Brian Caleb Rodriguez',
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Career Objective',
            },
            {
                text: `Have gained good exposure to understand various aspects of Web Development through
                 Master's Program which has developed a great sense of confidence at a very personal level.
                 Hence, I seek a challenging position in the area of Web Development, Hosting (DevOps) & related
                 fields where I can share my skills and expand my capabilities further in the pursuit of
                 progressive career advancement.`,
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Projects',
            },
            {
                ul: [
                    'Angular',
                    {
                        ul:
                        [
                            {
                                listType: 'circle' as UnorderedListType,
                                decoration: 'underline' as Decoration,
                                text: 'Online Test Application',
                            },
                            {
                                listType: 'none' as UnorderedListType,
                                text:
                                `The Online Test Application enables users to provide online tests, review them, and
                                display the results. (Angular Application with JSON server for serving fake APIs)
                                GitHub URL containing project files : https://github.com/zvdas/OnlineTestApp`,
                            },
                        ]
                    },
                    'React',
                    {
                        ul:
                        [
                            {
                                listType: 'circle' as UnorderedListType,
                                decoration: 'underline' as Decoration,
                                text: 'Event Finder Application',
                            },
                            {
                                listType: 'none' as UnorderedListType,
                                text:
                                `The Event Finder App allows users to view and promote upcoming events. (React
                                Application with JSON server for serving fake APIs & Redux for state management)
                                GitHub URL containing project files : https://github.com/zvdas/EventFinderApp`,
                            },
                        ]
                    },
                    'Node',
                    {
                        ul:
                        [
                            {
                                listType: 'circle' as UnorderedListType,
                                decoration: 'underline' as Decoration,
                                text: 'Learning Management System',
                            },
                            {
                                listType: 'none' as UnorderedListType,
                                text:
                                `The Learning Management System allows users to monitor and customize the
                                registration processes of e-learning curriculum, upload and manage documents
                                containing curricular content, deliver course content over web-based interfaces
                                (desktops, phones or tablets), create and publish course schedules, deadlines and tests
                                & create new courses and register the students. (Node.js with Express and MongoDB
                                serving as database)
                                GitHub URL containing project files :
                                https://github.com/zvdas/LearningManagementSystem`,
                            },
                        ]
                    },
                ]
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Skills',
            },
            "Self-Learning from Online Courses",
            {
                ul:
                [
                    {
                        decoration: 'underline' as Decoration,
                        text: 'Udemy',
                    },
                    {
                        type: 'circle' as UnorderedListType,
                        ul: [
                            'CorelDRAW',
                            'Photoshop',
                        ]
                    },
                    {
                        decoration: 'underline' as Decoration,
                        text: 'Simplilearn Certified',
                    },
                    {
                        type: 'circle' as UnorderedListType,
                        ul: [
                            'MEAN Stack Training (MongoDB, Express, Angular, React & NodeJS)',
                            'Cloud Architectures (AWS, Azure)',
                            'DevOps Training (Git, GitHub, CI/CD with Jenkins, Kubernetes)',
                            'Dashboarding (Excel, Tableau)',
                            'Data Science with Python',
                        ]
                    },
                ]
            },
            '\n',
            {
                style: 'titleSecondary',
                text: 'Work Experience',
            },
            {
                ul:
                [
                    {
                        decoration: 'underline' as Decoration,
                        text: 'Tactile Education Services Private Limited (ThinkTac)',
                    },
                    {
                        type: 'circle' as UnorderedListType,
                        ul: [
                            'Category: Web Development',
                            'Designation: Full Stack Developer Intern',
                            'Timeline: June 2023 to July 2026',
                            'Duties: Frontend Web Development using Angular (with Angular Material & Tailwind CSS) and Firebase as backend',
                        ]
                    },
                    {
                        decoration: 'underline' as Decoration,
                        text: 'Maargvani IT Solutions Private Limited (Angular Wiki)',
                    },
                    {
                        type: 'circle' as UnorderedListType,
                        ul: [
                            'Category: Web Development',
                            'Designation: SDE Intern',
                            'Timeline: November 2022 to May 2023',
                            'Duties: Frontend Web Development using Angular (with Angular Material & Tailwind CSS)',
                        ]
                    },
                    {
                        decoration: 'underline' as Decoration,
                        text: 'Power Engineering India Private Limited (Pai Kane Group)',
                    },
                    {
                        type: 'circle' as UnorderedListType,
                        ul:
                        [
                            'Category: Generators & Allied Power Products',
                            'Designation: Marketing Officer',
                            'Timeline: March 2018 to March 2020',
                            `Duties: Lead generation, design of brochures, banners, corporate presentations, etc., planning &
                            organization of exhibitions.`,

                        ]
                    },
                    {
                        decoration: 'underline' as Decoration,
                        text: 'Paulo Motors',
                    },
                    {
                        type: 'circle' as UnorderedListType,
                        ul:
                        [
                            'Category: Automobile Repair & Service',
                            'Designation: Job Controller',
                            'Timeline: February 2016 to December 2017',
                            `Duties: Vehicle scheduling, liasioning of GPS & e-toll, documentation of service, maintenance,
                            warranty, pre-delivery inspection of Commercial Vehicles (Buses & Trucks).`,
                        ]
                    },
                ],
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Achievements',
            },
            {
                ul:
                [
                    'New product brand launch with marketing team at a local Interior Designing Exhibition, brochure design (from scratch), stall setup & layout, logistics coordination and product promotion.',
                    'Lead generation (for company) from various sectors using internet search engines, web scraping tools (Selenium - python) and Excel.',
                ]
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Educational Qualifications',
            },
            {
                ul:
                [
                    'Vishwanathrao Deshpande Rural Institute of Technology, Haliyal, Karnataka',
                    {
                        type: 'circle' as UnorderedListType,
                        ul:
                        [
                            `Vishveshwarya Technical University - Bachelor's of Mechanical Engineering`,
                            'September 2007 - January 2015',
                            'Second Class',
                        ]
                    },
                    'Father Agnel Higher Secondary School, Verna, Goa',
                    {
                        type: 'circle' as UnorderedListType,
                        ul:
                        [
                            'HSSC (Goa Board)',
                            'June 2006 - March 2007',
                            'Second Class',
                        ]
                    },
                    'Gurugram Public School, Gurgaon, Haryana',
                    {
                        type: 'circle' as UnorderedListType,
                        ul:
                        [
                            'SSC (CBSE Board)',
                            'June 2004 - March 2005',
                            'First Class',
                        ]
                    },
                ]
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Personal Details',
            },
            {
                ul:
                [
                    // 'Mobile number: 7972037493 (primary) | 9637112081',
                    // 'E-mail Id: judeson.rodriguez@gmail.com (primary) | rodriguez_jude@hotmail.com',
                    'E-mail Id: judeson.rodriguez@gmail.com',
                    'LinkedIn URL : https://www.linkedin.com/in/judeson-brian-rodriguez-764439b5',
                    'Github URL : https://github.com/zvdas',
                    'Portfolio URL : https://zvdas.github.io',
                    'Location: Bengaluru, Karnataka',
                    // 'Location: Panaji, Goa',
                    // 'Date of Birth : 9th October, 1989',
                ]
            },
            // "pdf generation incomplete; development in progress..."
        ],
        styles: {
            titleMain: {
                bold: true,
                alignment: 'center' as Alignment,
                fontSize: 16,
                // fonts: 'Times-Bold',
                fonts: 'times new roman bold italic.ttf',
                decoration: 'underline' as Decoration,
            },
            titleSecondary: {
                bold: true,
                fontSize: 12,
                fonts: 'Times-Bold',
                decoration: 'underline' as Decoration,
            },
            listSecondary: {
                markerColor: 'white',
            },
        },
        defaultStyle: {
            fontSize: 11,
            fonts: 'calibri-regular.ttf',
        }
    };

    return pdfMake.createPdf(docDefinition).open();
}