class Sistema {
    constructor() {
        this.usuarios = [];
        this.censados = [];
        this.ocupaciones = ["Independiente", "Estudiante", "No trabaja", "Dependiente"];
        this.departamentos = ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"];
        this.censadoLogueado = null;
        this.usuarioLogueado = null;
    }
    //Comienzo de la precarga de datos
    precargaDeDatos() {
        let usu1 = new Usuario("juan", "juancho", "Juan123")
        let usu2 = new Usuario("nacho", "nacho", "Nacho123")
        let usu3 = new Usuario("guillermo", "gviera", "Gviera123")
        this.agregarUsuario(usu1)
        this.agregarUsuario(usu2)
        this.agregarUsuario(usu3)
        let censado1 = new Censado("Juan", "Petit", 16, 63906752, "Artigas", "Independiente");
        censado1.usuario = usu1;
        this.censados.push(censado1)
        let censado2 = new Censado("María", "González", 45, 76483201, "Canelones", "Estudiante");
        censado2.usuario = usu1;
        this.censados.push(censado2)
        let censado3 = new Censado("Carlos", "Rodríguez", 32, 52417896, "Cerro Largo", "No trabaja");
        censado3.usuario = usu1;
        this.censados.push(censado3)
        let censado4 = new Censado("Ana", "Fernández", 28, 93847612, "Colonia", "Dependiente");
        censado4.usuario = usu1;
        this.censados.push(censado4)
        let censado5 = new Censado("Luis", "González", 56, 70932481, "Durazno", "Independiente");
        censado5.usuario = usu1;
        this.censados.push(censado5)
        let censado6 = new Censado("Laura", "Silva", 31, 83190274, "Flores", "Estudiante");
        censado6.usuario = usu1;
        this.censados.push(censado6)
        let censado7 = new Censado("Andrés", "Pérez", 41, 21564837, "Florida", "No trabaja");
        censado7.usuario = usu1;
        this.censados.push(censado7)
        let censado8 = new Censado("Sofía", "Martínez", 37, 45678123, "Lavalleja", "Dependiente");
        censado8.usuario = usu1;
        this.censados.push(censado8)
        let censado9 = new Censado("Martín", "Castro", 29, 62349081, "Maldonado", "Independiente");
        censado9.usuario = usu1;
        this.censados.push(censado9)
        let censado10 = new Censado("Valentina", "López", 26, 81273954, "Montevideo", "Estudiante");
        censado10.usuario = usu1;
        this.censados.push(censado10)
        let censado11 = new Censado("Ignacio", "Telez", 24, 51389198, "Montevideo", "Estudiante");
        censado11.usuario = usu2;
        censado11.censado = true;
        this.censados.push(censado11)
        let censado12 = new Censado("Pedro", "Ramírez", 33, 73984026, "Montevideo", "Independiente");
        censado12.usuario = usu2;
        censado12.censado = true;
        this.censados.push(censado12);
        let censado13 = new Censado("Mariana", "López", 27, 64237951, "Paysandú", "Estudiante");
        censado13.usuario = usu2;
        censado13.censado = true;
        this.censados.push(censado13);
        let censado14 = new Censado("Gabriel", "Hernández", 39, 52781634, "Río Negro", "No trabaja");
        censado14.usuario = usu2;
        censado14.censado = true;
        this.censados.push(censado14);
        let censado15 = new Censado("Lucía", "Giménez", 36, 94328716, "Rivera", "Dependiente");
        censado15.usuario = usu2;
        censado15.censado = true;
        this.censados.push(censado15);
        let censado16 = new Censado("Diego", "Pereira", 42, 71349082, "Rocha", "Independiente");
        censado16.usuario = usu2;
        this.censados.push(censado16);
        let censado17 = new Censado("Carolina", "Paz", 29, 82915347, "Salto", "Estudiante");
        censado17.usuario = usu2;
        this.censados.push(censado17);
        let censado18 = new Censado("Javier", "Silveira", 47, 21487639, "San José", "No trabaja");
        censado18.usuario = usu2;
        this.censados.push(censado18);
        let censado19 = new Censado("Florencia", "Alonso", 30, 46981235, "Soriano", "Dependiente");
        censado19.usuario = usu2;
        this.censados.push(censado19);
        let censado20 = new Censado("Roberto", "Sánchez", 34, 62374190, "Tacuarembó", "Independiente");
        censado20.usuario = usu2;
        this.censados.push(censado20);
        let censado21 = new Censado("Camila", "Ferreira", 25, 81237465, "Treinta y Tres", "Estudiante");
        censado21.usuario = usu2;
        this.censados.push(censado21);
        let censado22 = new Censado("Gonzalo", "Ríos", 31, 74298365, "Artigas", "Independiente");
        censado22.usuario = usu2;
        this.censados.push(censado22);
        let censado23 = new Censado("Romina", "Méndez", 29, 63927548, "Canelones", "Estudiante");
        censado23.usuario = usu2;
        this.censados.push(censado23);
        let censado24 = new Censado("Maximiliano", "López", 35, 52487931, "Cerro Largo", "No trabaja");
        censado24.usuario = usu2;
        this.censados.push(censado24);
        let censado25 = new Censado("Valeria", "Sosa", 26, 93846572, "Colonia", "Dependiente");
        censado25.usuario = usu2;
        this.censados.push(censado25);
        let censado26 = new Censado("Emilio", "González", 43, 70938461, "Durazno", "Independiente");
        censado26.usuario = usu2;
        this.censados.push(censado26);
        let censado27 = new Censado("Agustina", "Rocha", 33, 83194027, "Flores", "Estudiante");
        censado27.usuario = usu2;
        this.censados.push(censado27);
        let censado28 = new Censado("Sebastián", "Moreira", 40, 21563948, "Florida", "No trabaja");
        censado28.usuario = usu2;
        this.censados.push(censado28);
        let censado29 = new Censado("Natalia", "Correa", 38, 45671829, "Lavalleja", "Dependiente");
        censado29.usuario = usu2;
        this.censados.push(censado29);
        let censado30 = new Censado("Leonardo", "Mora", 27, 62347891, "Maldonado", "Independiente");
        censado30.usuario = usu2;
        this.censados.push(censado30);
    }//Fin de la precarga de datos


