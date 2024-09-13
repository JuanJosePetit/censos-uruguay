window.addEventListener("load", inicio);

let sistema = new Sistema();
sistema.precargaDeDatos();

function inicio() {
    document.querySelector("#btnRegistrarse").addEventListener("click", registrar);
    document.querySelector("#btnMostrarRegistro").addEventListener("click", mostrarRegistro);
    document.querySelector("#loginCensista").addEventListener("click", login);
    document.querySelector("#btnLogout").addEventListener("click", logout);
    document.querySelector("#btnBuscarCedulaCensista").addEventListener("click", buscarCensoCensista);
    document.querySelector("#btnMostrarIngresarCensoCensista").addEventListener("click", mostrarIngresarCensoCensista);
    document.querySelector("#btnIngresarCensoCensista").addEventListener("click", ingresarCensoCensista);
    document.querySelector("#btnModCensoCensista").addEventListener("click", modificarCensoCensista);
    document.querySelector("#btnMostrarReasignacion").addEventListener("click", mostrarReasignacion);
    document.querySelector("#btnReasignacion").addEventListener("click", asignarCensoPendiente);
    document.querySelector("#btnMostrarEstadisticasCensista").addEventListener("click", mostrarEstadisticasCensista);
    document.querySelector("#btnMostrarMisCensos").addEventListener("click", cargarMisCensos);
    document.querySelector("#ingresarComoInvitado1").addEventListener("click", mostrarFormIngresoDeDatos);
    document.querySelector("#ingresarComoInvitado1").addEventListener("click", cargarEstadisticasInvitado);
    document.querySelector("#ingresarComoInvitado2").addEventListener("click", mostrarFormIngresoDeDatos);
    document.querySelector("#ingresarComoInvitado2").addEventListener("click", cargarEstadisticasInvitado);
    document.querySelector("#btnIngresarCenso").addEventListener("click", ingresarCenso);
    document.querySelector("#btnBuscarCedula").addEventListener("click", buscarCenso);
    document.querySelector("#btnModCenso").addEventListener("click", modificarCenso);
    document.querySelector("#btnEliminarCenso").addEventListener("click", eliminarCenso);
    mostrarDivPrincipal("divLogin")
    cargarDepartamentos();
    cargarOcupacion();
}

function registrar() {
    let nombre = document.querySelector("#nombreReg").value.trim();
    let userName = document.querySelector("#usuarioReg").value.trim();
    let pass = document.querySelector("#passwordReg").value.trim();
    if (nombre.length === 0 || userName.length === 0 || pass.length === 0) {
        alert("Debes ingresar todos los datos");
    } else if (sistema.existeUsuario(userName)) {
        alert("El nombre de usuario ya existe");
    } else if (!passCorrecta(pass)) {
        alert("La contraseña debe tener al menos 5 caracteres y menos que 20, tener al menos una mayuscula, una minuscula y dos numero")
    } else {
        let nuevoUsuario = new Usuario(nombre, userName, pass);
        sistema.agregarUsuario(nuevoUsuario);
        alert("Usuario registrado correctamente");
        ocultarDivs();
        mostrarDivPrincipal("divLogin");
    }
}

function passCorrecta(unaPass) {
    let tieneMayuscula = false;
    let tieneMiniscula = false;
    let tieneNumeros = 0; 
    for (let i = 0; i < unaPass.length; i++) {
        let code = unaPass.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            tieneMayuscula = true;
        } else if (code >= 97 && code <= 122) {
            tieneMiniscula = true;
        } else if (code >= 48 && code <= 57) {
            tieneNumeros++; 
        }
    }
    return unaPass.length <= 20 && unaPass.length >= 5 && tieneMayuscula && tieneMiniscula && tieneNumeros >= 2;
}


function mostrarRegistro() {
    ocultarDivs();
    mostrarDiv("divRegistro")
}

