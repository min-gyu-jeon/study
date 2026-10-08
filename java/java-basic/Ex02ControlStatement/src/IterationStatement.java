
public class IterationStatement {

	public static void main(String[] args) {

//		for(int i = 0; i<=10; i++) {
//			for(int j = 0; j<=i; j++) {
//				System.out.printf("*");
//			}
//			System.out.printf("\n");
//		}

//		for(int i = 0; i<=10; i++) {
//			for(int j = 10; j>=i; j--) {
//				System.out.printf("*");
//			}
//			System.out.printf("\n");
//		}

		for (int i = 0; i <= 10; i++) {
			for(int j =0; j<=10-i; j++) {
				System.out.printf(" ");
			}
			for (int j = 0; j <=i; j++) {
				System.out.printf("*");
			}
			System.out.printf("\n");
		}
	}

}
