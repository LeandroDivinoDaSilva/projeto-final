document.getElementById('promo-form').addEventListener('submit', function(event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Captura os dados do formulário
  const nome = document.getElementById('nome').value;
  const ddd = document.getElementById('ddd').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;
  const curso = document.getElementById('curso').value;
  const unidade = document.getElementById('unidade').value;
  const termosPrivacidade = document.getElementById('termos-privacidade').checked;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!nome || !ddd || !celular || !email || !curso || !unidade) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Verifica se a caixa de termos de privacidade foi marcada
  if (!termosPrivacidade) {
    alert('Você precisa concordar com os termos de privacidade.');
    return;
  }

  // Simulação de envio do formulário
  console.log('Nome:', nome);
  console.log('DDD:', ddd);
  console.log('Celular:', celular);
  console.log('E-mail:', email);
  console.log('Curso:', curso);
  console.log('Unidade:', unidade);
  console.log('Concorda com os termos de privacidade:', termosPrivacidade);

  // URL da API (Forge bot)
  const apiUrl = "https://forge.withub.ai/api/triggers/5257a02d-c19b-4969-ab81-2206de86082c/execute/66eebf0187e5fb740b35353c";

  // Dados que você quer enviar para o bot
  const data = {
      Email: email
  };

  // Fazendo a requisição POST para a API
  fetch(apiUrl, {
      method: 'POST', // Método HTTP POST
      headers: {
          'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(data) // Converte os dados para JSON e envia no corpo da requisição
  })
  .then(response => response.json()) // Converte a resposta da API para JSON
  .then(data => {
      console.log('Sucesso:', data); // Exibe os dados recebidos da API
      alert('Formulário enviado com sucesso!'); // Exibe uma mensagem de sucesso
  })
  .catch(error => {
      console.error('Erro:', error); // Captura e exibe qualquer erro que ocorrer
      alert('Erro ao ativar o bot. Tente novamente.');
  });
});

