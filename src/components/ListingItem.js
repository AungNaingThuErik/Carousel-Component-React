import React, { PureComponent } from "react";
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
    //Getting some of the attributes froms the listing data
    const address_line1 = this.props.listing.address_line_1;
    const address_line2 = this.props.listing.address_line_2;
    const main_category = this.props.listing.main_category;
    const attributes_bed = this.props.listing.attributes.bedrooms_formatted;
    const attributes_bath = this.props.listing.attributes.bathrooms_formatted;
    const attributes_sqft = this.props.listing.attributes.area_size_formatted;
    const listing_photos = this.props.listing.photos;
    const property_type = this.props.listing.sub_category_formatted.toUpperCase();
    const { isTest } = this.props.listing;
    // return <p onClick={this.onClick}>{isTest ? "Test" : "Real"}</p>;
    // <p onClick={this.onClick}>{isTest ? "Test" : "Real"}</p>

    return (
      <div>
        <p onClick={this.onClick}>{address_line1}</p>
        <p onClick={this.onClick}>{address_line2}</p>
        <p onClick={this.onClick}>{main_category}</p>
        <p onClick={this.onClick}>{attributes_bed}</p>
        <p onClick={this.onClick}>{attributes_bath}</p>
        <p onClick={this.onClick}>{attributes_sqft}</p>
        <p onClick={this.onClick}>{property_type}</p>
        <ListingImageCarousel listing_photos={this.listing_photos} />
        {/* <div>
          {listing_photos.map((photos, i) => (
            <img src={photos.url} alt="listing photos" key={i} />
          ))}
        </div> */}
        <hr />
        <br />
      </div>
    );
  }
}

export default ListingItem;
