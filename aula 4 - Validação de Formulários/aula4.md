 #Diretivas

  ###O que é
   extensões do HTML que permite a implementação de novos comportamentos

   ###Diretivas Utilizadas - Diretivas de validação
   - ng-required
            
            define um determinado campo como obrigatório
            
   - ng-form
           
           define um formulário para utilizarmos as diretivas de validação
           
      - ```$pristine``` e ```$dirty```  são propriedades do ng-form que indica se o campo já foi utilizado ou não 
      - ``ng-minlength`` e ``ng-maxlength`` define tamanho mínimo e máximo, ele não vai impedir que o usuário digite mais caracteres, apenas irá mostrar uma mensagem 
      - ``$valid `` e ``$invalid`` um valor booleano para o campo
      - ``$error`` consulta os campos de um formulário. É um objeto que contém as validaçoes e seus respectivos estados
      - ``ng-pattern`` expressão regular para validar o que for preciso de forma personalizada
            

