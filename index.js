const botaoMenu = document.querySelector('.cabecalho__menu')/*encontrando o icone do menu*/
const menu = document.querySelector('.menu-lateral')/*encontrando o menu lateral*/

botaoMenu.addEventListener('click', ()=>{
    menu.classList.toggle('menu-lateral--ativo') /*adicionando uma classe no menu*/
})