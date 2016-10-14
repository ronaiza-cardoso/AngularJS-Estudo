app.controller("listaTelefonicaController", function ($scope, uppercaseFilter, $http) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];

    $scope.operadoras = [];

    var carregarContatos = function () {
        $http.get("http://localhost:8080/contatos").success(function (data, status) {
            $scope.contatos = data;
        });
    };

    var carregarOperadoras = function () {
        $http.get("http://localhost:8080/contatos").success(function (data, status) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        $http.post("http://localhost:8080/contatos", contato).success(function () {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });

    };

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordernarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();

});

