import React from "react";
import "./ListingImageDot.css";

//Three types of dot styles; active dots, normal dots, and dots on the side
const ListingPhotosDot = (props) => {
  if (props.selected) {
    return <div className="Active_Dot"></div>;
  } else if (props.edges) {
    return <div className="Side_Dot"></div>;
  } else {
    return <div className="Normal_Dot"></div>;
  }
};

export default ListingPhotosDot;
