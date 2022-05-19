function back_speed() {
  window.location = 'speedrun.html#inicio'
}

function back_start() {
  window.location = 'submit.html#inicio'
}

function call_name(){
  nome_usuario.innerHTML = sessionStorage.USERNAME;
}

function change_link() {
  var link = inp_link.value;
  /* if(link.indexOf('embed') < 0){
    alert('insira um formato de vídeo no formato embed, siga o tutorial abaixo')
  } */
    link = link.replace('watch?v=', 'embed/')
    var link_certo = link + '?enablejsapi=1';
    ytplayer.src = link_certo;
}

function converter_min() {
  var string = "" + duracao / 60;
  if(duracao < 599){
    var decimal = string - Number(string[0]);
    var total = decimal * 60;
    var res = string - decimal + "m " + (total.toFixed() + "s");
  }

  else if(duracao >= 3600){
    string = '' + Number(string) / 60;
    var hora = string[0];
    var calc_minuto = ((Number(string) - Number(hora)) * 60);
    if(calc_minuto < 10){
      var c = calc_minuto + ''
      var minuto = c[0];
    }
    else{
      var c = calc_minuto + ''
      var minuto = c[0] + c[1]
    }
    var segundo = (calc_minuto - Number(minuto)) * 60;

    var res = hora + 'h ' + minuto + 'm ' + segundo.toFixed() + 's '
  }
  else{
    decimal = string - Number(string[0] + string[1]);
    var total = decimal * 60;
    var res = string - decimal + "m " + (total.toFixed() + "s");
  }

  inp_duracao.value = res;
}

var duracao = 0;

function onYouTubeIframeAPIReady() {
  console.log("API ready");
  var player = new YT.Player("ytplayer", {
    events: {
      onReady: function () {
        console.log("player ready");
        player.playVideo();
        console.log(player.getDuration());
        duracao = player.getDuration();
        converter_min();
      },
    },
  });
}

function cadastrar_video() {

  var idUsuario = sessionStorage.ID_USUARIO;
  var link = ytplayer.src;
  var tipo = select_mode.value;

  if(link.indexOf('embed') < -1){
    alert('insira um formato de vídeo válido, siga o tutorial abaixo')
  }

  if(link.trim() == '' || tipo.trim() == ''){
    alert('Preencha todos os campos para prosseguir')
  } 

  else{
    fetch(`/avisos/cadastrar_video/${idUsuario}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        linkServer: link,
        tipoServer: tipo,
        duracaoServer: duracao
      })
    }).then(function (resposta) {
  
      console.log("resposta: ", resposta);
  
      if (resposta.ok) {
  
        alert('Cadastro realizado com sucesso!')
        form_video.reset();
        ytplayer.src = 'https://www.youtube.com/embed/_hto7pPlbs8?autoplay=1';
        /* window.location.reload();   */
      } else {
        throw ("Houve um erro ao tentar realizar o cadastro!");
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  }
}

function validar_sessao(){
  if(sessionStorage.ID_USUARIO == null|| sessionStorage.USERNAME == null || sessionStorage.EMAIL_USUARIO == null || sessionStorage.NOME_USUARIO == null){
    window.location = 'speedrun.html'
  }
}