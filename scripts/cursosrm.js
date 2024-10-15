const view = document.querySelector('#pagina3');

document.addEventListener('DOMContentLoaded', () => {
  observaBtn();
});

function observaBtn() {
  const btnRm = document.querySelectorAll('.btn-rm');
  btnRm.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('id');
      if (id && rm[id]) {
        mudarView(rm[id]);
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
      <button class="btn-rm-menu" onclick="window.location.href='recursohm.html'">Ver outros cursos</button>
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
      <section class="cursoshm">
      <div class="cursohm" data-aos="fade-up-right">
        <img
          src="imgs/AssistenteAdministrativo.jpg"
          alt="Assistente Administrativo"
        />
        <h2>Assistente Administrativo</h2>
        <p>
          Aprenda sobre organização, gestão de documentos e suporte
          administrativo.
        </p>
        <button class="btn-rm" id="adim">
          Inscreva-se  
        </button>
      </div>

      <div class="cursohm" data-aos="fade-up">
        <img
          src="imgs/Assistente de RecursosHumanos.jpg"
          alt="Assistente de Recursos Humanos"
        />
        <h2>Assistente de Recursos Humanos</h2>
        <p>
          Desenvolva habilidades em recrutamento, seleção e gestão de pessoas.
        </p>
        <button class="btn-rm" id="humanos">
          Inscreva-se
        </button>
      </div>

      <div class="cursohm" data-aos="fade-up-left">
        <img src="imgs/Logistica.jpg" alt="Logística" />
        <h2>Logistica</h2>
        <p>
          Aprenda sobre gestão de cadeia de suprimentos, transporte e
          armazenamento.
        </p>
        <button class="btn-rm" id="logistica">
          Inscreva-se
        </button>
      </div>
    </section>
  `;
  observaBtn();
}

const rm = {
  adim: {
    curso: 'Assistente Administrativo',
    titulo: ['Torne-se um Assistente Administrativo Eficaz!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/AssistenteAdministrativo.jpg',
    descricao: [
        'Neste curso, você aprenderá as habilidades essenciais para se destacar como um assistente administrativo, contribuindo para a eficiência e organização do ambiente de trabalho. O conteúdo do curso inclui:',
        'Além disso, o curso é voltado tanto para iniciantes quanto para profissionais que desejam aprimorar suas competências administrativas.'
    ],
    itens: [
        'Noções básicas de gestão de escritório',
        'Uso de ferramentas de produtividade (Microsoft Office, Google Workspace)',
        'Técnicas de comunicação eficaz e atendimento ao cliente',
        'Organização de documentos e gestão de tempo'
    ],
    duracao: 'O curso tem uma carga horária total de 60 horas, divididas entre aulas teóricas e práticas para garantir um aprendizado completo.',
    infoadd: [
        'O curso será ministrado por profissionais experientes na área administrativa, oferecendo suporte e orientação durante todo o processo de aprendizado. Ao final do curso, você receberá um certificado de conclusão.',
        'Este curso é ideal para quem deseja iniciar uma carreira administrativa ou para aqueles que já atuam na área e buscam se aperfeiçoar.',
        'Para se inscrever, entre em contato através do e-mail abaixo ou visite nosso site para mais informações.'
    ]
  },
  humanos: {
    curso: 'Assistente de Recursos Humanos',
    titulo: ['Torne-se um Assistente de Recursos Humanos Profissional!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/Assistente de RecursosHumanos.jpg',
    descricao: [
        'Neste curso, você aprenderá as competências necessárias para atuar na área de Recursos Humanos, contribuindo para a gestão de talentos e o desenvolvimento organizacional. O conteúdo do curso inclui:',
        'Além disso, o curso é direcionado tanto para iniciantes que desejam ingressar na área quanto para profissionais que buscam se atualizar nas práticas de RH.'
    ],
    itens: [
        'Noções básicas de legislação trabalhista',
        'Processos de recrutamento e seleção',
        'Treinamento e desenvolvimento de colaboradores',
        'Gestão de benefícios e relações trabalhistas'
    ],
    duracao: 'O curso tem uma carga horária total de 60 horas, com aulas teóricas e práticas para proporcionar um aprendizado abrangente.',
    infoadd: [
        'O curso será ministrado por profissionais experientes em Recursos Humanos, oferecendo todo o suporte necessário para o seu desenvolvimento. Ao final do curso, você receberá um certificado de conclusão.',
        'Este curso é ideal para quem deseja construir uma carreira na área de Recursos Humanos ou para aqueles que já atuam na área e querem se aprimorar.',
        'Para se inscrever, entre em contato através do e-mail abaixo ou visite nosso site para mais informações.'
    ]
  },
  logistica: {
    curso: 'Logística',
    titulo: ['Torne-se um Profissional em Logística!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/Logistica.jpg',
    descricao: [
        'Neste curso, você aprenderá os conceitos fundamentais e as práticas essenciais para atuar na área de logística, otimizando processos e contribuindo para a eficiência operacional das empresas. O conteúdo do curso inclui:',
      'Além disso, o curso é voltado tanto para iniciantes quanto para profissionais que desejam aprimorar suas habilidades logísticas e gerenciais.'
  ],
  itens: [
      'Fundamentos da cadeia de suprimentos',
      'Gestão de estoques e armazenagem',
      'Transporte e distribuição de mercadorias',
      'Planejamento e controle logístico'
  ],
  duracao: 'O curso tem uma carga horária total de 80 horas, divididas entre aulas teóricas e práticas para proporcionar uma formação completa.',
  infoadd: [
      'O curso será ministrado por especialistas da área de logística, garantindo que você receba orientações práticas e atualizadas. Ao final do curso, você receberá um certificado de conclusão.',
      'Este curso é ideal para quem deseja se profissionalizar na área de logística ou para aqueles que já atuam no setor e querem se atualizar nas melhores práticas.',
      'Para se inscrever, entre em contato através do e-mail abaixo ou visite nosso site para mais informações.'
  ]
 }
};

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