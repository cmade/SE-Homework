package Constructer_lesson;



public class Cat {
	String talk;
	public Cat(String talk) {
		this.talk = talk;
	}

	public static void main(String[] args) {
		Animal cat = new Animal("Meow");
		
		cat.talk();
	}

}
