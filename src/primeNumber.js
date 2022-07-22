function primelNumber() {
  let number = 10
  let counter = 0
  for (let index = 2; index < 1000; index++) {
    if (number % index === 0) {
      counter++
      break
     }
   }
   console.log(counter> 0 ? "Asaldır" : "Asal değil")
  }