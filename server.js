//Install express server
const express = require('express');
const app = express();
const path = require('path');


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/download/:id', (req, res) => {
  var flag = req.params.id;
  console.log(flag);
  if(flag == 1){
    console.log('inside if');
    res.download(path.join(__dirname, "/dist/assets/Resume.docx"));
  }else{
    console.log('inside else');
    res.download(path.join(__dirname, "/dist/assets/Resume.pdf"));
  }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
