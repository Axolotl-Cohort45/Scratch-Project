import * as types from "../actionTypes";

const initialState = {
  wishList: [],
  footprints: [],
  searchResult: [],
};

const Reducers = (state = initialState, action) => {
  let filteredFootprints;

  switch (action.type) {
    case types.SEARCH_BREWERYS:

    case types.CLEAN_SEARCH_HISTORY:

    case types.SAVE_TO_WISHLIST:

    case types.ADD_FOOTPRINT:

    case types.EDIT_FOOTPRINT:
      filteredFootprints = state.footprints.filter((record) => {
        return record._id !== action.payload._id;
      });
      filteredFootprints = [...filteredFootprints, action.payload];
      return { ...state, footprints: filteredFootprints };

    case types.DELETE_FOOTPRINT:
      const { _id } = action.payload;
      filteredFootprints = [...state.footprints];
      let filteredFootprints = filteredFootprints.filter((record) => {
        return record._id !== _id;
      });

      return { ...state, footprints: filteredFootprints };

    case types.DISPLAY_FOOTPRINT:
      return {
        ...state,
        footprints: [...action.payload],
      };

    default:
      return state;
  }
};

export default Reducers;
