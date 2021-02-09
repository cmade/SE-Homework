package Mod3_Week1_HW1;

public class Mod3_Week1_HW1 {

//	We have a parrot that likes to squawk at night in its cage when it’s scared. 
//	Write a method named getUp that has 2 parameters
//	1st parameter  should be a boolean and be named squawking it represent the parrot.
//	2nd parameter represents the hour of the day and is an int named currentHour has 
//	a valid range of 0-23.
//	We have to get up if the parrot is squawking before 6 or after 22 hours so 
//	in that case return true.
//	All other cases will return false. If the currentHour parameter is less than 
//	0 or greater than 23 return false

	static boolean getUp(boolean squawk, int currentHour) {
		if(currentHour > 6 && currentHour < 22) {
			squawk = true;
		}else if(currentHour < 0 && currentHour > 23) {
			squawk = false;
		}
		return squawk;
	}
	public static void main(String[] args) {
		System.out.println("Is the parrot squaking. The answer is: " + getUp(false, 1));
	}
}
