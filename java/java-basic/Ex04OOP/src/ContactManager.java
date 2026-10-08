
public class ContactManager {

	public static void main(String[] args) {
		
		Contact c;
		c = new Contact();
		c.setNum(1);
		c.setName("홍길동");
		c.setPhone("010-2258-3369");
		c.setEmail("hdk@example.com");
		System.out.println(c.display());
		
		c.setNum(2);
		c.setName("아이유");
		c.setPhone("010-3358-3369");
		c.setEmail("iu@example.com");
		System.out.println(c.display());
		

	}

}
