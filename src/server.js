const WebSocket = require('ws');

const port = 3001;
const wss = new WebSocket.Server({ port });

wss.on('connection', ws =>{
    console.log("client connected");
    ws.on('message', data => {
        
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(data.toString());
            }
          });
    })

})

