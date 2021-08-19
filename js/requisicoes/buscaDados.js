import buscArtigo from "../buscaArtigos.js";
import buscaCartoes from "../buscaCartoes.js"; 
import buscaHome from "../buscaHome.js";
import mostraVideo from "../video.js";
import buscAudio from '../buscAudio.js'
import perfil from "../perfil/perfil.js";

const buscaDados = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://bzam1204.github.io/siteRebanho/cartoes.json");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var cartoes = JSON.parse(resposta);
            buscaHome(cartoes)
            buscArtigo(cartoes)
            mostraVideo(cartoes)
            buscAudio(cartoes)
            buscaCartoes(cartoes)
            perfil()
        }
    })

    xhr.send()
}

export default buscaDados