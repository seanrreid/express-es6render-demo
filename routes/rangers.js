const express = require('express'),
    router = express.Router();

const rangerList = [
    {name: 'Jason', rank: 'Red Ranger', link: '/rangers/red_ranger'},
    {name: 'Billy', rank: 'Blue Ranger', link: 'https://google.com/search?q=blue+ranger'},
    {name: 'Zack', rank: 'Black Ranger', link: 'https://google.com/search?q=black+ranger'},
    {name: 'Kim', rank: 'Pink Ranger', link: 'https://google.com/search?q=pink+ranger'},
    {name: 'Trini', rank: 'Yellow Ranger', link: 'https://google.com/search?q=yellow+ranger'}
]

function changeName(id) {
    let name = '';
    if (id === 'red_ranger') {
        name = 'Red Ranger';
    } else {
        name = `No color given, you're not a ranger!`;
    }
    return name;
}

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

router.get('/:ranger_name', (req, res, next) => {
    console.log(req.params);
    const rangerName = req.params.ranger_name;
    
    res.send(changeName(rangerName)).end();

});

module.exports = router;
