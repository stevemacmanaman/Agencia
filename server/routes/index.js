const express = require('express');
const router = express.Router();

/*controladores*/

const nosotrosController = require('../controllers/nosotrosController');
const homecontroller = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){
    router.get('/',homecontroller.consultasHomePage);    
    router.get('/nosotros',nosotrosController.infoNosotros);
    router.get('/viajes',viajesController.mostrarViajes);
    //nos guarda el id de la ventana
    router.get('/viajes/:id',viajesController.mostrarViaje);

    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);

    //cuando se llena el formulario
    router.post('/testimoniales',testimonialesController.agregarTestimonial);
    return router;
}