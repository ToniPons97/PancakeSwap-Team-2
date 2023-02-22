import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./NftDetails.scss";

const apiPath = "http://localhost:5050/api/nft";
function NftDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiPath);
      const jsonObj = await res.json();
      const item = jsonObj.filter((el) => el.id == id);
      setData(item);
    };
    fetchData();
  }, []);
  return (
    <div className="details-main">
      <div style={{ marginTop: "150px" }}></div>
      {data.map((el) => (
        <div>
          <div className="details-container">
            <img
              className="details-banner"
              src={require("../assets/images/nft-collection-images/" +
                el.banner)}
              alt=""
            />
            <img
              className="details-avatar"
              src={require("../assets/images/nft-collection-images/Avatars/" +
                el.avatar)}
              alt=""
            />
          </div>
          <div className="details-info">
            <div className="details-info-text">
              <h1>{el.name}</h1>
              <p>{el.detail}</p>
            </div>
            <div className="details-info-stats">
              <div className="details-stats-title">
                <p className="details-title">items</p>
                <p className="details-stat">{el.itemCount}</p>
              </div>
              <div className="details-stats-volume">
                <p className="details-title">Vol(BNB)</p>
                <p className="details-stat">{el.volume}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NftDetails;
