///<reference path="pessoa.ts"/>
///<reference path="banco.ts"/>
namespace empresa{
    export class Funcionario extends Pessoa{
        private _codFuncionario:number;
        private _setor:string;
        private _banco:Banco;

        public getCodFuncionario(){
            return this._codFuncionario;
        }
        public setCodFuncionario(codigo:number){
            this._codFuncionario = codigo;
        }

        public getSetor(){
            return this._setor;
        }
        public setSetor(setor:string){
            this._setor =  setor;
        }

        public getCodBanco(){
            return this._banco;
        }

        public setCodBanco(banco:Banco){
            this._banco = banco;
        }
    } 
}