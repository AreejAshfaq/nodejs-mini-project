const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Beauty Products" });
});

app.get('/products', (req, res) => {
    const products = [
        { name: 'Lipstick', price: '$10', description: 'Long-lasting lipstick.' },
        { name: 'Foundation', price: '$20', description: 'Flawless foundation.' },
        { name: 'Mascara', price: '$15', description: 'Volumizing mascara.' },
    ];
    res.render('products', { title: "Our Products", products });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact Us" });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Form Submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    res.send('Thank you for contacting us!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
