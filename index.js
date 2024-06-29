function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) { 
        const customMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(customMessage);
    }
    return messages;
}
console.log(writeCards(["Charles", "Alice", "Edwin", "Lisa"], "birthday"))

function countDown(num) {
let i = num;
while(i >= 0) {
    console.log(i);
    i--
}
}
countDown(10)