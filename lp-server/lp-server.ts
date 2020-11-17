import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

const fs = require('fs');

import { Pesquisador } from '../common/pesquisador';
import { CadastroDePesquisadores } from './cadastroDePesquisadores';
import { PesquisadoresFactory } from './pesquisadoresFactory';

var lpserver = express();
var cadastroPesquisadores = new CadastroDePesquisadores();
var pesqFactory = new PesquisadoresFactory(cadastroPesquisadores);

// add services here
  res.header('Access-Control-Allow-Origin', "*");

lpserver.use(bodyParser.json());

// ========== REQUESTS ==========

lpserver.get('/pesquisadores/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(cadastroPesquisadores.getPesquisadores()));
});

lpserver.post('/pesquisador/adicionar', upload.array('xmlFiles', 12), (req: express.Request, res: express.Response) => {
  let error = false;

  for (let i = 0; i < req.files.length; i++) {
    let xml_string = fs.readFileSync(req.files[i].path, 'binary');
    let p = pesqFactory.importLattes(xml_string);

    if (p === null) {
      error = true;
    }
  }

  if (!error) {
    res.send({
      success: 'Arquivos foram importados com sucesso',
    })
    return;
  }

  res.send({
    failure: 'Houve um erro ao importar os arquivos',
  })
});

lpserver.post('/pesquisador/atualizar', upload.array('xmlFiles', 12), (req: express.Request, res: express.Response) => {
  let error = false;

  for (let i = 0; i < req.files.length; i++) {
    let xml_string = fs.readFileSync(req.files[i].path, 'binary');
    let p = pesqFactory.updateLattes(xml_string);

    if (p === null) {
      error = true;
    }
  }

  if (!error) {
    res.send({
      success: 'Arquivos foram importados com sucesso',
    })
    return;
  }

  res.send({
    failure: 'Houve um erro ao importar os arquivos',
  })
});

var server = lpserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }
