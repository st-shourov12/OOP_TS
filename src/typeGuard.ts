// ts-node ./src/typeGuard.ts

// typeGuard = type narrowing

type Alphaneumeric = number | string ;

const add = (num1 : Alphaneumeric , num2:Alphaneumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    }else {
       return num1.toString()  + num2.toString()
    }
}

console.log(add(5,9));
console.log(add(5,'9'));
console.log(add('5','9'));