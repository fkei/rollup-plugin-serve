import lib from './lib.js'

const req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
let message = []
if (req.getResponseHeader('x-ping').toLocaleLowerCase() === 'pong') {
  message.push(`[Success] custom response header x-ping : pong`)
}


window.onload = () => document.body.innerHTML += '<br>' + window.location.pathname
  + '<br>' + lib + '<br>' + message.join('<br>')
