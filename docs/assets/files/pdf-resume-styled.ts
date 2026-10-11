import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Alignment, UnorderedListType, LineStyle, Decoration } from 'pdfmake/interfaces';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export async function PdfResumeStyled() {

    function dashedLine(start: number, end: number) {
        return {
            canvas: [
                {
                    type: 'line' as LineStyle,
                    x1: start,
                    y1: 5,
                    x2: end,
                    y2: 5,
                    lineWidth: 0.1,
                    dash: {length: 2, space: 2}
                }
            ]
        }
    }

    const solidLine = {
        table : {
            headerRows: 0,
            widths: ['*'],
            body : [
                [''],
                ['']
            ]
        },
        // layout : 'lightHorizontalLines'
        layout:
        {
            hLineWidth: function(i: number, node: { table: { body: string | any[]; }; }) {
                return (i === 0 || i === node.table.body.length) ? 0 : 0.1;
            },
            vLineWidth: function(i: any, node: any) {
                return 0;
            },
            dash: {length: 2, space: 2}
        },
    };

    function getBase64ImageFromURL(url: string) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.setAttribute("crossOrigin", "anonymous");

          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            ctx!.drawImage(img, 0, 0);

            const dataURL = canvas.toDataURL("image/png");

            resolve(dataURL);
          };

          img.onerror = error => {
            reject(error);
          };

          img.src = url;
        });
    };

    // const phone = await getBase64ImageFromURL('assets/images-webp/phone.webp');
    const phone = await getBase64ImageFromURL('assets/images-svg/phone.svg');
    const email = await getBase64ImageFromURL('assets/images-svg/email.svg');
    const github = await getBase64ImageFromURL('assets/images-svg/github.svg');
    const website = await getBase64ImageFromURL('assets/images-svg/website.svg');
    const location = await getBase64ImageFromURL('assets/images-svg/location.svg');

    const docDefinition = {
        // pageMargins: [30, 40, 30, 40] as Margins,
        content: [
            {
                type: 'none' as UnorderedListType,
                ul: [
                    {
                        style: 'titleMain',
                        text: 'J U D E S O N    B R I A N\n'
                    },
                    {
                        style: 'titleMain',
                        text: 'C A L E B    R O D R I G U E Z',
                    },
                    {
                        style: 'titleSecondary',
                        text: 'FRONTEND WEB DEVELOPER',
                    }
                ]
            },
            solidLine,
            {
                table: {
                    headerRows: 1,
                    widths: [155, 295],
                    body: [
                        [
                            {
                                text: 'C O N T A C T',
                                style: 'titleSection'
                            },
                            {
                                text: 'C A R E E R    O B J E C T I V E',
                                style: 'titleSection'
                            }
                        ],
                        [
                            {
                                type: 'none' as UnorderedListType,
                                ul: [
                                    {
                                        // margin: [-6, 0, 0, -6.5],
                                        margin: [-10, 0, 0, 0],
                                        columns: [
                                            {
                                                image: phone,
                                                // height: 25,
                                                // width: 25
                                                height: 10,
                                                width: 10
                                            },
                                            {
                                                text: '797-203-7493 | 963-711-2081',
                                                style: 'bodySection',
                                                margin: [5, 0, 0, 0]
                                            },
                                        ]
                                    },
                                    {
                                        // margin: [-5, -7, 0, -6.5],
                                        margin: [-10, 0, 0, 0],
                                        columns: [
                                            {
                                                image: email,
                                                // height: 25,
                                                // width: 25
                                                height: 10,
                                                width: 10
                                            },
                                            {
                                                text: 'judeson.rodriguez@gmail.com',
                                                style: 'bodySection',
                                                margin: [5, 0, 0, 0]
                                            },
                                        ]
                                    },
                                    {
                                        // margin: [-5.5, -8, 0, -6.5],
                                        margin: [-10, 0, 0, 0],
                                        columns: [
                                            {
                                                image: github,
                                                // height: 25,
                                                // width: 25
                                                height: 10,
                                                width: 10
                                            },
                                            {
                                                text: 'https://github.com/zvdas',
                                                style: 'bodySection',
                                                margin: [5, 0, 0, 0]
                                            },
                                        ]
                                    },
                                    {
                                        // margin: [-5.5, -7.5, 0, -6.5],
                                        margin: [-10, 0, 0, 0],
                                        columns: [
                                            {
                                                image: website,
                                                // height: 25,
                                                // width: 25
                                                height: 10,
                                                width: 10
                                            },
                                            {
                                                text: 'zvdas.github.io',
                                                style: 'bodySection',
                                                margin: [5, 0, 0, 0]
                                            },
                                        ]
                                    },
                                    {
                                        // margin: [-5.5, -7.5, 0, -18.5],
                                        margin: [-10, 0, 0, 0],
                                        columns: [
                                            {
                                                image: location,
                                                // height: 25,
                                                // width: 25
                                                height: 10,
                                                width: 10
                                            },
                                            {
                                                text: 'Bengaluru, Karnataka',
                                                style: 'bodySection',
                                                margin: [5, 0, 0, 0]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: 'Frontend developer with proven experience in helping companies create and maintain a better code base for reusability. Passionate about learning and development with a desire to apply skills, tackle more complex problems and continue to find ways to maximize user efficiency and minimize bugs, while keeping upto date with industry practices.',
                                style: 'bodySection'
                            }
                        ],
                        [
                            dashedLine(0, 140),
                            dashedLine(-5, 350)
                        ],
                        [
                            {
                                text: 'S K I L L S',
                                style: 'titleSection'
                            },
                            {
                                text: 'W O R K    E X P E R I E N C E',
                                style: 'titleSection'
                            }
                        ],
                        [
                            {
                                type: 'none' as UnorderedListType,
                                ul: [
                                    {
                                        text: 'Languages',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'HTML',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'CSS',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'JavaScript',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'Libraries',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'React',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'Redux',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'PDFMake',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'Angular Material',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'xlsx',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'Frameworks',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'Angular',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'Express.js',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'Bootstrap',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'Tailwind',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'Fuse Angular Templates',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'Runtime Environments',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'Node.js',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'Platforms',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'Firebase',
                                        style: 'bodySection'
                                    }
                                ]
                            },
                            {
                                type: 'none' as UnorderedListType,
                                ul: [
                                    {
                                        columns: [
                                            {
                                                text: 'Full Stack Developer',
                                                style: 'bodySectionTitle'
                                            },
                                            {
                                                text: 'June 2023 -  July 2026',
                                                style: 'durationSection'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'ThinkTac',
                                        style: 'bodySectionTitle'
                                    },
                                    {
                                        text: 'Tactile Education Services Private Limited',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        ul: [
                                            {
                                                text: 'Developed modules and components for Educational application using Angular Material & Tailwind CSS in Fuse custom template and integrated with Firebase',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Developed cloud functions in Firebase using nodejs to perform various tasks such as scheduled backups, authenticate & create user, send batch messages using APIs',
                                                style: 'bodySection'
                                            }
                                        ]
                                    },
                                    ' ',
                                    {
                                        columns: [
                                            {
                                                text: 'SDE Intern',
                                                style: 'bodySectionTitle'
                                            },
                                            {
                                                text: 'November 2022 - May 2023',
                                                style: 'durationSection'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Angular Wiki',
                                        style: 'bodySectionTitle'
                                    },
                                    {
                                        text: 'Maargvani It Soultions Private Limited',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        ul: [
                                            {
                                                text: 'Developed frontend modules and components for Pharmaceutical application using Angular Material',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Added PDF generation functionality to select modules',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Created python webscraper for collecting information from a pharmaceutical website for data population',
                                                style: 'bodySection'
                                            }
                                        ]
                                    },
                                    ' ',
                                    {
                                        columns: [
                                            {
                                                text: 'Marketing Officer',
                                                style: 'bodySectionTitle'
                                            },
                                            {
                                                text: 'March 2018 - March 2020',
                                                style: 'durationSection'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Pai Kane Group',
                                        style: 'bodySectionTitle'
                                    },
                                    {
                                        text: 'Power Engineering India Private Limited',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        ul: [
                                            {
                                                text: 'Lead generation',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Design of brochures, banners, corporate presentations, etc.',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Planning & organization of exhibitions',
                                                style: 'bodySection'
                                            }
                                        ]
                                    },
                                    ' ',
                                    {
                                        columns: [
                                            {
                                                text: 'Job Controller',
                                                style: 'bodySectionTitle'
                                            },
                                            {
                                                text: 'February 2016 to December 2017',
                                                style: 'durationSection'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Paulo Motors',
                                        style: 'bodySectionTitle'
                                    },
                                    {
                                        text: '',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        ul: [
                                            {
                                                text: 'Vehicle scheduling',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Liaising of GPS & e-toll',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Documentation of service, maintenance',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Warranty',
                                                style: 'bodySection'
                                            },
                                            {
                                                text: 'Pre-delivery inspection of Commercial Vehicles (Buses & Trucks)',
                                                style: 'bodySection'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        [
                            dashedLine(0, 140),
                            dashedLine(-5, 350)
                        ],
                        [
                            {
                                text: 'E D U C A T I O N',
                                style: 'titleSection'
                            },
                            {
                                text: 'P R O J E C T S',
                                style: 'titleSection'
                            }
                        ],
                        [
                            {
                                type: 'none' as UnorderedListType,
                                ul: [
                                    {
                                        text: 'Bachelor’s of Mechanical Engineering',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'Vishveshwarya Technical University',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'September 2007 - January 2015',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'HSSC',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'Goa Board',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'June 2006 - March 2007',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'SSC',
                                        style: 'bodySectionSubTitle'
                                    },
                                    {
                                        text: 'CBSE Board',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'June 2004 - March 2005',
                                        style: 'bodySection'
                                    }
                                ]
                            },
                            {
                                type: 'none' as UnorderedListType,
                                ul: [
                                    {
                                        text: 'Online Test Application (Angular)',
                                        style: 'underlineSection'
                                    },
                                    {
                                        text: 'The Online Test Application enables users to provide online tests, review them, and display the results. (Angular Application with JSON server for serving fake APIs).',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'GitHub URL containing project files : https://github.com/zvdas/OnlineTestApp',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'Event Finder App (React)',
                                        style: 'underlineSection'
                                    },
                                    {
                                        text: 'The Event Finder App allows users to view and promote upcoming events. (React Application with JSON server for serving fake APIs & Redux for state management)',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'GitHub URL containing project files : https://github.com/zvdas/EventFinderApp',
                                        style: 'bodySection'
                                    },
                                    ' ',
                                    {
                                        text: 'Learning Management System (Express)',
                                        style: 'underlineSection'
                                    },
                                    {
                                        text: 'The Learning Management System allows users to monitor and customize the registration processes of e-learning curriculum, upload and manage documents containing curricular content, deliver course content over web-based interfaces (desktops, phones or tablets), create and publish course schedules, deadlines and tests & create new courses and register the students. (Node.js with Express and MongoDB serving as database)',
                                        style: 'bodySection'
                                    },
                                    {
                                        text: 'GitHub URL containing project files : https://github.com/zvdas/LearningManagementSystem',
                                        style: 'bodySection'
                                    }
                                ]
                            }
                        ]
                    ]
                },
                layout: 'noBorders'
            },
            solidLine
        ],
        styles: {
            titleMain: {
                bold: true,
                alignment: 'center' as Alignment,
                fontSize: 25,
                fonts: 'Hansen-Grotesk-Bold',
            },
            titleSecondary: {
                alignment: 'center' as Alignment,
                fontSize: 12,
                fonts: 'Roboto',
            },
            titleSection: {
                bold: true,
                fontSize: 12,
                fonts: 'Hansen-Grotesk-Bold',
            },
            bodySectionTitle: {
                bold: true,
                alignment: 'left' as Alignment,
                fontSize: 11,
                fonts: 'Roboto'
            },
            bodySectionSubTitle: {
                bold: true,
                alignment: 'left' as Alignment,
                fontSize: 8,
                fonts: 'Roboto'
            },
            bodySection: {
                alignment: 'left' as Alignment,
                fontSize: 8,
                fonts: 'Roboto'
            },
            durationSection: {
                alignment: 'right' as Alignment,
                fontSize: 8,
                fonts: 'Roboto'
            },
            underlineSection: {
                decoration: 'underline' as Decoration,
                alignment: 'left' as Alignment,
                fontSize: 8,
                fonts: 'Roboto'
            },
        },
        defaultStyle: {
            fontSize: 8,
            fonts: 'Roboto',
        }
    };

    return pdfMake.createPdf(docDefinition).open();
}