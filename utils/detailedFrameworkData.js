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
        specs: [
            {
                name: "react-router-dom",
                description:
                    "The App.js file has the BrowserRouter component added to it, wrapping ...",
                short: "react-dom",
            },
            {
                name: "redux",
                description: "a redux store and one implementation file",
                short: "reg-redux",
            },
            {
                name: "react-redux + @reduxjs/toolkit",
                description: "redux store and an auth slice",
                short: "react-redux-toolkit",
            },
        ],
    },
];
