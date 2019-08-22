
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

   if(message == "" || message.length > 100){
    alert("O Campo message está vazio ou tem mais de 100 caracteres");
    myform.message.focus();
    return false;

   }


   window.alert("Muito Obrigado!" + nome + " Em breve entraremos em contato com você ");
   return false;
  }

  
