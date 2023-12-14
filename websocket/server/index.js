const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});

wss.on("connection", (ws) => {
    console.log("Client connected to the server!");


    ws.on("message", (data) => {
        console.log("Client has sent us some data:", data);

        ws.send("Okay!");
    });

    ws.on("close", () => {
        console.log("Client disconnected to the server!");
    });
});