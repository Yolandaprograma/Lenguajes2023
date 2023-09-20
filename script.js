const puntJavascript = document.getElementById("Javascript");
const parrafoJavascriptElement = document.getElementById("parrafoJavascript");

const puntHTML = document.getElementById("HTML");
const parrafoHTMLElement = document.getElementById("parrafoHTML");

const puntCSS=document.getElementById("CSS");
const parrafoCSSElement = document.getElementById("parrafoCSS");

const puntjava = document.getElementById("java");
const parrafoJavaElement = document.getElementById("parrafojava");

const puntPython = document.getElementById("python");
const parrafoPythonElement = document.getElementById("parrafoPython");

const puntSQL= document.getElementById("SQL");
const parrafoSQLElement = document.getElementById("parrafoSQL");

const puntPHP = document.getElementById("PHP");
const parrafoPHPElement = document.getElementById("parrafoPHP");

const puntTypescript = document.getElementById("Typescript");
const parrafoTypescriptElement = document.getElementById("parrafoTypescript");

const puntCPlas = document.getElementById("CPlas");
const parrafoCPlasElement = document.getElementById("parrafoCPlas");

const puntc = document.getElementById("C");
const parrafoCElement = document.getElementById("parrafoC");



function mostrarCotenedor (contenedor, parrafo){

    contenedor.addEventListener("mouseover", e =>{
        parrafo.classList.remove("oculto");
        parrafo.classList.add("visible");
})

    contenedor.addEventListener("mouseleave", e => {
        parrafo.classList.add("oculto");
})
}

mostrarCotenedor(puntJavascript, parrafoJavascriptElement);
mostrarCotenedor(puntHTML, parrafoHTMLElement);
mostrarCotenedor(puntCSS, parrafoCSSElement);
mostrarCotenedor(puntjava, parrafoJavaElement);
mostrarCotenedor(puntPython, parrafoPythonElement);
mostrarCotenedor(puntSQL,parrafoSQLElement);
mostrarCotenedor(puntPHP,parrafoPHPElement);
mostrarCotenedor(puntTypescript,parrafoTypescriptElement);
mostrarCotenedor(puntCPlas,parrafoCPlasElement);
mostrarCotenedor(puntc, parrafoCElement);