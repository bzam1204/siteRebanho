const buscaCartoes = (cartoes) => {
    cartoes.forEach(function (cartoes) {
        const main = document.querySelector('main')
        const div = document.createElement('div')
        div.classList.add('card')

        if (cartoes.tipo == "artigo") {
            div.innerHTML =
                `
            <img class="imagemCard" src="${cartoes.img}" alt="">
            <p class="assunto">${cartoes.assunto}</p>
            <h2 class="titulo">${cartoes.title}</h2>
            <div class="molduraAutor">
                <img src="${cartoes.imgAutor}" alt="" class="imgAutor">
                <p class="nomeAutor">${cartoes.nomeAutor}</p>
                <p class="data">${cartoes.data}</p>
            </div>
        `
            main.appendChild(div)
        } else if (cartoes.tipo == "video") {
            div.innerHTML =
                `
            <iframe width="100%" height="375px" src="${cartoes.video}"  frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
            <p class="assunto">${cartoes.assunto}</p>
            <h2 class="titulo">${cartoes.title}</h2>
            <div class="molduraAutor">
                <img src="${cartoes.imgAutor}" alt="" class="imgAutor">
                <p class="nomeAutor">${cartoes.nomeAutor}</p>
                <p class="data">${cartoes.data}</p>
            </div>
        `
            main.appendChild(div)
        }
    })
}

export default buscaCartoes