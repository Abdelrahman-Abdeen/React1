import React from "react";
import mtImg from "../assets/star-empty.png";
import fullImg from "../assets/star-filled.png";

function StarIcon({ isFilled , onClick}) {
    const starIcon = isFilled ? fullImg : mtImg;
    return <img src={starIcon} className="card--favorite" onClick={onClick}/>;
}

export default StarIcon;