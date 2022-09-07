export const SelectionTreeData = {
    frontEnd: {
        frameworks: [
            {
                name: "ReactJs",
                available: true,
                short: "react",
                description: `with no specs added it'll be a regular "npx create-react-app" folder structure, but with all the icons cleared out`,
                specifics: [
                    {
                        name: "react-router-dom-v6",
                        available: true,
                        description:
                            "basic router implementation with a few dummy routes",
                        short: "react-dom-v6",
                        // addOns: ["simple navbar"],
                        incompatibleWith: ["react-dom-v5"],
                    },
                    {
                        name: "react-router-dom-v5",
                        available: true,
                        description:
                            "basic router implementation with a few dummy routes",
                        short: "react-dom-v5",
                        incompatibleWith: ["react-dom-v6"],
                    },
                    {
                        name: "redux",
                        available: true,
                        description:
                            "a redux store and one implementation file",
                        short: "reg-redux",
                        incompatibleWith: ["react-redux-toolkit"],
                    },
                    {
                        name: "react-redux + @reduxjs/toolkit",
                        available: true,
                        description: "redux store and an auth slice",
                        short: "react-redux-toolkit",
                        incompatibleWith: ["reg-redux"],
                    },
                ],
            },
            {
                name: "AngularJs",
                available: true,
                short: "angular",
                specifics: [],
            },
            { name: "VueJs", available: true, short: "vue", specifics: [] },
        ],
    },
    backEnd: {
        languages: [
            {
                name: "NodeJs",
                available: true,
                frameworks: [
                    {
                        name: "ExpressJs",
                        available: true,
                        short: "express",
                        description: `with no specs added it'll be a "Hello World" single GET route server `,
                        specifics: [
                            {
                                name: "express-router",
                                available: true,
                                description: "Basic router setup",
                                incompatibleWith: [],
                            },
                            {
                                name: "Mocha",
                                available: true,
                                description: "testing/debug",
                                incompatibleWith: [],
                            },
                            {
                                name: "Passport",
                                available: true,
                                description: "auth",
                                incompatibleWith: [],
                            },
                        ],
                    },
                    {
                        name: "Koa",
                        available: true,
                        short: "koa",
                        specifics: [],
                    },
                ],
            },
            {
                name: "Python",
                frameworks: [
                    { name: "Flask", specifics: [] },
                    { name: "CherryPy", specifics: [] },
                ],
                available: false,
            },
            // {
            //     name: "Ruby",
            //     frameworks: [
            //         { name: "Ruby on Rails", specifics: [] },
            //         { name: "Sinatra", specifics: [] },
            //     ],
            //     available: false,
            // },
            // {
            //     name: "Java",
            //     frameworks: [
            //         { name: "Spring", specifics: [] },
            //         { name: "Struts", specifics: [] },
            //     ],
            //     available: false,
            // },
        ],
    },
    bothEnds: {
        frameworks: [
            {
                name: "NextJs",
                specifics: [
                    {
                        name: "redux store",
                        description: "",
                        incompatibleWith: [],
                    },
                    {
                        name: "react-redux + @reduxjs/toolkit",
                        description: "",
                        incompatibleWith: [],
                    },
                ],
                available: true,
            },
            { name: "Django", specifics: [], available: false },
        ],
    },
};
