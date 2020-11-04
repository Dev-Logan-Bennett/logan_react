//Cors, express, stripe, uuid, nodemon
const cors = require('cors')
const express = require('express')
//TODO add a stripe key
const stripe = require('stripe')('sk_test_auVt1PyQTxFbeTdN8aMtACXS00X64MRaDm')
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
  res.send('It works on my website')
})

app.post('/payment', (req, res) =>{
  const {product, token} = req.body

  console.log('Product', product)
  console.log('Price', product.price)
  const idempontencyKey = uuid()
  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: `purchase of product.name`,
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country
        }
      }
    }, idempontencyKey)
  }).then(result => res.status(200).json(result))
  .catch(err => console.log(err))
})


//listen
app.listen(5000, () => console.log('Listening at port 5000'))


