import java.awt.Color;
import java.awt.Container;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;


public class RandomNumberGenerationFrame extends JFrame{
	
	JTextField numberField = new JTextField();
	
	class ClickHandler implements ActionListener{//ActionListener : click 했을때 호출할 메서드 규격

		@Override
		public void actionPerformed(ActionEvent e) {
			int num = (int)Math.floor(Math.random()*45+1);
			numberField.setText(String.valueOf(num));
		}
		
	}
	public RandomNumberGenerationFrame() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); //윈도우를 닫으면 프로그램도 종료하는 설정
		setSize(500, 600);
		setTitle("숫자 뽑기");
		setLocation(500, 200);
		setLayout(null);//화면구성 방식을 직접 설정하는 선택
		
		JButton button = new JButton();
		button.setText("버튼을 눌러 숫자를 뽑으세요");
		button.setSize(200, 100);
		button.setLocation(150, 225);
		button.addActionListener(new ClickHandler());
		
		numberField.setSize(200,50);
		numberField.setLocation(150,350);
		
		add(numberField);
		add(button); //버튼을 윈도우에 부착
		
		setVisible(true);
	}
	
	public static void main(String[] args) {
		RandomNumberGenerationFrame window = new RandomNumberGenerationFrame();

	}

}
