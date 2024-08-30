import dotenv from 'dotenv';
import express from 'express';
import userRoutes from 'routes/userRoutes.js';
import githubRoutes from 'routes/githubRoutes.js';
import dropboxRoutes from 'routes/dropboxRoutes.js';
import todoistRoutes from 'routes/todoistROutes.js';

dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App Routes
app.use('/api/users', userRoutes);
app.use('/api/github', githubRoutes);
app.use('/api/dropbox', dropboxRoutes);
app.use('/api/todoist', todoistRoutes);

// Middleware for handeling errors
app.use(errorHandeler);

app.listen(PORT, ()=>{
    console.log(`Running on port`, PORT);
})
