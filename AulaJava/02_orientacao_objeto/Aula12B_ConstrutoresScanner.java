import java.util.Scanner;

public class Aula12B_ConstrutoresScanner {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("=====Cadastro de Produto=====");
        System.out.println("Nome do console: ");
        String nomeDigitado = teclado.nextLine();

        System.out.println("Preço de Mercado: R$");
        double precoDigitado = teclado.nextDouble();

        VideoGame console = new VideoGame(nomeDigitado, precoDigitado);

        System.out.println("Objeto criado via construtor " + console.nome + " Custando " + console.preco);

        teclado.close();
    }
}
