// import { trackPromise } from 'react-promise-tracker'

export const setCities = (cities) => {
  return {
    type: "SET_CITIES",
    cities,
  };
};

export const loadingCities = () => ({
  type: "LOADING_CITIES",
});

export const getCities = () => {
  return (dispatch) => {
    return fetch(process.env.REACT_APP_API_URL + "/api/v1/cities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCities(response.data));
        }
      })
      .catch(console.log);
  };
};
