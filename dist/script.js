function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value;

  if (campoFilmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(campoFilmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoFilmeFavorito + elementoListaFilmes.innerHTML;
}