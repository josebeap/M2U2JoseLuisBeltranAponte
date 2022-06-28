const addMateria = document.getElementById("aggMateria");
const resultado = document.getElementById("resultado");
const solucion = document.getElementById("solucion");
const datos = document.getElementById("datos");

let nomMateria = [];
let valorMateria = [];

const form = document.getElementById("formMateria");

addMateria.addEventListener("click", () => {
  let materia = document.getElementById("materia").value;
  let vlrMateria = document.getElementById("valorMateria").value;
  if (materia != "" && vlrMateria != "") {
    nomMateria.push(materia);
    valorMateria.push(parseFloat(vlrMateria));
    mostrarMaterias();
    form.reset();
  }else{
      alert("Inserte todos los datos")
  }
});

function mostrarMaterias() {
  info = "";
  for (i = 0; i < nomMateria.length; i++) {
    info =
      info +
      "Materia: " +
      nomMateria[i] +
      " " +
      "Valor: " +
      valorMateria[i] +
      "<br>";
  }
  datos.innerHTML = info;
}

resultado.addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  const costosFijos = 20000;
  const carne = 8000;
  const descuento = 0.2;
  let totalMaterias = nomMateria.length;
  let totalValorMaterias = 0;
  let valorFinal = 0;

  for (i = 0; i < totalMaterias; i++) {
    totalValorMaterias += valorMateria[i];
  }

  valorFinal = totalValorMaterias * descuento + costosFijos + carne;

  solucion.innerHTML =
    nombre + "<br>" + "El valor total de las materias es: " + valorFinal;

  console.log(nomMateria);
  console.log(valorMateria);
});
