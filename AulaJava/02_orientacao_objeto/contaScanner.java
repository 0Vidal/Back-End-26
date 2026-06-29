public class contaScanner {
    double saldo = 500.0;
    double verificarSaldo(){
        return saldo;
    }

    void sacar(double valor){
        if (saldo <= valor) {
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + "realizado!");
        }else{System.out.println("Saldo insuficiente para o saque de R$ " + valor);}
        
    }
}
