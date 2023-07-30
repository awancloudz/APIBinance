const express = require('express');
const BinanceController = require('../controllers/binance');

const router = express.Router();
router.get('/', (req, res)=>{
    res.json({
        message: "Welcome!"
    })
});
router.get('/balance', BinanceController.getBalance);
router.get('/position', BinanceController.getPosition);
router.get('/tradelist', BinanceController.getTradelist);

module.exports = router;