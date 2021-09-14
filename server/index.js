import express from 'express';
import cors from 'cors';
import posts from './routers/post.router.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI =
  'mongodb+srv://khanhcoluy:khanhcoluy123@cluster0.jzwqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });
