const express = require('express');
const mongoose = require('mongoose');


const {graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

mongoose.connect('mongodb://localhost/graphql-test')
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

// MongoDB Models
const Car = require('./models/Car');


//settings
app.set('port', process.env.PORT || 3000);

// 
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// Routes
app.use('/graphql', express.json(), graphqlExpress({
    schema,
    context: {
        Car
    }
}));

// Interfaz Gráfica
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(app.get('port'), () => { console.log('server on port 3000')});