const axios = require("axios");

const apiKey = '25540812-faf2b76d586c1787d2dd02736&q=flowers'
const API_ENDPOINT = `https://pixabay.com/api/?key=${apiKey}`;

exports.getAllphotos = async () => {
  const { data } = await axios.get(API_ENDPOINT);
  return data;
};
