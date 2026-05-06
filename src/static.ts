// npm install -g ts-node
// ts-node ./src/static.ts

class Counter {
    static count: number = 0;
    static increment() {
        return (Counter.count = Counter.count + 1 )
    }
    decrement() {
        return (Counter.count = Counter.count - 1 )
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());