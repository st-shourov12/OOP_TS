// npm install -g ts-node
// ts-node ./src/encapsulation.ts

class BankAccount {
    public readonly userId : number;
    public userName : string ;
    protected userBalance : number ;

    constructor (
        userId : number,
        userName : string ,
        userBalance : number ,
    ) {
        this.userId = userId ;
        this.userName = userName ; 
        this.userBalance = userBalance
    }

    private addBalance(balance : number ){
        this.userBalance = this.userBalance + balance;
        return this.userBalance
    }
    callhiddenMethod(balance: number) {
        return this.addBalance(balance)
    }
}

class StudentAccount extends BankAccount {
    test(){
        this.userBalance
    }
}

const shourov = new BankAccount(123,"Shourov" , 500);
// shourov.userId = 555
console.log(shourov.callhiddenMethod(120));
console.log(shourov);
