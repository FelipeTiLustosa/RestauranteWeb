// Book A Table Form 
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
        alert("Obrigado por reservar seus lugares, em breve você receberá uma mensagem em seu número de telefone e ID de correio para as confirmações!");
        form.reset();
    } else {
        alert("Por favor preencha todos os campos obrigatórios!");
    }
});
