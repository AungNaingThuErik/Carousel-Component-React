import React, { Component } from "react";

class ListingImageCarousel extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentPhotoIndex: 0,
    //   currentDotIndex: 0,
    // };
  }
  //   getPhoto() {
  //     this.props.map((photos) => photos.url);
  //   }
  render() {
    // const listingPhotos = this.props.map((photos) => photos.url);

    return (
      <div>
        {this.props.listing.photos.map((pic, i) => (
          <img src={pic.url} alt="listing photos" key={i} />
        ))}
      </div>
    );
  }
}
export default ListingImageCarousel;
