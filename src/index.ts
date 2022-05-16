let número1: number = Number(prompt("Ingrese el primer número"));
let número2: number = Number(prompt("Ingrese el segundo número"));
let opciónMenú: number = Number(
  prompt(
    "Ingrese 1 para sumar, ingrese 2 para restar ó ingrese otro comando para terminar"
  )
);

if (opciónMenú === 1) {
  console.log("El resultado es:", número1 + número2);
} else {
  if (opciónMenú === 2) {
    console.log("El resultado es:", número1 - número2);
  } else {
    opciónMenú !== 1 && 2;
    console.log("Usted ha terminado el programa");
  }
}
