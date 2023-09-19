var notaEscolhida = 0

function registraNota (event){
  notaEscolhida = event.currentTarget.id 
}

function mostrarTela1() {
  document.getElementById('tela1').style.display = 'block';
  document.getElementById('tela2').style.display = 'none';
}

function mostrarTela2() {
  var e = document.getElementById('valor-selecionado')

  e.innerText = notaEscolhida;

  document.getElementById('tela1').style.display = 'none';
  document.getElementById('tela2').style.display = 'block';
}
