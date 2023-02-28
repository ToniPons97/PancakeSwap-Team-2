import './SignUp.scss';
import bottom from '../assets/images/signup-images/1-bottom@2x.webp';
import left from '../assets/images/signup-images/1-left@2x.webp';
import top from '../assets/images/signup-images/1-top@2x.webp';
import bottom2 from '../assets/images/signup-images/2-bottom@2x.webp';
import right2 from '../assets/images/signup-images/2-right@2x.webp';
import top2 from '../assets/images/signup-images/2-top@2x.webp';
// import { useState } from 'react';
// import ConnectWallet from './ConnectWallet';

const SignUp = () => {
    // const [openConnectWlt, setOpenConnectWlt] = useState(false);
    return (
        <section id="sign-up">
            <div id="signup-pancakes-1">
            <img className="signup-pancake" src={bottom} alt="Pancake bottom." />
            <img className="signup-pancake"src={left} alt="Pancake left." />
            <img className="signup-pancake" src={top} alt="Pancake top." />
            </div>
            <div>
                <h2>
                Start in seconds.
                </h2>
                <p>
                Connect your crypto wallet to start using the app in seconds.
                <span>
                    No registration needed.
                </span>
                </p>
                <a href="#">Learn how to start</a>
                <button >Connect Wallet</button>
                {/* onClick={() => setOpenConnectWlt(true)} */}
                {/* <ConnectWallet openWlt={openConnectWlt} onCloseWallet={() => setOpenConnectWlt(false)} /> */}
            </div>

            {/* //CONNECT WALLET WINDOW ADDED  */}
            <div id="signup-pancakes-2">
                <img className="signup-pancake" src={bottom2} alt="Pancake bottom." />
                <img className="signup-pancake" src={right2} alt="Pancake right." />
                <img className="signup-pancake" src={top2} alt="Pancake top." />
            </div>
        </section>
    );
}

export default SignUp;
