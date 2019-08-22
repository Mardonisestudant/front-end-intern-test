
/* function onclick no botão submit*/

function validar(){
  
/* as variaveis do form*/
   var nome = myform.name.value;
   var email = myform.email.value;
   var message = myform.message.value;

/*verifica se os valores do form esta vazio em seguida retorna falso*/
   if(nome == ""){

    alert("O campo nome está vazio");
     myform.nome.focus();
    return false;
   }

   if(email == "" || email.indexOf('@') == -1 || email.indexOf('.')== -1){

    alert("O campo email está vazio ou invalido");
     myform.email.focus();
    return false;
   }

   if(message == ""){
    alert("O Campo message está vazio");
    myform.message.focus();
    return false;

   }

    /*se textearea for maior que 100 caracteres*/
   if(message.length > 100){
    alert("A sua mesagem deve ter ate 100 caracteres")
    return false;
   }


   window.alert("Muito Obrigado!" + nome + " Em breve entraremos em contato com vovê ");
   return false;
  }
