// eslint-disable-next-line import/extensions
import { getRandomArrayItem } from './utils.js';

const keys = [
  'eytGsKDBCDmCxxwKsqDyCeFzLnq0eAdtiSkh_LZx9dQ',
  'htU-ZuWqwWBU4G8btJPmdEwX0TzlMQjHCZuqhF-r2E8',
  '4vhWeQNjmiH026af2QmcGyPAHnxQNTBSYCp9ALEvNuE',
];

// eslint-disable-next-line consistent-return
const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not OK: ${await response.text()}.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

const getImages = async (params) => {
  const options = {
    per_page: 8,
    orientation: 'landscape',
    client_id: getRandomArrayItem(keys),
    ...params,
  };
  const url = (`https://api.unsplash.com/search/photos?${new URLSearchParams(options)}`);
  const data = await fetchFromAPI(url);
  return data.results;
};

export default getImages;
