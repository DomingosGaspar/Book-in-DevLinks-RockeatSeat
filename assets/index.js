function AlterarModo(){

    const html = document.documentElement
    html.classList.toggle('modo-claro')

    //Pegar a tag img
    const img = document.querySelector('#container-perfil img')
    //Substituir a imagem 

    if(html.classList.contains('modo-claro')){
    //Se estiver no light mode, adicionar a imagem light
        img.setAttribute('src', './assets/img/Ellipse.png')
    } else{
        //Se estiver no dark mode, manter a imagem normal
        img.setAttribute('src', './assets/img/Avatar.png')
    }


}