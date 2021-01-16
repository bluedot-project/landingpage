const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const mailer = require('./mail/mailer');

const dev = process.env.NODE_ENV !== 'production'
// const prod = process.env.NODE_ENV === 'production'
const app = next({ dev })
// const prodApp = next({ prod })
const handle = app.getRequestHandler()


app.prepare().then(() => {
// prodApp.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/api/contact', (req, res) => {
    const { email = '', name ='', message='', title='', phoneNumber='' } = req.body;
    console.log(req.body);

    mailer({ email, name, text: message, title, phoneNumber })
    .then(() => {
        console.log('success');
        res.send('success');
    })
    .catch((err) => {
        console.log('failed :', err);
        res.send('badddd');
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})

