import axios from "axios";

const API_KEY = '37238562-5ffe15b4bded6c1d7bc3e5140';

axios.defaults.baseURL = `https://pixabay.com/api/`;

 const fetchPixabay = async (query, page)  => {
  const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
return response.data
}

export default  fetchPixabay;