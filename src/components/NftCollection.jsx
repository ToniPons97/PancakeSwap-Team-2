import React, { useState, useEffect } from "react";
import bnbLogo from "../assets/icons/binance-coin-bnb-icon.svg";
import "./nft.scss";
const apiPath = "http://localhost:5000/api";

const bannerDir = "../assets/images/nft-collection-images/";
const avatarDir = bannerDir + "Avatars/";

function NftCollection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiPath);
      const jsonObj = await res.json();
      setData(jsonObj);
      console.log(jsonObj);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div style={{ marginTop: "150px" }}></div>
      <div className="main">
        {data.map((el) => {
          return (
            <div className="container" key={el.id}>
              <img
                className="banner"
                src={require("../assets/images/nft-collection-images/" +
                  el.banner)}
                alt=""
              />
              <img
                className="avatar"
                width={"100px"}
                src={require("../assets/images/nft-collection-images/Avatars/" +
                  el.avatar)}
                alt=""
              />
              <div className="text">
                <h2>{el.name}</h2>
                <p>
                  Volume <img width={"12px"} src={bnbLogo} alt="" /> {el.volume}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NftCollection;
