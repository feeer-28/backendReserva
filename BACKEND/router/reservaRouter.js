const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reservaController');

router.get('/reservas', ReservaController.listarReserva);
router.post('/reservas', ReservaController.crearReserva);
router.put('/reservas/:id', ReservaController.actualizarReserva);
router.delete('/reservas/:id', ReservaController.eliminarReserva);


module.exports = router;