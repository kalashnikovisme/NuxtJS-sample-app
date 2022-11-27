const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.use('/users', (req, res) => {
  axios.get('https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json').then((response) => {
    res.json(response.data)
  })
})

module.exports = router
