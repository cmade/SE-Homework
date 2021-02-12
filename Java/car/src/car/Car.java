package car;

public class Car {
	String name;
	String color;
	
	public Car(String name, String color) {
		this.name = name;
		this.color = "White";
	}

	public static void main(String[] args) {
		Car car = new Car("Lamborghini", "");
		System.out.println(car.color);
	}

}
