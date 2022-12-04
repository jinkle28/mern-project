import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect("mongodb+srv://jinkle28:Sony960906@mern-project1.dlsbjln.mongodb.net/?retryWrites=true&w=majority"
);
console.log('MongoDb is connected');

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
});