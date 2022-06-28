const validar = document.getElementById("validar");
let mayor = 0;
let menor = 0;

let resultado = document.getElementById("resultado");

validar.addEventListener("click", () => {
  let numeroA = document.getElementById("numeroA");
  let numeroB = document.getElementById("numeroB");
  let numeroC = document.getElementById("numeroC");
  let numeroD = document.getElementById("numeroD");
  
  

  numeroA = parseFloat(numeroA.value);
  numeroB = parseFloat(numeroB.value);
  numeroC = parseFloat(numeroA.value);
  numeroD = parseFloat(numeroB.value);

  

  if (isNaN(numeroA) || numeroA < 0 || isNaN(numeroB) || numeroB < 0 || 
      isNaN(numeroC) || numeroC < 0 || isNaN(numeroD) || numeroD < 0){
          resultado.textContent = "Debe ingresar numeros positivos mayores o iguales a 0"
  }else{
      if(numeroA!=numeroB && numeroA!=numeroC && numeroA!=numeroD &&
         numeroB!=numeroC && numeroB!=numeroD &&
         numeroC!=numeroD){
             // Numero mayor
             if((numeroA > numeroB) && (numeroA > numeroC) && (numeroA > numeroD)){
                 mayor = numeroA;
             }else if((numeroB > numeroC) && (numeroB > numeroD)){
                 mayor = numeroB;
             }else if((numeroC > numeroD)){
                 mayor = numeroC;
             }else{
                 mayor = numeroD;
             }

            // Numero menor
            if((numeroA < numeroB) && (numeroA < numeroC) && (numeroA < numeroD)){
                menor = numeroA;
            }else if((numeroB < numeroC) && (numeroB < numeroD)){
                menor = numeroB;
            }else if((numeroC < numeroD)){
                menor = numeroC;
            }else{
                menor = numeroD;
            }

            resultado.innerHTML = "El valor máximo es: " + mayor + "<br>" + "El valor minimo es: " + menor;

         }else{
             resultado.textContent = "Ninguno de los numeros debe ser iguales";
         }
  }


 
});
