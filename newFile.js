// Simular um preenchimento de cidade baseado no estado
document.getElementById('estado').addEventListener('change', function() {
    const cidadeSelect = document.getElementById('cidade');
    const estado = this.value;
    
    cidadeSelect.innerHTML = '<option value="">Selecione</option>';
    
    if (estado === 'SP') {
      cidadeSelect.innerHTML += '<option value="São Paulo">São Paulo</option>';
      cidadeSelect.innerHTML += '<option value="Campinas">Campinas</option>';
    } else if (estado === 'RJ') {
      cidadeSelect.innerHTML += '<option value="Rio de Janeiro">Rio de Janeiro</option>';
      cidadeSelect.innerHTML += '<option value="Niterói">Niterói</option>';
    } else if (estado === 'MG') {
      cidadeSelect.innerHTML += '<option value="Belo Horizonte">Belo Horizonte</option>';
      cidadeSelect.innerHTML += '<option value="Uberlândia">Uberlândia</option>';
    }
  });
  
  document.getElementById('promo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
  });
  