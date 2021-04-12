import React, { useState } from "react";
import leftArrow from "../assets/images/left_arrow.png";
import rightArrow from "../assets/images/right_arrow.png";
import ListingImageDot from "./ListingImageDot";
import "./ListingImageCarousel.css";

// Image carousel for each listing card
const ListingImageCarousel = (props) => {
  const [state, updateState] = useState({
    index: 0,
    dotsIndex: 0,
  });

  // Getting the image data from the props
  const images = props.photos.map((pic) => pic.url);
  const chosenPic = images[state.index];
  //Limit the dots to number of images in the data
  const maxDots = images.length >= 5 ? 5 : images.length;

  // Function to update the state and chage the image in the carousel
  const updateIndexLeft = () => {
    const newIndex =
      state.index - 1 >= 0 ? state.index - 1 : state.index - 1 + images.length;
    updateState({
      index: newIndex,
      dotsIndex:
        newIndex === 0
          ? 0
          : newIndex === images.length - 1
          ? images.length - maxDots
          : newIndex <= state.dotsIndex
          ? state.dotsIndex - 1
          : state.dotsIndex,
    });
  };

  // Function to update the state and chage the image in the carousel
  const updateIndexRight = () => {
    const newIndex =
      state.index + 1 >= images.length
        ? state.index + 1 - images.length
        : state.index + 1;
    updateState({
      index: newIndex,
      dotsIndex:
        newIndex === images.length - 1
          ? state.dotsIndex
          : newIndex === 0
          ? 0
          : newIndex >= state.dotsIndex + maxDots - 1
          ? state.dotsIndex + 1
          : state.dotsIndex,
    });
  };

  // Creating an array of the dot indicators below the photos based on the image data
  let dotsArr = [];
  for (let i = state.dotsIndex; i < state.dotsIndex + maxDots; i++) {
    dotsArr.push(
      <ListingImageDot
        key={i}
        selected={state.index === i}
        edges={
          (i === state.dotsIndex && i > 0) ||
          (i === state.dotsIndex + maxDots - 1 && images.length !== i + 1)
        }
      />
    );
  }

  return (
    <div className="ListingImages_Container">
      <img className="ListingImages" alt="Property" src={chosenPic} />
      <div className="ListingImages_Arrow">
        <div className="ListingImages_Arrow_Left" onClick={updateIndexLeft}>
          <img
            className="ListingImages_Arrow_Img"
            src={leftArrow}
            alt="Previous"
          />
        </div>
        <div className="ListingImages_Arrow_Right" onClick={updateIndexRight}>
          <img
            className="ListingImages_Arrow_Img"
            src={rightArrow}
            alt="Next"
          />
        </div>
      </div>
      <div className="ListingImages_Dot">{dotsArr}</div>
    </div>
  );
};

export default ListingImageCarousel;
