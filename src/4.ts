class Key {
    private signature = Math.random();
    getSignature(): number {
        return this.signature
    };
}

class Person {
    constructor(private key: Key){}
    getKey(): Key{
        return this.key
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenant: Person[] = []

    abstract OpenDoor(enteredKey: Key): void;

    comeIn(person: Person){
        if(this.door === true){
            this.tenant.push(person);
        } else{
            console.log('Door is closed. Cannot come in.');
        }
    }
    
}

class MyHouse extends  House {
openDoor(enteredKey: Key){
    if(enteredKey.getSignature() === this.key.getSignature()){
        this.door = true
        console.log('Door opened.');
    }else{
        this.door = false
        console.log('Invalid key. Door remains closed.');
    }
}
OpenDoor(enteredKey: Key): void {
    this.openDoor(enteredKey)
}
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse();
house.key = key;
house.openDoor(key);
house.comeIn(person);


export {};