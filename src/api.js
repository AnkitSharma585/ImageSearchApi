import axios from 'axios';

const SearchImages = async (term) => {
  const response = await axios('https://api.unsplash.com/search/photos', {
    params: {
      query: term,
    },
    headers: {
      Authorization: 'Client-ID Jdw6Q9Pq0ZsfBbCa6y-STW-2j_RuqL8ZsRo_KX9UoJE',
    },
  });
  return response.data.results;
};
export default SearchImages;
