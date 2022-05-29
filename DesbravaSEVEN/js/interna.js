// validaçoes de troca de setor fisico, mental, e espiritual
function trilha(){
    seleçao_trilha.style.display=""
    seleçao_grafico.style.display="none"
    seleçao_mestrados.style.display="none"
    
    
}
function grafico(){

    seleçao_trilha.style.display="none"
    seleçao_grafico.style.display=""
    seleçao_mestrados.style.display="none"
    
    var select = select_grafico.value;
    
    if(select == 'barra'){
        seleçao_barra.style.display="";
        seleçao_porcentagem.style.display="none";
    }else{
        seleçao_barra.style.display="none"
        seleçao_porcentagem.style.display=""
    }
    
}
function mestrado(){
    seleçao_trilha.style.display="none"
    seleçao_grafico.style.display="none"
    seleçao_mestrados.style.display=""
    
}
