const InfosDataBox = ({ boxTitle, boxPercentage, boxType }) => {
    return (
        <div className="data-box">
            <h3>{boxTitle}</h3>
            <span id="percentage">{boxPercentage}</span>
            <p>{boxType}</p>
        </div>
    );
}

export default InfosDataBox;