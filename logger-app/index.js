
const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");

if (!text) {
    console.log("x Please provide a message to loge");
    console.log("Example: node.js Hello world!!");
    process.exit(1)
}
