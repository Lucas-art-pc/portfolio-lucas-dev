function modoClaro(){
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let botao = document.getElementById('btn');

    if(body.classList.contains('body-escuro')){
        body.classList.remove('body-escuro');
        body.classList.add('body-claro');
        header.classList.remove('header-escuro');
        header.classList.add('header-claro');
        botao.innerHTML = 'Modo Escuro';
        botao.style.color = 'black';
    }else{
        body.classList.remove('body-claro');
        body.classList.add('body-escuro');
        header.classList.add('header-escuro');
        header.classList.remove('header-claro');
        botao.innerHTML = 'Modo Claro';
        botao.style.color = 'white';
    }
}