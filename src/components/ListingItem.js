import React, { PureComponent } from "react";
import "./ListingItem.css";
import ListingImageCarousel from "./ListingImageCarousel";

class ListingItem extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.listing.id);
  }

  render() {
    //Format if the listing price is more than and equal to 1M
    const formatPrice = (price) => {
      if (price >= 1000000) {
        return "$" + Math.round((price * 100) / 1000000) / 100 + " M";
      } else {
        return this.props.listing.attributes.price_formatted.substring(1);
      }
    };

    //Getting the attributes from the listing data
    const address_line1 = this.props.listing.address_line_1;
    const address_line2 = this.props.listing.address_line_2;
    const listing_price = formatPrice(this.props.listing.attributes.price);
    const attributes_bed = this.props.listing.attributes.bedrooms_formatted;
    const attributes_bath = this.props.listing.attributes.bathrooms_formatted;
    const attributes_sqft = this.props.listing.attributes.area_size_formatted;
    const listing_photos = this.props.listing.photos;
    const property_type = this.props.listing.sub_category_formatted.toUpperCase();

    return (
      <div className="ListingCard">
        <div>
          <ListingImageCarousel photos={listing_photos} />
        </div>
        <div className="ListingCard_Type">{property_type} FOR SALE</div>
        <div className="ListingCard_Price">{listing_price}</div>
        <div className="ListingCard_Details">{address_line1}</div>
        <div className="ListingCard_Details">{address_line2}</div>
        <div className="ListingCard_Details">
          {attributes_bed}&nbsp;&nbsp;{attributes_bath}&nbsp;&nbsp;
          {attributes_sqft}
        </div>
      </div>
    );
  }
}

export default ListingItem;
