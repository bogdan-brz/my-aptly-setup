import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Main>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </Main>
    );
}

export default MyApp;
