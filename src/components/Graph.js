import React from "react";
import "./swap.css";
import ChartComponent from "./ChartComponent";
import { useState, useEffect } from "react";
import Calculator from "./Calculator";
import SubNavbar from "./SubNavbar";
import CreateData from "./CreateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faExpand,
  faChartLine,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import bnbLogo from "../assets/icons/binance-coin-bnb-icon.svg";
import cakeLogo from "../assets/icons/pancakeswap-cake-logo.svg";

const Graph = (props) => {
  //States
  const [buttonInfo, setButtonInfo] = useState("1y");
  const [chartStyle, setChartStyle] = useState("line");
  const [coinValue, setCoinValue] = useState("64");
  const [lastCoinValue, setLastCoinValue] = useState(0);
  const [chartColor, setChartColor] = useState(false);

  const [changeExchange, setChangeExchange] = useState(false);
  const [isGraphOn, setIsGraphOn] = useState(true);

  const turq = "rgb(104, 215, 224)";
  const pinkish = "rgba(255, 99, 132)";

  //Functions

  const getLastCoinValue = (data) => {
    setLastCoinValue(data);
  };

  const handleChartStyle = () => {
    chartStyle === "line" ? setChartStyle("bar") : setChartStyle("line");
  };
  const handleClick = (event) => {
    setButtonInfo(event.target.innerHTML);
  };
  // useEffect(() => handleSetCoinValue, []);

  function handleSetCoinValue(data) {
    setCoinValue(data);
  }

  function handleGraphVisibility() {
    setIsGraphOn(!isGraphOn);
  }

  function handleSwitchCoin() {
    setChangeExchange(!changeExchange);
    console.log(lastCoinValue);
  }

  return (
    <div className="page">
      <SubNavbar isWarningVisible={props.showWarning}></SubNavbar>
      <div
        style={isGraphOn ? null : { justifyContent: "center" }}
        className="main"
      >
        {isGraphOn ? (
          <div className="graph">
            <div className="top">
              <div className="top-left">
                <img
                  id="coin-icon-1"
                  src={changeExchange ? bnbLogo : cakeLogo}
                  alt="coin-1-logo"
                  height="20px"
                  width="20px"
                />
                <img
                  src={changeExchange ? cakeLogo : bnbLogo}
                  alt="coin-2-logo"
                  height="20px"
                  width="20px"
                />
                <p>
                  <span className="coin1">
                    {changeExchange ? "BNB" : "CAKE"}
                  </span>
                  /
                  <span className="coin2">
                    {changeExchange ? "CAKE" : "BNB"}
                  </span>
                </p>
                <button onClick={handleSwitchCoin} className="switch-btn">
                  <FontAwesomeIcon
                    style={{
                      color: !changeExchange ? turq : pinkish,
                      fontSize: "1.3rem",
                    }}
                    icon={faRepeat}
                  />
                </button>
              </div>
              <div className="top-right">
                <button onClick={handleChartStyle}>
                  <FontAwesomeIcon
                    style={{
                      color: turq,
                      fontSize: "1.5rem",
                    }}
                    className="chartIcon"
                    icon={chartStyle !== "line" ? faChartLine : faChartSimple}
                  />
                </button>
              </div>
            </div>
            <div className="middle">
              <div className="middle-left">
                <p>
                  <span className="coin-rate">{coinValue}</span>{" "}
                  {changeExchange ? "BNB/CAKE" : "CAKE/BNB"}
                  <span
                    style={{
                      color: !changeExchange ? turq : pinkish,
                    }}
                    className="coin-difference"
                  >
                    -2.022(%2.43)
                  </span>
                </p>
              </div>
              <div onClick={handleClick} className="middle-right">
                <button
                  className={
                    buttonInfo === "24h" ? "btn clicked day" : "btn day"
                  }
                >
                  24h
                </button>
                <button
                  className={
                    buttonInfo === "1w" ? "btn clicked week" : "btn week"
                  }
                >
                  1w
                </button>
                <button
                  className={
                    buttonInfo === "1m" ? "btn clicked month" : "btn month"
                  }
                >
                  1m
                </button>
                <button
                  className={
                    buttonInfo === "1y" ? "btn clicked year" : "btn year"
                  }
                >
                  1y
                </button>
              </div>
            </div>
            <div id="tvchart">
              <ChartComponent
                buttonInfo={buttonInfo}
                handleSetCoinValue={handleSetCoinValue}
                chartColor={chartColor}
                chartStyle={chartStyle}
                turq={turq}
                pinkish={pinkish}
                changeExchange={changeExchange}
                getLastCoinValue={getLastCoinValue}
              ></ChartComponent>
            </div>
          </div>
        ) : null}
        <Calculator
          handleSwitchCoin={handleSwitchCoin}
          handleGraphVisibility={handleGraphVisibility}
          isGraphOn={isGraphOn}
          chartColor={chartColor}
          changeExchange={changeExchange}
          coinValue={coinValue}
          lastCoinValue={lastCoinValue}
        ></Calculator>
      </div>
    </div>
  );
};

export default Graph;
