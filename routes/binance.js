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
router.get('/servertime', BinanceController.getServertime);
router.get('/balance', BinanceController.getBalance);
router.get('/position', BinanceController.getPosition);
router.get('/tradelist', BinanceController.getTradelist);
router.post('/posttrade', BinanceController.postTrade);
router.post('/postreduce', BinanceController.postReduce);

//ARIF
router.get('/servertimearif', BinanceArifController.getServertime);
router.get('/balancearif', BinanceArifController.getBalance);
router.get('/positionarif', BinanceArifController.getPosition);
router.get('/tradelistarif', BinanceArifController.getTradelist);
router.post('/posttradearif', BinanceArifController.postTrade);
router.post('/postreducearif', BinanceArifController.postReduce);

//MA
router.get('/servertimema', BinanceMAController.getServertime);
router.get('/balancema', BinanceMAController.getBalance);
router.get('/positionma', BinanceMAController.getPosition);
router.get('/tradelistma', BinanceMAController.getTradelist);
router.post('/posttradema', BinanceMAController.postTrade);
router.post('/postreducema', BinanceMAController.postReduce);

module.exports = router;