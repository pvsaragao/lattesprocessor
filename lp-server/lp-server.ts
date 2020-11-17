import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

const fs = require('fs');

import { Pesquisador } from '../common/pesquisador';
import { CadastroDePesquisadores } from './cadastroDePesquisadores';
import { PesquisadoresFactory } from './pesquisadoresFactory';

import { QualisFactory } from './QualisFactory';

import { Relatorio } from '../common/relatorio';
import { RelatorioFactory } from './relatoriosFactory';

var lpserver = express();

var cadastroPesquisadores = new CadastroDePesquisadores();
var pesqFactory = new PesquisadoresFactory(cadastroPesquisadores);

let qualisFactory: QualisFactory = new QualisFactory();

var relatorios: RelatorioFactory = new RelatorioFactory();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

lpserver.use(allowCrossDomain);

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

lpserver.post('/qualis/adicionar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
  let fileEnconding: string = fs.readFileSync(req.file.path, 'binary');
  let qualisType: string = req.body.qualisType;
  let qualisYear: number = Number(req.body.qualisYear);

  qualisFactory.readXls(qualisType, qualisYear, fileEnconding);
  if (qualisFactory.fileContent) {
    qualisFactory.makeQualis();
    res.send({ "success": "planilha cadastrada com sucesso" });
  } else {
    res.send({ "failure": "planilha com formatacao invalida" });
  }
})

lpserver.delete('/qualis/apagar/', (req: express.Request, res: express.Response) => {
  if (typeof Number(req.query.year) === "number") {
    qualisFactory.clean(<string>req.query.type, Number(req.query.year))
    res.send({ "success": "qualis deletados com sucesso!" });
  } else {
    res.send({ "failure": "ano passado nao e valido" });
  }

})

lpserver.get('/qualis', (_, res: express.Response) => {
  res.status(200).json(qualisFactory.get())
})

lpserver.get('/relatorios', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(relatorios.getRelatorios()));
})

lpserver.post('/relatorios', function (req: express.Request, res: express.Response) {
  var relatorio: Relatorio = <Relatorio>req.body;
  console.log(relatorio);
  var result = relatorios.addRelatorio(relatorio, qualisFactory.get());
  if (result) {
    res.send(result);
  } else {
    relatorios.findRelatorio(relatorio).generate(qualisFactory.qualis)
    res.send({ "failure": "O relatorio ja foi gerado." });
  }
})

lpserver.put('/relatorios/:id', function (req: express.Request, res: express.Response) {
  var relaId = parseInt(req.params.id);
  var relatorio = null;
  if (!isNaN(relaId) && isFinite(relaId)) {
    relatorio = relatorios.updateRelatorio(relaId, qualisFactory.get());
  }
  if (relatorio) {
    res.send(relatorio)
  } else {
    res.send({ "failure": "O relatorio nao pode ser atualizado" });
  }
})

lpserver.delete('/relatorios/:id', function (req: express.Request, res: express.Response) {
  var relaId = parseInt(req.params.id);
  if (!isNaN(relaId) && isFinite(relaId)) {
    var retId = relatorios.deleteRelatorio(relaId);
  }
  if (retId >= 0) {
    res.send({ "success": "O relatorio foi deletado com sucesso." });
  } else {
    res.send({ "failure": "O relatorio nao pode ser deletado" });
  }
})

var server = lpserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }
