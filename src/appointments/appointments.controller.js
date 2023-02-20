const uuid = require("uuid");

const Appointments = require('../models/appointment.model')
const time = require('../models/appointment.model')
const getAllAppointments = async () => {
    const data = await Appointments.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Appointments.findOne({
        where: {
            id: id
        }
    })
    return data
}

const { Op } = require('sequelize');


const createAppointment = async (data) => {
  
    // const existingAppointments = await Appointments.count({
    //   where: {
    //     datetime: {
    //       [Op.between]: [data.datetime, new Date(data.datetime+ 60 * 60 * 1000)]
    //     }
    //   }
    // });
  
    // if (existingAppointments >= 5) {
    //   return 'No hay citas disponibles a esta hora';
    // } else {
      const newAppointment = await Appointments.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        email: data.email,
        time: data.time,
        phone: data.phone
      });
      return newAppointment;
    }
//   };

const deleteAppointment = async (id) => {
    const data = await Appointments.destroy({
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