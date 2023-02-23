import React from 'react';
import './ConnectW.scss';

function ConnectWallet({ openWlt, onCloseWallet }) {
	if (!openWlt) return null;

	return (
		<div className="overlay" onClick={onCloseWallet}>
			<div
				onClick={(evt) => evt.stopPropagation()}
				className="walletContainer"
			>
				{/* <div className="walletContainerRight"></div> */}

				<div className="rightWallet">
					<h1>Haven't got a wallet yet?</h1>
					<img src={require('../assets/images/wallet-images/wallet_intro.png')} alt="" />
					<a href="https://docs.pancakeswap.finance/get-started/wallet-guide">
						Learn how to connect
					</a>
				</div>

				<div className="leftWallet">
					<h4>Connect Wallet</h4>
					<div className="leftTopText">
						Start by connecting with one of the wallets below. Be sure to
						store your private keys or seed phrase securely. Never share
						them with anyone.
					</div>
					<div className="leftDown">
						<div className="leftDownItems">
							<img src={require('../assets/images/wallet-images/metamask.png')} alt="" />
							<div className='imageTex'>Eetamask</div>
						</div>
						<div className="leftDownItems">
							<img src={require('../assets/images/wallet-images/binance.png')} alt="" />
							<div className='imageTex'>Binance Wallet</div>
						</div>
						<div className="leftDownItems">
							<img src={require('../assets/images/wallet-images/coinbase.png')} alt="" />
							<div className='imageTex'>Coinbase Wallet</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/trust.png')} alt="" />
							<div className='imageTex'>Trust Wallet</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/walletconnect.png')} alt="" />
							<div className='imageTex'>WalletConnect</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/opera.png')} alt="" />
							<div className='imageTex'>Opera Wallet</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/brave.png')} alt="" />
							<div className='imageTex'>Brave Wallet</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/mathwallet.png')} alt="" />
							<div className='imageTex'>MathWallet</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/tokenpocket.png')} alt="" />
							<div className='imageTex'>Token Pocket</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/safepal.png')} alt="" />
							<div className='imageTex'>SafePal</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/coin98.png')} alt="" />
							<div className='imageTex'>Coin98</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/blocto.png')} alt="" />
							<div className='imageTex'>Blocto</div>
						</div>
						<div className="leftDownItems">
						<img src={require('../assets/images/wallet-images/ledger.png')} alt="" />
							<div className='imageTex'>Ledger</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConnectWallet;
