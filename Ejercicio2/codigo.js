const documento = document;
const validar = document.getElementById("validar");

validar.addEventListener("click", () => {
  const numeroA = parseFloat(documento.querySelector("#numeroA").value);
  const numeroB = parseFloat(documento.querySelector("#numeroB").value);
  const numeroC = parseFloat(documento.querySelector("#numeroC").value);
  const numeroD = parseFloat(documento.querySelector("#numeroD").value);

  const resultado = documento.querySelector("#resultado");

 

  console.log(numeroA + numeroB + numeroC + numeroD);

  if (
    isNaN(numeroA) ||
    numeroA < 0 ||
    isNaN(numeroB) ||
    numeroB < 0 ||
    isNaN(numeroC) ||
    numeroC < 0 ||
    isNaN(numeroD) ||
    numeroD < 0
  ) {
    window.alert("Debe ingresar numeros positivos mayores o iguales a 0");
    resultado.textContent =
      "Debe ingresar numeros positivos mayores o iguales a 0";
  } else {
    if (
      numeroA != numeroB &&
      numeroA != numeroC &&
      numeroA != numeroD &&
      numeroB != numeroC &&
      numeroB != numeroD &&
      numeroC != numeroD
    ) {
      // Numero mayor
      if (numeroA > numeroB && numeroA > numeroC && numeroA > numeroD) {
        mayor = numeroA;
        numeroMayor = " Numero A "
      } else if (numeroB > numeroC && numeroB > numeroD) {
        mayor = numeroB;
        numeroMayor = " Numero B "
      } else if (numeroC > numeroD) {
        mayor = numeroC;
        numeroMayor = " Numero C "
      } else {
        mayor = numeroD;
        numeroMayor = " Numero D "
      }

      // Numero menor
      if (numeroA < numeroB && numeroA < numeroC && numeroA < numeroD) {
        menor = numeroA;
        numeroMenor = " Numero A "
      } else if (numeroB < numeroC && numeroB < numeroD) {
        menor = numeroB;
        numeroMenor = " Numero B "
      } else if (numeroC < numeroD) {
        menor = numeroC;
        numeroMenor = " Numero C "
      } else {
        menor = numeroD;
        numeroMenor = " Numero D "
      }

      window.alert(
        "El valor máximo es: " + mayor + numeroMayor + "El valor minimo es: " + menor + numeroMenor
      );
      resultado.innerHTML =
        "El valor máximo es: " +
        mayor +
        "<br>" +
        "El valor minimo es: " +
        menor;
    } else {
        window.alert("Ninguno de los numeros debe ser iguales");
      resultado.textContent = "Ninguno de los numeros debe ser iguales";
    }
  }
});
