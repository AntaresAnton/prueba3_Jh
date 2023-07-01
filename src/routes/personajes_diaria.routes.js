// Obtenemos el metodo Router de express
const { Router } = require('express');
//CONTROLADORES
const { obtenerPersonajes,
    obtenerPersonaje,
    obtenerPersonajeNombre,
    agregarPersonaje,
    editarPersonaje,
    eliminarPersonaje } = require('../controllers/personajes_diaria.controllers');
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
const { TokenTrue } = require('../middlewares/auth');
const { validadorPersonajes } = require('../validators/personajes_diaria.validators');
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
const router = Router();
//RUTAS DE RECETAS
router.get('/', obtenerPersonajes);
router.post('/', [TokenTrue, validadorPersonajes], agregarPersonaje);
router.get('/:id', obtenerPersonaje);
router.get('/nombre/:name', obtenerPersonajeNombre);
router.put('/:id',TokenTrue, editarPersonaje);
router.delete('/:id',TokenTrue, eliminarPersonaje);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;