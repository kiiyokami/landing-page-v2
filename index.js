const Router = require('./src/Router.js');

new Router()
    .load()
    .catch(console.error);