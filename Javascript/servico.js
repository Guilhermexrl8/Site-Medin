document.getElementById("contatoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Aqui você pode colocar código para envio real do formulário, como AJAX ou fetch()
  // Por agora, só mostra a mensagem de sucesso

  document.getElementById("mensagem-enviada").classList.remove("oculto");

  setTimeout(() => {
    document.getElementById("mensagem-enviada").classList.add("oculto");
    document.getElementById("contatoForm").reset();
  }, 3000);
});
