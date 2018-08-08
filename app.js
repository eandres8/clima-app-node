const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;


let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `La temperatura de ${coors.direccion} es de ${temp}`;
}

getInfo(argv.direccion)
    .then((temp) => {
        console.log(temp);
    })
    .catch(e => console.log(e));