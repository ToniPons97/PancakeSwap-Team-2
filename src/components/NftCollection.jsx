import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bnbLogo from "../assets/icons/binance-coin-bnb-icon.svg";
import "./nft.scss";
import { Helmet } from "react-helmet-async";



const apiPath = "http://localhost:5050/api/nft";

const bannerDir = "../assets/images/nft-collection-images/";
const avatarDir = bannerDir + "Avatars/";

function NftCollection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiPath);
      const jsonObj = await res.json();
      setData(jsonObj);
      //console.log(jsonObj);
    };
    fetchData();
  }, []);

  const handleSort = (e) => {
    const value = e.target.value;
    let newArr = [];
    if (value === "Volume") {
      newArr = data.sort((a, b) => b.volume - a.volume);
      setData(newArr);
    } else if (value === "Items") {
      newArr = data.sort((a, b) => b.itemCount - a.itemCount);
      setData(newArr);
    } else {
      newArr = data.sort((a, b) => a.id - b.id);
      setData(newArr);
    }
  };
  return (
    <div className="body">
      <Helmet>
        <title>Collections | PancakeSwap</title>
      </Helmet>
      <div className="top-margin" style={{ marginTop: "150px" }}></div>
      <div className="title">
        <h1>Collections</h1>
      </div>
      <div className="sort">
        <p>Sort By</p>
        <select onChange={handleSort} name="sort-nfties" id="">
          <option value="Collection">Collection</option>
          <option value="Volume">Volume</option>
          <option value="Items">Items</option>
        </select>
      </div>
      <div className="main">
        {data.map((el) => {
          return (
            <Link key={el.id} to={`/Collections/${el.id}`}>
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
                    Volume <img width={"12px"} src={bnbLogo} alt="" />{" "}
                    {el.volume}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NftCollection;
