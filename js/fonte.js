$(document).ready(function(){
    let fonte = 16
    $('#aumenta').click(function(){
        if(fonte<19){
            $('body').css({'font-size': ++fonte +'px'})
        }
    })
    $('#diminui').click(function(){
        if(fonte>16){
            $('body').css({'font-size': --fonte +'px'})
        }
    })
})