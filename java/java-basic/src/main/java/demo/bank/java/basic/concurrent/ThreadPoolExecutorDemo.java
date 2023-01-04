package demo.bank.java.basic.concurrent;

import java.util.Random;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

/**
 * @author Rojar Smith
 *
 * @date 2023 Jan 4
 */
public class ThreadPoolExecutorDemo {
	public static void main(String[] args) {
		System.out.println("aaa");
		ThreadPoolExecutor tpe = new ThreadPoolExecutor(2, 10, 10, TimeUnit.SECONDS, new LinkedBlockingQueue<>(10),
				new ThreadPoolExecutorDemo.ThreadFactoryExample(), new ThreadPoolExecutor.DiscardPolicy());

		IntStream.range(0, 100).forEach(x -> {
			Runnable r = () -> {
				System.out.println("Hi I am task " + x);
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			};

			try {
				int sleepTime;
				if (x < 20)
					sleepTime = new Random().nextInt(1000);
				else if (x < 40)
					sleepTime = new Random().nextInt(500);
				else if (x < 80)
					sleepTime = new Random().nextInt(300);
				else
					sleepTime = 0;

				System.out.println("Sleep " + sleepTime);
				Thread.sleep(sleepTime);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			tpe.execute(r);
		});
	}

	static class ThreadFactoryExample implements ThreadFactory {

		static int count = 0;

		ThreadGroup tg = new ThreadGroup("Example Group");

		@Override
		public Thread newThread(Runnable r) {
			count++;
			System.out.println("Create Thread " + count);
			return new Thread(tg, r, "Example Thread");
		}

	}
}
