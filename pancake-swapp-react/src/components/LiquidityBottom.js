import './LiquidityBottom.scss';
import { Link } from 'react-router-dom';

const LiquidityBottom = () => {
    return (
        <div className="footer-area">
            <Link to = "">Bridge assets to BNB Chain</Link>
            <div className="footer-right">
                <Link to ="https://docs.pancakeswap.finance/help">
                    Need help?
                </Link>
                <img
                    src="https://cdn.pancakeswap.com/help/help.png"
                    alt="Get
            some help"
                    width="160"
                    height="108"
                />
            </div>
        </div>
    );
}

export default LiquidityBottom;