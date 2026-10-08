public class BankAccount {

	String owner;
	int balance;

//	void increase() {
//		temperature += 1;
//	}
	void deposit(int amount) {
		
		balance += amount;
		if(amount<=0) {
			amount = 0;
			System.out.println("입금액이 0원이하입니다.");
		}
		
	}

	void withdraw(int amount) {
		balance -= amount;
		if(balance<0) {
			
			balance+=amount;
			System.out.println("출금액이 잔액보다 많습니다.");
		}
	}

	void display() {
		System.out.printf("[잔액 : %d]\n", balance);
	}

}
