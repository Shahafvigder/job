import axios from 'axios';
const END_POINT = process.env.REACT_APP_BASE_API_URL;

export const getAllphotos = async () => {
    try {
      const response = await axios.get(`${END_POINT}/photos/all`);
      const photos = response.data.hits;
      console.log("im here")
      console.log(photos);
      return photos;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
  
