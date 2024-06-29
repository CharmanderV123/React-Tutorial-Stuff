const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
    res.write('Hello Node')
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('You Messed Up Big Time', error)
    } else {
        console.log('Congrats ya did it ' + port)
    }
})