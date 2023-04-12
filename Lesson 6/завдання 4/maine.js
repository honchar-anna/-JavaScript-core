function addColor(){
  if (event.target.className == 'liColor1'){
      let li1 = document.querySelector('.liColor1').innerHTML;
      event.target.style.color = `${li1}`;
  }
  else if (event.target.className == 'liColor2'){
      let li2 = document.querySelector('.liColor2').innerHTML;
      event.target.style.color = `${li2}`;
  }
  else if (event.target.className == 'liColor3'){
      let li3 = document.querySelector('.liColor3').innerHTML;
      event.target.style.color = `${li3}`;
  }
  else if (event.target.className == 'liColor4'){
      let li4 = document.querySelector('.liColor4').innerHTML;
      event.target.style.color = `${li4}`;
  }
  else if (event.target.className == 'liColor5'){
      let li5 = document.querySelector('.liColor5').innerHTML;
      event.target.style.color = `${li5}`;
  }
  else if (event.target.className == 'liColor6'){
      let li6 = document.querySelector('.liColor6').innerHTML;
      event.target.style.color = `${li6}`;
  }
}