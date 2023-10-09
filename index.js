const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/controllers/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/generarEnunciado', (req, res) => {
  const { carne } = req.body;

  if (carne.length === 7) {
    const numeroAleatorio =  Math.floor(Math.random() * 15) + 1;
    const sp1 = 'CALL sp_registrarAsignacionEnunciado(?, ?)';
    const sp2 = 'CALL sp_buscarEnunciado(?)';

    db.query(sp1, [carne, numeroAleatorio], (err1) => {
      if (err1) {
        console.error('Error al generar el enunciado:', err1);
        res.status(500).json({success: false, error: 'Error al generar el enunciado ' + err1 });
      } else {
        db.query(sp2, [numeroAleatorio], (err2, results) => {
          if (err2) {
            console.error('Error al buscar el enunciado:', err2);
            res.status(500).json({success:false, error: 'Error al buscar el enunciado ' + err2 });
          } else {
            const enunciado = results[0][0];
            res.status(200).json({success: true, enunciado});
          }
        });
      }
    });
  } else {
    res.status(400).json({success: false, error: 'Carné incorrecto' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});