export const frameworkData = [
    {
        fullName: "ReactJs",
        shortName: "react",
        end: "front",
        available: true,
        description:
            "All the starter projects for ReactJs are based on the *Create-React-App template, and utilize the *CSS modules approach to styling components. The dependencies listed for the setups are ones that aren't also included in the blank setup",
        descriptionLinks: [
            {
                title: "Create-React-App",
                label: "Create-React-App website",
                link: "https://create-react-app.dev/",
            },
            {
                title: "CSS module files",
                label: "explanation of CSS module files",
                link: "https://github.com/css-modules/css-modules",
            },
        ],
        setups: [
            {
                fullName: "Blank ReactJs setup",
                shortName: "react-blank",
                description: {
                    brief: "A create-react-app blank setup with all the icon links cleared out and the App.css file replaced with the App.module.css",
                    full: "A create-react-app blank setup with all the icon links cleared out and the App.css file replaced with the App.module.css. To apply your favicon instead of ours, simply replace the file in the public directory with your icon file",
                    dependencies: "Create-React-App dependencies",
                    links: [],
                },
            },
            {
                fullName: "Simple routing setup with react-router-dom(v6)",
                shortName: "react-with-react-router-dom-v6",
                description: {
                    brief: "Simple react-router-dom(v6) implementation with a Router, Navbar with Navlinks, and two dummy pages",
                    full: "Simple implementation of react-router-dom(v6) with a Router in the App component, Navbar with Navlinks, and two dummy pages. The Navbar highlights the selected tab using isActive in className",
                    dependencies: "react-router-dom(v6)",
                    links: [
                        {
                            title: "react-router-dom(v6)",
                            link: "https://reactrouter.com/en/v6.3.0/getting-started/overview",
                        },
                    ],
                },
            },
            {
                fullName:
                    "Simple @reduxjs/toolkit redux store with two state slices",
                shortName: "react-with-react-redux-reduxjs-toolkit",
                description: {
                    brief: "Simple implementation of @reduxjs/toolkit, with a store with two state slices, and a dummy page accessing state from the slice",
                    full: "Simple implementation of @reduxjs/toolkit, with a store with two state slices, and a dummy page accessing state from the slice",
                    dependencies: "react-redux, @reduxjs/toolkit",
                    links: [
                        {
                            title: "@reduxjs/toolkit",
                            link: "https://redux-toolkit.js.org/introduction/getting-started",
                        },
                    ],
                },
            },
            // react hook form
        ],
    },
    {
        fullName: "AngularJs",
        shortName: "angular",
        available: false,
        end: "front",
        setups: [],
    },
    {
        fullName: "ExpressJs",
        shortName: "express",
        end: "back",
        available: true,
        description:
            'All the ExpressJs starter projects are based on the *ExpressJs "Hello World" example, but with *cors middleware added so as to allow front and back end to be on localhost, and *nodemon to restart the development server on every change made in any file.',
        descriptionLinks: [
            {
                title: 'ExpressJs "Hello World"',
                label: "ExpressJS site with explanation",
                link: "https://expressjs.com/en/starter/hello-world.html",
            },
            {
                title: "cors middleware",
                label: "ExpressJS site with explanation",
                link: "https://expressjs.com/en/resources/middleware/cors.html",
            },
            {
                title: "nodemon",
                label: "the nodemon npm registry website",
                link: "https://www.npmjs.com/package/nodemon",
            },
        ],
        setups: [
            {
                fullName: "Blank ExpressJs setup",
                shortName: "express-blank",
                description: {
                    brief: 'Simple ExpressJs server with a "Hello World" get route, cors middleware, and nodemon',
                    full: 'Simple ExpressJs server with a "Hello World" get route, a basic cors middleware implementation, and nodemon to restart the development server on every change made in any file',
                    dependencies: "express, cors, nodemon",
                    links: [],
                },
            },
            {
                fullName: "Mongodb implementation with mongoose in ExpressJs",
                shortName: "express-with-mongodb",
                description: {
                    brief: "Connection to DB established, demonstration of finding and adding elements to a model, and basic schema setup",
                    full: "This setup demonstrates connecting to mongodb via mongoose, setting up a basic schema, and using that schema to find and add elements to the DB via a mongoose model",
                    dependencies: "mongoose, dotenv",
                    links: [
                        {
                            title: "mongoose",
                            link: "https://mongoosejs.com/docs/",
                        },
                        {
                            title: "dotenv",
                            link: "https://www.npmjs.com/package/dotenv",
                        },
                    ],
                },
            },
            {
                fullName: "JsonWebToken implementation with ExpressJs",
                shortName: "express-with-jwt",
                description: {
                    brief: "jwt signing, verifying, and application in middleware that reads token from header",
                    full: "The implementation demonstrated how to sign data with a secret, verify it, and how to create a middleware function to check if there exists a header with the authentication key containing the token",
                    dependencies: "jsonwebtoken, dotenv",
                    links: [
                        {
                            title: "jsonwebtoken",
                            link: "https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs",
                        },
                        {
                            title: "dotenv",
                            link: "https://www.npmjs.com/package/dotenv",
                        },
                    ],
                },
            },
        ],
        language: "NodeJs",
    },
    {
        fullName: "Koa",
        shortName: "koa",
        available: false,
        end: "back",
        setups: [],
        language: "NodeJs",
    },
    {
        fullName: "NextJs",
        shortName: "next",
        available: true,
        end: "both-t",
        description:
            "All the NextJs setups are based on the Create-Next-App setup, and all the dependencies listed are ones not already included in the blank project.",
        descriptionLinks: [
            {
                title: "Create-Next-App website",
                label: "Create-Next-App website and getting started guide",
                link: "https://nextjs.org/docs/api-reference/create-next-app",
            },
        ],
        setups: [
            {
                fullName:
                    "Blank NextJs app - slightly modified Create-Next-App setup",
                shortName: "next-blank",
                description: {
                    brief: "A slightly modified Create-Next-App setup, with the home page cleared up",
                    full: "This setup is almost the same as the Create-Next-App one, except the home page, and the /api route are empty.",
                    dependencies: "Create-Next-App dependencies",
                    links: [],
                },
            },
            {
                fullName: "A simple mongodb implementation in NextJs",
                shortName: "next-with-mongodb",
                description: {
                    brief: "Mongodb connection established, simple implementation of inserting and finding documents from the db.",
                    full: "This implementation shows how to connect to mongodb, and how to find and insert documents into it",
                    dependencies: "mongodb",
                    links: [
                        {
                            title: "mongodb integration guide",
                            link: "https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/",
                        },
                    ],
                },
                id: 7,
            },
            {
                fullName: "A simple NextAuth implementation in NextJs",
                shortName: "next-with-next-auth",
                description: {
                    brief: "Simple setup of the nextauth library with the google oauth provider and utilizing the usesession hook",
                    full: "This setup shows how to setup the nextauth library with the google provider, and then use the session object on the front end with the useSession hook",
                    dependencies: "next-auth",
                    links: [
                        {
                            title: "Next Auth website",
                            link: "https://next-auth.js.org/getting-started/example",
                        },
                    ],
                },
                id: 8,
            },
        ],
    },
    {
        fullName: "Django",
        shortName: "django",
        available: false,
        end: "both-t",
        setups: [],
    },
    {
        fullName: "MERN Stack",
        shortName: "mern",
        available: true,
        end: "both-s",
        setups: [],
    },
    {
        fullName: "MEAN Stack",
        shortName: "mean",
        available: false,
        end: "both-s",
        setups: [],
    },
];
