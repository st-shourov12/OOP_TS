// npm install -g ts-node
// ts-node ./src/accessmodifier.ts

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

    addBalance(balance : number ){
        this.userBalance = this.userBalance + balance;
        return this.userBalance
    }
}

class StudentAccount extends BankAccount {
    test(){
        this.userBalance
    }
}

const shourov = new BankAccount(123,"Shourov" , 500);
// shourov.userId = 555
console.log(shourov.addBalance(120));
console.log(shourov);
