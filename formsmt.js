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
  
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor, por exemplo, via AJAX ou Fetch API
  
    alert("Formulário enviado com sucesso!");
  });
  