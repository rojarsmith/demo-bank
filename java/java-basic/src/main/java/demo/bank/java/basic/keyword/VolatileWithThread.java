package demo.bank.java.basic.keyword;

/**
 * @author Rojar Smith
 *
 * @date 2022 Sep 17
 */
public class VolatileWithThread {
	// always main memory.
	static volatile int num;

	public static void main(String[] args) {
		Thread readerThread = new Thread(() -> {
			int temp = 0;
			while (true) {
				if (temp != num) {
					temp = num;
					System.out.println("reader: value of num = " + num);
				}
			}
		});

		Thread writerThread = new Thread(() -> {
			for (int i = 0; i < 5; i++) {
				num++;
				System.out.println("writer: changed value to = " + num);
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			System.exit(0);
		});

		// println in reader and writer are not in sequence.
		readerThread.start();
		writerThread.start();
	}
}
