import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: '/uploads' });

import { CadastroDePesquisadores } from './cadastrodepesquisadores';


// add imports here

var lpserver = express();

// add services here

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

lpserver.use(allowCrossDomain);

lpserver.use(bodyParser.json());

// add reqs here

lpserver.post('/pesquisador/adicionar', upload.array('lattesFiles', 12), (req: express.Request, res: express.Response) => {
  console.log(req.files);
  // files can be seen under req.files
})

var server = lpserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }