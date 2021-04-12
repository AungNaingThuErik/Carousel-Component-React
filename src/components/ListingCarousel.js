import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListingItem from "./ListingItem";
import { fetchData } from "../actions/listings";
import "./ListingCarousel.css";

function mapStateToProps(state) {
  return {
    listings: state.listings.listings,
    firstRender: state.listings.firstRender,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData);
    },
  };
}

class ListingCarousel extends Component {
  static propTypes = {
    listings: PropTypes.object,
    firstRender: PropTypes.bool,
  };

  constructor(props) {
    super();
    this.state = {
      index: 0,
      listings: props.listings,
      isTest: [],
      firstRender:
        typeof props.firstRender !== "undefined" ? props.firstRender : true,
    };
    this.updateListing = this.updateListing.bind(this);
    this.nextListing = this.nextListing.bind(this);
    this.previousListing = this.previousListing.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.listings !== this.props.listings) {
      this.setState((state) => {
        return {
          ...this.state,
          listings: nextProps.listings,
          firstRender: nextProps.firstRender,
        };
      });
    }
  }

  updateListing(id) {
    this.setState({
      ...this.state,
      listings: this.state.listings.map((listing) => {
        const isTest = listing.id === id;
        if (!isTest) return listing;
        return {
          ...listing,
          isTest,
        };
      }),
    });
  }

  //update the current listings to show the next listings
  nextListing() {
    //display the current listings if it is within the limit of 4 listings
    if (this.state.index >= this.state.listings.length - 4) {
      this.props.fetchData();
    }

    //update the listing index to the next 4 index
    this.setState({
      ...this.state,
      index:
        this.state.index + 4 >= this.state.listings.length
          ? this.state.index + 4 - this.state.listings.length
          : this.state.index + 4,
    });
  }

  //update the current listings to show the previous listings
  previousListing() {
    this.setState({
      ...this.state,
      index:
        this.state.index - 4 >= 0
          ? this.state.index - 4
          : this.state.index - 4 + this.state.listings.length,
    });
  }

  render() {
    const { listings } = this.state;

    if (this.state.firstRender) {
      this.props.fetchData();
    }

    if (!listings) return null;
    console.log("LISTINGS", listings);

    const items = listings.map((listing, index) => {
      return (
        <ListingItem
          key={index}
          listing={listing}
          onClick={this.updateListing}
        />
      );
    });

    // listing array with 4 slots to display 4 listings on the page
    // items get replaced once state is changed to show new listings
    let listings_arr = [];
    let num_Slot = 4;
    for (let i = 0; i < num_Slot; i++) {
      if (this.state.index < items.length) {
        listings_arr.push(items[this.state.index + i]);
      } else {
        listings_arr.push(items[(this.state.index + i) % items.length]);
      }
    }

    return (
      <div className="ListingCarousel">
        <div className="ListingCarousel_Header">
          <div className="ListingCarousel_Header_Row">
            <div className="ListingCarousel_Header_Label">
              Listings with videos
            </div>
            <a
              href="https://www.99.co/singapore/sale?property_segments=residential"
              className="ListingCarousel_Header_Link"
            >
              See all
            </a>
          </div>
        </div>
        <div className="ListingCarousel_Container">
          <div className="ListingCarousel_Container_Wrapper">
            <div className="ListingCarousel_Item">{listings_arr[0]}</div>
            <div className="ListingCarousel_Item">{listings_arr[1]}</div>
            <div className="ListingCarousel_Item">{listings_arr[2]}</div>
            <div className="ListingCarousel_Item">{listings_arr[3]}</div>
          </div>
        </div>
        <div className="ListingCarousel_Footer">
          <div className="ListingCarousel_Footer_Wrapper">
            <div className="ListingCarousel_Button">
              <div onClick={this.previousListing}>Previous</div>
            </div>
            <div className="ListingCarousel_Button">
              <div onClick={this.nextListing}>Next</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCarousel);
