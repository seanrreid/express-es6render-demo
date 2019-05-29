const express = require('express');
const router = express.Router();
const ExecutivesModel = require('../models/ceos')

router.get('/', async function(req, res, next) {

    const allExecutives = await ExecutivesModel.getAll();
    
    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            executiveList: allExecutives
        },
        partials: {
            partial: 'partial-ceos',
        }
    });
});

module.exports = router;
