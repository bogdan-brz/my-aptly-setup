export const SelectionTreeData = {
    frontEnd: {
        frameworks: [
            {
                name: "ReactJs",
                short: "react",
                description: `with no specs added it'll be a regular "npx create-react-app" folder structure, but with all the icons cleared out`,
                specifics: [
                    {
                        name: "react-router-dom",
                        description:
                            "basic router implementation with a few dummy routes",
                        short: "react-dom",
                    },
                    {
                        name: "redux",
                        description:
                            "a redux store and one implementation file",
                        short: "reg-redux",
                    },
                    {
                        name: "react-redux + @reduxjs/toolkit",
                        description: "redux store and an auth slice",
                        short: "react-redux-toolkit",
                    },
                ],
            },
            { name: "AngularJs", short: "angular", specifics: [] },
            { name: "VueJs", short: "vue", specifics: [] },
        ],
    },
    backEnd: {
        languages: [
            {
                name: "NodeJs",
                frameworks: [
                    {
                        name: "ExpressJs",
                        short: "express",
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
                    { name: "Koa", short: "koa", specifics: [] },
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
    bothEnds: {
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
};
