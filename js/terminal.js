let video = 3;
let commands = {
    "help": "Available commands: help, echo, receive",
    "echo": (args) => args.join(" "),
    "receive": (args) => {
        if (args === 'key'){
        video = 3;
        }

        if (video >= 1 && video <= 3){
            window.location.href = `video${video}.html`;
            return `Loading video ${video}`;
        } else {
            return "File not found.";
        }
    }
};

let inputElement = document.getElementById("input");
let outputElement = document.getElementById("output");

inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let input = inputElement.value.trim();
        if (input) {
            takeCommand(input);
        }
        inputElement.value = "";
    }
});

function takeCommand(input) {
    let [command, ...args] = input.split(" ");
    let output = commands[command]
        ? typeof commands[command] === "function"
            ? commands[command](args)
            : commands[command]
        : `Command not found: ${command}`;
    
    giveOutput(input, output);
}

function giveOutput(input, output) {
    let inputLine = document.createElement("div");
    inputLine.textContent = `$ ${input}`;
    outputElement.appendChild(inputLine);

    let outputLine = document.createElement("div");
    outputLine.textContent = output;
    outputElement.appendChild(outputLine);

    outputElement.scrollTop = outputElement.scrollHeight;
}
