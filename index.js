const express = require('express');
const app = express();
const HOSTNAME = '0.0.0.0';
const PORT = 8000;


app.use(express.json());

app.get(
    '/',
    (req, res) => {
        res.status(200).send({
            'Its working! The API is working!': 'cool right?'
        })
    }
);


app.get(
    '/liftdata',
    (req, res) => {
        res.status(200).send({
            numOfLifts: 4,
            numOfFloors: 10
        })
    }
);


app.post(
    '/lift/:num',
    (req, res) => {
        const num = req.params;
        const {people} = req.body;

        res.send({
            floor: num.num,
            people: people
        })
    }
)





app.listen(
    PORT, 
    () => console.log(`The server is live on: http://${HOSTNAME}:${PORT}`)
);
