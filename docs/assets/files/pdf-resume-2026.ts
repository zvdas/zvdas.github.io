import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Alignment, UnorderedListType, LineStyle, Decoration } from 'pdfmake/interfaces';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export async function PdfResume2026() {

    const docDefinition = {
        // pageMargins: [30, 40, 30, 40] as Margins,
        content: [
            {
                style: 'titleMain',
                text: 'JUDESON BRIAN CALEB RODRIGUEZ',
            },
            {
                style: 'titleSecondary',
                text: 'Full Stack Developer & Technical Lead',
            },
            {
                style: 'titleSecondary',
                text: 'judeson.rodriguez@gmail.com | +91 797-203-7493 | Bengaluru, India | GitHub: www.github.com/zvdas | Portfolio: zvdas.github.io | LinkedIn: www.linkedin.com/in/zvdas',
            },
            {
                style: 'titleSecondary',
                text: 'Professional Summary',
            },
            {
                style: 'titleSecondary',
                text: 'Full Stack Technical Lead with 2+ years of experience building scalable educational platforms using Angular and Firebase. Led development of 12+ production features serving 5,000+ users with 99.5% uptime. Expertise in component architecture, cloud functions, and mentoring development teams. Specialized in transforming complex requirements into performant, maintainable code while reducing development time by 35% through reusable component libraries.',
            },
            {
                style: 'titleSecondary',
                text: 'Professional Experience',
            },
            {
                style: 'titleSecondary',
                text: 'Technical Lead – Full Stack Developer | ThinkTac (Tactile Education Services Private Limited)',
            },
            {
                style: 'titleSecondary',
                text: 'January 2025 – Present | Bengaluru, India',
            },
            {
                style: 'titleSecondary',
                ul: [
                    'Mentor 5 junior developers on Angular best practices, TypeScript patterns, and code review standards, reducing onboarding time by 40% and code review cycles by 25%',
                    'Architected and delivered 3 core platform features (student dashboard, assessment engine, analytics module) serving 5,000+ active users with 99.5% uptime',
                    'Led technical decision-making for frontend and backend architecture, establishing coding standards and workflow processes that improved team velocity by 30%',
                    'Spearheaded migration to TypeScript across 15 Angular components, reducing runtime errors by 45% and improving code maintainability'
                ],
            },
            {
                style: 'titleSecondary',
                text: 'Full Stack Developer | ThinkTac (Tactile Education Services Private Limited)',
            },
            {
                style: 'titleSecondary',
                text: 'June 2023 – January 2025 | Bengaluru, India',
            },
            {
                style: 'titleSecondary',
                ul: [
                    'Built 20+ reusable Angular components with Angular Material and Tailwind CSS in Fuse custom template, reducing new feature development time by 35% and ensuring design consistency across platform',
                    'Integrated Firebase Authentication and Firestore database for real-time student enrollment system, supporting 2,000+ concurrent users with <300ms response time',
                    'Engineered 10+ Firebase Cloud Functions using Node.js to automate scheduled backups, user authentication, and batch messaging, processing 50,000+ daily events with 200ms average response time',
                    'Optimized application bundle size by 40% through lazy loading and tree shaking, improving page load time from 4.2s to 2.5s and enhancing user experience metrics',
                    'Implemented responsive design patterns ensuring 100% mobile compatibility across iOS and Android devices, increasing mobile user engagement by 28%'
                ],
            },
            {
                style: 'titleSecondary',
                text: 'SDE Intern | Angular Wiki (Maargvani IT Solutions Private Limited)',
            },
            {
                style: 'titleSecondary',
                text: 'November 2022 – May 2023 | Remote',
            },
            {
                style: 'titleSecondary',
                ul: [
                    'Developed drug inventory management module with real-time stock tracking using Angular Material and RxJS, managing 200+ pharmaceutical products and reducing manual entry errors by 60%',
                    'Integrated PDFMake library to auto-generate compliance reports for 500+ monthly prescription orders, eliminating 10 hours of manual document creation and ensuring regulatory compliance',
                    'Automated pharmaceutical product data collection using Python web scraping (BeautifulSoup, Selenium) for 2,000+ items, reducing manual research time from 40 hours to 2 hours weekly'
                ],
            },
            {
                style: 'titleSecondary',
                text: 'Technical Skills',
            },
            {
                style: 'titleSecondary',
                text: 'Expert (3+ years): JavaScript (ES6+), HTML5, CSS3, Angular, Angular Material, Tailwind CSS, Firebase, Git/GitHub',
            },
            {
                style: 'titleSecondary',
                text: 'Proficient (1-2 years): TypeScript, React, Redux, Node.js, Express.js, REST APIs, Responsive Design, RxJS, Bootstrap',
            },
            {
                style: 'titleSecondary',
                text: 'Familiar (<1 year): Python, MongoDB, Web Scraping (BeautifulSoup, Selenium), PDFMake, xlsx',
            },
            {
                style: 'titleSecondary',
                text: 'Tools & Methodologies: Jest, Jasmine, Karma, GitHub Actions, Agile/Scrum, Code Review, CI/CD, Component Architecture, State Management',
            },
            {
                style: 'titleSecondary',
                text: 'Prior Experience',
            },
            {
                style: 'titleSecondary',
                text: '2016-2020: Operations and marketing roles in automotive and engineering sectors',
            },
            {
                style: 'titleSecondary',
                text: 'Education',
            },
            {
                style: 'titleSecondary',
                text: 'Bachelor of Mechanical Engineering | Vishveshwarya Technical University | 2015',
            },
            {
                style: 'titleSecondary',
                text: 'Hybrid preferred in Bengaluru | Open to relocation: Europe, Canada | Work authorization: Indian citizen',
            },
        ],
        styles: {
            titleMain: {
                bold: true,
                alignment: 'center' as Alignment,
                fontSize: 25,
            },
            titleSecondary: {
                alignment: 'center' as Alignment,
                fontSize: 12,
            },
            titleSection: {
                bold: true,
                fontSize: 12,
            },
            bodySectionTitle: {
                bold: true,
                alignment: 'left' as Alignment,
                fontSize: 11,
            },
            bodySectionSubTitle: {
                bold: true,
                alignment: 'left' as Alignment,
                fontSize: 8,
            },
            bodySection: {
                alignment: 'left' as Alignment,
                fontSize: 8,
            },
            durationSection: {
                alignment: 'right' as Alignment,
                fontSize: 8,
            },
            underlineSection: {
                decoration: 'underline' as Decoration,
                alignment: 'left' as Alignment,
                fontSize: 8,
            },
        },
        defaultStyle: {
            fontSize: 8,
            fonts: 'Calibri',
        }
    };

    return pdfMake.createPdf(docDefinition).open();
}