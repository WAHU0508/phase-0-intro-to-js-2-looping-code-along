function writeCards(names, event) {
    const messages = []; //empty array to hold messages
    for (let i = 0; i < names.length; i++) {
      const cardMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; //iterate through input array and build thank you message for each name
      messages.push(cardMessage);  //add each message to new array.
    }
    return messages;
}
console.log(writeCards(["Charles", "Alice", "Edwin", "Lisa"], "birthday"));

function countDown(num) {
    let j = num;
    while (j >= 0) {
        console.log(j);
        j--;
    }
}
countdown(10);
