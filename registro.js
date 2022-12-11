var db = [] //db = DataBase

function guardarUsuario(){
    var nombre = document.getElementById("nombre").value
    var correo = document.getElementById("correo").value
    var clave = document.getElementById("clave").value

    db.push({name:nombre,mail:correo,pass:clave})
    localStorage.setItem("base", JSON.stringify(db))
}

var cargarDatos = function(){
    var misDatos = localStorage.getItem("base")

    if(misDatos == null){
        db = []
    }
    else{
        db = JSON.parse(misDatos)
    }
}

cargarDatos()