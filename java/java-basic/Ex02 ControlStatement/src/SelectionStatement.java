
public class SelectionStatement {

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
		
		if(op.equals("+")){  //문자열의 내용을 비교할때 equals 메서드 사용(비교 연산자 사용하면 X)
			result = operand1 + operand2;
		}
		else if(op.equals("-")) {
			result = operand1 - operand2;
		}
		else if(op.equals("/")) {
			result = operand1 / (double)operand2;
		}
		else if(op.equals("*")) {
			result = operand1 * operand2;
		}
		else if(op.equals("%")) {
			result = operand1 % operand2;
		}
		else {
			valid = false;
			System.out.println("지원하지 않는 연산자 입니다.");
		}
		if(valid) {
		System.out.printf("%d %s %d = %.2f\n",operand1, op ,operand2, result);
		}
	}

}
