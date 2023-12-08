import express from 'express';
import { bodyJson, envs, setupCors } from './config';
import { setupRoutes } from './routes';

const app = express();
const { port } = envs;

setupCors(app);
bodyJson(app);
setupRoutes(app);

app.listen(port, () => console.log('Feedback Widget server is running!'));
