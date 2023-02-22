import Header from './Header';
import Cards from './Cards';
import Infos from './Infos';
import SignUp from './SignUp';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Home | PancakeSwap</title>
            </Helmet>
            <Header />
            <Cards />
            <Infos />
            <SignUp />
        </>
    );
}

export default Homepage;