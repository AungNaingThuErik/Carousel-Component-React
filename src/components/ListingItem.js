import React, { PureComponent } from "react";
import ListingImageCarousel from "./ListingImageCarousel";
import "./ListingItem.css";
class ListingItem extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.listing.id);
  }

  render() {
    //format if the listing price is more than and equal to 1M
    const priceFormat = (price) => {
      if (price >= 1000000) {
        return "$" + Math.round((price * 100) / 1000000) / 100 + "M";
      } else {
        return this.props.listing.attributes.price_formatted.substring(1);
      }
    };
    //Getting the attributes from the listing data
    const address_line1 = this.props.listing.address_line_1;
    const address_line2 = this.props.listing.address_line_2;
    const listing_price = priceFormat(this.props.listing.attributes.price);
    const main_category = this.props.listing.main_category;
    const attributes_bed = this.props.listing.attributes.bedrooms_formatted;
    const attributes_bath = this.props.listing.attributes.bathrooms_formatted;
    const attributes_sqft = this.props.listing.attributes.area_size_formatted;
    const listing_photos = this.props.listing.photos;
    const property_type = this.props.listing.sub_category_formatted.toUpperCase();
    // const { isTest } = this.props.listing;
    // return <p onClick={this.onClick}>{isTest ? "Test" : "Real"}</p>;
    // <p onClick={this.onClick}>{isTest ? "Test" : "Real"}</p>

    return (
      <div className="ListingCard">
        <div className="ListingCard_Photo">
          {/* {listing_photos.map((photos, i) => (
            <img src={photos.url} alt="listing photos" key={i} />
          ))} */}
        </div>
        <div className="ListingCard_Type">{property_type} FOR SALE</div>
        <div className="ListingCard_Price">{listing_price}</div>
        <div className="ListingCard_Details">{address_line1}</div>
        <div className="ListingCard_Details">{address_line2}</div>
        <div className="ListingCard_Details">
          {attributes_bed}&nbsp;&nbsp;{attributes_bath}&nbsp;&nbsp;
          {attributes_sqft}
        </div>
        <hr />
      </div>
    );
  }
}

export default ListingItem;
