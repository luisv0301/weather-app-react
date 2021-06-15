export const initialValue = {
  cityName: "",
  city: [],
  cityInfo: null,
  fetchError: false,
  searchWarning: false,
  loading: false,
  theme: "light",
};

export default function Reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        fetchError: false,
        searchWarning: false,
        city: [],
        cityInfo: null,
      };

    case "DATA_RECEIVED":
      return {
        ...state,
        cityName: "",
        loading: false,
        city: action.payload,
        cityInfo: action.field,
      };

    case "ADD_CITY":
      return { ...state, cityName: action.payload };

    case "ERROR_EMPTY_SEARCH":
      return {
        ...state,
        fetchError: false,
        searchWarning: true,
        city: [],
        cityInfo: null,
      };

    case "ERROR_FETCHING":
      return { ...state, loading: false, fetchError: true };

    case "DARK_MODE":
      return { ...state, theme: "dark" };

    case "LIGHT_MODE":
      return { ...state, theme: "light" };

    default:
      return state;
  }
}
