const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'pk_test_51HQ5VcBqqboFJUhyTHCyUfq6US1x3D7lgh3FgLDUZpj6Mqhcja6qXVMQCKMi8vkm3gM5bm7K1NqWGkVTIOdQZhC400y2pxezvM')

//API 

// - App config
const app = express();

// -Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currenccy
        currency: "INR",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// - Listen command
exports.api = functions.https.onRequest(app)
// Example endpoint
// http://localhost:5001/challenge-1c2a3/us-central1/api

