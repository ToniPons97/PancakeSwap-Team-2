import './SubNavbar.scss';
import { Link } from 'react-router-dom';

const SubNavbar = ({isWarningVisible}) => {
    return(
        <div 
            style={isWarningVisible ? 
                {marginTop: '110px', height: '49px', paddingBottom: '10px'} : 
                {marginTop: '0px', height: '98px', paddingBottom: '0px'}}
            className="subHeadWraper">
            <div className="main-nav">
            </div>
            <div className="trade-nav">
                <Link to ="">Swap</Link>
                <Link to ="">Limit</Link>
                <div className="liquidity">
                <Link to ="/">Liquidity</Link>
                    <div className="underline"></div>
                </div>

                <Link to ="">Perpertual</Link>
                <Link to ="">Bridge</Link>
            </div>
        </div>
    );
}

export default SubNavbar;