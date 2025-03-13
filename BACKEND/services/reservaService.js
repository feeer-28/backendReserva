const { reserva } = require ('../models');

class ReservaServices {
    static async listarReserva() {
        try{
            return await reserva.findAll();
        } catch (error) {
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

        }
    }
    static async buscarReservaPorId(id) {
        try{
            return await reserva.findByPk(id);
        } catch (error) {

        }
    }
    
}
module.exports = ReservaServices;