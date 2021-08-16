const mostraVideo = function (cartoes) {
    var cards = cartoes
    const btn = document.querySelector('[data-video]')
    btn.addEventListener('click', function (cards) {

        const main = document.querySelector('main')
        main.innerHTML = ' '

        cartoes.forEach(function (cards) {

            const main = document.querySelector('main')
            const div = document.createElement('div')
            div.classList.add('card')
            if (cards.tipo == "video") {

                div.innerHTML =
                    `
                            <iframe width="100%" height="375px" src="${cards.video}"  frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                            <p class="assunto">${cards.assunto}</p>
                            <h2 class="titulo">${cards.title}</h2>
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
export default mostraVideo