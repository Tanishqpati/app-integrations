// src/app.js
import express from 'express';
import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
import githubRoutes from './routes/githubRoutes.js';
import calendlyRoutes from './routes/calendlyRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use((req, res, next) => {
  const currentTime = new Date().toLocaleTimeString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
});
// app.use('/api/users', userRoutes);
app.use('/api/github', githubRoutes);
app.use('/api/calendly', calendlyRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;