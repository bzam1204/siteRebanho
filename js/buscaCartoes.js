
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://bzam1204.github.io/siteRebanho/cartoes.json");

xhr.addEventListener("load", function () {

    if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var cartoes = JSON.parse(resposta);

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
                    <p class="sinopse">${cartoes.sinopse}</p>
                    <a href="O Valor de Uma Alma.html" class="link">Leia Mais</a>
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
                    <iframe width="100%" src="${cartoes.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="assunto">${cartoes.assunto}</p>
                    <h2 class="titulo">${cartoes.title}</h2>
                    <p class="sinopse">${cartoes.sinopse}</p>
                    <a href="O Valor de Uma Alma.html" class="link">Leia Mais</a>
                    <div class="molduraAutor">
                        <img src="${cartoes.imgAutor}" alt="" class="imgAutor">
                        <p class="nomeAutor">${cartoes.nomeAutor}</p>
                        <p class="data">${cartoes.data}</p>
                    </div>
                    <iframe width="640" height="480" src="https://www.youtube.com/embed/4TUpg_qmbYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `
                main.appendChild(div)
            } else {
                console.log('nao deu certo')
            }
        })

    } else {
        console.log('erro')
    }
});

xhr.send();

