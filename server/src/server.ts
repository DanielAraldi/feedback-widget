import express from 'express';
import { bodyJson, envs } from './config';
import { setupRoutes } from './routes';

const app = express();
const { port } = envs;

bodyJson(app);
setupRoutes(app);

app.listen(port, () => console.log('Feedback Widget server is running!'));
