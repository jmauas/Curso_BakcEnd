const mm = require('moment');
const hoy = mm();
console.log("HOy es: ", hoy.format('DD/MM/YYYY HH:mm:ss'))
const nacimiento = mm('1975-06-26 15:30');
console.log('Nací el ', nacimiento.format('DD/MM/YYYY HH:mm:ss'))
console.log('Desde mi Nacimiento pasaron  ', hoy.diff(nacimiento, 'days'), 'dias')
console.log('Desde mi Nacimiento pasaron  ', hoy.diff(nacimiento, 'years'), 'años')
