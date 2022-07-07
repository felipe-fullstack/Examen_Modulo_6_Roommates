let agregarRoommmate = document.getElementById("agregarRoommmate")
agregarRoommmate.addEventListener("click", async () => {

    const resp = await axios.post("/roommates")
    $.get("/testeo.json")

        .done(function (data) {
            console.log(data.results[0].name.first + "data");
            var contenido = data;
            var arreglo = [contenido]

            var tabla = document.getElementById("tabla");
            var new_p = document.createElement("tr");
            new_p.textContent = ` ${data.results[0].name.first} ${data.results[0].name.last}  `
            tabla.appendChild(new_p);

            ///nombreGasto   

            var usuarioGasto = document.getElementById("listaUsuario")

            var opcion = document.createElement("option")

            opcion.innerHTML = ` ${data.results[0].name.first} ${data.results[0].name.last}  `
            console.log("opcion" + opcion)
            usuarioGasto.appendChild(opcion)
        }).fail(function (data) {
            console.log("moricion");
        })


    console.log("respuesta" + resp);
})


let agregarGasto = document.getElementById("agregarGasto")
let nombreGasto = document.getElementById("nombreGasto")
let descripcionGasto = document.getElementById("txDescripcion")
let monto = document.getElementById("txMonto")
var tablaGasto = document.getElementById("tablaGasto")
agregarGasto.addEventListener("click", async () => {

    //aqui agregamos los gastos y los name
    let fila = document.createElement('tr');
    fila.classList.add("columna")
    let columna1 = document.createElement('th');
    columna1.setAttribute("name", "nombreHistorial");
    columna1.innerHTML = nombreGasto.value
    let columna2 = document.createElement('th');
    columna2.setAttribute("name", "comentarioHistorial")
    columna2.innerHTML = descripcionGasto.value
    let columna3 = document.createElement('th');
    columna3.setAttribute("name", "montoHistorial")
    columna3.innerHTML = monto.value;

    let columna4 = document.createElement('th');
    var btnEditar = document.createElement("button")
    var btnBorrar = document.createElement("button")
    btnEditar.classList.add("botonEditar")
    btnBorrar.classList.add("botonBorrar")
    columna4.classList.add("col4")
    btnEditar.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>"
    btnBorrar.innerHTML = "<i class='fa-solid fa-trash'></i>"
    columna4.appendChild(btnEditar)
    columna4.appendChild(btnBorrar)



    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    tablaGasto.appendChild(fila);

    btnEditar.addEventListener("click", () => {
        //aqui va la funcion que edita el registro del historial de gastos
    })

    btnBorrar.addEventListener("click", () => {
        borrarfila()
    })

})

function borrarfila() {
    document.querySelector(".columna").remove();
}

function gastos(params) {
    $.get("/testeo.json")
        .done(function (data) {
            var contenido = data
            var arreglo = [contenido]

            var tabla = document.getElementById("tabla")
            var new_p = document.createElement("tr");
            new_p.textContent = ` ${data.results[0].name.first} ${data.results[0].name.last}  `
            tabla.appendChild(new_p);
            var usuarioGasto = document.getElementById("listaUsuario")

            var opcion = document.createElement("option")

            opcion.innerHTML = ` ${data.results[0].name.first} ${data.results[0].name.last}  `
            console.log("opcion" + opcion)
            usuarioGasto.appendChild(opcion)

        }).fail(function (data) {
            alert("no hay nada")

        })
}
module.exports = { gastos }
