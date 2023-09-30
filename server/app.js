//morgan = ferramenta para verificar rotas utilizadas + tempo de execu��o + tamanho da requisi��o + status caso haja erro - Tudo em terminal e tempo real

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/users');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads')); //torna a pasta uploads p�blica
app.use(bodyParser.urlencoded({extended: false})); //aceita apenas dados simples
app.use(bodyParser.json()); //aceita apenas json de entrada no body

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); //permite acesso a todos os servidores
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //permite que o header aceite esses tipos de dados

	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //permite que o header aceite esses tipos de m�todos
		return res.status(200).send({});
	}

	next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
	const error = new Error('Route Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.send({
		error:{
			message: error.message
		}
	});
});

module.exports = app;