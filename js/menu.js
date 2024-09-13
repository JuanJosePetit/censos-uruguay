function ocultarDivs(){
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divRegistro").style.display = "none";
    document.querySelector("#divIngresoDeDatos").style.display = "none";
    document.querySelector("#divConsultaCensos").style.display = "none";
    document.querySelector("#buscarCedula").style.display = "none";
    document.querySelector("#buscarCedulaCensista").style.display = "none";
    document.querySelector("#divIngresoDeDatosCensista").style.display = "none";
    document.querySelector("#divModificarDatos").style.display = "none";
    document.querySelector("#divModificarDatosCensista").style.display = "none";
    document.querySelector("#divReasignacionDeCenso").style.display = "none";
    document.querySelector("#divMostrarEstadiscasCensista").style.display = "none";
}

function mostrarDivPrincipal(id){
    ocultarDivs()
    document.querySelector("#" + id).style.display = "block"
}

function mostrarDiv(id){
    ocultarDivs()
    document.querySelector("#" + id).style.display = "block"
}

function ocultarDiv(id){
    ocultarDivs()
    document.querySelector("#" + id).style.display = "none"
}





