
const appController = require('./appointment.controller')

const getAll = (req, res) => {
    appController
      .getAllAppointments()
      .then((response) => {
        res.status(200).json({ items: response.length, users: response });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };


const getById = (req, res) => {
    const id = req.params.id
    appController.getAppointmentById(id)
    .then((response) => {
        res.status(200).json(response)
    })
    .catch(err => console.log(err))
}

const create = (req, res) => {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ message: "Missing Data" });
    } else if (
      !data.firstName ||
      !data.lastName ||
      !data.gender ||
      !data.email ||
      !data.time ||
      !data. phone  
    ) {
      return res.status(400).json({
        message: "All fields must be completed",
        fields: {
          first_name: "string",
          last_name: "string",
          email: "examle@examle.com",
          time: "string",
          phone: "string"
        },
      }); //
    } else {
      appController.createAppointment(data)
        .then((response) => {
          res.status(201).json({
            message: `Appointment creado con el id: ${response.id}`,
            teacher: response,
          });
        })
        .catch(err => {
          res.status(400).json({message: `${err}, no fue posible crear el appointment`, data})
        }) 
    }
  }

  const remove = (req, res) => {
    const id = req.params.id
    appController.deleteAppointment(id)
    .then((response) => {
        res.status(204).json({
            message: `appointment removed: ${response}`
        })
    
    })
    .catch(err => console.log(err))
  }
  
 
module.exports = {
    getAll,
    getById,
    create,
    remove
}