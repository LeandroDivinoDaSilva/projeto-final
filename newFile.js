

// document.getElementById('promo-from').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const nome = document.getElementById('nome').value;
//   const ddd = document.getElementById('ddd').value;
//   console.log('Nome:', nome);
  
//   alert("Sucesso");
  
// });

document.getElementById('promo-form').addEventListener('submit', function(event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Captura os dados do formulário
  const nome = document.getElementById('nome').value;
  const ddd = document.getElementById('ddd').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Aqui você pode realizar a ação desejada com os dados, como enviar para um servidor
  console.log('Nome:', nome);
  console.log('DDD:', ddd);
  console.log('Celular:', celular);
  console.log('E-mail:', email);
  console.log('Mensagem:', mensagem);
  alert("sucesso");
});


// scripi form mtr



