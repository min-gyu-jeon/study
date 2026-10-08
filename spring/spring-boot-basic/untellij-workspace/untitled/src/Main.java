interface Payment {
    void pay(int amount);
}

class CardPayment  Payment {
    @Override
    public void pay(int amount) {
        System.out.println(amount + "원 카드 결제");
    }
}