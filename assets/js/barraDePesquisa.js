// Define os itens do cardápio e seus IDs
const items = [
    { id: 'coxas-de-frango', name: 'Coxas de frango (2 pcs)' },
    { id: 'combo-de-refeicao', name: 'Combo de Refeição Feliz' },
    { id: 'veg-thali', name: 'Veg Thali (36 itens)' },
    { id: 'non-veg-thali', name: 'Non-Veg Thali' },
    { id: 'pizza-vegetariana', name: 'Pizza Vegetariana' },
    { id: 'roasted-chicken-pizza', name: 'Roasted Chicken Pizza' },
    { id: 'pav-bhaji', name: 'Pav Bhaji' },
    { id: 'chinese-noodles', name: 'Chinese Noodles' },
    { id: 'king-size-maggie', name: 'King Size Maggie' },
    { id: 'dabeli', name: '3x Dabeli' },
    { id: 'vada-pav', name: '4x Vada Pav' },
    { id: 'paper-dosa', name: 'Paper Dosa' }
];

// Função de busca
function searchItem(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const query = document.querySelector('.search-input').value.toLowerCase();
    const foundItem = items.find(item => item.name.toLowerCase().includes(query));

    if (foundItem) {
        // Redireciona para o item encontrado
        document.getElementById(foundItem.id).scrollIntoView({ behavior: 'smooth' });
    } else {
        // Mostra uma mensagem de erro ou modal
        alert('Item não encontrado');
    }
}

// Adiciona o evento de submit ao formulário de busca
document.querySelector('.search-button').addEventListener('click', searchItem);
