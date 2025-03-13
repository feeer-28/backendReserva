const ReservaServices = require('../services/reservaService');

class ReservaController {
    static async listarReserva(req, res) {
        try {
            let lista = await ReservaServices.listarReserva();
            res.json(lista);
        } catch (error) {
            console.error('error al traer la reserva');
        }
    }
    static async crearReserva(req, res) {
        try {
            let {fecha,lugar,nombrePersona} = req.body;
            let nuevo= await ReservaServices.crearReserva(fecha,lugar,nombrePersona);
            res.json(nuevo);
        } catch (error) {
            console.error('error al crear la reserva');
        }
    }
    static async actualizarReserva(req, res) {
        try {
            let {id} = req.params;
            let {fecha,lugar,nombrePersona} = req.body;
            let actualizar = await ReservaServices.actualizarReserva(id,fecha,lugar,nombrePersona);
            res.json(actualizar);
        } catch (error) {
            console.error('error al actualizar la reserva');
        }
    }
    static async eliminarReserva(req, res) {
        try {
            let {id} = req.params;
            let eliminar = await ReservaServices.eliminarReserva(id);
            res.json(eliminar);
        } catch (error) {
            console.error('error al eliminar la reserva');
        }
    }
    static async buscarReservaPorId(req, res) {
        try {
            let {id} = req.params;
            let buscar = await ReservaServices.buscarReservaPorId(id);
            res.json(buscar);
        } catch (error) {
            console.error('error al buscar la reserva');
        }
    }
}

module.exports = ReservaController;