const { request, response } = require('express');
const Person = require('../models/person.model');

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(person => {
            console.log(person);
            response.json(person);
        })
        .catch( err => {
            console.log(err)
            response.json(err)
        }
        )
}

module.exports.getOnePerson = (request,response) => {
    Person.findById({_id: request.params.id})
        .then(person => response.json(person))
        .catch((err) => {response.json(err)});
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err));
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}