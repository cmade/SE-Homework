package Constructer_lesson;



public class Dog {
	String talk;
	public Dog(String talk) {
		this.talk = talk;
	}

	public static void main(String[] args) {
		Animal dog = new Animal("Woof");
		
		dog.talk();
	}

}
