const router = require('express').Router();

router.get('/api', (req, res) => {
    res.json('Root of API has been hit')
})

module.exports = router;