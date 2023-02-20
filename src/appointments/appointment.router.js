const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const AppointmentServices = require('./appointment.http')

router.route('/')
    .get(passport.authenticate('jwt', {session: false}), AppointmentServices.getAll)
    .post(AppointmentServices.create)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), AppointmentServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), AppointmentServices.remove)


exports.router = router