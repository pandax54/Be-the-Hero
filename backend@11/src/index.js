
const express = require('express');
const cors = require('cors')
const routes = require('./routes');
// caminho relativo pois estamos nos referindo a uma file do projeto


const app = express();

app.use(cors());
app.use(express.json());
// as informações serão enviadas em formado json, isso permitirá que o express converta para formato object js
// tem que ser colocado antes das rotas

// para usarmos as rotas que agora estao em outro arquivo
app.use(routes);

app.listen(3333);


// initially use node index.js to run this application
// open in broser http://localhost:3333/