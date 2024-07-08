class PaymentGateWay{
    constructor(){
        this.connect();
    }
    connect(){
    }
    pay(amount){
    }
    refund(amount){
    }
}

class Paypal extends PaymentGateWay {
    connect() {
        console.log("페이팔 결제 모듈 연결 완료");
    }
    pay(amount) {
        console.log("페이팔 결제 진행 중 ... 금액: " + amount);
    }
    refund(amount) {
        console.log("페이팔 환불 진행 중 ... 금액: " + amount);
    }
}

class Visa extends PaymentGateWay {
    connect() {
        console.log("비자 결제 모듈 연결 완료");
    }
    pay(amount) {
        console.log("비자 결제 진행 중 ... 금액: " + amount);
    }
    refund(amount) {
        console.log("비자 환불 진행 중 ... 금액: " + amount);
    }
}

class Customer{
    makePayment(gateway, amount){
        return gateway.pay(amount);
    }

    getRefund(gateway, amount){
        return gateway.refund(amount);
    }
}

const john = new Customer();
const paypal = new Paypal();
const visa = new Visa();

john.makePayment(paypal, 1000);
john.makePayment(visa, 1000);