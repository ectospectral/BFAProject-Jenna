let commands = {
    "help": "Available commands: help, echo,",
    "echo": (args) => args.join(" "),
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
