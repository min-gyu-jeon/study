
public class Thermostat {

	int temp;

	void increase() {

		temp++;

	}

	void decrease() {

		temp--;

	}

	String display() {

		return "[" + temp + "]";

	}

}
