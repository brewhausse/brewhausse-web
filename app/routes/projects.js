var express = require('express');
var router = express.Router();

var data = [
    {
        id: 1,
        imageUrl: "http://placehold.it/150x150",
        title: "Eclipse timelapse",
        short: "Raspberry Pi camera project used to take a timelapse of the 2017 eclipse.",
        content: "Content goes here..."
    },
    {
        id: 2,
        imageUrl: "http://placehold.it/150x150",
        title: "Raspi-cam project",
        short: "Creating an easy to use web app to setup timelapses.",
        content: "Content goes here..."
    },
    {
        id: 3,
        imageUrl: "http://placehold.it/150x150",
        title: "Continuous Integration",
        short: "TeamCity to the rescue!",
        content: "Content goes here..."
    }
];

router.get('/', function(req, res, next) {
    console.log("/ route");
    res.render('projects', { title: 'Projects', projects: data});
});

router.get('/:id', function(req, res, next) {
    var selectedProject = data[req.params.id - 1];    
    res.render('project', { project: selectedProject });
});

module.exports = router;