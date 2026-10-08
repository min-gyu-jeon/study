import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;

public class ContactManager2 {

	// 여러개의 연락처를 관리하는 배열 필드 선언
	private Contact2[] contacts = new Contact2[1000];
	// 다음에 등록할 연락처의 배열에서의 위치번호를 저장하는 필드 선언
	private int nextIdx = 0;

	java.util.Scanner scanner = new java.util.Scanner(System.in);

public ContactManager2() {
		
		FileInputStream fis = null;
		ObjectInputStream ois = null;
		FileInputStream fis2 = null;
		DataInputStream dis = null;
		try {
			fis = new FileInputStream("contacts.dat");
			ois = new ObjectInputStream(fis);
			contacts = (Contact2[])ois.readObject();
			
			fis2 = new FileInputStream("nextidx.dat");
			dis = new DataInputStream(fis2);
			nextIdx = dis.readInt();
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			try { ois.close(); } catch (Exception ex) {}
			try { fis.close(); } catch (Exception ex) {}
		}
	}

	// 연락처 관리 프로그램 실행을 관리하는 메서드 정의
	public String selectTask() {
		System.out.println("*******************************");
		System.out.println("* 1. 연락처 등록.");
		System.out.println("* 2. 연락처 목록.");
		System.out.println("* 3. 연락처 검색.");
		System.out.println("* 4. 연락처 삭제.");
		System.out.println("* 5. 연락처 수정.");
		System.out.println("* 9. 종료.");
		System.out.println("*******************************");

		System.out.print("원하는 작업을 선택하세요 : ");
		String selection = scanner.nextLine();

		return selection;
	}

	public void doManage() {
		main: while (true) {
			String selection = selectTask();
			System.out.println();
			switch (selection) {
			case "1":
				register();
				break;
				
			case "2":
				list();
				break;
				
			case "3":
				search();
				break;
			case "4":
				break;
			case "5":
				break;
				
			case "9":
				save();
				System.out.println("프로그램을 종료합니다.");
				break main; // main으로 이름이 지정된 반복문 또는 switch문 종료
			
			default:
				System.out.println("지원하지 않는 작업입니다.");
				break;
			}
			System.out.println();
		}
	}

	private void save() {
		FileOutputStream fos = null;
		ObjectOutputStream oos = null;
		FileOutputStream fos2 = null;
		DataOutputStream dos = null;
		try {
			fos = new FileOutputStream("contacts.dat");
			oos = new ObjectOutputStream(fos);
			oos.writeObject(contacts);
			
			fos2 = new FileOutputStream("nextidx.dat");
			dos = new DataOutputStream(fos2);
			dos.writeInt(nextIdx);
		} catch (IOException e) {
			e.printStackTrace(); // 오류 메시지를 화면에 출력하는 명령
		} finally {
			try { oos.close(); } catch(Exception e) {}
			try { fos.close(); } catch(Exception e) {}
			try { dos.close(); } catch(Exception e) {}
			try { fos2.close(); } catch(Exception e) {}
		}		
	}

	// 연락처 관리에 필요한 메서드(등록, 수정, 삭제, 검색, 목록)
	public void register() {
		//연락처 내용 입력
		System.out.printf("이름: ");
		String name = scanner.nextLine();
		
		System.out.printf("이메일: ");
		String email = scanner.nextLine();
		
		System.out.printf("전화번호: ");
		String phone = scanner.nextLine();
		
		//입력 내용을 사용해서 연락처 객체 생성
		Contact2 contact= new Contact2();
		contact.setNum(nextIdx+1);
		contact.setName(name);
		contact.setEmail(email);
		contact.setPhone(phone);
		
		//연락처 목록 관리 배열에 연락처 추가(저장)
		contacts[nextIdx] = contact;
		
		nextIdx++; //다음 연락처 등록위치를 1증가하여 변경
		
		System.out.println("연락처가 등록되었습니다.");
		
	}

	public void delete() {
		
	}

	public void list() {
		if(nextIdx == 0) {
			System.out.println("연락처가 없습니다.");
		}
		
		for(int i =0; i<nextIdx; i++) {
			contacts[i].display();
		}
	}

	public void search() {
		System.out.print("찾고 싶은 이름를 입력하세요. : ");
		String name = scanner.nextLine();
		
		for(int i =0; i<nextIdx; i++) {
			if(contacts[i].getName().contains(name)) {
				contacts[i].display();
				break;
			}
		}
		
	}

	public void update() {
	}

	public static void main(String[] args) {

		ContactManager2 manager = new ContactManager2();
		manager.doManage();

		// Contact2 contact= new Contact2(1,"John
		// Doe","010-6547-1236","johndoe@example.com");
		// contact.display();

		// Contact2 contact2 = new Contact2();
		// contact.setNum(2);
		// contact.setName("아이유");
		// contact.setPhone("010-3358-3369");
		// contact.setEmail("iu@example.com");
		// contact.display();

	}

}
