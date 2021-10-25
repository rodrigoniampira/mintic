   



//if(nombres === "" || (nombres.length < 6 || nombres.length >30) || nombres !== expresiones,nombres){
    // alert("Digite por favor el nombre")
    // document.getElementById("nombres").classList.add("error"); //resalto bordes por error 
   // nombresEl.classList.add("error"); //resalto bordes por error pero acortando con capturar elemento en variable
    //alert("Digite un nombre con solo letras [Aa-Zz] y de minimo 6  y maximo 30 caracteres")
    //return false;
//}
//}




//Asignacion de variables cuando cargue la página
/*window.onload = function(){
    //Asignacion a las variables, input
    let nombres = document.getElementById("in_nombre_usuario").value;
    let apellidos = document.getElementById("apellidos").value;
    let contrasena = document.getElementById("in_contrasena").value;
    let confirmarcontrasena = document.getElementById("in_confirmar_contrasena").value;

    //Recogemos los eventos
    nombres.addEventListener('input', createListener(validar_nombre_usuario));
    apellidos.addEventListener('input', createListener(validar_apellidos_usuario));
    apellidos.addEventListener('input', createListener(validar_apellidos_usuario));

}*/

//let expresion = /^[a-zA-Z0-9áéíóú\s]+$/gi; // Letras, numeros, guion y guion_bajo por el profe

//let cumple = expresion.test(nombres);

//if (cumple){
    alert("Cumple patron")
//}else{
//    alert("No Cumple")
//}

/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}+$/, // Letras, numeros, guion y guion_bajo
	nombres: /^[a-zA-ZÀ-ÿ\s]{6,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,120}$/, // 6 a 120 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}*/

/*function botonGuardar(){
    //boton que crea el evento de guardar registro
    let nombresEl = document.getElementById("in_nombre_usuario");
    let apellidosEl = document.getElementById("apellidos");
    let contrasenaEl = document.getElementById("in_contrasena");
    let confirmarcontrasenaEl = document.getElementById("in_confirmar_contrasena");
    
    nombresEl.classList.remove("error"); //sirve para remover el estilo asignado temporalmente(erro-rojo border)
    apellidosEl.classList.remove("error");
    contrasenaEl.classList.remove("error");
    confirmarcontrasenaEl.classList.remove("error");

    let nombres = document.getElementById("in_nombre_usuario").value;
    let apellidos = document.getElementById("apellidos").value;
    let contrasena = document.getElementById("in_contrasena").value;
    let confirmarcontrasena = document.getElementById("in_confirmar_contrasena").value;

    if(nombres === "" || (nombres.length < 6 || nombres.length >30)){
       // alert("Digite por favor el nombre")
       // document.getElementById("nombres").classList.add("error"); //resalto bordes por error 
       nombresEl.classList.add("error"); //resalto bordes por error pero acortando con capturar elemento en variable
       alert("Digite un nombre de minimo 6 caracteres y max 30")
    }
    if(apellidos === ""){
         
        //document.getElementById("apellidos").classList.add("error");
        apellidosEl.classList.add("error");
        alert("Digite por favor los apellidos") // comentado para probar metodo debajo
    }
    if(contrasena === ""){
       
       //document.getElementById("contrasena").classList.add("error");
       contrasenaEl.classList.add("error");
       alert("Digite por favor la contraseña");
    }

    if(confirmarcontrasena === ""  || confirmarcontrasena !== contrasena){
        //document.getElementById("contrasena").classList.add("error");
        confirmarcontrasenaEl.classList.add("error");
        alert("La contraseña no es igual");

        return false;
        
     }

    if(nombres !== "" && apellidos !== "" && contrasena !== ""  ){
        alert("Tus datos estan correctos")
        let datospersonales = {
            nombres : nombres,
            apellidos : apellidos,
            contrasena : contrasena,
        }
        console.log.apply(datospersonales)
       
    }

    console.log("MI PRIMER JAVASCRIPT");
}*/



/*function validar_contrasena(){

    //Segunda funcion solicitada en el reto 2 ciclo3 validar_contrasena
     
    letras ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    Num ="0123456789";
    let contrasenaEl = document.getElementById("in_contrasena");
    contrasenaEl.classList.remove("error"); //sirve para remover el estilo asignado temporalmente(erro-rojo border)
    let contrasena = document.getElementById("in_contrasena").value;

    if(contrasena === "" || contrasena.length < 6 || contrasena !== letras ){
        // alert("Digite por favor el nombre")
        // document.getElementById("nombres").classList.add("error"); //resalto bordes por error 
        contrasenaEl.classList.add("error"); //resalto bordes por error pero acortando con capturar elemento en variable
        alert("Digite una contraseña válida, la cual debe tener como minimo 6 caracteres(letras [Aa-Zz]) y (números[0-9])")
        return false;
    }
}*/
/*function confirmar_contrasena(e){

    //Tercera funcion solicitada en el reto 2 ciclo3 confirmar_contrasena
     
    alfaNum ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
    contrasenaEl.classList.remove("error"); //sirve para remover el estilo asignado temporalmente(erro-rojo border)
    let contrasena = document.getElementById("confirmar_contrasena").value;

    if(contrasena === "" || contrasena.length < 6 || contrasena !== alfaNum){
        // alert("Digite por favor el nombre")
        // document.getElementById("nombres").classList.add("error"); //resalto bordes por error 
        contrasenaEl.classList.add("error"); //resalto bordes por error pero acortando con capturar elemento en variable
        alert("Digite una contraseña válida, la cual debe tener como minimo 6 caracteres(letras [Aa-Zz]) y (números[0-9])")
        return false;
    }
    
 }
}*/
