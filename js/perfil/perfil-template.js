const perfil__template = (usuarios) => {
    const template =
        `
        <div class="perfil__painel">
            <div class="perfil__moldura perfil__moldura--borda"></div>
                <img class="perfil__img" src="${usuarios.imagem}" alt="">
            
            <h2 class="perfil__nome">${usuarios.nome}</h2>            

            <div class="perfil__botoes">
                <button 
                data-perfil__botao--criar 
                class="perfil__botao perfil__botao--criar">
                    Criar
                </button>

                <button
                data-perfil__botao--dark
                class="perfil__botao perfil__botao--dark">
                    Escuro
                </button>

                <button
                data-perfil__botao--dados
                class="perfil__botao perfil__botao--dados">
                    Dados Pessoais
                </button>

                <button
                data-perfil__botao--compartilhar
                class="perfil__botao perfil__botao--compartilhar">
                    Compartilhar
                </button>
                
                <button
                data-perfil__botao--configs
                class="perfil__botao perfil__botao--configs">
                    Configurações
                </button> 

                <button
                data-perfil__botao--doar
                class="perfil__botao perfil__botao--doar">
                    Doar
                </button>
            </div>
        </div>    
    `
    return template
}

export default perfil__template