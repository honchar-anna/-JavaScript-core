window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
})

let downW=document.querySelector('.scroll');
window.addEventListener('scroll', ()=>{
    if(window.scrollY>=50&& window.scrollY<=300){
        downW.style.fontSize = `${window.scrollY/ 2}px`
    }
  
})

document.getElementById('scroll-up').addEventListener('click',()=> {
     
        window.scrollY({
            top: -1000,
            behavior: 'smooth'
        })
    })

    const fromLeft = document.querySelector('#slide')
    window.addEventListener('scroll', () => {
        if ( window.scrollY <= 600) {
            fromLeft.style.left = `${window.scrollY /3}px`
            
        }
    })
    const redLine = document.querySelector('.redLine')
window.addEventListener('scroll', () => {
    if (  window.scrollY <= 600) {
       
        redLine.style.width = `${window.scrollY}px`
    }
})
    
    const fromRight = document.querySelector('#img')
    window.addEventListener('scroll', () => {
        if ( window.scrollY <= 600) {
            fromRight.style.right = `${window.scrollY /3}px`
        }
    })