function conversation() {
    var name = prompt("What is your name?");
    alert("Nice to meet you, " + name + "!");

    var age = prompt("How old are you?");
    alert("You are " + age + " years old.");

    var hobby = prompt("What do you like to do in your free time?");
    alert("Interesting, I like " + hobby + " too.");

var Game = prompt("What Is Your favorite game?");
    alert("Interesting, I like that " + Game + " too.");

    var question = prompt("Do you want to continue the conversation? (Yes or No)");
    if (question.toLowerCase() === "yes") {
        alert("Great, let's continue!");
    } else {
        alert("Okay, have a nice day!");
    }
} 

// Call the function
conversation();
