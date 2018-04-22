
const place = require('./place/place');

// AIzaSyAs5F011cS349aY31JCgPEhEeEqpIoqP_g

const argv = require('yargs').options( {
  direccion: {
    alias: 'd',
    desc: 'Direción de la ciudad para obtener el clima',
    demand: true,

  }
}).argv;

//console.log( argv.direccion );

place.getPlaceLatLng( argv.direccion )
     .then( resp => {
       console.log(resp);
     })
     .catch(e=> {
       console.log(e);
     });
