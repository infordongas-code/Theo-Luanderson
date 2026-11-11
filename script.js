document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && telefone && mensagem) {
            alert(`Obrigado, ${nome}! Seu orçamento foi enviado com sucesso. Entraremos em contato pelo telefone ${telefone}.`);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
