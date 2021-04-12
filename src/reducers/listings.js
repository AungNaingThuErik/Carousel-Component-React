import { UPDATE_LISTINGS } from "../actions/listings";

export default function listings(state = [], action) {
  switch (action.type) {
    case UPDATE_LISTINGS:
      return {
        ...state,
        listings: action.listings,
        firstRender: false,
      };
    default:
      return state;
  }
}
