public class aula4 {
    public static void main(String[] args){
        int opcaoMenu = 8;

        switch (opcaoMenu) {
            case 1:
                System.out.println("Iniciando");
                break;
            case 2:
                System.out.println("Carregando jogo salvo");
                break;
            case 3:
                System.out.println("Saindo do progrma");
                break;
            default:
                System.out.println("Opção inválida");
                break;
        }
    }
}
