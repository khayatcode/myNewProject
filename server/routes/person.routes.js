const PersonController = require('../controllers/person.controller');

// try seeing what happens when you do POST/PUT/DELETE in chrome browser
module.exports = app => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getOnePerson);
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);
}