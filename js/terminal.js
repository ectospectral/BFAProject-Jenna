const commands = {
    "help": "Available commands: help, echo, date",
    "echo": (args) => args.join(" "),
    "date": () => new Date().toLocaleString(),
};

const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const input = inputElement.value.trim();
        if (input) {
            processCommand(input);
        }
        inputElement.value = "";  // Clear input field
    }
});

function processCommand(input) {
    const [command, ...args] = input.split(" ");
    const output = commands[command]
        ? typeof commands[command] === "function"
            ? commands[command](args)
            : commands[command]
        : `Command not found: ${command}`;
    
    appendToOutput(input, output);
}

function appendToOutput(input, output) {
    const inputLine = document.createElement("div");
    inputLine.textContent = `$ ${input}`;
    outputElement.appendChild(inputLine);

    const outputLine = document.createElement("div");
    outputLine.textContent = output;
    outputElement.appendChild(outputLine);

    outputElement.scrollTop = outputElement.scrollHeight;  // Scroll to the bottom
}
