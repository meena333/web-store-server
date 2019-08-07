const { Router } = require('express')
const Item = require('./item')

const router = new Router()

router.get('/item', (req, res, next) => {
  Item.findAll()
    .then(result => res.send(result))
    .catch(error => next(error))
})

router.post('/item', (req, res, next) => {
  Item.create(req.body)
    .then(result => res.send(result))
    .catch(error => next(error))
})

router.put('/item/:id', (req, res, next) => {
  const { id } = req.params
  Item.update(req.body, { where: { id } })
    .then(number => res.send({ number }))
    .catch(error => next(error))

})

router.delete('/item/:id', (req, res, next) => {
  const { id } = req.params
  Item.destroy({ where: { id } })
    .then(number => res.send({ number }))
    .catch(error => next(error))
})

module.exports = router