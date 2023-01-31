import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faRotateLeft,
  faRotateRight,
  faCog,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import bnbLogo from "../assets/icons/binance-coin-bnb-icon.svg";
import cakeLogo from "../assets/icons/pancakeswap-cake-logo.svg";

function Calculator({
  handleSwitchCoin,
  handleGraphVisibility,
  isGraphOn,
  chartColor,
}) {
  return (
    <div className="calculator">
      <div className="calc-top">
        <div className="calc-title">
          <p className="swap-title">Swap</p>
        </div>
        <p className="calc-info">Trade tokens in an instant</p>
        <div className="right-buttons">
          <button onClick={handleGraphVisibility} className="graph-toggle">
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{
                fontSize: "1.2rem",
                color: isGraphOn ? "black" : "rgb(0,0,0,0.3)",
              }}
            ></FontAwesomeIcon>
          </button>
          <button className="settings">
            <FontAwesomeIcon
              icon={faCog}
              style={{ fontSize: "1.2rem" }}
            ></FontAwesomeIcon>
          </button>
          <button className="recent-swaps">
            <FontAwesomeIcon
              icon={faRotateLeft}
              style={{ fontSize: "1.2rem" }}
            ></FontAwesomeIcon>
          </button>
          <button className="refresh">
            <FontAwesomeIcon
              icon={faRotateRight}
              style={{ fontSize: "1.2rem" }}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <hr />
      <div className="calc-mid">
        <div className="first-coin">
          <button className="first-coin-name calc-coins">
            <img
              id="coin-icon-1"
              src={chartColor ? bnbLogo : cakeLogo}
              alt="coin-1-logo"
              height="20px"
              width="20px"
            />
            {chartColor ? "BNB" : "CAKE"}
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
          <button onClick={handleSwitchCoin} className="switch-button">
            <FontAwesomeIcon icon={faRepeat} style={{ fontSize: "1.2rem" }} />
          </button>
        </div>
        <div className="second-coin">
          <button className="second-coin-name calc-coins">
            <img
              src={chartColor ? cakeLogo : bnbLogo}
              alt="coin-2-logo"
              height="20px"
              width="20px"
            />
            {chartColor ? "CAKE" : "BNB"}
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