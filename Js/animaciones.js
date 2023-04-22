addEventListener('DOMContentLoaded', () => {
    const boton_menu = document.querySelector('.boton-menu')
    if(boton_menu){
        boton_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.lista')
            menu_items.classList.toggle('mostrar')
        })
    }
})