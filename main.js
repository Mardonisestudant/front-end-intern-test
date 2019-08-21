// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');



  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {

    if(document.myform.name.value == ""){
    window.alert("Campo nome é obrigatorio");
    return false;
    }


    if(document.myform.email.value == ""){
    window.alert("Campo email é obrigatorio");
    return false;


    }


    if(document.myform.message.value == ""){
    window.alert("Campo message é obrigatorio");
    return false;
  }
    // A propriedade "value" contém o valor atual de um input ou textarea

    const nameValue = nameInput.value;
    const emailValue = name.value;
    const messageValue = name.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
    const textAlength = emailValue.length;


    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.

    window.alert(`Botão enviar clicado! Conteúdo do campo nome: ${nameValue} (${nameLength} caracteres)`);

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();