function login() {
    let usuario = document.querySelector("#usuario").value.trim();
    let pass = document.querySelector("#password").value.trim();
    if (usuario.length === 0 || pass.length === 0) {
        alert("Debes ingresar todos los datos");
    } else if (!sistema.realizarLogin(usuario, pass)) {
        alert("Usuario o contraseña incorrectas");

    } else {
        ocultarDivs("divLogin");
        mostrarDiv("divUsuarioLogeado");
        cargarCensosPendientes();
        cargarCensistasDisponibles();
        cargarEstadisticas();
        document.querySelector("#spanUsuarioLogueado").innerHTML = sistema.usuarioLogueado.userName;
        document.querySelector("#mostrarDefensa").innerHTML = sistema.obtenerTotalPersonasCensadasCensista() + " Los censos pendientes son : " + sistema.obtenerTotalPersonasPendientesCensista()
    }
}


function logout() {
    ocultarDiv("divUsuarioLogeado");
    mostrarDiv("divLogin");
    sistema.realizarLogout();
}

function buscarCensoCensista() {
    let cedula = document.querySelector("#inputBuscarCedulaCensista").value.trim();
    cedula = cedula.replaceAll(".", "").replaceAll("-", "");
    cedula = parseInt(cedula);
    if (sistema.validarCedula(cedula)) {
        if (sistema.existeCenso(cedula)) {
            let censo = sistema.obtenerCensoPorCedula(cedula);
            if (censo.censado === false) {
                alert("La cédula ya existe, modifique sus datos si desea");
                ocultarDiv("buscarCedulaCensista");
                mostrarDiv("divModificarDatosCensista");
                mostrarModificarCensoCensista();
            } else {
                alert("La cédula ya fue validada por un censista");
            }
        } else {
            alert("Pre-cargue los datos");
            ocultarDiv("buscarCedulaCensista");
            mostrarDiv("divIngresoDeDatosCensista");
        }
    } else {
        alert("Cédula inválida");
    }
}

function mostrarIngresarCensoCensista() {
    mostrarDiv("buscarCedulaCensista")
}

function ingresarCensoCensista() {
    let nombre = document.querySelector("#nombreCensoCensista").value.trim();
    let apellido = document.querySelector("#apeliidoCensoCensista").value.trim();
    let edad = document.querySelector("#edadCensoCensista").value.trim();
    let cedula = document.querySelector("#cedulaCensoCensista").value.trim();
    cedula = cedula.replaceAll(".", "").replaceAll("-", "");
    cedula = parseInt(cedula)
    let departamento = document.querySelector("#departamentoCensoCensista").value;
    let ocupacion = document.querySelector("#ocupacionCensoCensista").value;
    if (sistema.validarCedula(cedula)) {
        if (nombre.length === 0 || apellido.length === 0 || cedula.length === 0 || edad.length === 0) {
            alert("Debes ingresar todos los datos");
        } else if (edad < 1 || edad > 130) {
            alert("La edad debe estar entre 1 y 130");
        } else if (sistema.existeCenso(cedula)) {
            alert("La cedula ya esta registrada");
        } else if (departamento === "Seleccione..." || ocupacion === "Seleccione...") {
            alert("Por favor, seleccione un departamento y ocupación válidos");
        } else {
            let nuevoCenso = new Censado(nombre, apellido, edad, cedula, departamento, ocupacion);
            sistema.agregarCensoCensista(nuevoCenso);
            sistema.censadoLogueado = null;
            alert("Censo ingresado correctamente");
            ocultarDivs("divIngresoDeDatos");
            mostrarDiv("buscarCedula");
        }
    } else {
        alert("Cedula invalida");
    }
}

function mostrarModificarCensoCensista() {
    document.querySelector("#nombreModCensoCensista").value = sistema.censadoLogueado.nombre;
    document.querySelector("#apeliidoModCensoCensista").value = sistema.censadoLogueado.apellido;
    document.querySelector("#edadModCensoCensista").value = sistema.censadoLogueado.edad;
    document.querySelector("#cedulaModCensoCensista").value = sistema.censadoLogueado.cedula;
    document.querySelector("#cedulaModCensoCensista").disabled = true;
    document.querySelector("#departamentoModCensoCensista").value = sistema.censadoLogueado.departamento;
    document.querySelector("#ocupacionModCensoCensista").value = sistema.censadoLogueado.ocupacion;
}

