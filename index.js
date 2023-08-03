require('dotenv').config()
const PORT = process.env.PORT || 80;
const express = require('express');
const binanceRoutes = require('./routes/binance');
const app = express();

 //Mengijinkan JSON Request
app.use(express.json());       

//Route ke => Controller
app.use('/account', binanceRoutes);

//Running Server at Port
app.listen(PORT, ()=>{
    console.log(`Server runing di port ${PORT}`);
});

// module.exports = app
