function back_speed(){
    window.location = 'speedrun.html#inicio'
}

function back_start(){
    window.location = 'submit.html#inicio'
}

function change_link(){
    var link = inp_link.value + '?enablejsapi=1'
    ytplayer.src = link 
}