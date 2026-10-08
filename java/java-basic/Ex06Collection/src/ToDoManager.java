import java.util.ArrayList;
import java.util.Scanner;

public class ToDoManager {

	ArrayList<ToDo> toDos = new ArrayList<>();
	Scanner sc = new Scanner(System.in);

	public int selectTask() {
		System.out.println("**********************");
		System.out.println("1. 할 일 등록");
		System.out.println("2. 할 일 목록");
		System.out.println("3. 할 일 검색");
		System.out.println("4. 할 일 삭제");
		System.out.println("5. 할 일 수정");
		System.out.println("0. 종료");
		System.out.println("**********************");

		System.out.print("메뉴 선택: ");
		return sc.nextInt();
	}

	public void doManage() {
		main: while (true) {
			int selection = selectTask();
			System.out.println();
			switch (selection) {
			case 1:
				register();
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;

			case 0:
				System.out.println("프로그램을 종료합니다.");
				break main; // main으로 이름이 지정된 반복문 또는 switch문 종료

			default:
				System.out.println("지원하지 않는 작업입니다.");
				break;
			}
			System.out.println();
		}
	}

	public void register() {
		System.out.println("[할 일 등록]");

		System.out.print("할 일 번호: ");
		int no = sc.nextInt();

		sc.nextLine();

		System.out.print("할 일 제목: ");
		String title = sc.nextLine();

		ToDo toDo = new ToDo(no, title, false);
		toDos.add(toDo);

		System.out.println("할 일이 등록되었습니다.");
	}

	public static void main(String[] args) throws Exception {
		ToDoManager manager = new ToDoManager();
		manager.doManage();
	}
}
