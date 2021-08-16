import buscaCartoes from "./buscaCartoes.js"; 
import buscaHome from "./buscaHome.js";
import mostraVideo from "./video.js";

const buscaDados = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://bzam1204.github.io/siteRebanho/cartoes.json");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var cartoes = JSON.parse(resposta);
            buscaHome(cartoes)
            mostraVideo(cartoes)
            buscaCartoes(cartoes)
        }
    })

    xhr.send()
}

export default buscaDados