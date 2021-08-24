const btn = document.querySelector('[data-cabecalho__botao]')

const abreMenu = () => {
    btn.addEventListener('click', function escutadorAbreMenu() {
        const menu = document.querySelector('[data-cabecalho__menu]')
        menu.classList.add('cabecalho__menu--abrir')
        btn.removeEventListener('click', escutadorAbreMenu)
        fechaMenu()
    })
}

const fechaMenu = () => {
    const $btnFecha = document.querySelector('[data-cabecalho__btnFecha]')
    $btnFecha.addEventListener('click', function escutadorFechaMenu() {
        const menu = document.querySelector('[data-cabecalho__menu]')
        menu.classList.remove('cabecalho__menu--abrir')
        btn.removeEventListener('click', escutadorFechaMenu)
        abreMenu()
    })
}

export default abreMenu