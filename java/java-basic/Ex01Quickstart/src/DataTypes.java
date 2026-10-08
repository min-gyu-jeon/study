
public class DataTypes {

	public static void main(String[] args) {
		
		//변수 선언 형식: 자료형 변수
		int age;
		age = 35;
		int height =178;
		
		double pi =3.14;
		
		boolean valid = true;
		
		char grade ='A';
		
		//float average =93.75;  //오류: 리터럴에도 자료형이 있음 -> 실수 리터럴은 double 타입
		float average = 93.75F; //실수F: 이 실수의 자료형을 float으로 지정
		
		long distance = 10000000000L; //정수L: 이정수의 자료형을 long으로 지정
		
		double v1 =10;
		int v2 =(int)12.34;  //명시적 형변환: 데이터의 손실이 있는 경우에는 명시적 형 변환
		
		char grade2 = 'A';
		System.out.printf("문자: %c  코드: %d \n",grade2, (int)grade2);
		
		int m = Integer.MAX_VALUE; //int로 저장할수 있는 가장 큰 값 저장(2147483647)
		System.out.println(m);
		m= m+1;
		System.out.println(m);
		
		int v3 = 10;
		int v4 = 4;
		double v5 = v3/v4;
		System.out.println(v5);
	}

}
