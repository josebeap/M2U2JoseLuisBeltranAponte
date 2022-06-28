const addMateria = document.getElementById("aggMateria");
const resultado = document.getElementById("resultado");

let nomMateria = [];
let valorMateria = [];

const form = document.getElementById("formMateria");


addMateria.addEventListener("click", () => {
    let materia = document.getElementById("materia").value
    let vlrMateria = document.getElementById("valorMateria").value
    nomMateria.push(materia)
    valorMateria.push(parseFloat(vlrMateria))
    form.reset();
})

resultado.addEventListener("click", () => {

    

    console.log(nomMateria)
    console.log(valorMateria)
})

