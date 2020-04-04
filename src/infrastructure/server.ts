import express from 'express'
import router from './router'
import bodyParsar from 'body-parser'

const app = express()

app.use(bodyParsar.urlencoded({ extended: false }))
app.use(bodyParsar.json())

app.use('/api', router)

app.listen(3000)

export default app
