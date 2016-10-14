#Organização de arquivos 

A melhor forma de separar os arquivos depende muito do contexto. Abaixo terá alguns modelos 
que são muito utilizados

##inline style
   o estilo inline coloca todos os códigos no mesmo arquivo, ele é recomendado para projetos
   extremamente simples, teste e arquivos de estudo.
    
        >app/
            >index.html
            >angular.js
## stereotyped style
   componentes do mesmo estilo juntos. essa forma é útil para projetos simples com poucos
   componentes, pois pode causar confusão facilmente
   
        >app/
         >css/
            app.css
         >js/
            >app.js
            >controller.js
            >directives.js
            >filter.js
         >lib/
            >angular.js
         >view/
            >login.html
         index.html
            
##specific style
um arquivo para cada componente. dessa forma teremos uma pasta para cada componente
        
         >app/
                 >css/
                    app.css
                 >js/
                    >controllers/
                        >loginController.js
                        >listaController.js
                    >directives/
                        >dashboardDirectives.js
                    >services/
                        >loginService.js
                 >lib/
                    >angular.js
                 >view/
                    >login.html
                 index.html