import * as types from "../actionTypes";

export const fetchFootprints = (year) => {
  return async (dispatch) => {
    const reqBody = { userId: "test" };

    try {
      const response = await fetch("/api/footprints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });

      const data = await response.json();
      dispatch({ type: types.DISPLAY_FOOTPRINT, payload: data });
    } catch (error) {
      console.error("Error fetching footprint list:", error);
    }
  };
};

export const editFootprints = (updateInfo) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/footprints/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      });

      const data = await response.json();
      dispatch({ type: types.EDIT_FOOTPRINT, payload: data });
    } catch (error) {
      console.error("Error updating footprint list:", error);
    }
  };
};

export const deleteFootprints = (deleteInfo) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/footprints/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteInfo),
      });

      const data = await response.json();
      dispatch({ type: types.DELETE_FOOTPRINT, payload: data });
    } catch (error) {
      console.error("Error deleting footprint list:", error);
    }
  };
};
