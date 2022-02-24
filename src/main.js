// ejercicio practica ciclos
const notas = [10 , 3 , 6 , 7 , 2]

for (let i = 0 ; i < 5 ; i++){
  if (notas[i] >= 6){
    console.log(notas[i] + " Aprobado")
  }
  else{
    console.log(notas[i])
    let resto = 6 - notas[i]
    console.log("Faltaron " + resto +  " puntos para aprobar")
  }
}