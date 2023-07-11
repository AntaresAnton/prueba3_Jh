//  Importamos el validador de express
const { check } = require('express-validator');
const { validadorResultado } = require('../utils/validacion');
// Validar los datos de entrada de las peticiones
const validadorPersonajes = [
    check('nombre')
        .exists().withMessage("Favor ingresar nombre de la Personaje en JSON")
        .notEmpty().withMessage("Este campo no puede venir vacio")
        .isLength({min: 3, max: 64}).withMessage("Este campo debe etnner un minimo de 3 y un maximo 64"),
    check('descripcion')
        .exists().withMessage("Favor ingresar descripcion en JSON")
        .notEmpty().withMessage("Este campo no puede venir vacio"),
    check('edad')
        .exists().withMessage("Favor ingresar plataforma en JSON")
        .notEmpty().withMessage("Este campo no puede venir vacio")
        .isInt({min: 1}).withMessage("Favor solo debe ingresar numeros"),
    check('genero')
        .exists().withMessage("Favor debe ir el atributo genero")
        .notEmpty().withMessage("Este campo debe venir con informacion")
        .isInt({ min: 0, max: 1 }).withMessage("Favor colocar 1 si es verdadero o 0 si es falso"),
    check('companero')
        .exists().withMessage("Favor debe ir el atributo companero")
        .notEmpty().withMessage("Este campo debe venir con informacion")
        .isInt({ min: 0, max: 1 }).withMessage("Favor colocar 1 si es verdadero o 0 si es falso"),
    check('imagen')
        .exists().withMessage("Favor ingresar una imagen")
        .notEmpty().withMessage("Este campo no puede venir vacio"),
    (req, res, next) => {
        return validadorResultado(req, res, next);
    }
];
//  Exportamos el validador
module.exports = {
    validadorPersonajes
}