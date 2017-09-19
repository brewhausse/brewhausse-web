var fs = require('fs');
var _ = require('underscore');
var express = require('express');
var router = express.Router();
var path = require('path');

var data = [
    {
        id: "timelapse",
        imageUrl: "http://placehold.it/350x350",
        title: "Eclipse timelapse",
        short: "Raspberry Pi camera project used to take a timelapse of the 2017 eclipse."
    },
    {
        id: "raspi-cam",
        imageUrl: "http://placehold.it/350x350",
        title: "Raspi-cam project",
        short: "Creating an easy to use web app to setup timelapses."
    },
    {
        id: "ci",
        imageUrl: "http://placehold.it/350x350",
        title: "Continuous Integration",
        short: "TeamCity to the rescue!"
    }
];

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects', projects: data});
});

router.get('/:id', function(req, res, next) {

    var ret = {};

    var selectedProject = _.find(data, function(item){
        return item.id === req.params.id;
    });

    var pathToProject = path.join(__appRoot, "projects", req.params.id + ".html");
    console.log(pathToProject);
    fs.readFile(pathToProject, 'utf8', function(err, html){
        if (err) {
            throw err;
        }

        _.extend(ret, selectedProject, {
            html: html
        });

    });
        
    res.render('project', { project: ret });
});

module.exports = router;