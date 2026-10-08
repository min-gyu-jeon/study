import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.text.ParseException;

public class LottoApp {

	public void run() {
	    java.util.Scanner scanner = new java.util.Scanner(System.in);

	    LottoDao lottoDao = new LottoDao();

	    int[] numbers = new int[6];

		outer: while (true) {
			
			System.out.println("******************************");
			System.out.println("* 1. 당첨 예상 번호 뽑기.");
			System.out.println("* 2. 과거 당첨 번호 초기화.");
			System.out.println("* 3. 회차별 당첨 번호 조회.");
			System.out.println("* 9. 종료.");
			System.out.println("******************************");
			System.out.print("작업 선택 : ");
			String selection = scanner.nextLine();
			
			switch(selection) {
			case "9": 				
				System.out.println("행운을 빕니다.");
				System.out.println("프로그램을 종료합니다.");
				break outer; // outer라는 이름이 붙은 반복문 또는 switch문 break
				
			case "1":
				// 2. 당첨 예상 번호 뽑기
				while (true) {
					// 2-1. [1, 45] 범위의 (중복되지 않는) 6개의 난수 뽑기 -> 배열에 저장 : ( 반복문 사용 )
					for (int i = 0; i < 6; i++) {
						numbers[i] = (int) (Math.random() * 45) + 1; // [1 ~ 45]
						for (int j = 0; j < i; j++) { // 현재 뽑힌 위치 이전까지 반복
							if (numbers[i] == numbers[j]) { // 현재 뽑힌 숫자와 이전 숫자가 같다면(중복)
								i--; // for 문에 i가 증가하더라도 현재 i 위치를 다시 뽑도록 미리 1감소
								// i = -1; // for 문에 i가 증가하더라도 처음부터 다시 뽑도록 -1로 설정
							}
						}
					}

					// 2-2. 평균이 [20 ~ 26] 범위를 벗어나면 2-1부터 다시 (다시뽑기)
					int sum = 0;
					for (int i = 0; i < 6; i++) {
						sum += numbers[i];
					}
					int average = sum / 6;
					if (average >= 20 && average <= 26) { // 정상
						System.out.printf("[AVERAGE %2d]", average);
						break;
					}
				}

				// 3. 뽑힌 숫자 출력 : ( 반복문 사용 )
				for (int number : numbers) {
					System.out.printf("[%2d]", number);
				}
				System.out.println();
				
				break;
			
			case "2":
				
				// 기존 데이터 제거 : lotto 테이블의 모든 데이터를 삭제
				// lotto-winning-numbers.csv 파일의 데이터를 읽어서 DB에 저장(반복문 처리)
			    int result = lottoDao.deleteAll();

			    if (result >= 0) {
			        System.out.println("모든 과거 당첨 번호를 삭제했습니다.");
			        System.out.println("삭제된 회차: " + result + "개");
			    } else {
			        System.out.println("삭제에 실패했습니다.");
			    }

			    break;
				
			case "3":
			    System.out.print("검색할 로또 회차 : ");
			    String srnd = scanner.nextLine();

			    try {
			        int rnd = Integer.parseInt(srnd);

			        // 입력한 회차로 DB 조회
			        LottoDto lotto = lottoDao.selectByRnd(rnd);

			        if (lotto == null) {
			            System.out.println(rnd + "회차 당첨 번호가 없습니다.");
			        } else {
			            System.out.println(lotto);
			        }
			    } catch (NumberFormatException e) {
			        System.out.println("회차는 숫자로 입력해주세요.");
			    }

			    break;
				
			default:
				System.out.println("지원하지 않는 명령입니다.");
			}			
		}	
	}

	public static void main(String[] args) throws Exception {

		LottoApp app = new LottoApp();
		app.run();
		
	}	

}