import Navbar from './Navbar';
import PhishingWarning from './PhishingWarning';
import Header from './Header';
import Cards from './Cards';
import Infos from './Infos';
import SignUp from './SignUp';
import Footer from './Footer';

const Homepage = () => {
    return (
        <>
            <Header />
            <Cards />
            <Infos />
            <SignUp />
        </>
    );
}

export default Homepage;