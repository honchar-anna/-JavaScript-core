getArea = (number = prompt(" Введіть радіус! ")) => {
   let sum = 0;
   let ok = false;
   if (number > 0) {
     sum += Math.PI * Math.pow(number, 2);
     console.log ("Площа = " + sum + " см^2");
   }
   else if(number =0) {
      console.log (" Повинно бути числове значення");
   }
   else{
     console.log("Будь ласка, введіть радіус!"); 
   }
  
   
 };
getArea();
