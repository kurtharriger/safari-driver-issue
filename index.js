var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'safari'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
