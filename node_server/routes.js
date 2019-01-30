const fs = require('fs')

const routeHandler = (req, res) => {
    if (req.url === '/') {

        res.write('<html><head>Enter message</head><body>');
        res.write ('<form action ="/message" method = "POST"> <input type="text" name="message"> <button type = "submit">Send</button></form>');
        res.write('</body></html>');
        res.end();
        return res.end();
    };
    
    if (req.url === '/message' && req.method === 'POST'){
        const arr = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            arr.push(chunk);
        });
    
        req.on('end', () => {
            const parseBody = Buffer.concat(arr).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message1.txt',message);
        });
    
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    };
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html><head>Enter somethong<title><body><h1>');
    res.write('Hello sarath this is my first response');
    res.write('</h1></body></title></head></html>');
    res.end();
};

module.exports = {
    handler : routeHandler,
    test : "Some sample text"
}