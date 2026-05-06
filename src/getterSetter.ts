// npm install -g ts-node
// ts-node ./src/getterSetter.ts


// getter 
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
    // set ballance
    // addBalance(balance : number ){
    //     this.userBalance = this.userBalance + balance;
    //     return this.userBalance
    // }

    set addBalance(amount : number){
        this.userBalance = this.userBalance + amount
    }

    // get balance
    // getBalance(){
    //     console.log(this.userBalance); 
    // }
     get getBalance (){
        return this.userBalance
     }

}

const user1 = new BankAccount(125, 'Show' ,1500);
// user1.addBalance(500);
// user1.getBalance()

user1.addBalance = 500;
console.log(user1);