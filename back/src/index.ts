import { error } from "console";
import { AppDataSource } from "./config/data-source";
import { DB_PORT, PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata"


AppDataSource.initialize()
.then(()=> {
    console.log(`Database conected on port ${DB_PORT}`);
    server.listen(PORT, ()=> {
        console.log(`Escuchando... puerto ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})