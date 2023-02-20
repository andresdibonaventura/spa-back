const uuid = require("uuid");

const Cita = require('../models/appointmentModels')

const getAllAppointments = async () => {
    const data = await Cita.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Cita.findOne({
        where: {
            id: id
        }
    })
    return data
}




const createAppointment = async (data) => {
  
      const newAppointment = await Cita.create({
        // id: uuid.v4(),
        // firstName: data.firstName,
        // lastName: data.lastName,
        // gender: data.gender,
        // email: data.email,
        // time: data.time,
        // phone: data.phone
        id: 50,
        firstName: 'andrees',
        lastName: 'rfr',
        gender: "ffrd",
        email: "ejndf",
        time: "dndefe",
        phone: "ejdjdjcnejd"
      });
      return newAppointment;
    }
//   };

const deleteAppointment = async (id) => {
    const data = await Cita.destroy({
        where:{
            id:id
        }
    })
    return data
}

module.exports = {
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    deleteAppointment
}