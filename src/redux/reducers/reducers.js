import * as types from "../actionTypes";

const initialState = {
  wishList: [],
  footprints: [],
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_RESTAUANTS:

    case types.SAVE_TO_WISHLIST:

    case types.ADD_FOOTPRINT:

    case types.EDIT_FOOTPRINT:

    case types.DELETE_FOOTPRINT:

    default:
      return state;
  }
};

export default Reducers;
