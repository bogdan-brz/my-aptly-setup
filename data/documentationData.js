export const FrameworkDetails = [
    {
        name: "ReactJs",
        short: "react",
        description:
            "This starter project is a slightly modified version of the *Create-React-App setup. All the custom React icons are removed, and the App.css file is an *App.module.css file instead. The folder structure is the same",
        descriptionLinks: [
            {
                title: "*Create-React-App",
                label: "Create-React-App website",
                link: "https://create-react-app.dev/",
            },
            {
                title: "*CSS module files",
                label: "explanation of CSS module files",
                link: "https://github.com/css-modules/css-modules",
            },
        ],
        setups: [
            {
                name: "basic routing setup with v6",
                dependencies: "react-router-dom(v6)",
                description:
                    "simple implementation of react-router-dom(v6) with a Router in the App component, Navbar with Navlinks, and two dummy pages",
                short: "react-dom-v6",
            },
            {
                name: "basic routing setup with v5",
                dependencies: "react-router-dom(v5)",
                description:
                    "simple implementation of react-router-dom(v5) with a Router in the App component, Navbar with Navlinks, and two dummy pages",
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
];
