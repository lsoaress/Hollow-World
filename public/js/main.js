function call_login(){

    sel_1.style.transition = "opacity "+0.5+"s ease";
    sel_2.style.transition = "opacity "+0.5+"s ease";

    sel_1.style.opacity = 0;
    sel_2.style.opacity = 0;
    
    setTimeout(function() {
        container_selecao.removeChild(sel_1);
        container_selecao.removeChild(sel_2);
        container_selecao.style.width = '24%'           
        container_selecao.style.height = '60%'           
        container_selecao.style.marginTop = '2%'
        
        container_login.style.display = 'flex'

    }, 500);
}