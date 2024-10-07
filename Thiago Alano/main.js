// Pega os elementos do DOM
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("orcamentoModal");

// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Abre o modal quando o botão é clicado
openModalBtn.addEventListener("click", openModal);

// Fecha o modal quando o botão de fechar é clicado
closeModalBtn.addEventListener("click", closeModal);

// Fecha o modal se o usuário clicar fora do conteúdo
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
