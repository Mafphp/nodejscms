const api = require('./api');
const admin = require('./admin');
const site = require('./site');

module.exports = (app) => {
    app.use('/api', api);
    app.use('/', site);
    app.use('/admin', admin);
}