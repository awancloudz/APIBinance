const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'NWLg2nhUBSXD5XYAq9AXySqXhXrICKxjf9RrZ2suKVVLkya4jYJYrIjjyjfpbuWk',
  APISECRET: '2YVYOZRqkyGUDmCbxi5KuZA7EUEYJMyXQkzzmzGde7qYyxKMfMQ98NhlJBej1Vmi'
});

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

module.exports = {
    getBalance,
    getPosition,
    getTradelist,
};