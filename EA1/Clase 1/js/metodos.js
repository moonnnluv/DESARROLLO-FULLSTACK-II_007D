/*creamos funciones*/
function saludo(){
    alert('Bienvenido a Javascript!');
}

function saludoUsuario(){
    // variables -> var (global) let (local)
    let a= document.getElementById('nom').value; //document es el propio html
    console.log(a);
    alert("holi " + a + " jiji");
}

function sumar(){
    let nume1 = parseInt(document.getElementById('nume1').value);
    let nume2 = parseInt(document.getElementById('nume2').value);
    let suma = nume1 + nume2;
    alert("La suma de " + nume1 +  " y " + nume2 + " es " + suma);
    document.getElementById("mensaje").innerHTML="La suma de " + nume1 +  " y " + nume2 + " es " + suma; // permite modificar el html
}

function parimpar(){
    let nume3 = parseInt(document.getElementById('nume3').value);
    if (nume3%2 == 0){
        
        document.getElementById("mensaje2").innerHTML= "El numero " + nume3 + " es par";
        document.getElementById("mensaje2").style.color="red";
        document.getElementById("mensaje2").style.fontWeight = "bold";
    } else { 
        
        document.getElementById("mensaje2").innerHTML= "El numero " + nume3 + " es impar";
        document.getElementById("mensaje2").style.color="blue";
        document.getElementById("mensaje2").style.fontWeight = "bold";
    }

   

    

}