public class TheWorker3 implements Runnable {

    public void doWork() {

        System.out.println("2. doWork의 처음");

        System.out.println(
                "TheWorker3 : " + Thread.currentThread().getId()
        );

        try {
            Thread.sleep(1000 * 10);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("3. doWork의 끝");
    }

    @Override
    public void run() {
        doWork();
    }

    public void start() {
        Thread thread = new Thread(this);
        thread.start();
    }
}