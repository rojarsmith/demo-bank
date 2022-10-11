package demo.bank.java.basic.keyword;

import java.util.concurrent.CountDownLatch;

/**
 * @author Rojar Smith
 *
 * @date 2022 Oct 11
 **/
public class AsyncThreadsToSyncThread {
	public static void main(String[] args) {
		final CountDownLatch latch = new CountDownLatch(2);

		new Thread() {
			public void run() {
				try {
					System.out.println("Sub thread " + Thread.currentThread().getName() + " is running");
					Thread.sleep(3000);
					System.out.println("Sub thread " + Thread.currentThread().getName() + " completed");
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				latch.countDown();
			};
		}.start();

		new Thread() {
			public void run() {
				try {
					System.out.println("Sub thread " + Thread.currentThread().getName() + " is running");
					Thread.sleep(3000);
					System.out.println("Sub thread " + Thread.currentThread().getName() + " completed");
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				latch.countDown();
			};
		}.start();

		try {
			System.out.println("Wating 2 sub threads...");
			latch.await();
			System.out.println("2 sub threads completed");
			System.out.println("Continue main thread");
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
