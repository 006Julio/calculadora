function cambiar(){
    alert("Parrafo actualizado");
    document.querySelector("p")
    .innerText="Este parrafo a sido actualizado"
};
function cuenta(){

    const lista=document.getElementsByTagName("li")
    const contar=document.querySelector("#parrafo")
    contar.innerHTML=lista[1].innerHTML
};
function cont(){
    document.querySelector("#parrafo").innerHTML="Parrafo"
}
