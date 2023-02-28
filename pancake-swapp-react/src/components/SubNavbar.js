import './SubNavbar.scss';
import { Link } from 'react-router-dom';


const SubNavbar = ({isWarningVisible}) => {
    const route = window.location.pathname.toLowerCase();
    return(
        <div 
            style={isWarningVisible ? 
                {marginTop: '120px', height: '49px', paddingBottom: '10px'} : 
                {marginTop: '0px', height: '98px', paddingBottom: '0px'}}
            className="subHeadWraper">
            <div className="main-nav">
            </div>
            <div className="trade-nav">
                <Link className={route === '/swap' ? 'selected' : ''} to ="/swap">
                    Swap
                    <div />
                </Link>

                <Link to ="">
                    Limit
                    <div />
                </Link>

                <Link className={route === '/liquidity' ? 'selected' : ''} to ="/Liquidity">
                    Liquidity
                    <div />
                </Link>

                <Link to ="">
                    Perpertual
                    <div />
                </Link>

                <Link to ="">
                    Bridge
                    <div />
                </Link>
            </div>
        </div>
    );
}

export default SubNavbar;