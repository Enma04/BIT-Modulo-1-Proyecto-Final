var db = []

function borrar(){
    document.getElementById("correo").value = "";
    document.getElementById("clave").value = "";
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

var iniciarSesion = function(){
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    var position = db.findIndex((item) => item.mail == correo && item.pass == clave)
    console.log(position);

    var msj = document.getElementById("mensaje")
    
    if(position == -1){ msj.innerHTML = "<div class='alert alert-danger' role='alert'>Credenciales incorrectas!</div>" }
    else{
        msj.innerHTML = "<div class='alert alert-success' role='alert'>Bienvenido "+ db[position].name +" !</div>"
        borrar();
    }
}

cargarDatos()