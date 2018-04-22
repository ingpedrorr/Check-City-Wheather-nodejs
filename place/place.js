
const axios = require('axios');

const getPlaceLatLng = async (addr) => {


   let encodedUrl = encodeURI( addr );

  // Make a request for a user with a given ID
  let resp = await  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyAs5F011cS349aY31JCgPEhEeEqpIoqP_g`)

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`Not Result for the city ${ addr }`);
  }

  let location = resp.data.results[0];
  let coords = location.geometry.location;

  return {
    address: location.formatted_address,
    lat: coords.lat,
    lng: coords.lng
  }
}

module.exports = {
  getPlaceLatLng
}
