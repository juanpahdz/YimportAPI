import express from 'express'
import morgan from 'morgan'
import config from './config'
import videoRoutes from './routes/videos.routes'
import cors from 'cors'

const app = express()

app.set('port', config.PORT)

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())

app.use(videoRoutes)

export default app;