const express = require('express');
const BinanceController = require('../controllers/binance');
const BinanceArifController = require('../controllers/binancearif');

const router = express.Router();
router.get('/', (req, res)=>{
    res.json({
        message: "Welcome!"
    })
});
router.get('/servertime', BinanceController.getServertime);
router.get('/balance', BinanceController.getBalance);
router.get('/position', BinanceController.getPosition);
router.get('/tradelist', BinanceController.getTradelist);
router.post('/posttrade', BinanceController.postTrade);
router.post('/postreduce', BinanceController.postReduce);

router.get('/servertimearif', BinanceArifController.getServertime);
router.get('/balancearif', BinanceArifController.getBalance);
router.get('/positionarif', BinanceArifController.getPosition);
router.get('/tradelistarif', BinanceArifController.getTradelist);
router.post('/posttradearif', BinanceArifController.postTrade);
router.post('/postreducearif', BinanceArifController.postReduce);

module.exports = router;