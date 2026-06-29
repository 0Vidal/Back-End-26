public class Aula10_MetodoRetorno {
    public static void main(String[] args){
        Conta10 minhaConta = new Conta10();
        double valorAtual = minhaConta.verificarSaldo();
        System.out.println("------------------");
        System.out.println("Saldo atual :" + valorAtual);
        System.out.println("------------------");

    }

}
