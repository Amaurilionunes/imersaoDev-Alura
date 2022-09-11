function adicionarFilme(){
  var filmeFavorito = document.getElementById("filme").value;
  if(filmeFavorito.endsWith(".jpg")){
    listaFilmesNaTela(filmeFavorito);
  }else {
    console.error("Opá! endereço da imagem invalida")
  }
  document.getElementById("filme").value = ""
}
function  listaFilmesNaTela(filme){
  console.log(filme)
  var filmeFavorito = "<img=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML=listaFilmes.innerHTML+filmeFavorito
}
