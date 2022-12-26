// global styles
import "normalize.css"
import "./scss/reset.scss"


import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Intro />
            <Footer />
        </>
    );
}

export default App;