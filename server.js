//Install express server
const express = require('express');
const app = express();
const path = require('path');


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/download/:id', (req, res) => {
  var flag = req.query['id'];
  if(flag == 1){
    res.download(path.join(__dirname, "/dist/assets/Resume.docx"));
  }else{
    res.download(path.join(__dirname, "/dist/assets/Resume.pdf"));
  }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