function modificarCensoCensista() {
    let nombre = document.querySelector("#nombreModCensoCensista").value.trim();
    let apellido = document.querySelector("#apeliidoModCensoCensista").value.trim();
    let edad = parseInt(document.querySelector("#edadModCensoCensista").value.trim());
    let departamento = document.querySelector("#departamentoModCensoCensista").value;
    let ocupacion = document.querySelector("#ocupacionModCensoCensista").value;
    if (nombre.length === 0 || apellido.length === 0 || edad.length === 0) {
        alert("Debes ingresar todos los datos");
    } else {
        sistema.modificarCenso(nombre, apellido, edad, departamento, ocupacion);
        alert("Censo modificado correctamente");
        ocultarDiv("divModificarDatos");
        sistema.censadoLogueado = null;
    }
}

function mostrarReasignacion() {
    ocultarDivs();
    cargarCensosPendientes();
    mostrarDiv("divReasignacionDeCenso");
}

function cargarCensosPendientes() {
    let censosPendientes = sistema.obtenerMisCensos();
    let texto = "<option value='Seleccione...' disabled selected>Seleccione...</option>";
    for (let i = 0; i < censosPendientes.length; i++) {
        let censoActual = censosPendientes[i];
        if (censoActual.censado === false) {
            texto += `<option value="${censoActual.id}">${censoActual.nombre} ${censoActual.apellido}</option>`;
        }
    }
    document.querySelector("#censosPendientes").innerHTML = texto;
}

function cargarCensistasDisponibles() {
    let usuarioLogueado = sistema.usuarioLogueado
    let censistasDisponibles = sistema.obtenerCensistasDisponibles(usuarioLogueado);
    let selectCensistas = document.querySelector("#censistasDisponibles");
    let texto = "<option value='Seleccione...' disabled selected>Seleccione...</option>";
    for (let i = 0; i < censistasDisponibles.length; i++) {
        let censistaActual = censistasDisponibles[i];
        texto += `<option value="${censistaActual.id}">${censistaActual.nombre}</option>`;
    }
    selectCensistas.innerHTML = texto;
}

function asignarCensoPendiente() {
    let censoPendiente = document.querySelector("#censosPendientes").value;
    let usuarioDisponible = document.querySelector("#censistasDisponibles").value;
    if (censoPendiente === "Seleccione..." || usuarioDisponible === "Seleccione...") {
        alert("Por favor, seleccione un censo y un censista válidos");
    } else {
        alert("El censo se ha transferido correctamente")
        sistema.asignarCenso(censoPendiente, usuarioDisponible);
    }
    cargarCensistasDisponibles();
    cargarCensosPendientes();
    document.querySelector("#mostrarDefensa").innerHTML = sistema.obtenerTotalPersonasCensadasCensista() + " Los censos pendientes son : " + sistema.obtenerTotalPersonasPendientesCensista()
}

function verificarCenso() {
    let idVerificarCenso = parseInt(this.id);
    let censo = sistema.obtenerCensoPorId(idVerificarCenso);
    sistema.verificarCensoTerminado(censo);
    cargarMisCensos();
    mostrarDiv("divConsultaCensos")
    document.querySelector("#mostrarDefensa").innerHTML = sistema.obtenerTotalPersonasCensadasCensista() + " Los censos pendientes son : " + sistema.obtenerTotalPersonasPendientesCensista()
}

function mostrarEstadisticasCensista() {
    ocultarDivs();
    cargarEstadisticas();
    mostrarDiv("divMostrarEstadiscasCensista");
}

function cargarMisCensos() {
    mostrarDiv("divConsultaCensos");
    let texto = "";
    let listaDeCensados = sistema.obtenerMisCensos();
    for (let i = 0; i < listaDeCensados.length; i++) {
        let censadoActual = listaDeCensados[i];
        if (censadoActual.censado === false) {
            texto += `
            <tr>
                <td>${censadoActual.id}</td>
                <td>${censadoActual.nombre}</td>
                <td>${censadoActual.apellido}</td>
                <td>${censadoActual.edad}</td>
                <td>${censadoActual.cedula}</td>
                <td>${censadoActual.departamento}</td>
                <td>${censadoActual.ocupacion}</td>
                <td>Sin validacion</td>
                <td><input type="button" value="Validar" class="botonesVerificar" id="${censadoActual.id + "btn"}"</td>
            </tr>`;
        }
    }
    document.querySelector("#tablaMisCensos").innerHTML = texto;
    let botones = document.querySelectorAll(".botonesVerificar")
    for (let i = 0; i < botones.length; i++) {
        let botonActual = botones[i];
        botonActual.addEventListener("click", verificarCenso)
    }
    ocultarDivs();
    mostrarDiv("divConsultaCensos");
}
//Fin funciones del censista
//Funciones del invitado
function mostrarFormIngresoDeDatos() {
    ocultarDivs();
    ocultarDiv("divRegistro")
    mostrarDiv("buscarCedula")
}

