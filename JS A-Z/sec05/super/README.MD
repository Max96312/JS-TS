# Constructor
`constructor`을 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화를 제공할 수 있습니다.

# super
+ super 키워드는 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용됩니다.
+ super 키워드는 자식 클래스 내에서 부모 클래스의 메서드를 호출할 때 사용됩니다.

```javascript
class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return `I have a` + this.carname;
    }
}

class Model extends Car{
    function

    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return super.present() + `, it is a ` + this.model;
    }
}

let mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
```
`I have a Ford, it is a Mustang`