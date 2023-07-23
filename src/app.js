const express = require ("express");
const app = express();

const path = require ("path");
app.listen(3000,()=>console.log("Servidor escuchando en el puerto 3000!"));

app.use(express.static("public"));

app.get("/contacto", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

app.get("/contacto", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/contacto.html"))
});
