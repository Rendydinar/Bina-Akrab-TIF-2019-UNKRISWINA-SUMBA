const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine' ,'ejs');


app.use(express.json());
app.use(cors());
app.use(express.static('public'));


// Routes
app.use(require('./routes'));


app.listen(port, () => console.log(`server running on port ${port}`));
