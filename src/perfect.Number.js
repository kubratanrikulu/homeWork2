function perfectNumber() {
  var number=1;
for (var number=1; number<=1000; number++)
{
    let sum = 0;
    for ( i = 1 ; i < number ; i++) {
      if(number %i == 0)  
        sum += i;
    }
    if (sum == number) 
      console.log(number + " is perfect number");	
}
}