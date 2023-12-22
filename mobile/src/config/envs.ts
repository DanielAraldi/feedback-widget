import { API_PORT, API_URL } from '@env';

export const env = {
  apiUrl: API_URL || process.env.API_URL,
  apiPort: API_PORT || process.env.API_PORT,
};
