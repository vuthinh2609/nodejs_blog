import express from 'express'
import {engine} from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = 3000

//Template Engine
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './src/resource/views')

//Http Logger
app.use(morgan('combined'))
//Use Static Files
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})