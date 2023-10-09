const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'busuhwwiumur94gftjs8-mysql.services.clever-cloud.com',
  user: 'umuacm1goyygasia',
  password: '6A2uNPjpyhM242V7iQRs',
  database: 'busuhwwiumur94gftjs8',
});


/*const db = mysql.createConnection({
  host: 'dbdev.kinal.edu.gt',
  user: 'diegobarrascout',
  password: 'y%XNvghnp3;P2Zy$Us~4',
  database: 'finalTaller',
});*/

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});

module.exports = db;