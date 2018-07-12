// require packages
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const passport = require('passport');


// created class app module for running app
class Application {
    constructor() {
        this.setupExpress();
        this.setupMongoConnection();
        this.configExpress();
        this.setupRoutes();
    }

    setupExpress() {
        http.createServer(app)
            .listen(port, () => console.log(`server running, listen to port ${port}`));
    }

    setupMongoConnection() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost:27017/nodejscms', {
            useNewUrlParser: true
        });
    }

    configExpress() {

        // express set
        app.set(express.static('public'));
        app.set('view engine', 'ejs');
        app.set('views', path.resolve('./resource/views'));

        // express use 
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(expressValidator());
        app.use(session({
            secret: 'mysecretkey',
            resave: true,
            saveUninitialized: true,
            store: new MongoStore({
                mongooseConnection: mongoose.connection
            })
        }));
        app.use(cookieParser('mysecretkey'));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());

    }

    setupRoutes() {
        require('./routes')(app);
    }
}

module.exports = Application;