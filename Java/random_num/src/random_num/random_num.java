package random_num;

public class random_num {

	public static void main(String[] args) {
		int randomNum = ((int)(Math.random() * 10)+1);
		System.out.println(randomNum);
		
		switch(randomNum) {
		  case 1:
			  System.out.println("Monday");
			  break;
		  case 2:
			  System.out.println("Tuesday");
			  break;
		  case 3:
			  System.out.println("Wednesday");
			  break;
		  case 4:
			  System.out.println("Thursday");
			  break;
		  case 5:
			  System.out.println("Friday");
			  break;
		  case 6:
			  System.out.println("Saturday");
			  break;
		  case 7:
			  System.out.println("Sunday");
			  break;
		  default:
			  System.out.println("Not a day");
		  
		    
		}
	}

}
