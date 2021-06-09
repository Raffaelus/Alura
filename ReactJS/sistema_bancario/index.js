class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0){
            return;
        }
        this._saldo += valor;
    }

}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo._saldo = 100;

contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);


//----//
const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// const cliente3Nome = "Maria";
// const cliente3CPF = 55522233309;

//console.log(cliente1, cliente2);