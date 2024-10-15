const view = document.querySelector('#pagina');

document.addEventListener('DOMContentLoaded', () => {
  observaBtn();
});

function observaBtn() {
  const btnBst = document.querySelectorAll('.btn-bst');
  btnBst.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('id');
      if (id && bst[id]) {
        mudarView(bst[id]);
      } else {
        console.error("Curso não encontrado!");
      }
    });
  });
}

function mudarView(curso) {
  view.innerHTML = `
    <div class="main">
    <div>
      <button class="btn-bst-menu" onclick="window.location.href='cursosbemestar.html'">Ver outros cursos</button>
    </div><br>

    <div class="courso-info">
        <section class="info">
          <div class="courso">
            <div class="image">
              <img src="${curso.img}" alt="Imagem do curso de ${curso.curso}">
            </div>
            <div class="text">
              <div class="text-container">
                <h2>${curso.titulo[0]}</h2>
                <div class="text-content">
                  <p>${curso.descricao[0]}</p>
                  <ul>
                    ${curso.itens.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                  <p>${curso.descricao[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="curso-duracao">
        <section class="duracao">
          <div class="text-container">
            <h3>${curso.titulo[1]}</h3>
            <div class="text-content">
              <p>${curso.duracao}</p>
            </div>
          </div>
        </section>
      </div>
      <div class="info-add">
        <section class="add-info">
          <div class="info">
            <div class="text-container">
              <h3>${curso.titulo[2]}</h3>
              <div class="text-content">
                <p>${curso.infoadd[0]}</p>
                <p>${curso.infoadd[1]}</p>
                <p>${curso.infoadd[2]}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;



  mostrarFormulario(curso.curso); 
}

function mostrarFormulario(cursoSelecionado) {
  view.innerHTML += formulario;

  const cursoField = document.querySelector('#curso');
  cursoField.innerHTML = `
    <option value="${cursoSelecionado}" selected>${cursoSelecionado}</option>
  `;

  const form = document.querySelector('#promo-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const ddd = document.getElementById('ddd').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso').value;
    const unidade = document.getElementById('unidade').value;
    const termosPrivacidade = document.getElementById('termos-privacidade').checked;

    if (!nome || !ddd || !celular || !email || !curso || !unidade) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!termosPrivacidade) {
      alert('Você precisa concordar com os termos de privacidade.');
      return;
    }

    console.log('Nome:', nome);
    console.log('DDD:', ddd);
    console.log('Celular:', celular);
    console.log('E-mail:', email);
    console.log('Curso:', curso);
    console.log('Unidade:', unidade);
    console.log('Concorda com os termos de privacidade:', termosPrivacidade);

    const apiUrl = "https://forge.withub.ai/api/triggers/5257a02d-c19b-4969-ab81-2206de86082c/execute/66eebf0187e5fb740b35353c";

    const data = {
      Email: email
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sucesso:', data);
      alert('Formulário enviado com sucesso!');
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao ativar o bot. Tente novamente.');
    });

  });
}

function menu() {
  view.innerHTML = `
    <section class="cursosbst">
      <div class="cursobst" div data-aos="fade-up-right">
        <img src="imgs/costura.png" alt="Informática Avançada" />
        <h2>Corte e Costura</h2>
        <p>
          Este curso cobre tópicos de corte e costura, incluindo técnicas de
          modelagem, ajustes personalizados e acabamento de peças.
        </p>
        <button class="btn-bst" id="costura">
          Inscreva-se
        </button>
      </div>

      <div class="cursobst" data-aos="fade-up">
        <img src="imgs/Barbeiro.png" alt="Barbeiro" />
        <h2>Barbeiro</h2>
        <p>
          Este curso cobre tópicos avançados de barbearia, incluindo técnicas
          modernas de cortes, design de barba e cuidados com a pele masculina.
        </p>
        <button class="btn-bst" id="barbeiro">
          Inscreva-se
        </button>
      </div>

      <div class="cursobst" data-aos="fade-up-left">
        <img src="imgs/Cabeleileira.jpg" alt="Cabeleireiro" />
        <h2>Cabeleireiro</h2>
        <p>
          Este curso abrange tópicos avançados de cabeleireiro, incluindo
          técnicas de corte de alta precisão, coloração avançada, tratamentos
          capilares e penteados para eventos .
        </p>
        <button class="btn-bst" id="cabeleireiro">
          Inscreva-se
        </button>
      </div>
    </section>
  `;
  observaBtn();
}

const bst = {
  costura: {
    curso: 'Corte e Costura',
    titulo: ['Aprenda a Costurar como um Profissional!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/costura.png',
    descricao: [
      'Neste curso, você aprenderá as principais técnicas de corte e costura para confeccionar suas próprias peças de roupa ou até mesmo iniciar um novo negócio. O conteúdo do curso inclui:',
      'Além disso, o curso é voltado para iniciantes e aqueles que já possuem alguma experiência e querem aperfeiçoar suas habilidades.'
    ],
    itens: [
      'Noções básicas de costura',
      'Uso de máquinas de costura',
      'Técnicas de modelagem e corte',
      'Acabamentos profissionais'
    ],
    duracao: 'O curso tem uma carga horária total de 60 horas, divididas entre aulas teóricas e práticas.',
    infoadd: [
      'O curso será ministrado por instrutores experientes na área de corte e costura, garantindo que você receba todo o suporte necessário para alcançar seus objetivos. Ao final do curso, você receberá um certificado de conclusão.',
      'Este curso é ideal para quem deseja se profissionalizar na área ou desenvolver suas habilidades de costura para projetos pessoais.',
      'Para se inscrever, basta entrar em contato através do email abaixo ou visitar nosso site para mais informações.'
    ]
  },
  barbeiro: {
    curso: 'Barbeiro',
    titulo: ['Aprenda a Ser um Barbeiro Profissional!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/Barbeiro.png',
    descricao: [
      'Neste curso, você aprenderá as principais técnicas para se tornar um barbeiro de sucesso, atendendo aos mais variados estilos e preferências. O conteúdo do curso inclui:',
      'Além disso, o curso é voltado tanto para iniciantes quanto para profissionais que desejam aprimorar suas habilidades e atualizar-se com as novas tendências.'
    ],
    itens: [
      'Noções básicas de barbearia',
      'Uso adequado de ferramentas',
      'Técnicas modernas de corte de cabelo e barba',
      'Acabamentos precisos e atendimento ao cliente'
    ],
    duracao: 'O curso tem uma carga horária total de 60 horas, divididas entre aulas teóricas e práticas.',
    infoadd: [
      'O curso será ministrado por instrutores experientes na área de barbearia, garantindo que você receba todo o suporte necessário para alcançar seus objetivos. Ao final do curso, você receberá um certificado de conclusão.',
      'Este curso é ideal para quem deseja se profissionalizar na área ou para quem já atua e deseja se aperfeiçoar em técnicas mais avançadas.',
      'Para se inscrever, basta entrar em contato através do email abaixo ou visitar nosso site para mais informações.'
    ]
  },
  cabeleireiro: {
    curso: 'Cabeleireiro',
    titulo: ['Aprenda a Ser um Cabeleireiro Profissional!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/Cabeleileira.jpg',
    descricao: [
      'Neste curso, você aprenderá as principais técnicas de corte, coloração e penteados para atuar como cabeleireiro profissional. O conteúdo do curso inclui:',
      'Além disso, o curso é voltado tanto para iniciantes quanto para profissionais que desejam atualizar e aprimorar suas técnicas de cabeleireiro.'
    ],
    itens: [
      'Noções básicas de cortes masculinos e femininos',
      'Técnicas de coloração e descoloração',
      'Penteados e tratamentos capilares',
      'Acabamentos e cuidados profissionais com o cabelo'
    ],
    duracao: 'O curso tem uma carga horária total de 80 horas, divididas entre aulas teóricas e práticas.',
    infoadd: [
      'O curso será ministrado por instrutores experientes na área de cabeleireiro, garantindo que você receba todo o suporte necessário para alcançar seus objetivos. Ao final do curso, você receberá um certificado de conclusão.',
      'Este curso é ideal para quem deseja se profissionalizar na área ou para quem já atua e deseja se aperfeiçoar em técnicas mais avançadas.',
      'Para se inscrever, basta entrar em contato através do email abaixo ou visitar nosso site para mais informações.'
    ]
  }
};

// Código do formulário
const formulario = `
  <div class="form-container" data-aos="zoom-in">
    <div class="form-content">
      <h2>Inscreva-se em nosso cursos </h2>
      <form id="promo-form">
        <div class="form-group">
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" placeholder="Ex.: João Silva" required />
        </div>
        <div class="form-group form-row">
          <div class="form-group-half">
            <label for="ddd">*DDD</label>
            <input type="text" id="ddd" name="ddd" placeholder="*DDD" required />
          </div>
          <div class="form-group-half">
            <label for="celular">Digite seu Celular:</label>
            <input type="text" id="celular" name="celular" placeholder="00000-0000" required />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Seu E-mail:</label>
          <input type="email" id="email" name="email" placeholder="seuemail@email.com.br" required />
        </div>
        <div class="form-group form-row">
          <div class="form-group-half">
            <label for="Cursos">Curso:</label>
            <select id="curso" name="curso" required>
              <option value="">Selecione</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="unidade">Escolha a Unidade mais Próxima:</label>
          <select id="unidade" name="unidade" required>
            <option value="">Selecione</option>
            <option value="padre-agnaldo">Obras Sociais Pavonianas "Padre Agnaldo"</option>
          </select>
        </div>
        <div class="form-group">
          <input type="checkbox" id="termos-privacidade" name="termos-privacidade" required />
          <label for="termos-privacidade">Concordo com os </label>
          <a href="privacidade.html">termos de privacidade.</a>
        </div>
        <div class="form-group">
          <button type="submit">Eu Quero</button>
        </div>
      </form>
    </div>
    <div class="form-image">
      <img src="imgs/estudo.png" alt="Imagem lateral ilustrativa" />
    </div>
  </div>
`;
