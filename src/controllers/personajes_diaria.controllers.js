// Obtenemos el metodo Router de express
const database = require('../config/basedatos');
const { httpError } = require('../utils/error');
const { obtenerData } = require('../middlewares/auth');
const { matchedData } = require('express-validator');
//CONTROLADORES
const obtenerPersonajes = async (req, res) => {

    try {
        const db = await database();

        const sql = `
        SELECT 
                p.id_per,
                p.nombre,
                p.descripcion,
                p.edad,
                p.genero,
                p.companero,
                p.id_usuario,
                p.imagen
            FROM personajes_diaria p
        `;

        const [rows] = await db.query(sql);

        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        httpError(res, "ERROR_GET_Personaje");
    }
}
//  METODO PARA AGREGAR UNA Personaje
const agregarPersonaje = async (req, res) => {

    try {
        const body = matchedData(req);
        const { nombre, descripcion,  edad, genero, companero } = req.body;
        const token = req.headers.authorization;
        const { usuario } = obtenerData(token.split(" ").pop());
        const id_usuario = usuario.id;
        const db = await database();
        const sql = `
            INSERT INTO personajes_diaria(nombre, descripcion, edad, genero, companero, id_usuario, imagen)
            VALUES('${nombre}', '${descripcion}', ${edad}, ${genero},${companero}, ${id_usuario}, ${imagen})
        `;
        console.log(sql);
        const [resultado] = await db.query(sql);
        if (!resultado.insertId) {
            return res.json(
                
                {
                    "ok": false,
                    "msj": "no creaste personaje"
                }
            );
        }
        res.json(
            {
                "ok": true
            }
        );
    } catch (error) {
        return httpError(res, "ERROR_POST_PERSONAJE")
    }
}
//  METODO PARA OBTENER UNA Personaje POR ID 
const obtenerPersonaje = async (req, res) => {
    try {
        const { id } = req.params;
        const db = await database();
        const sql = `
        SELECT 
                p.id_per,
                p.nombre,
                p.descripcion,
                p.edad,
                p.genero,
                p.companero,
                p.id_usuario,
                p.imagen
            FROM personajes_diaria p
        WHERE p.id_per = ${id}
    `;
        const [rows] = await db.query(sql);
        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        return httpError(res, "ERROR_GET_UN_DATO_DE_PERSONAJE")
    }
}
//  METODO PARA OBTENER PERSONAJE POR NOMBRE
const obtenerPersonajeNombre = async (req, res) => {
    try {
        const { name } = req.params;
        const db = await database();
        const sql = `
        SELECT 
                p.id_per,
                p.nombre,
                p.descripcion,
                p.edad,
                p.genero,
                p.companero,
                p.id_usuario,
                p.imagen
            FROM personajes_diaria p
        WHERE p.nombre like '${name}%'

    `;
       //EJECUTAMOS LA CONSULTA 
       const [rows] = await db.query(sql);
       res.json(
           {
               "ok": true,
               data: rows
           }
       );
    } catch (error) {
        return httpError(res, "ERROR_GET_UN_SOLO_DATO_DE_PERSONAJE_BUSQUEDA_POR_NOMBRE")
    }
}
//  METODO PARA EDITAR PERSONAJE
const editarPersonaje = async (req, res) => {

    try {
        const { id } = req.params;
        const body = matchedData(req);
        const { nombre, descripcion, edad, genero, companero, imagen } = req.body;
        const db = await database();
        const sql = `
            UPDATE personajes_diaria SET
                nombre = '${nombre}',
                descripcion = '${descripcion}',
                edad = '${edad}',
                genero = '${genero}',
                companero = '${companero}',
                companero = '${imagen}'
            WHERE id_per = ${id}
        `;
        //EJECUTAMOS LA CONSULTA
        const [resultado] = await db.query(sql);        
        if (!resultado.affectedRows) {
            return httpError(res, "Error al editar Personaje");
        }
        //RETORNAMOS LA RESPUESTA
        return res.json({
            "ok": true,
            "msj": "Se edití correctamente el personaje"
        });

    } catch (error) {
        return httpError(res, "Error al editar el personaje");
    }
}
// METODO PARA ELIMINAR PERSONAJE
const eliminarPersonaje = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await database();
        const sql = `DELETE FROM personajes_diaria WHERE id_per = ${id}`;
        const [resultado] = await db.query(sql);

        if (!resultado.affectedRows) {
            return httpError(res, "No se pudo eliminar nada del personaje");
        }

        return res.json(
            {
                "ok": true,
                "msj": "El personaje fue eliminado correctamente"
            }
        )

    } catch (error) {
        return httpError(res, "ERROR EN DELETE PERSONAJE");
    }
}
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = {
    obtenerPersonajes,
    obtenerPersonaje,
    obtenerPersonajeNombre,
    agregarPersonaje,
    editarPersonaje,
    eliminarPersonaje               
}   