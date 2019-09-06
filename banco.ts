///<reference path="cliente.ts"/>
///<reference path="funcionario.ts"/>
namespace empresa{
    export class Banco{
        private _nome:string;
        private _codBanco:number;
        private _clientes:Array<Cliente> = [];
        private _funcionarios:Array<Funcionario> = [];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getCodBanco(){
            return this._codBanco;
        }

        public setCodBanco(codBanco:number){
            this._codBanco = codBanco;
        }

        public getClientes(){
            return this._clientes;
        }

        public addCliente(cliente:Cliente){
            this._clientes.push(cliente);
        }

        public getFuncionarios(){
            return this._funcionarios;
        }

        public addFuncionarios(funcionarios:Funcionario){
            this._funcionarios.push(funcionarios);
        }
    }
}