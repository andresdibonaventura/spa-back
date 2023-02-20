const router = require('express').Router()
const passport = require('passport')
const { upload } = require('../utils/multer')
require('../middleware/auth.middleware')(passport)

const productServices = require('./products.http')

router.route('/')
.get(productServices.getProducts)

router.route('/admin')
.post(passport.authenticate('jwt', {session: false}), productServices.create)
.put(passport.authenticate('jwt', {session: false}), productServices.edit)
.delete(passport.authenticate('jwt', {session: false}), productServices.remove)

router.route('/:id')
.get(productServices.getProductsBy)

exports.router = router