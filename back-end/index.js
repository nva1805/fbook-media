import express from "express";
const app = express();
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import commentRouter from './routes/comments.js';
import reactRouter from './routes/reacts.js';


// middleware
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/reacts', commentRouter)
app.use('/api/comments', reactRouter)


app.listen(8080, () => {
    console.log('app run at localhost:8080');
})






