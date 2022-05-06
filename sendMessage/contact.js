const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Hell hound is on leash'
        })
    } catch (error) {
        return res.status(500).send('Server error')
    }
})
router.post('/', (req, res) => {
    res.send('Hell yeah! Letter is send')    
})

module.exports = router;