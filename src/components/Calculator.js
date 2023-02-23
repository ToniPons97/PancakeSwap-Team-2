import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faRotateLeft,
  faRotateRight,
  faCog,
  faChartSimple,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import bnbLogo from "../assets/icons/binance-coin-bnb-icon.svg";
import cakeLogo from "../assets/icons/pancakeswap-cake-logo.svg";
import HoverInfoCard from "./HoverInfoCard";
import ConnectWallet from "./ConnectWallet";

function Calculator({
  handleSwitchCoin,
  handleGraphVisibility,
  isGraphOn,
  chartColor,
  changeExchange,
  coinValue,
  lastCoinValue,
  getExchange,
}) {
  // connect Wallet component state
  const [openConnectWlt, setOpenConnectWlt] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [coinInputValue, setCoinInputValue] = useState(0);

  const handleValueChange = (e) => {
    setCoinInputValue(e.target.value);
    console.log(coinInputValue);
  };

  const handleHoverCard = () => {
    setIsHover(!isHover);
  };
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
              src={changeExchange ? bnbLogo : cakeLogo}
              alt="coin-1-logo"
              height="20px"
              width="20px"
            />
            {changeExchange ? "BNB" : "CAKE"}
          </button>
          <form action="" method="get" className="first-coin-form">
            <input
              onChange={handleValueChange}
              id="first-coin-input"
              className="inputs"
              type="number"
              value={coinInputValue}
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
              src={changeExchange ? cakeLogo : bnbLogo}
              alt="coin-2-logo"
              height="20px"
              width="20px"
            />
            {changeExchange ? "CAKE" : "BNB"}
          </button>
          <form action="" method="get" className="second-coin-form">
            <input
              value={(coinInputValue * getExchange(0)).toFixed(2)}
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
          <p onMouseEnter={handleHoverCard} onMouseLeave={handleHoverCard}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{
                fontSize: "1.2rem",
              }}
            ></FontAwesomeIcon>
          </p>
        </div>
        <div className="connect">
          <button className="connect-wallet" onClick={() => setOpenConnectWlt(true)}>Connect Wallet</button>
        </div>
        <ConnectWallet openWlt={openConnectWlt} onCloseWallet={() => setOpenConnectWlt(false)}/>
        {isHover ? <HoverInfoCard></HoverInfoCard> : null}
      </div>
    </div>
  );
}

export default Calculator;
