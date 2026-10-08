
import java.util.Scanner;

import pa.TheClassOne; //이 파일에서 TheClassOne 이름을 사용하면 pa.TheClassOne으로 해석하는 설정
import pa.subb.TheClassThree;

public class MainApp {

	public static void main(String[] args) {
	
		//Person 클래스 변수 만들기 +사용
		Person person;//참조형 변수 만들기
		person= new Person();//인스턴스 만들기+ 인스턴스의 주소를 person 변수에 저장
		
		person.no = 1;//클래스의 멤버는 .연산자로 접근
		person.name = "아이유"; 
		person.email="iu@example.com";
		person.phone="010-6533-7789";
		
		String info = person.info();
		System.out.println(info);
		
		////////////////////////////////////
		
		//temp 변수 만들고 사용
		Thermostat2 t = new Thermostat2();

		t.increase(10);
        t.display();
        t.increase(20);
        t.display();
        t.decrease(10);
        t.display();
        
        Battery b;
        b= new Battery();
        b.level = 50;
        
        b.use(10);
        b.display();
        b.use(100);
        b.display();
        b.charge(50);
        b.display();
        
        BankAccount a;
        a= new BankAccount();
        a.owner = "홍길동";
        
        a.deposit(1000);
        a.display();
        a.deposit(1000);
        a.display();
        a.withdraw(5000);
        a.display();
        a.withdraw(2000);
        a.display();
        
        
        int[] ar = new int[10];
        Person[] persons = new Person[10]; 
        
        for(int i=0; i<persons.length; i++) {
        	persons[i] = new Person();
        	persons[i].no =i + 1;
        	persons[i].name ="Person" + (i + 1);
        }
        for(int i=0; i<persons.length; i++) {
        	String m = persons[i].info();
        	System.out.println(m);
        }
        
        MethodTest mt = new MethodTest();
		mt.m1();
		mt.m2("메서드 연습", 100);
		int result = mt.m3(10, 20);
		System.out.println("result : " + result);
		
		//메서드 오버로딩 테스트
		System.out.println(mt.sum(10, 20));
		System.out.println(mt.sum(10, 20, 30));
		System.out.println(mt.sum(10, 20, 30, 40));
		
		//가변 인자 배열 사용
		System.out.println(mt.sum2(10, 20));
		System.out.println(mt.sum2(10, 20, 30));
		System.out.println(mt.sum2(10, 20, 30, 40));
		
		Person2 p;
		p = new Person2();
		System.out.println(p.info());
		p = new Person2(1,"홍길동", "010-6523-9887","hdk@example.com");
		System.out.println(p.info());
		
		Person3 p3 = new Person3();
		//p3.no = 1; // 오류: private 멤버는 외부에서 접근 불가능
		p3.setNo(1);
		p3.setName("아이유");
		p3.setPhone("010-2258-3369");
		p3.setEmail("iu@example.com");
		String r = p3.info(); //public 멤버는 외부에서 접근 가능
		System.out.println(r);
		
		StaticAndFinal sf1 = null;
		System.out.println("객체 생성 이전");//static 초기화 발생시점 확인을 위한 코드
		sf1 = new StaticAndFinal();
		
		StaticAndFinal sf2 = new StaticAndFinal();
		
		System.out.printf("[%d - %d][%d - %d]\n", sf1.ino, sf2.ino, sf1.sno, sf2.sno);
		sf2.ino = 200;
		sf2.sno = 200;
		System.out.printf("[%d - %d][%d - %d]\n", sf1.ino, sf2.ino, sf1.sno, sf2.sno);
		
		System.out.println("sno:" +StaticAndFinal.sno);// static 멤버는 클래스 이름으로 접근하는것이 정석
		System.out.println("sno:" +StaticAndFinal.getSno());
		
		
		//클래스를 사용할 때 패키지 이름도 같이 표시해야함
		pa.TheClassOne co = new pa.TheClassOne();
		pa.suba.TheClassTwo ct = new pa.suba.TheClassTwo();
		
		//패키지 이름 생략 가능 (import 구문 사용하면 가능)
		TheClassOne co2 = new TheClassOne();
		TheClassThree ct2 = new TheClassThree();
		
		Scanner scanner2 = new Scanner(System.in);
		
		//pa.PackageScopeClass obj = new pa.PackageScopeClass(); //오류 : public이 아닌 클래스는 패키지 외부에서 사용 불가능
	}

}
