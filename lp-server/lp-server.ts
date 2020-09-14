import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

const fs = require('fs');

import { QualisFactory } from './QualisFactory';

var lpserver = express();
let qualisFactory : QualisFactory = new QualisFactory();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

lpserver.use(allowCrossDomain);

lpserver.use(bodyParser.json());

// ========== REQUESTS ==========

lpserver.post('/qualis/adicionar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
    let fileEnconding : string = fs.readFileSync(req.file.path, 'binary');
    let typeQualis: string = req.body.typeQualis;
    let year: number = req.body.year;

    qualisFactory.readXls(typeQualis,year,fileEnconding);
    if (qualisFactory.fileContent) {
      qualisFactory.makeQualis();
      res.send({"success" : "planilha cadastrada com sucesso"});
    } else {
      res.send({"failure" : "planilha com formatacao invalida"});
    } 
})

lpserver.delete('/qualis/apagar/:type/:year', (req: express.Request, res: express.Response) => {
  if (typeof Number(req.params.year) === "number") {
    qualisFactory.delete(Number(req.params.year), <string>req.params.type)
    res.send({"success" : "qualis deletados com sucesso!"});
  } else {
    res.send({"failure" : "ano passado nao e valido"});
  }

})

lpserver.get('/qualis', (_, res: express.Response) => {
  res.status(200).json({ qualis: qualisFactory.get() })
})

var server = lpserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }