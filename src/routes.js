const { Router} = require('express')

const routes = new Router()

routes.get('/',function(req,res) {
  return res.json({ messae: 'Hello Word'})
})



module.exports = routes