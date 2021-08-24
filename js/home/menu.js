const btn = document.querySelector('[data-cabecalho__botao]')

const abreMenu = () => {
    btn.addEventListener('click', function escutadorAbreMenu() {
        btn.classList.remove('cabecalho__botao--fechar')
        btn.classList.add('cabecalho__botao--abrir')
        const menu = document.querySelector('[data-cabecalho__menu]')
        menu.classList.add('cabecalho__menu--abrir')
        btn.removeEventListener('click', escutadorAbreMenu)
        console.log(btn.EventTarget)
        fechaMenu()
    })
}

const fechaMenu = () => {
    btn.addEventListener('click',function escutadorFechaMenu () {
        setTimeout(() => {
            btn.classList.remove('cabecalho__botao--abrir')
            btn.classList.add('cabecalho__botao--fechar')
            const menu = document.querySelector('[data-cabecalho__menu]')
            menu.classList.remove('cabecalho__menu--abrir')
            btn.removeEventListener('click', escutadorFechaMenu)
            abreMenu()
        }
            , 300)
    })
}

export default abreMenu