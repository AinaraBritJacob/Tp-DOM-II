
 //1)
 let respuesta;
 
 let B=document.querySelector("#B")
 
 
 B.onclick= function () {
   
     respuesta = document.querySelector("#I").value;
 
     if (respuesta == "¿Como estas?") {
         alert("Bien y vos?");
     } else {
         alert("No entiendo la pregunta");
     }
 }
 
 //2)
 
 let arreglo = []; 
 let estudiantes;
 let p = document.querySelector("p"); 
 let U = document.querySelector("#U"); 
 
 U.onclick = function() {
     estudiantes = document.querySelector("#N").value; 
 
     
     if (arreglo.length < 10) {
         arreglo.push(estudiantes); 
         p.textContent = estudiantes 
     } 
    
 }
 
