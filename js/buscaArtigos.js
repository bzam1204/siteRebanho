import scrollTop from "./scrollTop.js"

const buscArtigo = function (cartoes) {
    var cards = cartoes
    const btn = document.querySelector('[data-artigo]')
    btn.addEventListener('click', function (cards) {

        scrollTop()
        const main = document.querySelector('main')
        main.innerHTML = ' '

        cartoes.forEach(function (cards) {

            const main = document.querySelector('main')
            const div = document.createElement('div')
            div.classList.add('card')
            if (cards.tipo == "artigo") {

                div.innerHTML =
                `
                <img class="imagemCard" src="${cards.img}" alt="">
                <p class="assunto">${cards.assunto}</p>
                <h2 class="titulo">${cards.title}</h2>
                <p class="sinopse">${cards.sinopse}</p>
                <a href="O Valor de Uma Alma.html" class="link">Leia Mais</a>
                <div class="molduraAutor">
                    <img src="${cards.imgAutor}" alt="" class="imgAutor">
                    <p class="nomeAutor">${cards.nomeAutor}</p>
                    <p class="data">${cards.data}</p>
                </div>
            `
                main.appendChild(div)
            }
        })
    })
}
export default buscArtigo