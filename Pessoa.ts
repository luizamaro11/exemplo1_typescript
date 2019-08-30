namespace empresa{
    class Pessoa{
        private _nome:string;
        private _idade:number;
        private _cpf:string;

        public getNome() {
            return this._nome;
        }

        public setNome(no:string){
            this._nome = no;
        }

        public getIdade(){
            return this._idade;
        }

        public setIdade(id:number){
            this._idade = id;
        }

        public getCpf(){
            return this._cpf;
        }

        public setCpf(cpf:string){
            this._cpf = cpf;
        }
    }
}