
public class SelectionStatement3 {

	public static void main(String[] args) {
		
		//1. 난수 발생(-50~50)
		//2. 뽑힌 난수가 음수인지 양수인지 0인지 구분해서 출력
		double n = Math.random(); //0~1 범위 난수 뽑기(1포함 X)
		n=(int )(n*101-50);
		if(n<0) {
			System.out.printf("%f는 음수입니다.\n",n);
		}
		else if(n>0) {
			System.out.printf("%f는 양수입니다.\n",n);
		}
		else {
			System.out.printf("%f는 0입니다.\n",n);
		}
		
		//1. id와 pw입력
		//2. id가 "iamuser"이고 pw가 "12345"라면 "로그인 성공" 출력 아니면 "로그인 실패" 출력
		
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		
		System.out.print("아이디: ");
		String id = scanner.next();
		
		System.out.print("비번: ");
		int pw = scanner.nextInt();
		
		if(id.equals("iamuser") && pw==12345) {
			System.out.println("로그인 성공");
		}
		else {
			System.out.println("로그인 실패");
		}
		
		System.out.print("소득을 입력하세요. : ");
		double pay = scanner.nextDouble();
		double pay2 = 0;
		
		if(pay<20000000) {
			pay2=pay;
			System.out.printf("%.f 원\n",pay2);
		}
		else if(20000000<=pay || pay<=40000000) {
			pay2 = pay-(pay*0.1);
			System.out.printf("%.2f원\n",pay2);
		}	
		else if(40000000<=pay || pay<=60000000) {
			pay2 = pay-(pay*0.15);
			System.out.printf("%f.2원\n",pay2);
		}
		else if(60000000<=pay || pay<=80000000) {
			pay2 = pay-(pay*0.2);
			System.out.printf("%.2f원\n",pay2);
		}
		else if(80000000<=pay ) {
			pay2 = pay-(pay*(0.3));
			System.out.printf("%.2f원\n",pay2);
		}
		
	}

}
