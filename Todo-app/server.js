const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, res.method);
    if (req.url === "/todos" && req.method == "GET") {
        res.end("All Todos");
    } else if (req.url === "/todos/create-todo" && req.method === "POST") {
        res.end("Todo Created")
    } else {
        res.end("Route Not Found")
    }

})
server.listen(5000, "127.0.0.1", () => {
    console.log("server listening to port 5000")
})