const http = require('http');
const mm = require('moment');

const srv = http.createServer((req, res) => {
    const hora = mm().format('HH');
    let saludo = '';
    if (hora>= 6 && hora<=12) {
        saludo = 'Buenos Días';
    } else if (hora>12 && hora<=19) {
        saludo = 'Buenas Tardes';
    } else {
        saludo = 'Buenas Noches';
    }
    res.end(saludo+' -  '+hora);
})

 const connectedServer = srv.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
 })


 
 