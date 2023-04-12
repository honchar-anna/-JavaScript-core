getSqrt = (number = prompt(" Введіть число ! ")) => {
   let sq = 0;
   let ok = false;
   if (number > 0) {
     sq = Math.sqrt(number);
     console.log (` Квадратний корінь з ${number} = ${sq}` );
   }
   else if(number <0) {
      console.log (" Введіть додатнє число");
   }
   else if(number =0) {
      console.log (" Повинно бути числове значення");
   }
   
   else{
     console.log("Будь ласка, введіть число!"); 
   }
  
   
 };
 getSqrt();