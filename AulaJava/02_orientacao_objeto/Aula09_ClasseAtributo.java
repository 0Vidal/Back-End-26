public class Aula09_ClasseAtributo {
    public static void main(String[] args){
        Carro09 meucarro = new Carro09();
        meucarro.modelo = "sp2";
        meucarro.cor = "Azul";
        meucarro.ano = 1972;

        System.out.println("Carro criado " + meucarro.modelo + "" + meucarro.cor);

    }
}
