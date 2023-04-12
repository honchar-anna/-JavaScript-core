let f1 = document.forms[0];

f1.move.addEventListener('click', function(){
    if(f1.text1.value.length > 0){
        f1.text2.value=f1.text1.value;
        f1.text1.value='';
    }
});

f2.text3.addEventListener('blur' , function(){
    if(f2.text3.value.lenght > 0){
        let p=document.getElementsByClassName('text3');
        p[0].placeholder=f2.text3.value;
        f2.text3.value='';
    }
})