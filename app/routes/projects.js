var express = require('express');
var router = express.Router();

var data = [
    {
        imageUrl: "http://placehold.it/150x150",
        title: "Eclipse timelapse",
        short: "Raspberry Pi camera project used to take a timelapse of the 2017 eclipse.",
        content: "Content goes here..."
    },
    {
        imageUrl: "http://placehold.it/150x150",
        title: "Web interface for raspi-cam project",
        short: "Creating an easy to use web app to setup timelapses.",
        content: "Content goes here..."
    },
    {
        imageUrl: "http://placehold.it/150x150",
        title: "Continuous Integration",
        short: "TeamCity to the rescue!",
        content: "Content goes here..."
    }
];

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects', projects: data});
});

module.exports = router;