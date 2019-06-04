const express = require('express');
const router = express.Router();
const ExecutivesModel = require('../models/ceos')

router.get('/', async (req, res, next) => {
    const allExecutives = await ExecutivesModel.getAll();
    
    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            executiveList: allExecutives // array response from our async request to the getAll() method
        },
        partials: {
            partial: 'partial-ceos',
        }
    });
});

router.post('/', (req,res) => {
    const { name, year } = req.body;
    
    ExecutivesModel.add(name, year)
    .then(async () => {
        const allExecutives = await ExecutivesModel.getAll();
        
        res.status(200).render('template', {
            locals: {
                title: 'Apple CEOs Updated',
                executiveList: allExecutives
            },
            partials: {
                partial: 'partial-ceos',
            }
        });
    })
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

router.post('/addMany', (req, res) => {
    const execArray = [
        {name: 'Red Ranger', year: 1993},
        {name: 'Blue Ranger', year: 1994},
        {name: 'Pink Ranger', year: 1995}
    ]

    execArray.map(execData => {
        const { name, year } = execData;
        ExecutivesModel.add(name, year)
        .then(() => {
            console.log("added executive", name, year);
        })
    })
})

module.exports = router;
