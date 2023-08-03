const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.SECKEY,
});

const getServertime = async (req, res)=>{
    try {
        const data = await binance.futuresTime();
        res.json({
            message:"GET Server Time!",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })
    }
}

const getBalance = async (req, res)=>{
    try {
        const data = await binance.futuresBalance();
        res.json({
            message:"GET Balance Success!",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })
    }
}

const getPosition = async (req, res)=>{
    try {
        const data = await binance.futuresPositionRisk();
        res.json({
            message:"GET Position Success!",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })
    }
}

const getTradelist = async (req, res)=>{
    try {
        const order = await binance.futuresAllOrders("1000PEPEUSDT");
        const trade = await binance.futuresUserTrades("1000PEPEUSDT");
        res.json({
            message: "Get Orders User Trades!",
            order: order,
            trade: trade
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })
    }
}

const postTrade = async (req, res)=>{
	const {body} = req;
	const amount = parseInt(body.amount);
	const action = body.action;
    try {
		if(action === "buy"){
			var opentrade = await binance.futuresMarketBuy('1000PEPEUSDT', amount);	
		}
		else if(action === "sell"){
			var opentrade = await binance.futuresMarketSell('1000PEPEUSDT', amount);	
		}
		console.log(opentrade);
        res.status(201).json({
            message:"Trade!",
            data: opentrade,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error!",
            serverMessage: error,
        })
    }
}

module.exports = {
    getBalance,
    getPosition,
    getTradelist,
	postTrade,
    getServertime,
};