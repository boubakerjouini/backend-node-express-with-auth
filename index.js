// create express server with db connection
const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000
const api = require('./routes/index')

// const connection = require("./config/database");
app.use(express.json())
app.use('/api', api)
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

const prisma = new PrismaClient()

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
