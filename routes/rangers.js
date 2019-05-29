const express = require('express'),
    router = express.Router();

const rangerList = [
    {name: 'Jason', rank: 'Red Ranger'},
    {name: 'Billy', rank: 'Blue Ranger'},
    {name: 'Zack', rank: 'Black Ranger'},
    {name: 'Kim', rank: 'Pink Ranger'},
    {name: 'Trini', rank: 'Yellow Ranger'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', {
        locals: {
            title: 'Greetings Rangers!',
            rangerList: rangerList
        },
        partials: {
            partial: 'partial-rangers'
        }
    });
});

module.exports = router;
