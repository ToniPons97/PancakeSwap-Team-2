import React from 'react';
import './AddLiquid.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faArrowLeft,
	faGear,
	faCircleQuestion,
	faClockRotateLeft,
	faCaretDown,
	faPlus,
	faBowlingBall,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

library.add(faCircleQuestion);

export function AddLiquidity() {
	const navgate = useNavigate()
	
	function returnToHomepage() {
		navgate('/Liquidity')
	}

	return (
		<div>
			<div className="seondPage-hide">
				<header className="trade-nav2"></header>
				<div className="liquidity-main-area2">
					<div className="cardContainer2">
						<div id="liquid-card2">
							<div className="card-top2">
								<div className="arrDiv">
									{/* <FontAwesomeIcon icon="fa-solid fa-arrow-left"/> */}
									<FontAwesomeIcon
										onClick={returnToHomepage}
										icon={faArrowLeft}
									></FontAwesomeIcon>
								</div>
								<div className="top-center2">
									<div className="topItems">
										<div className="qnh2">
											<h2>Add Liquidity</h2>

											<div className="qhover">
												<FontAwesomeIcon icon={faCircleQuestion} />

												<p className="qtoolTip">
													Liquidity providers earn a 0.17% trading{' '}
													<br />
													fee on all trades made for that token{' '}
													<br />
													pair, propotional to their share of the{' '}
													<br />
													liquidity pair.
												</p>
											</div>
										</div>

										<div className="twoIcons">
											<FontAwesomeIcon
												icon={faGear}
											></FontAwesomeIcon>
											<FontAwesomeIcon
												icon={faClockRotateLeft}
											></FontAwesomeIcon>

											<p></p>
										</div>
									</div>
									<div className="receiveLp">
										Receive LP tokens and earn 0.17% trading fees
									</div>
								</div>
							</div>
							{/* second page center area */}
							<div className="card-center">
								<div className="chooseVp">Choose a valid pair</div>
								<div className="secondPbtns">
									<div className="lbtndiv">
										<button className="lbtn">
											<div className="itemnBNB">
											{/* {bnb} sould be imported insted of faBowlingBall */}
												<img src={faBowlingBall} alt="" />
												<span className="bnb">BNB</span>
											</div>
											<FontAwesomeIcon
												icon={faCaretDown}
											></FontAwesomeIcon>
										</button>
									</div>
									<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
									<div className="rbtndiv">
										<button className="rbtn">
											<div className="cakeImg">
												<img
													className="sc-b728c75b-0 hUFSSE"
													alt="CAKE logo"
													src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"
													width="20"
													height="20"
												/>
												<span className="cake">CAKE </span>
											</div>
											<FontAwesomeIcon
												icon={faCaretDown}
											></FontAwesomeIcon>
										</button>
									</div>
								</div>

								<div className="wrapLp">
									<div className="hover">
										<div className="lpText" fontSize="12px">
											LP reward APR
										</div>
										<p className="tooltip2">
											Based on last 7 days' peformance. Does <br />
											not account for impermanent loss
										</p>
									</div>
									<div fontSize="16px" className="down">
										0.76%
									</div>
								</div>
							</div>
							<div className="btnConnet">
								<button className="connectWlt">
									<h2>Connect Wallet</h2>
								</button>
							</div>
						</div>
					</div>
					<div className="innerpage-center">
						<div className="textWraper">
							<div className="tex-content">
								🥞 By adding liquidity you'll earn 0.17% of all trades
								on this pair proportional to your share of the pool.
								Fees are added to the pool, accrue in real time and can
								be claimed by withdrawing your liquidity.
							</div>
						</div>
					</div>
					<div className="footer-area2">
						<Link to="">Bridge assets to BNB Chain</Link>
						<div className="footer-right2">
							<Link to ="https://docs.pancakeswap.finance/help">
								Need help?
							</Link>
							<img
								src="https://cdn.pancakeswap.com/help/help.png"
								alt="Get
                        some help"
								width="160px"
								height="108px"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
