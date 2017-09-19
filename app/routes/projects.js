var fs = require('fs');
var _ = require('underscore');
var express = require('express');
var router = express.Router();
var path = require('path');

var data = [
    {
        id: "timelapse",
        imageUrl: "/images/solar.projector.350x350.jpg",
        title: "Eclipse timelapse",
        short: "Raspberry Pi camera project used to take a timelapse of the 2017 eclipse."
    }
    // ,{
    //     id: "raspi-cam",
    //     imageUrl: "http://placehold.it/350x350",
    //     title: "Raspi-cam project",
    //     short: "Creating an easy to use web app to setup timelapses."
    // },
    // {
    //     id: "ci",
    //     imageUrl: "http://placehold.it/350x350",
    //     title: "Continuous Integration",
    //     short: "TeamCity to the rescue!"
    // }
];

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects', projects: data});
});

router.get('/:id', function(req, res, next) {

    var viewModel = {};

    var selectedProject = _.find(data, function(item){
        return item.id === req.params.id;
    });

    var pathToProject = path.join(__appRoot, "projects", req.params.id + ".html");
    fs.readFile(pathToProject, 'utf8', function(err, data){
        if (err) {
            throw err;
        }

        _.extend(viewModel, selectedProject, {
            html: data
        });

        res.render('project', {project: viewModel});
    });
});

module.exports = router;