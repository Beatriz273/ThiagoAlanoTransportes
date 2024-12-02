
function loadContentSequentially(files, containerId) {
    let index = 0;

    function loadNextFile() {
        if (index >= files.length) return; 

        fetch(files[index])
            .then(response => response.text())
            .then(data => {
                
                document.getElementById(containerId).innerHTML += data;
                index++; 
                loadNextFile(); 
            })
            .catch(error => console.error('Erro ao carregar o arquivo:', error));
    }

    loadNextFile(); 
}


const files = ['about.html', 'services.html', 'contact-us.html'];


window.onload = function() {
    loadContentSequentially(files, 'additional-content');
};

function abrirFormulario() {
    var modal = document.getElementById("formularioModal");
    modal.style.display = "block"; 
}

function fecharFormulario() {
    var modal = document.getElementById("formularioModal");
    modal.style.display = "none"; 
}

const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, ''); 
    valor = valor.replace(/^(\d{2})(\d)/, '($1) $2'); 
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');   
    e.target.value = valor.slice(0, 15); 
  });


// Evitar redirecionamento desnecessário
  function enviarFormulario(event) {
    event.preventDefault(); 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formsubmit.co/beatrizferreiradossantos2005@gmail.com", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Formulário enviado com sucesso!');
            window.location.href = "index.html"; 
        }
    };
    xhr.send(new FormData(event.target)); 
}