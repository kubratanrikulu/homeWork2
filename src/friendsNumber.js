function friendNumber(number1,number2) { 
  let sum1 = 0
  let sum2 = 0
  
  for (let index = 0; index < number1; index++) {
    if(number1 % index == 0){
       total1 = index
    }   
  }
  for (let index = 0; index < number2; index++) {
     if(number2 % index == 0){
        sum2 = index
     }   
  }
  if (number1 == sum2 && number2 == sum1) {
     console.log("Sayılar arkadaştır")
  }else{
     console.log("Sayılar arkadaş değildir.")
  }
}