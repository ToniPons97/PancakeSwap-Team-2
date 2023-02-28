import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoBackLink from "./GoBackLink";
import "./NftDetails.scss";
import NotFound from './NotFound';

const apiPath = "http://localhost:5050/api/nft";
function NftDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`${apiPath}/${id}`);
    const jsonObj = await res.json();
    setData(jsonObj);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!data)
      fetchData();
  }, [data]);

  return (
    <>
      {
        data ? <div className="details-main">
                  <div style={{ marginTop: "150px" }}></div>
                  <GoBackLink linkText="All Collections" to="/Collections" />

                  <div key={data.id}>
                    <div className="details-container">
                      <img
                        className="details-banner"
                        src={require("../assets/images/nft-collection-images/" +
                          data.banner)}
                        alt=""
                      />
                      <img
                        className="details-avatar"
                        src={require("../assets/images/nft-collection-images/Avatars/" +
                          data.avatar)}
                        alt=""
                      />
                    </div>
                    <div className="details-info">
                      <div className="details-info-text">
                        <h1>{data.name}</h1>
                        <p>{data.detail}</p>
                      </div>
                      <div className="details-info-stats">
                        <div className="details-stats-title">
                          <p className="details-title">items</p>
                          <p className="details-stat">{data.itemCount}</p>
                        </div>
                        <div className="details-stats-volume">
                          <p className="details-title">Vol(BNB)</p>
                          <p className="details-stat">{data.volume}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              : <NotFound />
      }
    </>
  );
}

export default NftDetails;
