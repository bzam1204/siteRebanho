import buscaDados from "../requisicoes/buscaDados.js";
import perfil__template from "./perfil-template.js";

const perfil = () => {
    const nomeUsuario = "Bruno Zamorano"

    const btnPerfil = document.querySelector('[data-cabecalho__btnPerfil]')

    btnPerfil.addEventListener('click', function mostraPerfil() {

        const rodape = document.querySelector('[data-rodape]')
        rodape.classList.add('esmaecer')

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://bzam1204.github.io/siteRebanho/usuarios.json')
        xhr.addEventListener('load', function () {
            var resposta = xhr.responseText
            var usuarios = JSON.parse(resposta)

            usuarios.forEach(function (usuarios) {
                if (nomeUsuario === usuarios.nome) {
                    const main = document.querySelector('[data-main]')
                    main.innerHTML = ''
                    main.innerHTML = perfil__template(usuarios)

                } else {
                    console.log(usuarios.nome)
                    window.alert('não é')
                }

            })
        })
        xhr.send()
        btnPerfil.removeEventListener('click', mostraPerfil)

        btnPerfil.addEventListener('click', function escondePerfil() {
            const main = document.querySelector('[data-main]')
            main.innerHTML = ''
            const rodape = document.querySelector('[data-rodape]')
            rodape.classList.remove('esmaecer')
            rodape.classList.add('aparecer')
            rodape.classList.remove('aparecer')
            btnPerfil.removeEventListener('click', escondePerfil)
            buscaDados()

        })
    })
}

export default perfil

