var express = require('express');
var router = express.Router();

var data = [
    {
        imageUrl: "http://923thedock.com/wp-content/uploads/2017/08/eclipse.jpg",
        title: "Eclipse timelapse",
        short: "Raspberry Pi camera project used to take a timelapse of the 2017 eclipse.",
        content: "Content goes here..."
    },
    {
        imageUrl: "http://i.imgur.com/8LaeZcN.png",
        title: "Web interface for raspi-cam project",
        short: "Creating an easy to use web app to setup timelapses.",
        content: "Content goes here..."
    },
    {
        imageUrl: "https://8sph.azureedge.net/media/Default/_Profiles/8f14fafe/ae24358d/integration.png?v=636119949010000000",
        title: "Continuous Integration",
        short: "TeamCity to the rescue!",
        content: "Content goes here..."
    }
];

router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects', projects: data});
});

module.exports = router;