import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseURL = import.meta.env.VITE_RAWG_API_BASE_URL;

if (!apiKey) {
  console.warn(
    'VITE_RAWG_API_KEY (RAWG API Key) is not defined. Please set it in your .env file.',
  );
}

if (!baseURL) {
  console.warn(
    'VITE_RAWG_API_BASE_URL is not defined. Please set it in your .env file.',
  );
}

export default axios.create({
  baseURL,
  params: {
    key: apiKey,
  },
});
