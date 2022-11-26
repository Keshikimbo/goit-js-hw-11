import axios from 'axios';

const KEY = '29186456-7097278d4e7000ffc71d3402d';
const API_URL = 'https://pixabay.com/api/';

export default async function fetchImages(query, page) {
  const FILTER_OPTIONS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
    q: query,
  };
  const response = await axios.get(API_URL, {
    params: FILTER_OPTIONS,
  });
  console.log(response.data);
  return response.data;
}