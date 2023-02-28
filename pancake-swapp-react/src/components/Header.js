import './Header.scss';
import starL from '../assets/images/header-images/star-l@2x.webp';
import starR from '../assets/images/header-images/star-r@2x.webp';
import starTopR from '../assets/images/header-images/star-top-r@2x.webp';
import middleBorder from '../assets/icons/header-middle-border.svg';
import psLogo from '../assets/icons/ps-logo-icon.svg';
import spaceman from '../assets/images/header-images/spaceman.png';
import headerUser from '../assets/icons/header-users.svg';
import headerTrades from '../assets/icons/header-trades.svg';
import headerStaked from '../assets/icons/header-staked.svg';
import HeaderSwipper from './HeaderSwipper';
import ConnectWallet from './ConnectWallet';
import React, { useState } from 'react';

import GoToSwapButton from './GoToSwapButton';


const Header = () => {
	const [openConnectWlt, setOpenConnectWlt] = useState(false);

	return (
		<div className="ibrahim-full-background">
			<div className="headMiddleBackgroundColor">
				<div className="ibrahim-head">
					<HeaderSwipper />
				</div>
				<div className="ibrahim-middle">
					<div className="ibrahim-middle-left">
						<h1 className="header-middle-tag" id="middleH1Tag">
							The moon is made of pancakes.
						</h1>
						<h6
							className="ibrahim-margin header-middle-tag"
							id="middleH6Tag"
						>
							Trade, earn, and win crypto on the most popular
							decentralized platform in the galaxy.
						</h6>
						<div className="ibrahim-margin">
							<button
								className="header-middle-button"
								id="buttonRightMargin"
								onClick={() => setOpenConnectWlt(true)}
							>
								<b>Connect Wallet</b>
							</button>
							{/* connectWallet added */}
							<ConnectWallet
								openWlt={openConnectWlt}
								onCloseWallet={() => setOpenConnectWlt(false)}
							/>
							<GoToSwapButton classes="header-middle-button buttonSecondMiddle" btnText='Trade now' />
						</div>
					</div>
					<div className="ibrahim-middle-right">
						<div id="header-spaceman-container">
							<img
								id="header-star-l"
								className="header-star"
								src={starL}
								alt="Blinking star left."
							/>
							<img
								id="header-star-r"
								className="header-star"
								src={starR}
								alt="Blinking star right."
							/>
							<img
								id="header-star-top"
								className="header-star"
								src={starTopR}
								alt="Blinking star top."
							/>
							<img id="header-spaceman" src={spaceman} alt="spaceman." />
						</div>
					</div>
				</div>
				<div id="header-curved-container">
					<img
						id="header-middle-border"
						src={middleBorder}
						alt="Curved border."
					/>
				</div>
				<div className="ibrahim-foot">
					<div className="alignmentVerHor">
						<img id="ps-logo-icon" src={psLogo} alt="" />
					</div>

					<div className="alignmentVerHor millionBillion">
						Used by millions.
					</div>
					<div className="alignmentVerHor millionBillion">
						Trusted with billions.
					</div>
					<div className="footTexts">
						<h3 className="alignmentVerHor">
							PancakeSwap has the most users of any decentralized platform,
							ever.
						</h3>
						<h3 className="alignmentVerHor">
							And those users are now entrusting the platform with over $3.5
							billion in funds.
						</h3>
					</div>
					<div id="joinText" className="alignmentVerHor">
						Will you join them?
					</div>
					<div className="header-boxes-flex">
						<div className="square">
							<div className="icon">
								<img src={headerUser} alt="" />
							</div>
							<div className="boxBottoms">
								<div className="number">2 million</div>
								<div id="usersCategory" className="category">
									users
								</div>
								<div className="time">in the last 30 days</div>
							</div>
						</div>
						<div className="square">
							<div className="icon">
								<img src={headerTrades} alt="" />
							</div>
							<div className="boxBottoms">
								<div className="number">55 million</div>
								<div id="tradesCategory" className="category">
									trades
								</div>
								<div className="time">made in the last 30 days</div>
							</div>
						</div>
						<div className="square">
							<div className="icon">
								<img src={headerStaked} alt="" />
							</div>
							<div className="boxBottoms">
								<div className="number">$3.5 billion</div>
								<div id="stakedCategory" className="category">
									staked
								</div>
								<div className="time">Total Value Locked</div>
							</div>
						</div>
					</div>
				</div>
				{/* <svg style={{backgroundImage: 'none'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#d7caec"
					fillOpacity="1"
					d="M0,64L1440,96L1440,0L0,0Z"
				></path>
			</svg> */}
				<div id='footer-bottom-curve-container'>
					<svg  viewBox="0 0 1660 48"  xmlns="http://www.w3.org/2000/svg">
						<path 
							fillOpacity="1"
							d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Header;