
public class IterationStatement5 {

	public static void main(String[] args) {
		java.util.Scanner scanner = new java.util.Scanner(System.in);

		outer: while(true) {
			
			System.out.println("***************************");
			System.out.println("* 1. 당첨 예상 번호 뽑기");
			System.out.println("* 2. 종료");
			System.out.println("***************************");
			
			System.out.print("어떤 기능을 실행할까요? : ");
			String selection = scanner.nextLine();
			
			System.out.println();
			switch(selection) {
			case"1" : 
				int[] numbers = new int[6]; 				//정수 6개를 저장하는 배열
				for(int i = 0; i<6; i++) {					//번호 뽑는 반복문
					int number = (int)(Math.random() * 45 + 1);
					numbers[i] = number; 					//반복 횟수에 따라 해당하는 배열의 위치에 데이터 저장
					for(int j = 0; j<i; j++) {				//중복 검사 반복문 : 현재 뽑은 숫자의 위치(i) 전까지 반복하면서 중복 검사
						if(numbers[i]==numbers[j]) {
							i--;
							break;
						}
					}
				}
				System.out.println("선택된 번호 : ");
				for(int i = 0; i<6; i++) {
					System.out.printf("[%2d]",numbers[i]);
				}
				System.out.println();
				break;
			case"2" : 
				System.out.println("프로그램을 종료합니다.");
				System.out.println("행운을 빕니다.");
				break outer;  								//outer라는 이름이 붙은 반복문 또는 switch문 종료시킴.
			default : 
				System.out.println("지원하지 않는 기능입니다.");
				break;
			}
			System.out.println();
		}
		
	}
}
