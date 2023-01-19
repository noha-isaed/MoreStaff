const bodyParser = require('body-parser'); 
const express = require('express');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ limit : "10mb" , extended : true }));
app.use(bodyParser.urlencoded({ extended : false})) ; 
app.use(cors()) ;
app.use('/' , require('./src/routes/MoreSoftRoutes')) ; 

const PORT = process.env.PORT || 5008 ; 

try {
    app.listen(PORT , console.log(`Server started on port ${PORT}`));
} catch (err) {
    console.log("Error: " + err);
}

