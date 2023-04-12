let person = {
   firstName:'Ivan',
   secondName:'Ivanov',
   showData(){
      console.log(`${this.firstName} ${this.secondName}`);
   }
};
let newPerson={}
for (const key in person) {
   // console.log(key, person);
   newPerson[key]=person[key];
   newPerson.firstName='Petro';
   newPerson.secondName='Petriv';
}

person.showData();
newPerson.showData();
