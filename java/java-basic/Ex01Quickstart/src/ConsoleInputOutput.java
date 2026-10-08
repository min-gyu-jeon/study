
public class ConsoleInputOutput {

	public static void main(String[] args) {//print : 출력 끝에 enter를 포함하지 안함,  println: 출력 끝에 enter를 포함
		
		// 입력기 생성 
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		
		//출력: 입력을 위한 메시지 출력
		System.out.print("이름을 입력하세요: ");
		
		//사용자가 입력하고 엔터를 치면 입력된 값을 name 변수에 저장
		String name = scanner.nextLine();
		
		System.out.print("이메일을 입력하세요: ");
		
		String email = scanner.nextLine();
		
		System.out.print("나이를 입력하세요: ");
		int age = scanner.nextInt();
		
		//System.out.println("이름은 "+ name +" 이메일은 "+ email); //문자열+데이터 => 결합된 새 문자열
		System.out.println("이름은 "+ name +" 이메일은 "+ email); 
		System.out.printf("이름: %s 이메일 : %s 나이 : %d", name, email, age);
		
		char grade = 'A'; //문자형 예시

		scanner.close(); // 다 사용한 입력기를 반환(다른 프로그램이 사용할 수 있도록)
	}

}
//%s 문자열 데이터 
//%c 문자 데이터
//%d 정수형 데이터
//%f 실수형 데이터
//%b 진위형 데이터(boolean)