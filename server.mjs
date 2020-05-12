import App from './router/index.mjs'
import http from 'http'
import {PORT, HOST} from './common/config'
App.set('port', PORT)
const server = http.createServer(App)
server.listen(PORT)
server.on('listening', onListening)
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    console.log(`Server running at http://${HOST}:${PORT}`)
}