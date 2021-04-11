import React, { useState } from "react";

const ListingImageCarousel = (props) => {
  const [state, updateState] = useState({
    current_Photo_Index: 0,
  });
  console.log("Props" + props.listing);

  const listing_Photos = props.photos.map((images) => images.url);
  const current_Photo_Display = listing_Photos[state.currentPhotoIndex];
  return (
    <div>
      <img src={current_Photo_Display} alt="Listing Photos" />
    </div>
  );
};

export default ListingImageCarousel;
