
const express = require('express')
require('dotenv').config()

const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Escuchando servidor en el puerto ${PORT}`);
})

