// Captura do formulário de matrícula e envio dos dados via fetch API
document.getElementById('matriculaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('php/processa_matricula.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Matrícula realizada com sucesso!');
                document.getElementById('matriculaForm').reset();
            } else {
                alert('Ocorreu um erro ao realizar a matrícula. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao processar a solicitação.');
        });
});

// Controle do slider (slide.js)

let slideIndex = 1;
showSlides(slideIndex);

// Controle manual para passar os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Controle para slides específicos através das "bolinhas"
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}  // Loop no final da lista
    if (n < 1) {slideIndex = slides.length} // Loop no início da lista

    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Exibe o slide atual e adiciona "active" ao ponto correspondente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Função para fazer o slideshow rodar automaticamente
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(autoShowSlides, 5000); // Muda a imagem a cada 5 segundos
}

// Inicializa o auto slideshow
autoShowSlides();
