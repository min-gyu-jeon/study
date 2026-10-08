
public class Lab01 {

	public static void main(String[] args) {

		// 1. 최대값과 최소값 찾기 //100 ~ 1000 범위의 난수를 10개 만들고 배열에 저장 //배열에서 최대값과 최소값을 찾아서 출력
		/*
		 * int[] ar = new int[10];
		 * 
		 * for (int i = 0; i < 10; i++) { ar[i] = (int) (Math.random() * 900 + 100); }
		 * 
		 * int max = ar[0]; int min = ar[0];
		 * 
		 * for (int i = 0; i < 10; i++) { if (ar[i] > max) { max = ar[i]; } if (ar[i] <
		 * min) { min = ar[i]; } }
		 * 
		 * System.out.printf("최댓값:%d 최소값:%d", max, min);
		 * 
		 * // 평균보다 큰 값 찾기
		 * 
		 * int[] ar = new int[10]; int sum = 0;
		 * 
		 * for (int i = 0; i < 10; i++) { ar[i] = (int) (Math.random() * 900 + 100); sum
		 * += ar[i];
		 * 
		 * System.out.printf(" %d ", ar[i]); }
		 * 
		 * double avg = (double) sum / 10;
		 * 
		 * System.out.printf("%n평균: %.1f%n", avg); System.out.print("평균보다 큰 값: ");
		 * 
		 * for (int i = 0; i < ar.length; i++) { if (ar[i] > avg) {
		 * System.out.printf(" %d ", ar[i]); } }
		 * 
		 * // 배열 뒤집기 int[] ar = new int[10]; System.out.printf("원래 숫자: "); for (int i =
		 * 0; i < 10; i++) { ar[i] = (int) (Math.random() * 900 + 100);
		 * System.out.printf(" %d ", ar[i]); } System.out.printf("\n");
		 * System.out.printf("뒤집은 숫자: "); for (int i = 9; i >= 0; i--) {
		 * System.out.printf(" %d ", ar[i]); }
		 */
		int[] numbers = new int[10];
		for (int i = 0; i < numbers.length; i++) {
			numbers[i] = (int) (Math.random() * 900) + 100;
		}
		int min = 1000, max = 0;
		for (int i = 0; i < numbers.length; i++) {
			if (max < numbers[i]) {
				max = numbers[i];
			}
			if (min > numbers[i]) {
				min = numbers[i];
			}
		}
		for (int i = 0; i < numbers.length; i++) {
			System.out.printf("[%d]", numbers[i]);
		}
		System.out.printf("-- [%d - %d]\n", min, max);
		int[] reversedNumbers = new int[numbers.length];
		for (int i = 0; i < numbers.length; i++) {
			reversedNumbers[numbers.length - i - 1] = numbers[i];
		}
		for (int i = 0; i < reversedNumbers.length; i++) {
			System.out.printf("[%d]", reversedNumbers[i]);
		}
		System.out.println();

		int sum = 0;
		for (int i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		double avg = sum / (double) numbers.length;
		System.out.printf("평균 : [%f] -- ", avg);
		for (int i = 0; i < numbers.length; i++) {
			if (numbers[i] >= avg) {
				System.out.printf("[%d]", numbers[i]);
			}
		}
		System.out.println();
		// Arrays.sort(numbers);

		for (int i = 0; i < numbers.length - 1; i++) { // 가장 큰 수를 가장 오른쪽으로 이동하는 싸이클
			for (int j = 0; j < numbers.length - 1 - i; j++) {
				if (numbers[j] > numbers[j + 1]) { // 왼쪽의 숫자가 더 크면 오른쪽으로 이동 ( 숫자 교환 )
					int temp = numbers[j];
					numbers[j] = numbers[j + 1];
					numbers[j + 1] = temp;
				}
			}
		}

		for (int i = 0; i < numbers.length; i++) {
			System.out.printf("[%d]", numbers[i]);
		}

	}
}
