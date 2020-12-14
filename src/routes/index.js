const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {    
    res.render('index', {title: 'First Node.js website'});
});

router.get('/contact', (req,res) => {    
    res.render('contact', {title: 'Contact page'});
});

module.exports = router;