function cargarEstadisticasInvitado() {
    let texto = "";
    for (let i = 0; i < sistema.departamentos.length; i++) {
        let departamento = sistema.departamentos[i];
        let estudian = sistema.cargarEstudiantes(departamento);
        let noTrabajan = sistema.cargarNoTrabajan(departamento);
        let depOIn = sistema.cargarDepOIn(departamento);
        let porcentaje = sistema.cargarPorcentaje(departamento);
        texto += `<tr>
                  <td>${departamento}</td>
                  <td>${estudian}</td>
                  <td>${noTrabajan}</td>
                  <td>${depOIn}</td>
                  <td>${porcentaje}</td>
                </tr>`;
    }
    document.querySelector("#tablaEstadisticasInvitado").innerHTML = texto;
}

function ingresarCenso() {
    let nombre = document.querySelector("#nombreCenso").value.trim();
    let apellido = document.querySelector("#apeliidoCenso").value.trim();
    let edad = document.querySelector("#edadCenso").value.trim();
    let cedula = document.querySelector("#cedulaCenso").value.trim();
    cedula = cedula.replaceAll(".", "").replaceAll("-", "");
    cedula = parseInt(cedula)
    let departamento = document.querySelector("#departamentoCenso").value;
    let ocupacion = document.querySelector("#ocupacionCenso").value;
    if (sistema.validarCedula(cedula)) {
        if (nombre.length === 0 || apellido.length === 0 || cedula.length === 0 || edad.length === 0) {
            alert("Debes ingresar todos los datos");
        } else if (edad < 1 || edad > 130) {
            alert("La edad debe estar entre 1 y 130");
        } else if (sistema.existeCenso(cedula)) {
            alert("La cedula ya esta registrada");
        } else if (departamento === "Seleccione..." || ocupacion === "Seleccione...") {
            alert("Por favor, seleccione un departamento y ocupación válidos");
        } else {
            let nuevoCenso = new Censado(nombre, apellido, edad, cedula, departamento, ocupacion);
            sistema.agregarCenso(nuevoCenso);
            sistema.censadoLogueado = null;
            alert("Censo ingresado correctamente");
            ocultarDivs("divIngresoDeDatos");
            mostrarDiv("buscarCedula");
        }
    } else {
        alert("Cedula invalida");
    }
}

function buscarCenso() {
    let cedula = document.querySelector("#inputBuscarCedula").value.trim();
    cedula = cedula.replaceAll(".", "").replaceAll("-", "");
    cedula = parseInt(cedula)
    if (sistema.validarCedula(cedula)) {
        if (sistema.existeCenso(cedula)) {
            let censo = sistema.obtenerCensoPorCedula(cedula);
            if (censo.censado === false) {
                alert("La cédula ya existe, modifique sus datos si desea");
                ocultarDiv("buscarCedula");
                mostrarDiv("divModificarDatos");
                mostrarModificarCenso();
            } else {
                alert("La cédula ya fue validada por un censista");
            }
        } else {
            alert("Pre-cargue sus datos");
            ocultarDiv("buscarCedula");
            mostrarDiv("divIngresoDeDatos");
        }
    } else {
        alert("Cédula inválida");
    }
}

