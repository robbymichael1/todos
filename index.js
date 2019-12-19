import express from 'express'
import routes from './routes'
import handlebars from 'express-handlebars'
import path from 'path'
import cors from 'cors'

const app = express()

//configuração Express.
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Rotas.
app.use(routes)

//View engine.
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

//Arquivos estáticos.
app.use(express.static(path.join(__dirname, 'public')))

// Instancia o servidor na porta 3333.
app.listen(3333, () => console.log("Listening on port 3333."))
