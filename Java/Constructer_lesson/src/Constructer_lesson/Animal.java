package Constructer_lesson;

public class Animal {
	String talk;
	public Animal(String talk) {
		this.talk = talk;
	}
	public void talk() {
		    System.out.println(this.talk);
	}

	public static void main(String[] args) {
		Animal cat = new Animal("Meow");
		Animal dog = new Animal("Woof");
		cat.talk();
		dog.talk();
	}

}
