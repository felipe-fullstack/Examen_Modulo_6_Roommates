const express = require('express');
const fs = require('fs');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
var server = app.listen(8080, () => {
    console.log("Servidor web iniciado")
})

// Funcion async await , y manejo de errores 
app.post("/roommates", async (req, res, next) => {
    res.send()
    //res.send(JSON.stringify({name: 'ok'}))
    //1.- rescatar un dato de la api
    //2.- guardar datos de la api al archivo json
    //3 .- rescatar datos del json
    //4.- realizar el crud con los datos del json
    try {
        await axios.get("https://randomuser.me/api", { 'headers': { 'Content-Type': 'application/json' } })
            .then(res => {

                var nombre = res.data.results[0].name.first
                var segundoNombre = res.data.results[0].name.last
                var emailUsuario = res.data.results[0].email
                var uuid = res.data.results[0].login.uuid

                fs.writeFileSync(__dirname + "/public/testeo.json", JSON.stringify(res.data),
                    "utf8", err => {
                        if (err) console.log("El jsonse escribio de manera correcta", err);

                    });
            })

    }

    catch (err) {
        console.error("El json no llego", err);
    }
})
app.post("/gastos", async (req, res, next) => {
    res.send()

    try {
        await axios.get("../public/script.js", { 'headers': { 'Content-Type': 'application/json' } })
            .then(res => {
                var nombreForm;
                var descripcionForm;
                var montoForm;
            })
    }

    catch (err) {
        console.error("El json no llego", err);
    }
})

//capurar los datos de la nuevas filas creada en el historial y lograr escribir en gastos.json
app.post("/historialAction", (req, res) => {
    let user = req.body.nombreHistorial;
    let description = req.body.comentarioHistorial;
    let monto = req.body.montoHistorial;
    console.log(user);
    console.log(description);
    console.log(monto);
    res.redirect("http://localhost:8080")
    //creo el archivo gasto aquí para después guardar los datos del formulario historial
    fs.appendFile("gasto.json", "", "utf8", () => {
    })
})