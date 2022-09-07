export const SelectionTreeData = {
    frontEnd: {
        frameworks: [
            {
                name: "ReactJs",
                available: true,
                short: "react",
                description:
                    "with no specific setup selected, it's a create-react-app setup without React icons",
                setups: [
                    {
                        name: "basic routing setup with v6",
                        dependencies: "react-router-dom(v6)",
                        description:
                            "simple implementation with a Router, Navbar with Navlinks, and two dummy pages",
                        short: "react-dom-v6",
                    },
                    {
                        name: "basic routing setup with v5",
                        dependencies: "react-router-dom(v5)",
                        description:
                            "simple implementation with a Router, Navbar with Navlinks, and two dummy pages",
                        short: "react-dom-v5",
                    },
                    {
                        name: "a basic redux implementation",
                        dependencies: "redux, react-redux",
                        description:
                            "a redux store, and dummy home page pulling from the store",
                        short: "reg-redux",
                    },
                    {
                        name: "a basic redux toolkit implementation",
                        dependencies: "react-redux, @reduxjs/toolkit",
                        description:
                            "a redux store, and dummy home page pulling from the store",
                        short: "react-redux-toolkit",
                    },
                ],
            },
            {
                name: "AngularJs",
                available: true,
                short: "angular",
                setups: [],
            },
            { name: "VueJs", available: true, short: "vue", setups: [] },
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
                        setups: [
                            {
                                name: "express-router",
                                description: "Basic router setup",
                            },
                            {
                                name: "Mocha",
                                description: "testing/debug",
                            },
                            {
                                name: "Passport",
                                description: "auth",
                            },
                        ],
                    },
                    {
                        name: "Koa",
                        available: true,
                        short: "koa",
                        setups: [],
                    },
                ],
            },
            {
                name: "Python",
                frameworks: [
                    { name: "Flask", setups: [] },
                    { name: "CherryPy", setups: [] },
                ],
                available: false,
            },
            // {
            //     name: "Ruby",
            //     frameworks: [
            //         { name: "Ruby on Rails", setups: [] },
            //         { name: "Sinatra", setups: [] },
            //     ],
            //     available: false,
            // },
            // {
            //     name: "Java",
            //     frameworks: [
            //         { name: "Spring", setups: [] },
            //         { name: "Struts", setups: [] },
            //     ],
            //     available: false,
            // },
        ],
    },
    bothEnds: {
        frameworks: [
            {
                name: "NextJs",
                setups: [
                    {
                        name: "redux store",
                        description: "",
                    },
                    {
                        name: "react-redux + @reduxjs/toolkit",
                        description: "",
                    },
                ],
                available: true,
            },
            { name: "Django", setups: [], available: false },
        ],
    },
};
