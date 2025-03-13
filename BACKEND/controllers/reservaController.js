const ReservaServices = require('../services/reservaService');

class ReservaController {
    static async listarReserva(req, res) {
        try {
            let lista = await ReservaServices.listarReserva();
            res.json(lista);
        } catch (error) {
        }
    }
    static async crearReserva(req, res) {
        try {
            let {fecha,lugar,nombrePersona} = req.body;
            let nuevo= await ReservaServices.crearReserva(fecha,lugar,nombrePersona);
            res.json(nuevo);
        } catch (error) {
        }
    }
    static async actualizarReserva(req, res) {
        try {
            let {id} = req.params;
            let {fecha,lugar,nombrePersona} = req.body;
            let actualizar = await ReservaServices.actualizarReserva(id,fecha,lugar,nombrePersona);
            res.json(actualizar);
        } catch (error) {
        }
    }
    static async eliminarReserva(req, res) {
        try {
            let {id} = req.params;
            let eliminar = await ReservaServices.eliminarReserva(id);
            res.json(eliminar);
        } catch (error) {
        }
    }
    static async buscarReservaPorId(req, res) {
        try {
            let {id} = req.params;
            let buscar = await ReservaServices.buscarReservaPorId(id);
            res.json(buscar);
        } catch (error) {
        }
    }
}

module.exports = ReservaController;