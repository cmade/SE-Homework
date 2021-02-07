package isCharacterAVowel;

public class isCharacterAVowel {

	//Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
	static String isCharacterAVowel(String x) {
		switch (x.toLowerCase()) {
		case "a":
		case "e": 
		case "i":
		case "o":
		case "u":
			return x + " is a vowel";
		default:
			return x + " is not a vowel";
		}
	}
	  public static void main(String[] args) {
		    System.out.println(isCharacterAVowel("I"));
		  }


}
