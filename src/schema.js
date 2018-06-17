

const Schema =
 `
    type Car {
        _id: String!
        name: String
    }

    type Query {
        allCars: [Car!]!
    }

    type Mutation {
        createCar(name: String!): Car!
    }
`;

module.exports = Schema;