function cargarEstadisticas() {
    let departamentoSeleccionado = document.querySelector("#cantidadDepartamentoEstadisticas").value;
    document.querySelector("#pEstadisticasTotalPersonas").innerHTML = sistema.obtenerTotalPersonasCensadas();
    let cantidadPersonasDepartamento = document.querySelector("#pEstadisticasCantidadPersonasPorDepartamento").innerHTML = sistema.obtenerCantidadPersonasPorDepartamento(departamentoSeleccionado);
    if (cantidadPersonasDepartamento === "Seleccione...") {
        document.querySelector("#pEstadisticasPorcentajePersonasPendientes").innerHTML = `Sin datos`;
    } else {
        document.querySelector("#pEstadisticasPorcentajePersonasPendientes").innerHTML = sistema.obtenerPorcentajePersonasPendientes();
    }
    let departamentoSeleccionadoPorEdad = document.querySelector("#departamentoEstadisticas").value;
    if (departamentoSeleccionadoPorEdad === "Seleccione...") {
        document.querySelector("#pDepartamentoEstadisticas").innerHTML = `Sin datos`
    } else {
        document.querySelector("#pDepartamentoEstadisticas").innerHTML = sistema.obtenerPorcentajePersonasPorEdad(departamentoSeleccionadoPorEdad);
    }
}

function mostrarModificarCenso() {
    document.querySelector("#nombreModCenso").value = sistema.censadoLogueado.nombre;
    document.querySelector("#apeliidoModCenso").value = sistema.censadoLogueado.apellido;
    document.querySelector("#edadModCenso").value = sistema.censadoLogueado.edad;
    document.querySelector("#cedulaModCenso").value = sistema.censadoLogueado.cedula;
    document.querySelector("#cedulaModCenso").disabled = true;
    document.querySelector("#departamentoModCenso").value = sistema.censadoLogueado.departamento;
    document.querySelector("#ocupacionModCenso").value = sistema.censadoLogueado.ocupacion;
}

function modificarCenso() {
    let nombre = document.querySelector("#nombreModCenso").value.trim();
    let apellido = document.querySelector("#apeliidoModCenso").value.trim();
    let edad = parseInt(document.querySelector("#edadModCenso").value.trim());
    let departamento = document.querySelector("#departamentoModCenso").value;
    let ocupacion = document.querySelector("#ocupacionModCenso").value;
    if (nombre.length === 0 || apellido.length === 0 || edad.length === 0) {
        alert("Debes ingresar todos los datos");
    } else {
        sistema.modificarCenso(nombre, apellido, edad, departamento, ocupacion);
        alert("Censo modificado correctamente");
        ocultarDiv("divModificarDatos");
        mostrarDiv("buscarCedula");
        sistema.censadoLogueado = null;
    }
}

function eliminarCenso() {
    if (sistema.censadoLogueado.censado === true) {
        alert("No se puede eliminar el censo porque esta validado por un censista")
    } else {
        alert("Censo eliminado correctamente");
        sistema.eliminarCenso(sistema.censados);
        sistema.censadoLogueado = null;
        ocultarDiv("divModificarDatos");
        mostrarDiv("buscarCedula");
    }
}
//Fin funciones del invitado 
//Carga dinamica para los select de la app
function cargarOcupacion() {
    let ocupaciones = sistema.ocupaciones;
    texto = "<option value=Seleccione... disabled selected>Seleccione...</option>";
    for (let i = 0; i < ocupaciones.length; i++) {
        let ocupacionActual = ocupaciones[i];
        texto += ` <option value=${ocupacionActual} >${ocupacionActual}</option>`
    }
    document.querySelector("#ocupacionCensoCensista").innerHTML = texto;
    document.querySelector("#ocupacionCenso").innerHTML = texto;
    document.querySelector("#ocupacionModCenso").innerHTML = texto;
    document.querySelector("#ocupacionModCensoCensista").innerHTML = texto;
}

function cargarDepartamentos() {
    let departamento = sistema.departamentos;
    let texto = "<option value=Seleccione... disabled selected>Seleccione...</option>";
    for (let i = 0; i < departamento.length; i++) {
        let departamentoActual = departamento[i];
        texto += ` <option value=${departamentoActual}>${departamentoActual}</option>`
    }
    document.querySelector("#departamentoCensoCensista").innerHTML = texto;
    document.querySelector("#departamentoCenso").innerHTML = texto;
    document.querySelector("#departamentoModCenso").innerHTML = texto;
    document.querySelector("#departamentoModCensoCensista").innerHTML = texto;
    document.querySelector("#departamentoEstadisticas").innerHTML = texto;
    document.querySelector("#cantidadDepartamentoEstadisticas").innerHTML = texto;
}
//Fin carga dinamica para los select de la app










































