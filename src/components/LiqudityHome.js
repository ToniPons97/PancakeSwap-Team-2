import React from 'react';
import { faGear, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './LiquidHome.scss';
import { Link, useNavigate } from 'react-router-dom';
import SubNavbar from './SubNavbar';
import LiquidityBottom from './LiquidityBottom';

export function LiquidityHome({ isWarningVisible }) {
	const navGate = useNavigate();

	// go to second page (add liquidity)
	const addLiquidity = () => {
		navGate('/add');
	};

	return (
		<div className="liquidhome">
			<div>
				{/* <!--this 'add-liquidity' is for changing the page by clicki the Add Liquidity--> */}
				<div className="add-liquidityClick">
					<SubNavbar isWarningVisible={isWarningVisible} />
					<div className="liquidity-main-area">
						<div className="cardContainer">
							<div id="liquid-card">
								<div className="card-top">
									<div className="your-liquid">
										<h2>Your Liquidity</h2>
										<div className="icons">
											<FontAwesomeIcon
												icon={faGear}
											></FontAwesomeIcon>
											<FontAwesomeIcon
												icon={faClockRotateLeft}
											></FontAwesomeIcon>
										</div>
									</div>
									<div className="remove-lqd">
										Remove liquidity to receive tokens back
									</div>
								</div>

								<div className="connect-toWallet">
									Connect to a wallet to view your liquidity
								</div>

								<button
									onClick={addLiquidity}
									className="add-liquidity"
								>
									<i className="fa-solid fa-plus"></i>
									<h2>Add Liquidity</h2>
								</button>
							</div>
						</div>
						<div className="empty-area"></div>
						<LiquidityBottom />
					</div>
				</div>
			</div>
		</div>
	);
}
