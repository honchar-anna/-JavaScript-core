// setTimeout(function(){
// document.write('Timeout')
// }, 2000);
// let timeout;

// function start(){
//    timeout= setTimeout(() => {
//       document.querySelector('.block-timeout').innerHTML='<h2>timeout</h2>';
//    },2000);
// }
// function stop(){
//    clearTimeout (timeout);
// }
// setInterval(function(){
//    document.write('setInterval')
// },2000)
// let soptI

// function creatr(){
//    let h2= document.createElement('h2');
//    h2.textContent = 'setI';
//    document.querySelector('.blockI').append(h2);
//    // if(document.querySelector('.blockI').children.length>=5){
//    //    clearInterval(soptI);
//    // }
// }
// function startI(){

//    soptI=setInterval(creatr,2000);
//    document.querySelector('.sta').disabled = true;
//    document.querySelector('.sto').disabled = false;
// }
// function stopI(){
//    clearInterval(soptI);
//    document.querySelector('.sta').disabled = false;
//    document.querySelector('.sto').disabled = true;
// }
let d=new Date();
console.log('day',d);
console.log('get day', d.getDay());
console.log('get date', d.getDate());
console.log('get Month', d.getMonth());
console.log('get fullYear', d.getFullYear());
console.log('get Hours', d.getHours());
console.log('get Minutes', d.getMinutes());
console.log('get Seconds', d.getSeconds());
console.log('get TimezoneOffset', d.getTimezoneOffset());
console.log(new Date (2000,10,2,20,00,00));

let t= new Date(2022,10,2,20,00,00);
console.log(d.get);