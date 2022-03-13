const { createServer } = require("http");
const express = require("express");
const WebSocket = require("ws");


const app = express();

app.use(express.json({ extended: false }));

app.use("/websocket/chat", require("./routes/websocket/chat"));

const port = 3001;
const server = createServer(app);
server.listen(port, () => console.info(`Server running on port: ${port}`));

