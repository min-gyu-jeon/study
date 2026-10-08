
public class Battery {

	int level;


	void charge(int amount) {
		level += amount;
		if(level>=100) {
			level=100;
			System.out.println("잔량이 100입니다.");
		}
		
	}

	void use(int amount) {
		level -= amount;
		if(level<=0) {
			level = 0;
			System.out.println("잔량이 0입니다.");
		}
	}

	void display() {
		System.out.printf("[배터리 잔량 : %d]\n", level);
	}

}
