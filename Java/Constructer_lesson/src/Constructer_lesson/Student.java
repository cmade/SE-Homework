package Constructer_lesson;

public class Student {
// Declare instance variables
	int age;
	String name;
	String hobby;
	
	public Student(int age, String name, String hobby) {
		this.age = age;
		this.name = name;
		this.hobby = hobby;
	}
	public static void main(String[] args) {
		Student tom = new Student(23, "Tom", "Play Call of Duty!");
		System.out.println(tom.age);
	}

}
