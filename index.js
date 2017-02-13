/**
 * Created by fear on 04-02-17.
 */
import express from 'express';
import http from 'http';
import debugModule from 'debug';
import socketIO from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const debug = debugModule('chat-backend');

server.listen(8081, () => {
  debug('Servidor escuchando en el puerto 8081');
});

io.on('connection', (socket) => {
  debug('Alguien esta conectado!!!');

  socket.emit('be-message', {
    message: 'Bienvenido usuario!!!',
  });

  socket.on('fe-message', (data) => {
    debug('Usuario conectado', data);
  });
});
