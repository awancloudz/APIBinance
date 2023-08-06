const express = require('express');
const BinanceController = require('../controllers/binance');
const BinanceArifController = require('../controllers/binancearif');
const BinanceMAController = require('../controllers/binancema');

const router = express.Router();
router.get('/', (req, res)=>{
    res.json({
        message: "Welcome!"
    })
});

//AWAN
router.get('/awan/servertime', BinanceController.getServertime);
router.get('/awan/balance', BinanceController.getBalance);
router.get('/awan/position', BinanceController.getPosition);
router.get('/awan/tradelist', BinanceController.getTradelist);
router.post('/awan/posttrade', BinanceController.postTrade);
router.post('/awan/postreduce', BinanceController.postReduce);

//ARIF
router.get('/arif/servertime', BinanceArifController.getServertime);
router.get('/arif/balance', BinanceArifController.getBalance);
router.get('/arif/position', BinanceArifController.getPosition);
router.get('/arif/tradelist', BinanceArifController.getTradelist);
router.post('/arif/posttrade', BinanceArifController.postTrade);
router.post('/arif/postreduce', BinanceArifController.postReduce);

//MA
router.get('/ma/servertime', BinanceMAController.getServertime);
router.get('/ma/balance', BinanceMAController.getBalance);
router.get('/ma/position', BinanceMAController.getPosition);
router.get('/ma/tradelist', BinanceMAController.getTradelist);
router.post('/ma/posttrade', BinanceMAController.postTrade);
router.post('/ma/postreduce', BinanceMAController.postReduce);

module.exports = router;