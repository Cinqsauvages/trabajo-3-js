// trabajo de entrega 3, carga de clientes//


//armo el objeto//
class Persona {
    constructor(nombre, edad, direccion, dni, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }
}
//lista a la cual guardo los objetos//
let listaClientes = []


//funcion del constructor del objeto//
const agregarPersonas = () => {

    let nombre = prompt('ingrese su nombre: ');
    let edad = parseFloat(prompt('ingrese su edad: '));
    let direccion = prompt('ingrese su direccion: ');
    let dni = parseFloat(prompt('Ingrese su DNI: '))
    let telefono = parseFloat(prompt('Ingrese su numero de telefono: '));

    let persona = new Persona(nombre, edad, direccion, dni, telefono);
    listaClientes.push(persona);

    let pregunta = prompt('Quieres seguir agregando SI o NO');
    let x = pregunta.toLowerCase();

    //condicional para seguir cargando
    if (x == 'si') {
        agregarPersonas()
    } else{
        alert('Revise la consola para ver los clientes agregados. Nos vemos luego!.')
    }
    
   console.log(listaClientes);
}
agregarPersonas();

//SEBA DEJO ESTA PARTE COMENTADA PARA VER SI PODES VERLA, QUERIA AGREGAR LA IDEA DE QUE ELIJA EL USUARIO LA OPCION DE ELIMINAR O BUSCAR EN EL ARRAY, PERO NO SE ME OCURRE COMO CONECTAR, LAS FUNCIONES.
//QUERIA EN EL ELSE PONER UN SWITCH QUE SEGUN EL CASO ACTIVE LAS FUNCIONES, PERO NO ME SALIO.



/* // eliminar clientes. 
function eliminarPersonas(lugar,cuantos) {
    listaClientes.splice(lugar, cuantos)
}

//buscar personas
function buscarPersonas() {

    let busqueda = prompt('Ingrese el nombre de la persona que quiere buscar: ');
    busqueda.toLowerCase();

    let numero = listaClientes.indextOf(busqueda);

    if (numero == -1) {
        alert('LA PERSONA QUE BUSCA NO EXISTE')
    } else {
        console.log(listaClientes[numero])

    }
}

agregarPersonas();
opcion = parseFloat(prompt('si quiere hacer algo de las siguientes opciones escriba el numero correspondiente: 1 - Si quiere volver a agregar 2 - Si quiere eliminar personas 3 - Si quiere buscar'))
        
bucle(opcion);
function bucle(opcion) {
    switch (opcion) {
        case 1:
            return agregarPersonas();
        case 2:
            console.log(listaClientes);
            let indice = prompt = ('ingrese la posicion del persona que quiere eliminar')
            numero = parseFloat(indice);
            let cantidad = 1;
            
            return eliminarPersonas(numero,cantidad);
        case 3:
            return buscarPersonas();
        default:
            break;

    }
}
 */