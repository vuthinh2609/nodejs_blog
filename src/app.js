const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
var methodOverride = require('method-override')

const route = require('./routes/index');
const db = require('./config/db')

//Connect Db
db.connect()
const app = express();
const port = 3000;

//Use Body Parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use Method Override
app.use(methodOverride('_method'))

//Template Engine
app.engine('.hbs', handlebars.engine({ 
  extname: '.hbs',
  helpers: {
    sum:(a,b)=>a+b
  }
}));
app.set('view engine', '.hbs');
app.set('views', './src/resource/views');

//Http Logger
//app.use(morgan('combined'))
//Use Static Files
app.use(express.static('src/public'));

//Route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});
