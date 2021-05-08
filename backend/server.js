import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFount, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running just fine...')
})

app.use('/api/products', productRoutes)
app.use(notFount)
app.use(errorHandler)

const PORT = process.env.PORT || 5050

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
