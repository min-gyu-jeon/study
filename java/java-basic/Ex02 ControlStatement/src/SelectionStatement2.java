
public class SelectionStatement2 {

	public static void main(String[] args) {
		
		//계산기 만들기
		//1. 숫자 입력 -> 연산자 입력 -> 숫자 입력
		//2. 입력된 연사자에 따라 연산
		//3. 결과 출력
		
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		
		System.out.print("첫번째 숫자: ");
		int operand1 = scanner.nextInt();
		
		System.out.print("연산자: ");
		String op = scanner.next();
		
		System.out.print("두번째 숫자: ");
		int operand2 = scanner.nextInt();

		double result = 0;
		boolean valid =true;
		
		switch(op) {
		case "+":
			result = operand1 + operand2;
			break; //switch문 종료
		case "-":
			result = operand1 - operand2;
			break;
		case "*":
			result = operand1 * operand2;
			break;
		case "/":
			result = operand1 / operand2;
			break;
		case "%":
			result = operand1 % operand2;
			break;
		default:
			valid = false;
			System.out.println("지원하지 않는 연산자 입니다.");
		if(valid) {
				System.out.printf("%d %s %d = %.2f\n",operand1, op ,operand2, result);
			}
		}
	}

}
