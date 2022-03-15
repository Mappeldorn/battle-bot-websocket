const { createServer } = require("http");
const express = require("express");
const cors = require('cors');
const WebSocket = require("ws");


const app = express();

app.use(express.json({ extended: false }));

// app.use(cors());
// app.use(function (req, res, next) {
//     res.header("Acces-Control-Allow-Origin", "*");
//     res.header("Acces-Control-Allow-Headers", 'Content-Type, Authorization', );
//     res.header('Acces-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
//     next();
// });

app.use("/websocket/chat", require("./routes/websocket/chat"));

const port = 3001;
const server = createServer(app);
server.listen(port, () => console.info(`Server running on port: ${port}`));

