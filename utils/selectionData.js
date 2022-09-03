export const SelectionData = [
    {
        frameworks: [
            {
                name: "ReactJs",
                subname: "Create React App",
                description: `with no specs added it'll be a regular "npx create-react-app" folder structure, but with all the icon BS cleared out`,
                specifics: [
                    {
                        name: "react-router-dom",
                        description:
                            "basic router implementation with a few dummy routes",
                    },
                    {
                        name: "redux",
                        description:
                            "a redux store and one implementation file",
                    },
                    {
                        name: "react-redux + @reduxjs/toolkit",
                        description: "redux store and an auth slice",
                    },
                ],
            },
            { name: "AngularJs", specifics: [] },
            { name: "VueJs", specifics: [] },
        ],
    },
    {
        languages: [
            {
                name: "NodeJs",
                frameworks: [
                    {
                        name: "ExpressJs",
                        description: `with no specs added it'll be a "Hello World" single GET route server `,
                        specifics: [
                            {
                                name: "express-router",
                                description: "Basic router setup",
                            },
                            { name: "Mocha", description: "testing/debug" },
                            { name: "Passport", description: "auth" },
                        ],
                    },
                    { name: "Koa", specifics: [] },
                ],
            },
            {
                name: "Python",
                frameworks: [
                    { name: "Flask", specifics: [] },
                    { name: "CherryPy", specifics: [] },
                ],
            },
            {
                name: "Ruby",
                frameworks: [
                    { name: "Ruby on Rails", specifics: [] },
                    { name: "Sinatra", specifics: [] },
                ],
            },
            {
                name: "Java",
                frameworks: [
                    { name: "Spring", specifics: [] },
                    { name: "Struts", specifics: [] },
                ],
            },
        ],
    },
    {
        frameworks: [
            {
                name: "NextJs",
                specifics: [
                    { name: "redux store", description: "" },
                    { name: "react-redux + @reduxjs/toolkit", description: "" },
                ],
            },
            { name: "Django", specifics: [] },
        ],
    },
];
