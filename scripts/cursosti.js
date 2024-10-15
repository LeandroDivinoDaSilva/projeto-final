const view = document.querySelector('#pagina2');

document.addEventListener('DOMContentLoaded', () => {
  observaBtn();
});

function observaBtn() {
  const btnTi = document.querySelectorAll('.btn-ti');
  btnTi.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('id');
      if (id && ti[id]) {
        mudarView(ti[id]);
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
      <button class="btn-ti-menu" onclick="window.location.href='cursosti.html'">Ver outros cursos</button>
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
     <section class="cursosti">
      <div class="cursoti" div data-aos="fade-up-right">
        <img src="imgs/Informaticaavancada.jpg" alt="Informática Avançada" />
        <h2>Informática Avançada</h2>
        <p>
          Este curso cobre tópicos avançados de informática, incluindo redes,
          segurança cibernética e gerenciamento de servidores.
        </p>
        <button class="btn-ti" id="avancada">
          Inscreva-se
        </button>
      </div>

      <div class="cursoti" data-aos="fade-up">
        <img src="imgs/InformaticaBasica.jpg" alt="Informática Básica" />
        <h2>Informática Básica</h2>
        <p>
          Aprenda os fundamentos da informática, desde o uso básico de
          computadores até o software mais comum.
        </p>
        <button class="btn-ti" id="basica">
          Inscreva-se
        </button>
      </div>

      <div class="cursoti" div data-aos="fade-up-left">
        <img src="imgs/lowcode.jpg" alt="Low Code" />
        <h2>Low Code</h2>
        <p>
          Descubra como desenvolver aplicações de forma rápida e eficiente
          usando plataformas low-code.
        </p>
        <button class="btn-ti" id="low">
          Inscreva-se
        </button>
      </div>
    </section>
  `;
  observaBtn();
}

const ti = {
  avancada: {
    curso: 'Informática Avançada',
    titulo: ['Domine a Informática Avançada!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/Informaticaavancada.jpg',
    descricao: [
        'Neste curso, você aprenderá os principais conceitos e práticas para se tornar um especialista em informática avançada, adquirindo habilidades essenciais para enfrentar os desafios tecnológicos do mercado atual. O conteúdo do curso inclui:',
        'Além disso, o curso é voltado tanto para profissionais que desejam aprimorar suas competências quanto para aqueles que buscam se atualizar nas tecnologias mais recentes do setor.'
    ],
    itens: [
        'Fundamentos de redes e segurança da informação',
        'Administração de sistemas operacionais avançados',
        'Programação e automação de tarefas',
        'Manutenção de hardware e soluções de problemas complexos'
    ],
    duracao: 'O curso tem uma carga horária total de 80 horas, divididas entre módulos teóricos e práticos para garantir uma formação completa.',
    infoadd: [
        'O curso será ministrado por profissionais experientes em TI, oferecendo o suporte necessário para que você atinja um nível avançado de conhecimento. Ao final do curso, você receberá um certificado reconhecido no mercado.',
        'Este curso é ideal para quem deseja se especializar em áreas de alta demanda ou atualizar-se com as novas tendências tecnológicas.',
        'Para se inscrever, entre em contato através do e-mail abaixo ou acesse nosso site para mais informações.'
    ]
  },
  basica: {
    curso: 'Informática Básica',
    titulo: ['Introdução à Informática Básica!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/InformaticaBasica.jpg',
    descricao: [
        'Neste curso, você aprenderá os fundamentos da informática, incluindo o uso de computadores, softwares e a navegação na internet. O conteúdo do curso inclui:',
        'Além disso, o curso é ideal para iniciantes que desejam adquirir confiança e habilidades essenciais para utilizar a tecnologia no dia a dia.'
    ],
    itens: [
        'Noções básicas de hardware e software',
        'Uso de sistemas operacionais (Windows e Linux)',
        'Navegação na internet e uso de e-mail',
        'Microsoft Office: Word, Excel e PowerPoint'
    ],
    duracao: 'O curso tem uma carga horária total de 40 horas, com aulas práticas e teóricas para garantir uma boa compreensão dos conteúdos.',
    infoadd: [
        'O curso será ministrado por instrutores qualificados e experientes, proporcionando um ambiente de aprendizado acolhedor e motivador. Ao final do curso, você receberá um certificado de conclusão.',
        'Este curso é perfeito para quem deseja desenvolver suas habilidades em informática para uso pessoal ou profissional.',
        'Para se inscrever, entre em contato através do e-mail abaixo ou visite nosso site para mais informações.'
    ]
  },
  low: {
    curso: 'Desenvolvimento com Low Code',
    titulo: ['Introdução ao Desenvolvimento Low Code!', 'Duração do Curso', 'Informações Adicionais'],
    img: 'imgs/LowCode.jpg',
    descricao: [
        'Neste curso, você aprenderá a criar aplicações de forma rápida e eficiente utilizando plataformas de Low Code. O conteúdo do curso inclui:',
        'Além disso, o curso é ideal para profissionais de tecnologia e negócios que desejam acelerar o desenvolvimento de soluções digitais sem a necessidade de programação extensa.'
    ],
    itens: [
        'Fundamentos do desenvolvimento Low Code',
        'Exploração de plataformas populares (como Mendix, OutSystems, e Appian)',
        'Integração com APIs e serviços externos',
        'Melhores práticas de design e usabilidade'
    ],
    duracao: 'O curso tem uma carga horária total de 50 horas, divididas entre aulas teóricas e práticas para garantir uma compreensão sólida dos conceitos.',
    infoadd: [
        'O curso será ministrado por instrutores experientes no desenvolvimento de aplicações e Low Code, proporcionando um aprendizado prático e enriquecedor. Ao final do curso, você receberá um certificado de conclusão.',
        'Este curso é ideal para quem deseja entrar no mundo do desenvolvimento ágil e criar soluções inovadoras rapidamente.',
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