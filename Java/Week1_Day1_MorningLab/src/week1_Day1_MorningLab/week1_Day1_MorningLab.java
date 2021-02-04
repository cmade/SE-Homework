package week1_Day1_MorningLab;

public class week1_Day1_MorningLab {

	public static void main(String[] args) {
		var a = 1;
		var b = 2;
		System.out.println(b - a);
		
		short x = 74;
		if(x > 90) {
			System.out.println("A");
		}else if(x > 80) {
			System.out.println("B");
		}else if(x > 70) {
			System.out.println("C");
		}else if(x > 55) {
			System.out.println("D");
		}else{
			System.out.println("F");
		}

		var y = 8;
		if(y > 5 && y < 11) {
			System.out.println("Good Morning");
		}else if(y > 12 && y < 16) {
			System.out.println("Good Afternoon");
		}else {
			System.out.println("Hey there");
		}
	}

}
