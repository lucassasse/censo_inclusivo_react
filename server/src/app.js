const express = require('express');
const userRouter = require('./router/userRouter');
const bodyparser = require('body-parser');
const authRouter = require('./router/authRouter');
const cors = require('cors');

const app = express();
const port = 3500;
app.use(bodyparser.json());

app.use('/api', userRouter);
app.use('/api', authRouter);

//app.use(cors);

app.get("/", (req, res) => {
    res.send({

        nome: 'João',
        telefone: '47 999999999'
    });
});


app.listen(port, () => {
    console.log('Server online!!!')
});
