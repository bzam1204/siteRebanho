const btn = document.querySelector('[data-cabecalho__botao]')

const abreMenu = () => {
    btn.addEventListener('click', () => {
        btn.classList.remove('cabecalho__botao--fechar')
        btn.classList.add('cabecalho__botao--abrir')
        const menu = document.querySelector('[data-cabecalho__menu]')
        menu.classList.add('cabecalho__menu--abrir')
        btn.removeEventListener('click', EventTarget)
        fechaMenu()
    })
}

const fechaMenu = () => {
    btn.addEventListener('click', () => {
        btn.classList.remove('cabecalho__botao--abrir')
        btn.classList.add('cabecalho__botao--fechar')
        const menu = document.querySelector('[data-cabecalho__menu]')
        menu.classList.remove('cabecalho__menu--abrir')
        btn.removeEventListener('click', EventTarget)
        abreMenu()
    })
}

abreMenu()