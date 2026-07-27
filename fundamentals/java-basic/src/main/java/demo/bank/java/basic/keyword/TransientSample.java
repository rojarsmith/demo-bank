package demo.bank.java.basic.keyword;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

/**
 * @author Rojar Smith
 *
 * @date 2022 Sep 17
 */
public class TransientSample implements Serializable {
	private static final long serialVersionUID = 4750331057793230301L;

	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		TransientSample ts = new TransientSample();
		Test obj = ts.new Test();
		obj.i = 10;
		System.out.println("[Input]");
		System.out.println("i=" + obj.i);
		System.out.println("j=" + obj.j);
		System.out.println("k=" + obj.k);

		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		ObjectOutputStream oos;
		try {
			oos = new ObjectOutputStream(baos);
			oos.writeObject(obj);
		} catch (Exception e) {
			e.printStackTrace();
		}

		byte[] obja = baos.toByteArray();

		ByteArrayInputStream baip = new ByteArrayInputStream(obja);
		ObjectInputStream ois;
		try {
			ois = new ObjectInputStream(baip);
			Test objr = (Test) ois.readObject();

			System.out.println("[Output]");
			System.out.println("i=" + objr.i);
			System.out.println("j=" + objr.j);
			System.out.println("k=" + objr.k);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	class Test implements Serializable {
		private static final long serialVersionUID = -3274598495952093571L;

		transient int i = 2;
		static transient int j = 4;
		int k = 6;
	}
}
