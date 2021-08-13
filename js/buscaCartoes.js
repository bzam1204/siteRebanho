
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://bzam1204.github.io/siteRebanho/cartoes.json");

    xhr.addEventListener("load", function() {     

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var cartoes = JSON.parse(resposta);

            cartoes.forEach(function (cartoes){
                const main = document.querySelector('main')
                const img = document.createElement('img')
                main.appendChild(img)
                img.src = cartoes.img
                console.log(img.src)
            } )

        } else {
            console.log('erro')
        }
    });

    xhr.send();

