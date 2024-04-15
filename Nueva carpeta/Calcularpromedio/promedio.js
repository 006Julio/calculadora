/*function calcularPromedio(){
 const nota1=document.getElementById("nota1").value;
 const nota2=document.getElementById("nota2").value;
 const nota3=document.getElementById("nota3").value;
 const promedio=(nota1+nota2+nota3)/3;
 const p=document.querySelector("p").innerHTML;
 if(promedio>10.5){
    p="Su nota es aprovatoria con: " +promedio;
    console.log("aprobado");
 }else{
    p="Su nota es desaprovatoria con: "+ promedio
 }
}
*/
function calcularPromedio(){
   let n1=document.getElementById("nota1").value;
   let n2=document.getElementById("nota2").value;
   let n3=document.getElementById("nota3").value;
   let pro=(Number(n1)+Number(n2)+Number(n3))/3;
   let parrafo=document.getElementById("pe");
   if(pro>=12){
      parrafo.innerHTML="Alumno aprobado: "+pro;
   }else{
      parrafo.innerHTML="Alumno desaprobado: "+pro;
   }
};

	let num = 1;
    while(num < 11){
    	console.log(num+" Este número");
        num++;
    }
function sumar(){
   let num1=document.getElementById("num1").value;
   let num2=document.getElementById("num2").value;
   let sumar=Number(num1)+Number(num2);
   let resultado=document.getElementById("resul");
   resultado.value=sumar;
   console.log(sumar);
};
function restar(){
   let num1=document.getElementById("num1").value;
   let num2=document.getElementById("num2").value;
   let restar=Number(num1)-Number(num2);
   let resultado=document.getElementById("resul");
   resultado.value=restar;
   console.log(restar);

};
function multiplicar(){
   let num1=document.getElementById("num1").value;
   let num2=document.getElementById("num2").value;
   let multiplicar=Number(num1)*Number(num2);
   let resultado=document.getElementById("resul");
   resultado.value=multiplicar;
   console.log(multiplicar);

};
function dividir(){
   let num1=document.getElementById("num1").value;
   let num2=document.getElementById("num2").value;
   let dividir=Number(num1)/Number(num2);
   let resultado=document.getElementById("resul");
   resultado.value=dividir;
   console.log(dividir);

};