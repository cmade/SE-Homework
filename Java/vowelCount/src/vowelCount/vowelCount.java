package vowelCount;

public class vowelCount {
	//Write a function vowelCount that takes a String and returns the number of vowels in the String. add a check for the string to be of 10 or less characters. 
	static String charCount(String x) {
		var count = 0;
		for(int index=0;  index<x.length(); index++) {
			String[] newX = x.split("");
			switch (newX[index]) {
			case "a":
			case "e": 
			case "i":
			case "o":
			case "u":
				count = count + 1;
			default:
				count = count;
			}
		}
		return "There are " + count + " vowels in: " + x;
	}
	  public static void main(String[] args) {
		    System.out.println(charCount("aeiou"));
		  }


}
