import express from 'express';
import mongoose from 'mongoose';
//import bodyparser from 'body-parser';
import Cors from 'cors';
import Cards from './models/dbCards.js';
import register from './handlers/users.js';


//import cardSchema from './dbSchema/dbCards';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:APBI5rVUTTaz9P8T@cluster0.hwnnx.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());
//app.use(bodyparser.json());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endponts

//Register new account
app.post('/api/register', register);

//Upload name and image for tinder card
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

//Get tinder cards
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));