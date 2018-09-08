const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();


const uri = 'mongodb://codemasher:mash123@ds123171.mlab.com:23171/codemash';
mongoose.connect(uri, {useNewUrlParser: true});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));