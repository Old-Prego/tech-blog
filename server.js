const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebarsexpress = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const usersession = {
    secret: 'Speak Friend and Enter',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(usersession));

const handlebars = handlebarsexpress.create({ helpers });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log(`App is launched and listening at https://localhost:${PORT}`);
    sequelize.sync({force: false});
});
