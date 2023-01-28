import React from "react";

function Calculator() {
  return (
    <div className="calculator">
      <div className="calc-top">
        <div className="calc-title">
          <p className="swap-title">Swap</p>
        </div>
        <p className="calc-info">Trade tokens in an instant</p>
        <div className="right-buttons">
          <button className="graph-toggle">
            <i className="fa-solid fa-chart-simple"></i>
          </button>
          <button className="settings">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </button>
          <button className="recent-swaps">
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <button className="refresh">
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className="calc-mid">
        <div className="first-coin">
          <button className="first-coin-name calc-coins">
            <img
              id="coin-icon-1"
              src="assets/binance-coin-bnb-icon.svg"
              alt="coin-1-logo"
              height="20px"
              width="20px"
            />
            BNB
          </button>
          <form action="" method="get" className="first-coin-form">
            <input
              id="first-coin-input"
              className="inputs"
              type="number"
              placeholder="0.0"
            />
          </form>
        </div>
        <div className="switch">
          <button className="switch-button">
            <i className="fa-solid fa-sm fa-repeat"></i>
          </button>
        </div>
        <div className="second-coin">
          <button className="second-coin-name calc-coins">
            <img
              src="assets/pancakeswap-cake-logo.svg"
              alt="coin-2-logo"
              height="20px"
              width="20px"
            />
            CAKE
          </button>
          <form action="" method="get" className="second-coin-form">
            <input
              id="second-coin-input"
              className="inputs"
              type="number"
              placeholder="0.0"
            />
          </form>
        </div>
        <div className="scan-risk">
          <button className="scan"></button>
          <button className="question-mark"></button>
        </div>
        <div className="slippage">
          <p>Slippage Tolerance</p>
          <p>0.5%</p>
        </div>
        <div className="connect">
          <button className="connect-wallet">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
