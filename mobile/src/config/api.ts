import axios from 'axios';

import { env } from './envs';

export const api = axios.create({
  baseURL: env.apiUrl,
});
