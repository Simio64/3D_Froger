const express = require('express')
const router = express.Router()
const control = require('../controler/controler')
const control_admin = require('../controler/controler_admin')
const {validar_session} = require('../controler/controler_admin')

router.get('/', control.main)
router.get('/producto/:id', control.producto)
router.get('/contacto', control.contacto)
router.get('/servicios',control.servicios)
router.get('/nuevo',control.buscar_nuevo)
router.get('/carrito',control.carrito)
router.get('/carrito/:id',control.busqueda_producto)
router.get('/lista/:categoria',control.busqueda_categoria)
router.get('/categorias',control.categorias)
router.get('/comprar',control.comprar)
router.get('/pago',control.pago)
router.post('/pago',control.pago_post)
router.post('/categoria',control.busqueda_categoria_post)

router.get('/admin/',validar_session,control_admin.main)
router.get('/admin/consultar',validar_session,control_admin.consultar)
router.get('/admin/add',validar_session,control_admin.add)
router.get('/admin/update/:id',validar_session,control_admin.update)
router.post('/admin/',control_admin.login)
router.post('/admin/add',validar_session,control_admin.add_post)
router.post('/admin/update/:id',validar_session,control_admin.update_post)
router.delete('/admin/',validar_session,control_admin.delete)

module.exports = router