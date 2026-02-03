import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Ta rodando')
})
app.get('/oi', (req, res) => {
  res.send('Eu acho')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})