// Import express
import express from 'express';

// Instantiate an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a port number for our server to listen on 
const PORT = 3000;

// Define a "default" route for our home page ('/' is the route)
app.get('/', (req, res) => {

    // Send our home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Define a "thank you" route (we cahnged the action attribute in the form element in the home.html)
//      User only sees the name of the route
app.get('/thankyou', (req, res) => {

    // Send our thank you page
    res.sendFile(`${import.meta.dirname}/views/thank-you-page.html`);
});

// Tell the sever to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});