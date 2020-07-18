const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//  CONNECT To Database
connectDB();

console.log("this is a test")

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Well, hello there!'));

app.use('/api/wish', require('./routes/api/wish'));
app.use('/api/purchase', require('./routes/api/purchase'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

// Serve static assets in production

// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(_dirname, 'client, build, index.html'))
//     })
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));