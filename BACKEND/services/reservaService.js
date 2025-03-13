const { reserva } = require ('../models');

class ReservaServices {
    static async listarReserva() {
        try{
            return await reserva.findAll();
        } catch (error) {
            console.error('error al traer la reserva');
        }
    }
    static async crearReserva(fecha,lugar,nombrePersona) {
        try{
            return await reserva.create({
                fecha,
                lugar,
                nombrePersona
            });
        } catch (error) {
            console.error('error al crear la reserva');
        }
    }
    static async actualizarReserva(id, fecha,lugar,nombrePersona) {
        try{
            return await reserva.update({
                fecha,
                lugar,
                nombrePersona
            }, {
                where: {
                    id
                }
            });
        } catch (error) {
            console.error('error al actualizar la reserva');
        }
    }
    static async eliminarReserva(id) {
        try{
            return await reserva.destroy({
                where: {
                    id
                }
            });
        } catch (error) {
            console.error('error al eliminar la reserva');
        }
    }
    static async buscarReservaPorId(id) {
        try{
            return await reserva.findByPk(id);
        } catch (error) {
            console.error('error al buscar la reserva');
        }
    }
    
}
module.exports = ReservaServices;