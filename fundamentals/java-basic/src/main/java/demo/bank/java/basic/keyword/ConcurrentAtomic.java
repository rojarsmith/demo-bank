package demo.bank.java.basic.keyword;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

/**
 * @author Rojar Smith
 *
 * @date 2022 Oct 7
 **/
public class ConcurrentAtomic {

	private static volatile ConcurrentAtomic concurrentAtomic = new ConcurrentAtomic();
	private static volatile BankCard bankCard = concurrentAtomic.new BankCard("Rojar", 100);
	private static AtomicReference<BankCard> bankCardRef = new AtomicReference<>(
			concurrentAtomic.new BankCard("Rojar", 100));

	public static void main(String[] args) {
		// money increase serial is correct
//		synchronizedLock();
		atomicReference();
	}

	public static void atomicReference() {
		for (int i = 0; i < 10; i++) {
			new Thread(() -> {
				final BankCard card = bankCardRef.get();
				ConcurrentAtomic concurrentAtomic = new ConcurrentAtomic();
				BankCard newCard = concurrentAtomic.new BankCard(card.getAccountName(), card.getMoney() + 100);
				
				// CAS
				if (bankCardRef.compareAndSet(card, newCard)) {
					System.out.println(newCard);
				}
				try {
					TimeUnit.MICROSECONDS.sleep(1000);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}).start();
		}
	}

	public static void synchronizedLock() {
		for (int i = 0; i < 10; i++) {
			new Thread(() -> {
				synchronized (ConcurrentAtomic.class) {
					final BankCard card = bankCard;
					ConcurrentAtomic concurrentAtomic = new ConcurrentAtomic();
					BankCard newCard = concurrentAtomic.new BankCard(card.getAccountName(), card.getMoney() + 100);
					System.out.println(newCard);

					bankCard = newCard;
					try {
						TimeUnit.MICROSECONDS.sleep(1000);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}).start();
		}
	}

	public class BankCard {

		private final String accountName;
		private final int money;

		public BankCard(String accountName, int money) {
			this.accountName = accountName;
			this.money = money;
		}

		public String getAccountName() {
			return accountName;
		}

		public int getMoney() {
			return money;
		}

		@Override
		public String toString() {
			return "BankCard{" + "accountName='" + accountName + '\'' + ", money='" + money + '\'' + '}';
		}

	}

}