    agregarUsuario(unUsuario) {
        this.usuarios.push(unUsuario)
    }

    buscarUsuario(userName) {
        let usuario = null;
        for (let i = 0; i < this.usuarios.length; i++) {
            let usuarioActual = this.usuarios[i];
            if (usuarioActual.userName.toLowerCase() === userName.toLowerCase()) {
                usuario = usuarioActual;
            }
        }
        return usuario;
    }

    existeUsuario(userName) {
        let estaRepetido = false;
        let aux = this.buscarUsuario(userName)
        if (aux !== null) {
            estaRepetido = true;
        }
        return estaRepetido;
    }

    obtenerUsuarios() {
        return this.usuarios
    }

    realizarLogin(nombreDeUsuario, pass) {
        let loginOk = false;
        for (let i = 0; i < this.usuarios.length && !loginOk; i++) {
            let usuarioActual = this.usuarios[i];
            if (usuarioActual.userName.toLowerCase() === nombreDeUsuario.toLowerCase() &&
                usuarioActual.password === pass) {
                loginOk = true
                this.usuarioLogueado = usuarioActual;
            }
        }
        return loginOk;
    }

    realizarLogout() {
        this.usuarioLogueado = null;
    }

    asignarCenso(censoPendiente, usuarioDisponible) {
        censoPendiente = Number(censoPendiente);
        usuarioDisponible = Number(usuarioDisponible);
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (censadoActual.id == censoPendiente) {
                censadoActual.usuario = this.obtenerCensistaPorId(usuarioDisponible);
            }
        }
    }

    verificarCensoTerminado(censo) {
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (censadoActual.id === censo.id) {
                censadoActual.censado = true;
            }
        }
    }

    //Carga de Estadisticas para el censista
    obtenerTotalPersonasPendientes() {
        let lista = []
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (censadoActual.censado === false) {
                lista.push(censadoActual);
            }
        }
        return lista.length;
    }

    obtenerTotalPersonasPendientesCensista() {
        let lista = []
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (censadoActual.censado === false && censadoActual.usuario === this.usuarioLogueado) {
                lista.push(censadoActual);
            }
        }
        return lista.length;
    }

    obtenerTotalPersonasCensadas() {
        let lista = []
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (censadoActual.censado === true) {
                lista.push(censadoActual);
            }
        }
        return lista.length + " personas censadas hasta el momento";
    }

    obtenerTotalPersonasCensadasCensista() {
        let lista = []
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i]
            if (censadoActual.censado === true && censadoActual.usuario === this.usuarioLogueado) {
                lista.push(censadoActual)
            }
        }
        return lista.length + " personas censadas hasta el momento"
    }

    obtenerCantidadPersonasPorDepartamento(departamento) {
        let censados = this.censados;
        let cantidadPersonas = 0;

        for (let i = 0; i < censados.length; i++) {
            if (censados[i].departamento === departamento) {
                cantidadPersonas++;
            }
        }
        return cantidadPersonas;
    }

    obtenerPorcentajePersonasPendientes() {
        let totalPersonas = this.censados.length;
        let cantidadPersonasPendientes = this.obtenerTotalPersonasPendientes();
        let porcentajePendientes = (cantidadPersonasPendientes * 100) / totalPersonas;
        return porcentajePendientes + "% de personas pendientes por validar";
    }

    obtenerPorcentajePersonasPorEdad(departamento) {
        let censados = this.censados;
        let cantidadPersonas = 0;
        let cantidadMayoresEdad = 0;
        for (let i = 0; i < censados.length; i++) {
            if (censados[i].departamento === departamento) {
                cantidadPersonas++;
                if (censados[i].edad >= 18) {
                    cantidadMayoresEdad++;
                }
            }
        }
        let porcentajeMayoresEdad = (cantidadMayoresEdad / cantidadPersonas) * 100;
        let porcentajeMenoresEdad = 100 - porcentajeMayoresEdad;
        let resp = `El porcentaje de mayores de edad es de: ${porcentajeMayoresEdad}% y el porcentaje de menores de edad es de: ${porcentajeMenoresEdad}%`;
        return resp;
    }
    //Fin Carga de Estadisticas para el censista
    //Carga de Estadisticas para el invitado
    cargarEstudiantes(departamento) {
        let censados = this.censados;
        let cantidadPersonasEstudian = 0;
        for (let i = 0; i < censados.length; i++) {
            if (censados[i].departamento === departamento && censados[i].ocupacion === "Estudiante") {
                cantidadPersonasEstudian++;
            }
        }
        return cantidadPersonasEstudian;
    }

    cargarNoTrabajan(departamento) {
        let censados = this.censados;
        let cantidadPersonasNoTrabajan = 0;
        for (let i = 0; i < censados.length; i++) {
            if (censados[i].departamento === departamento && censados[i].ocupacion === "No trabaja") {
                cantidadPersonasNoTrabajan++;
            }
        }
        return cantidadPersonasNoTrabajan;
    }

    cargarDepOIn(departamento) {
        let censados = this.censados;
        let cantidadPersonasDepOIn = 0;
        for (let i = 0; i < censados.length; i++) {
            if (censados[i].departamento === departamento && (censados[i].ocupacion === "Independiente" || censados[i].ocupacion === "Dependiente")) {
                cantidadPersonasDepOIn++;
            }
        }
        return cantidadPersonasDepOIn;
    }

    cargarPorcentaje(departamento) {
        let censados = this.censados;
        let cantidadPersonas = 0;
        let cantidadCensados = 0;
        for (let i = 0; i < censados.length; i++) {
            if (censados[i].departamento === departamento) {
                cantidadPersonas++;
                if (censados[i].censado === true) {
                    cantidadCensados++;
                }
            }
        }
        let porcentaje = (cantidadCensados / cantidadPersonas) * 100;
        return porcentaje;
    }
    //Fin Carga de Estadisticas para el invitado

    obtenerCensistaPorId(id) {
        let resp = null;
        for (let i = 0; i < this.usuarios.length && resp === null; i++) {
            let censistaActual = this.usuarios[i];
            if (censistaActual.id === id) {
                resp = censistaActual;
            }
        }
        return resp;
    }

    obtenerCensoPorId(id) {
        let resp = null;
        for (let i = 0; i < this.censados.length && resp === null; i++) {
            let censoActual = this.censados[i];
            if (censoActual.id === id) {
                resp = censoActual;
            }
        }
        return resp;
    }

    obtenerCensoPorCedula(cedula) {
        let resp = null;
        for (let i = 0; i < this.censados.length && resp === null; i++) {
            let censoActual = this.censados[i];
            if (censoActual.cedula === cedula) {
                resp = censoActual;
            }
        }
        return resp;
    }

    validarCedula(cedula) {
        // Verificar que la cédula tenga 8 dígitos
        if (cedula.toString().length !== 8) {
            return false;
        }
        // Obtener los primeros 7 dígitos de la cédula
        let primeros7Digitos = Math.floor(cedula / 10);
        // Calcular el dígito verificador
        let multiplicadores = [2, 9, 8, 7, 6, 3, 4];
        let suma = 0;
        let digitos = primeros7Digitos.toString().split('').map(Number); 
        for (let i = 0; i < multiplicadores.length; i++) {
            suma += digitos[i] * multiplicadores[i];
            
        }
        let digitoVerificadorCalculado = (Math.ceil(suma / 10) * 10) - suma;
        // Obtener el dígito verificador de la cédula ingresada
        let digitoVerificadorIngresado = cedula % 10;
        // Comparar el dígito verificador calculado con el ingresado
        return digitoVerificadorCalculado === digitoVerificadorIngresado;
    }

    obtenerCensistasDisponibles(usuarioLogueado) {
        let censistasDisponibles = [];
        let censistas = sistema.obtenerUsuarios();
        for (let i = 0; i < censistas.length; i++) {
            let censista = censistas[i];
            if (censista !== usuarioLogueado) {
                censistasDisponibles.push(censista);
            }
        }
        return censistasDisponibles;
    }

    obtenerUsuarioAleatorio() {
        let indiceAleatorio = Math.floor(Math.random() * this.usuarios.length);
        return this.usuarios[indiceAleatorio];
    }

    agregarCenso(unCenso) {
        unCenso.usuario = this.obtenerUsuarioAleatorio()
        this.censados.push(unCenso);
    }

    agregarCensoCensista(unCenso) {
        unCenso.usuario = this.usuarioLogueado
        this.censados.push(unCenso)
    }

    obtenerCenso() {
        return this.censados;
    }

    obtenerMisCensos() {
        let censos = []
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (this.usuarioLogueado.userName === censadoActual.usuario.userName) {
                censos.push(censadoActual);
            }
        }
        return censos;
    }

    buscarCenso(cedula) {
        let censado = null;
        for (let i = 0; i < this.censados.length; i++) {
            let censadoActual = this.censados[i];
            if (censadoActual.cedula === cedula) {
                censado = censadoActual;
                this.censadoLogueado = censadoActual
            }
        }
        return censado;
    }

    existeCenso(cedula) {
        let estaRepetido = false;
        let aux = this.buscarCenso(cedula);
        if (aux !== null) {
            estaRepetido = true;
        }
        return estaRepetido;
    }

    modificarCenso(nombre, apellido, edad, departamento, ocupacion) {
        this.censadoLogueado.nombre = nombre;
        this.censadoLogueado.apellido = apellido;
        this.censadoLogueado.edad = edad;
        this.censadoLogueado.departamento = departamento;
        this.censadoLogueado.ocupacion = ocupacion;
    }

    eliminarCenso(unCenso) {
        this.censados.splice(unCenso, 1)
    }
}
//Fin de la clase Sistema
//Comienzo de la clase Usuario
let siguienteUsuario = 1;
class Usuario {
    constructor(nombre, userName, password) {
        this.id = siguienteUsuario++;
        this.nombre = nombre;
        this.userName = userName;
        this.password = password;
    }
}
//Fin de la clase Usuario
//Comienzo de la clase Censado
let siguienteCensado = 1;
class Censado {
    constructor(nombre, apellido, edad, cedula, departamento, ocupacion, censado) {
        this.id = siguienteCensado++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
        this.departamento = departamento;
        this.ocupacion = ocupacion;
        this.usuario = null;
        this.censado = false
    }
}
//Fin de la clase Censado