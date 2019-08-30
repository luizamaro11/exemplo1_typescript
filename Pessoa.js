var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (no) {
            this._nome = no;
        };
        Pessoa.prototype.getIdade = function () {
            return this._idade;
        };
        Pessoa.prototype.setIdade = function (id) {
            this._idade = id;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
})(empresa || (empresa = {}));
