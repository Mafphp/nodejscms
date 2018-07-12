const controller = require('../controller');

class indexController  extends controller{
    index(req, res) {
        console.log('Hello index');
    }
}

module.exports = new indexController();