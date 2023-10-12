window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
      document.querySelector('.boton-cielo-container')
      .classList.add('show');
    }else{
        document.querySelector('.boton-cielo-container')
        .classList.remove('show');
    }
}

document.querySelector('.boton-cielo-container')
.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});
