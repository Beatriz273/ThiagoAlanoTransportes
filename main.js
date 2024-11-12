// Função para carregar e inserir o conteúdo dos arquivos HTML
function loadContentSequentially(files, containerId) {
    let index = 0;

    function loadNextFile() {
        if (index >= files.length) return; // Se não houver mais arquivos, pare a execução

        fetch(files[index])
            .then(response => response.text())
            .then(data => {
                // Adiciona o conteúdo ao container
                document.getElementById(containerId).innerHTML += data;
                index++; // Move para o próximo arquivo
                loadNextFile(); // Carrega o próximo arquivo após o anterior ser carregado
            })
            .catch(error => console.error('Erro ao carregar o arquivo:', error));
    }

    loadNextFile(); // Inicia o carregamento do primeiro arquivo
}

// Lista dos arquivos a serem carregados
const files = ['about.html', 'services.html', 'contact-us.html'];

// Carrega o conteúdo dos outros arquivos abaixo do conteúdo do index.html
window.onload = function() {
    loadContentSequentially(files, 'additional-content');
};

