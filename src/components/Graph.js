import React from "react";
import "./swap.css";
import ChartComponent from "./ChartComponent";
import { useState, useEffect } from "react";
import Calculator from "./Calculator";
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
  const [chartColor, setChartColor] = useState(false);

  const [coinValues, setCoinValues] = useState(CreateData());
  const [isGraphOn, setIsGraphOn] = useState(true);

  const turq = "rgb(104, 215, 224)";
  const pinkish = "rgba(255, 99, 132)";

  //Functions

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
    const coinTimes = Object.keys(coinValues);
    let updatedCoinValues = {};
    coinTimes.forEach((key) => {
      updatedCoinValues[key] = coinValues[key].map((time) => {
        return {
          time: time.time,
          value: !chartColor
            ? (1 / time.value).toFixed(3)
            : Math.floor(1 / time.value),
        };
      });
    });
    setCoinValues(updatedCoinValues);
    setChartColor((prev) => !prev);
  }

  return (
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
                src={bnbLogo}
                alt="coin-1-logo"
                height="20px"
                width="20px"
              />
              <img
                src={cakeLogo}
                alt="coin-2-logo"
                height="20px"
                width="20px"
              />
              <p>
                <span className="coin1">{chartColor ? "BNB" : "CAKE"}</span>/
                <span className="coin2">{chartColor ? "CAKE" : "BNB"}</span>
              </p>
              <button onClick={handleSwitchCoin} className="switch-btn">
                <FontAwesomeIcon
                  style={{
                    color: !chartColor ? turq : pinkish,
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
                {chartColor ? "BNB/CAKE" : "CAKE/BNB"}
                <span
                  style={{
                    color: !chartColor ? turq : pinkish,
                  }}
                  className="coin-difference"
                >
                  -2.022(%2.43)
                </span>
              </p>
            </div>
            <div onClick={handleClick} className="middle-right">
              <button
                className={buttonInfo === "24h" ? "btn clicked day" : "btn day"}
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
              coinValues={coinValues}
              chartColor={chartColor}
              chartStyle={chartStyle}
              turq={turq}
              pinkish={pinkish}
            ></ChartComponent>
          </div>
        </div>
      ) : null}
      <Calculator
        handleSwitchCoin={handleSwitchCoin}
        handleGraphVisibility={handleGraphVisibility}
        isGraphOn={isGraphOn}
        chartColor={chartColor}
      ></Calculator>
    </div>
  );
};

export default Graph;