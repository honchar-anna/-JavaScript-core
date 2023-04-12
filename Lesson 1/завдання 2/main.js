let myMath={
   a:5,
   b:2,
   sum(){
      c=this.a+this.b;
      console.log(`${this.a} + ${this.b} = ${c}`);
   },
   multiplication(){
      c=this.a*this.b;
      console.log(`${this.a} * ${this.b} = ${c}`);
   },
   division(){
      c=this.a/this.b;
      console.log(`${this.a} / ${this.b} = ${c}`);
   },
   subtraction(){
      c=this.a-this.b;
      console.log(`${this.a} - ${this.b} = ${c}`);
   }  
}
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();
