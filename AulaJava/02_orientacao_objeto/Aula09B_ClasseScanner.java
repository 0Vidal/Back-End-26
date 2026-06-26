
import java.util.Scanner;

public class Aula09B_ClasseScanner{
    public static void main(String[] args){
        Scanner teclado = new Scanner(System.in);
        Carro09 meucarro = new Carro09();

        System.out.println("== Cadastro de Veiculo ==");
        System.out.println("Digite o modelo do carro ");
        meucarro.modelo = teclado.nextLine();
        
        System.out.println("Digite a cor do carro ");
        meucarro.cor = teclado.nextLine();

        System.out.println("Digite o ano do carro ");
        meucarro.ano = teclado.nextInt();

        System.out.println("n---Carro cadastrado com sucesso!");
        System.out.println("Modelo " + meucarro.modelo);
        System.out.println("Cor " +  meucarro.cor);
        System.out.println("Ano " + meucarro.ano);

    }
}