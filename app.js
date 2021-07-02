const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');


// Landing Page 
app.use('/',express.static(path.join(__dirname,'static')));


//GET and POST Request

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

module.exports = app;