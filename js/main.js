class Cartao {
    img
    assunto
    title
    sinopse
    imgAutor
    nomeAutor
    data
}


function criaCard() {
    const conteudo_principal = document.querySelector('[data-main]')
    const card = document.createElement('div')
    const img = document.createElement('img')
    const assunto = document.createElement('p')
    const title = document.createElement('h2')
    const sinopse = document.createElement('p')
    const imgAutor = document.createElement('img')
    const nomeAutor = document.createElement('p')
    const data = document.createElement('p')

    const cartao1 = new Cartao()
    cartao1.img = 'C:\Users\BZAM1\Documents\Projetos\TESTE DE BLOG\assets\img\O Valor de Uma Alma.png' 
    cartao1.assunto = 'Reconsciliação'
    cartao1.title = 'O Valor de Uma Alma'
    cartao1.sinopse = 'Conheça a historia de um filho que pede a herança do pai ainda vivo e parte, rico, para mundo afora, abandonando os ensinamentos do seu pai para finalmente seguir seu coração.'
    cartao1.imgAutor = 'C:\Users\BZAM1\Documents\Projetos\TESTE DE BLOG\assets\img\Aprisco.com.png'
    cartao1.nomeAutor = 'Elza Barros'
    cartao1.data = '11/08/2021'
    console.log(cartao1)


}
criaCard()

console.log(Cartao)
