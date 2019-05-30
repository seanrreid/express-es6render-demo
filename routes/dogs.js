const express = require('express'),
    router = express.Router();

const listOfFamousDogs = [
    {name: 'Scooby-Doo', breed: 'Great Dane'},
    {name: 'Snoop Doggy Dog', breed: 'Real MF\'n G'},
    {name: 'Lassie', breed: 'Collie'},
    {name: 'Cujo', breed: 'Saint Bernard'},
    {name: 'Ace the Bathound', breed: 'Rottweiler'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', {
        locals: {
            title: 'Woof Woof!',
            listOfDogs: listOfFamousDogs
        },
        partials: {
            partial: 'partial-dogs'
        }
    });
});

module.exports = router;
