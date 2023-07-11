// Obtenemos el metodo Router de express
const { Router } = require('express');
//CONTROLADORES
const { agregarUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerTodo,
    obtenerUnoSolo } = require('./../controllers/usuario.controller');
const { TokenTrue } = require('./../middlewares/auth');
const { validadorUsuario } = require('./../validators/usuario.validators');
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
const router = Router();

router.get('', async (req, res) => {
    const data = await obtenerTodosUsuario();
    res.render('usuario/listar', { data });
});

//vista de agregar usuario
router.get('/agregar', (req, res) => {
    res.render('usuario/agregar');
});
//accion para agregar usuario
router.post('/agregarUsuario', async (req, res) => {
    await agregarUsuarioHtml(req);
    res.redirect('/usuario')
})

//vista para editar usuario
router.get('/editar/:id', async(req, res) => {
    const data = await obtenerUnoSoloHtml(req);
    console.log(data[0]);
    res.render('usuario/editar', {data: data[0]});
});

router.post('/editarUsuario/:id', async (req, res) => {
    const data = await editarUsuarioHtml(req);
    res.redirect('/usuario');
});

//accion para poder editarlo

//accion de eliminar
router.get('/eliminar/:id', async (req, res) => {
    const resultado = await eliminarUsuarioHtml(req);
    res.redirect('/usuario')
});

//  METODOS DE NUESTRA RUTA
router.get('/', TokenTrue, obtenerTodo);
router.get('/:id', TokenTrue, obtenerUnoSolo);
router.post('/', [validadorUsuario], agregarUsuario);
router.put('/:id', editarUsuario);
router.delete('/:id', eliminarUsuario);
//  EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;